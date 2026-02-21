import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

const trialsDirectory = path.join(process.cwd(), 'trials')

export interface Trial {
  slug: string
  title: string
  content: string
  year?: string
  category?: string
  keyFinding?: string
  importance?: number
}

export interface TrialMeta {
  slug: string
  title: string
  year?: string
  category?: string
  keyFinding?: string
  importance?: number
}

// Files to exclude from trial listing
const excludedFiles = ['INDEX.md', 'RECENT_TRIALS.md']

export function getAllTrialSlugs(): string[] {
  const fileNames = fs.readdirSync(trialsDirectory)
  return fileNames
    .filter(fileName => fileName.endsWith('.md') && !excludedFiles.includes(fileName))
    .map(fileName => fileName.replace(/\.md$/, ''))
}

function parseTrialMetaFromContent(content: string, slug: string): Partial<TrialMeta> {
  const meta: Partial<TrialMeta> = {}
  
  // Extract title from first H1
  const titleMatch = content.match(/^# (.+)$/m)
  if (titleMatch) {
    meta.title = titleMatch[1]
  } else {
    meta.title = slug
  }
  
  // Extract year from Quick Facts table
  const yearMatch = content.match(/\*\*Year\*\*\s*\|\s*(\d{4})/i)
  if (yearMatch) {
    meta.year = yearMatch[1]
  }
  
  // Extract bottom line / key finding
  const bottomLineMatch = content.match(/\*\*Bottom Line\*\*\s*\|\s*(.+?)(?:\s*\||\n)/i)
  if (bottomLineMatch) {
    meta.keyFinding = bottomLineMatch[1].trim()
  }
  
  // Determine category from content
  if (content.includes('TAVR') || content.includes('Aortic')) {
    meta.category = 'TAVR / Aortic'
  } else if (content.includes('MitraClip') || content.includes('TEER') || content.includes('Mitral')) {
    meta.category = 'TEER / Mitral'
  } else if (content.includes('PCI') || content.includes('FFR') || content.includes('Coronary')) {
    meta.category = 'PCI / Coronary'
  } else if (content.includes('LAAO') || content.includes('Watchman')) {
    meta.category = 'LAAO'
  } else if (content.includes('PFO')) {
    meta.category = 'PFO Closure'
  } else if (content.includes('Renal Denervation') || content.includes('HTN')) {
    meta.category = 'Renal Denervation'
  } else if (content.includes('Antiplatelet') || content.includes('DAPT') || content.includes('P2Y12')) {
    meta.category = 'Antiplatelet'
  } else if (content.includes('Heart Failure') || content.includes('HFrEF') || content.includes('ARNI')) {
    meta.category = 'Heart Failure'
  } else {
    meta.category = 'Other'
  }
  
  return meta
}

export function getAllTrials(): TrialMeta[] {
  const slugs = getAllTrialSlugs()
  const trials = slugs.map(slug => {
    const fullPath = path.join(trialsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { content } = matter(fileContents)
    const meta = parseTrialMetaFromContent(content, slug)
    
    return {
      slug,
      title: meta.title || slug,
      year: meta.year,
      category: meta.category,
      keyFinding: meta.keyFinding,
    }
  })
  
  // Sort by year (newest first), then alphabetically
  return trials.sort((a, b) => {
    if (a.year && b.year) {
      const yearDiff = parseInt(b.year) - parseInt(a.year)
      if (yearDiff !== 0) return yearDiff
    }
    return a.title.localeCompare(b.title)
  })
}

export async function getTrialBySlug(slug: string): Promise<Trial | null> {
  try {
    const fullPath = path.join(trialsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { content } = matter(fileContents)
    const meta = parseTrialMetaFromContent(content, slug)
    
    // Process markdown to HTML
    const processedContent = await remark()
      .use(remarkGfm)
      .use(html, { sanitize: false })
      .process(content)
    
    return {
      slug,
      title: meta.title || slug,
      content: processedContent.toString(),
      year: meta.year,
      category: meta.category,
      keyFinding: meta.keyFinding,
    }
  } catch (error) {
    console.error(`Error loading trial ${slug}:`, error)
    return null
  }
}

// Get trials grouped by category
export function getTrialsByCategory(): Record<string, TrialMeta[]> {
  const trials = getAllTrials()
  const grouped: Record<string, TrialMeta[]> = {}
  
  trials.forEach(trial => {
    const category = trial.category || 'Other'
    if (!grouped[category]) {
      grouped[category] = []
    }
    grouped[category].push(trial)
  })
  
  return grouped
}
