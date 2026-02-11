import Link from 'next/link'
import { Heart, ArrowRight, BookOpen, Video, Users, Clock } from 'lucide-react'

const modules = [
  {
    title: 'Coronary Angiography: Start to Finish',
    description: 'Complete guide from room setup, draping, catheter selection, engaging coronaries, standard views, to interpretation.',
    href: '/interventional/angiography',
    duration: '45 min',
    level: 'Beginner',
    featured: true,
  },
  {
    title: 'PCI Fundamentals',
    description: 'Wiring, balloon angioplasty, stent deployment, and post-dilation techniques.',
    href: '/interventional/pci',
    duration: '60 min',
    level: 'Intermediate',
  },
  {
    title: 'CTO Revascularization',
    description: 'Antegrade and retrograde approaches, wire escalation, and troubleshooting.',
    href: '/interventional/cto',
    duration: '90 min',
    level: 'Advanced',
  },
  {
    title: 'Catheter & Wire Selection',
    description: 'Know your JL, JR, AL, EBU, and specialty catheters. Wire selection for different scenarios.',
    href: '/interventional/equipment/catheters',
    duration: '20 min',
    level: 'Beginner',
  },
  {
    title: 'Vascular Access',
    description: 'Radial vs femoral, ultrasound guidance, closure devices, and complication management.',
    href: '/interventional/access',
    duration: '30 min',
    level: 'Beginner',
  },
  {
    title: 'Hemodynamics',
    description: 'Pressure waveforms, FFR/iFR, LVEDP, and hemodynamic assessment.',
    href: '/interventional/hemodynamics',
    duration: '40 min',
    level: 'Intermediate',
  },
]

const levelColors: Record<string, string> = {
  'Beginner': 'bg-green-100 text-green-700',
  'Intermediate': 'bg-yellow-100 text-yellow-700',
  'Advanced': 'bg-red-100 text-red-700',
}

export default function InterventionalPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="h-8 w-8" fill="currentColor" />
            <span className="text-red-200 font-medium">Specialty</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Interventional Cardiology</h1>
          <p className="text-xl text-red-100 max-w-2xl">
            From your first diagnostic angiogram to complex CTO revascularization. 
            Master the cath lab with visual, step-by-step guidance.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-slate-400" />
              <span className="text-slate-600">12 Modules</span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="h-5 w-5 text-slate-400" />
              <span className="text-slate-600">40+ Videos</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-slate-400" />
              <span className="text-slate-600">~8 hours total</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-slate-400" />
              <span className="text-slate-600">Fellows Corner included</span>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Learning Modules</h2>
          
          <div className="space-y-4">
            {modules.map((module, i) => (
              <Link
                key={i}
                href={module.href}
                className={`block bg-white rounded-xl border p-6 hover:shadow-md transition-shadow ${
                  module.featured ? 'border-red-200 ring-1 ring-red-100' : 'border-slate-200'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-slate-900">{module.title}</h3>
                      {module.featured && (
                        <span className="text-xs font-medium bg-red-100 text-red-600 px-2 py-0.5 rounded">
                          Start Here
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600">{module.description}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${levelColors[module.level]}`}>
                        {module.level}
                      </span>
                      <span className="text-sm text-slate-500 flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {module.duration}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 flex-shrink-0 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fellows Corner Preview */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-6 w-6 text-red-400" />
              <span className="text-red-400 font-medium">Fellows Corner</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">Fellow-Specific Resources</h2>
            <p className="text-slate-300 mb-6 max-w-2xl">
              Tips from current and former fellows. First-case checklists, 
              common mistakes to avoid, and real talk about training.
            </p>
            <Link href="/interventional/fellows" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors">
              Enter Fellows Corner
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
