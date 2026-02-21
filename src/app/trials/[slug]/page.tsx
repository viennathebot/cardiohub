import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getTrialBySlug, getAllTrialSlugs } from '@/lib/trials'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'

interface TrialPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllTrialSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: TrialPageProps) {
  const trial = await getTrialBySlug(params.slug)
  if (!trial) return { title: 'Trial Not Found' }
  
  return {
    title: `${trial.title} | Landmark Trials | Cardiology Hub`,
    description: trial.keyFinding || `Comprehensive summary of the ${trial.title} trial`,
  }
}

export default async function TrialPage({ params }: TrialPageProps) {
  const trial = await getTrialBySlug(params.slug)
  
  if (!trial) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            href="/trials" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Trials
          </Link>
          
          <h1 className="text-4xl font-bold mb-4">{trial.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-slate-300">
            {trial.year && (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{trial.year}</span>
              </div>
            )}
            {trial.category && (
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                <span>{trial.category}</span>
              </div>
            )}
          </div>
          
          {trial.keyFinding && (
            <div className="mt-6 p-4 bg-white/10 rounded-xl">
              <p className="text-lg font-medium text-cardiac-300">
                <span className="text-cardiac-400">Bottom Line: </span>
                {trial.keyFinding}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div 
          className="prose prose-lg prose-slate max-w-none
            prose-headings:font-bold prose-headings:text-slate-900
            prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-slate-200
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-slate-600 prose-p:leading-relaxed
            prose-strong:text-slate-900
            prose-a:text-medical-600 prose-a:no-underline hover:prose-a:underline
            prose-table:border-collapse prose-table:w-full
            prose-th:bg-slate-100 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:border prose-th:border-slate-200
            prose-td:px-4 prose-td:py-3 prose-td:border prose-td:border-slate-200
            prose-ul:my-4 prose-li:my-1
            prose-blockquote:border-l-4 prose-blockquote:border-medical-500 prose-blockquote:bg-medical-50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-slate-700"
          dangerouslySetInnerHTML={{ __html: trial.content }}
        />
      </article>

      {/* Footer Navigation */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/trials" 
            className="inline-flex items-center gap-2 text-medical-600 hover:text-medical-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            View All Landmark Trials
          </Link>
        </div>
      </section>
    </div>
  )
}
