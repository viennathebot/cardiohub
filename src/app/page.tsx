import Link from 'next/link'
import { 
  Heart, 
  Stethoscope, 
  Activity, 
  Zap, 
  Wind,
  BookOpen,
  Users,
  PlayCircle,
  ArrowRight,
  GraduationCap
} from 'lucide-react'

const specialties = [
  {
    name: 'Interventional Cardiology',
    description: 'Coronary angiography, PCI, CTO revascularization, and more',
    href: '/interventional',
    icon: Heart,
    color: 'bg-red-500',
    lightColor: 'bg-red-50',
    textColor: 'text-red-600',
    featured: true,
  },
  {
    name: 'Structural Heart',
    description: 'TAVR, MitraClip, Watchman, PFO/ASD closure',
    href: '/structural',
    icon: Activity,
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    featured: true,
  },
  {
    name: 'General Cardiology',
    description: 'Core concepts, imaging, and clinical cardiology',
    href: '/general',
    icon: Stethoscope,
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    name: 'Heart Failure',
    description: 'Advanced therapies, devices, and management',
    href: '/heart-failure',
    icon: Activity,
    color: 'bg-orange-500',
    lightColor: 'bg-orange-50',
    textColor: 'text-orange-600',
  },
  {
    name: 'Electrophysiology',
    description: 'Arrhythmias, ablation, and device therapy',
    href: '/electrophysiology',
    icon: Zap,
    color: 'bg-green-500',
    lightColor: 'bg-green-50',
    textColor: 'text-green-600',
  },
  {
    name: 'Peripheral/Vascular',
    description: 'PAD, carotid, renal, and venous interventions',
    href: '/peripheral',
    icon: Wind,
    color: 'bg-teal-500',
    lightColor: 'bg-teal-50',
    textColor: 'text-teal-600',
  },
]

const featuredModules = [
  {
    title: 'Coronary Angiography: Start to Finish',
    description: 'Complete guide from room setup to interpretation',
    duration: '45 min read',
    href: '/interventional/angiography',
    image: '/images/angiography-hero.jpg',
  },
  {
    title: 'TAVR Fundamentals',
    description: 'Patient selection, imaging, and procedural technique',
    duration: '30 min read',
    href: '/structural/tavr',
    image: '/images/tavr-hero.jpg',
  },
  {
    title: 'Catheter Selection Guide',
    description: 'Know your JL, JR, AL, and specialty catheters',
    duration: '15 min read',
    href: '/interventional/equipment/catheters',
    image: '/images/catheters-hero.jpg',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-6 w-6 text-cardiac-400" />
              <span className="text-cardiac-400 font-medium">For Trainees & Attendings</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Master Cardiology,<br />
              <span className="text-cardiac-400">One Concept at a Time</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Comprehensive education for medical students, residents, and fellows. 
              Visual-first learning with progressive depth — from basics to expert-level techniques.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/interventional" className="btn-primary inline-flex items-center gap-2">
                Start Learning
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/about" className="btn-secondary inline-flex items-center gap-2">
                About This Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-medical-600">6</div>
              <div className="text-slate-600">Specialties</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-medical-600">50+</div>
              <div className="text-slate-600">Modules</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-medical-600">100+</div>
              <div className="text-slate-600">Videos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-medical-600">Free</div>
              <div className="text-slate-600">Always</div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Choose Your Path</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Deep-dive into any cardiology subspecialty. Each section has learning modules, 
              fellow-specific content, and practical resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty) => (
              <Link
                key={specialty.href}
                href={specialty.href}
                className={`section-card group ${specialty.featured ? 'ring-2 ring-medical-200' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${specialty.lightColor} p-3 rounded-xl`}>
                    <specialty.icon className={`h-6 w-6 ${specialty.textColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-medical-600 transition-colors">
                      {specialty.name}
                    </h3>
                    <p className="text-slate-600 mt-1">{specialty.description}</p>
                    {specialty.featured && (
                      <span className="inline-flex items-center mt-3 text-sm font-medium text-medical-600">
                        Featured
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Modules */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Modules</h2>
              <p className="text-slate-600">Start with our most popular learning paths</p>
            </div>
            <Link href="/modules" className="hidden md:flex items-center gap-2 text-medical-600 font-medium hover:text-medical-700">
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredModules.map((module, i) => (
              <Link key={i} href={module.href} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-white/50 group-hover:text-white/80 transition-colors" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-medical-600 transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-slate-600 mt-2">{module.description}</p>
                    <div className="flex items-center gap-4 mt-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {module.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-medical-600 to-medical-700 rounded-3xl p-12 text-white text-center">
            <Users className="h-12 w-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Join the Discussion</h2>
            <p className="text-xl text-medical-100 mb-8 max-w-2xl mx-auto">
              Share interesting cases, discuss challenging scenarios, and learn from 
              cardiologists around the world.
            </p>
            <Link href="/cases" className="inline-flex items-center gap-2 bg-white text-medical-600 px-8 py-4 rounded-xl font-semibold hover:bg-medical-50 transition-colors">
              Browse Case Discussions
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
