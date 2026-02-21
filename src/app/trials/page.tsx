import Link from 'next/link'
import { getTrialsByCategory } from '@/lib/trials'
import { BookOpen, Calendar, ArrowRight, FlaskConical } from 'lucide-react'

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'PCI / Coronary': { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
  'TAVR / Aortic': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  'TEER / Mitral': { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200' },
  'LAAO': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  'PFO Closure': { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200' },
  'Renal Denervation': { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
  'Antiplatelet': { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
  'Heart Failure': { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  'Other': { bg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200' },
}

// Category display order
const categoryOrder = [
  'PCI / Coronary',
  'TAVR / Aortic',
  'TEER / Mitral',
  'Heart Failure',
  'LAAO',
  'PFO Closure',
  'Antiplatelet',
  'Renal Denervation',
  'Other',
]

export const metadata = {
  title: 'Landmark Trials | Cardiology Hub',
  description: 'Comprehensive database of landmark cardiology trials. PARADIGM-HF, PARTNER, COAPT, ISCHEMIA, and more.',
}

export default function TrialsPage() {
  const trialsByCategory = getTrialsByCategory()
  
  // Sort categories by defined order
  const sortedCategories = Object.keys(trialsByCategory).sort((a, b) => {
    const aIndex = categoryOrder.indexOf(a)
    const bIndex = categoryOrder.indexOf(b)
    if (aIndex === -1) return 1
    if (bIndex === -1) return -1
    return aIndex - bIndex
  })
  
  const totalTrials = Object.values(trialsByCategory).flat().length
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <FlaskConical className="h-6 w-6 text-cardiac-400" />
              <span className="text-cardiac-400 font-medium">Evidence-Based Learning</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Landmark Trials Database
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Comprehensive summaries of the most important trials in interventional and 
              structural cardiology. Each trial includes design, results, clinical impact, 
              and practical takeaways.
            </p>
            <div className="mt-6 flex items-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span>{totalTrials} Trials</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Updated regularly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trials by Category */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedCategories.map((category) => {
            const trials = trialsByCategory[category]
            const colors = categoryColors[category] || categoryColors['Other']
            
            return (
              <div key={category} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className={`text-xl font-bold ${colors.text}`}>{category}</h2>
                  <span className={`text-sm px-2 py-1 rounded-full ${colors.bg} ${colors.text}`}>
                    {trials.length} {trials.length === 1 ? 'trial' : 'trials'}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {trials.map((trial) => (
                    <Link
                      key={trial.slug}
                      href={`/trials/${trial.slug}`}
                      className={`group block p-5 rounded-xl border ${colors.border} ${colors.bg} hover:shadow-md transition-all`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-slate-900 group-hover:text-medical-600 transition-colors">
                            {trial.title}
                          </h3>
                          {trial.year && (
                            <span className="text-sm text-slate-500">{trial.year}</span>
                          )}
                        </div>
                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-medical-600 transition-colors mt-1" />
                      </div>
                      {trial.keyFinding && (
                        <p className="mt-3 text-sm text-slate-600 line-clamp-2">
                          {trial.keyFinding}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
