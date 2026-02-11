'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  ChevronDown, 
  ChevronRight,
  Clock,
  CheckCircle,
  PlayCircle,
  Image as ImageIcon,
  Lightbulb,
  AlertTriangle
} from 'lucide-react'

// Expandable content component
function ExpandableSection({ 
  title, 
  level = 'simple',
  children 
}: { 
  title: string
  level?: 'simple' | 'detailed' | 'expert'
  children: React.ReactNode 
}) {
  const [isOpen, setIsOpen] = useState(level === 'simple')
  
  const levelColors = {
    simple: 'border-green-200 bg-green-50',
    detailed: 'border-blue-200 bg-blue-50',
    expert: 'border-purple-200 bg-purple-50',
  }
  
  const levelLabels = {
    simple: 'Basic',
    detailed: 'Detailed',
    expert: 'Expert',
  }

  return (
    <div className={`border-l-4 ${levelColors[level]} rounded-r-lg my-4`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <div className="flex items-center gap-3">
          {isOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
          <span className="font-medium">{title}</span>
          <span className={`text-xs px-2 py-0.5 rounded ${
            level === 'simple' ? 'bg-green-200 text-green-800' :
            level === 'detailed' ? 'bg-blue-200 text-blue-800' :
            'bg-purple-200 text-purple-800'
          }`}>
            {levelLabels[level]}
          </span>
        </div>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 pt-0">
          {children}
        </div>
      )}
    </div>
  )
}

// Tip callout
function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4 my-4">
      <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
      <div className="text-amber-800">{children}</div>
    </div>
  )
}

// Warning callout
function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 bg-red-50 border border-red-200 rounded-lg p-4 my-4">
      <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
      <div className="text-red-800">{children}</div>
    </div>
  )
}

// Video placeholder
function VideoEmbed({ title, duration }: { title: string, duration: string }) {
  return (
    <div className="aspect-video bg-slate-900 rounded-xl flex flex-col items-center justify-center text-white my-6">
      <PlayCircle className="h-16 w-16 mb-4 opacity-60" />
      <p className="font-medium">{title}</p>
      <p className="text-sm text-slate-400">{duration}</p>
    </div>
  )
}

// Image placeholder
function ImagePlaceholder({ caption }: { caption: string }) {
  return (
    <div className="bg-slate-100 rounded-xl p-8 flex flex-col items-center justify-center my-6 border-2 border-dashed border-slate-300">
      <ImageIcon className="h-12 w-12 text-slate-400 mb-3" />
      <p className="text-slate-600 text-center">{caption}</p>
    </div>
  )
}

export default function AngiographyModule() {
  const [completedSections, setCompletedSections] = useState<string[]>([])
  
  const toggleComplete = (section: string) => {
    setCompletedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const sections = [
    'intro',
    'room-setup',
    'draping',
    'catheters',
    'engaging',
    'views',
    'interpretation',
  ]

  const progress = (completedSections.length / sections.length) * 100

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/interventional" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Interventional
          </Link>
          <h1 className="text-3xl font-bold mb-4">Coronary Angiography: Start to Finish</h1>
          <p className="text-slate-300 text-lg mb-6">
            The complete guide to performing a diagnostic coronary angiogram. 
            From walking into the room to signing off the report.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              45 min read
            </span>
            <span className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              7 sections
            </span>
            <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
              Beginner Friendly
            </span>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600">Progress</span>
            <span className="text-sm font-medium text-slate-900">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-medical-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Section 1: Introduction */}
        <section id="intro" className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <button 
              onClick={() => toggleComplete('intro')}
              className={`mt-1 ${completedSections.includes('intro') ? 'text-green-500' : 'text-slate-300'}`}
            >
              <CheckCircle className="h-6 w-6" />
            </button>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">1. Introduction</h2>
              <p className="text-slate-600 mt-2">What is coronary angiography and why do we do it?</p>
            </div>
          </div>

          <div className="ml-10">
            <p className="text-slate-700 leading-relaxed mb-4">
              Coronary angiography is the gold standard for visualizing coronary artery anatomy. 
              It involves injecting contrast dye directly into the coronary arteries while taking 
              X-ray images (fluoroscopy) to identify blockages, stenoses, or other abnormalities.
            </p>

            <ExpandableSection title="When do we perform coronary angiography?" level="simple">
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li><strong>Acute coronary syndrome</strong> — STEMI, NSTEMI, unstable angina</li>
                <li><strong>Stable angina</strong> — refractory to medical therapy</li>
                <li><strong>Pre-operative evaluation</strong> — before valve surgery or high-risk non-cardiac surgery</li>
                <li><strong>Heart failure workup</strong> — to evaluate for ischemic cardiomyopathy</li>
                <li><strong>Abnormal stress test</strong> — high-risk features</li>
              </ul>
            </ExpandableSection>

            <ExpandableSection title="Understanding the coronary anatomy" level="detailed">
              <p className="text-slate-700 mb-4">
                The heart is supplied by two main coronary arteries arising from the aortic root:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
                <li><strong>Left Main (LM)</strong> → branches into LAD and LCx</li>
                <li><strong>Left Anterior Descending (LAD)</strong> → supplies anterior wall, septum</li>
                <li><strong>Left Circumflex (LCx)</strong> → supplies lateral wall</li>
                <li><strong>Right Coronary Artery (RCA)</strong> → supplies inferior wall, RV</li>
              </ul>
              <ImagePlaceholder caption="Coronary artery anatomy diagram — LAD, LCx, RCA territories" />
            </ExpandableSection>

            <Tip>
              Before your first case, spend time reviewing coronary anatomy on CT angiograms or 
              anatomical models. Understanding the 3D structure helps interpret 2D angiographic images.
            </Tip>
          </div>
        </section>

        {/* Section 2: Room Setup */}
        <section id="room-setup" className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <button 
              onClick={() => toggleComplete('room-setup')}
              className={`mt-1 ${completedSections.includes('room-setup') ? 'text-green-500' : 'text-slate-300'}`}
            >
              <CheckCircle className="h-6 w-6" />
            </button>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">2. Room Setup & Preparation</h2>
              <p className="text-slate-600 mt-2">Before the patient even arrives</p>
            </div>
          </div>

          <div className="ml-10">
            <p className="text-slate-700 leading-relaxed mb-4">
              A well-prepared cath lab ensures efficiency and safety. Know where everything is 
              before you need it.
            </p>

            <ExpandableSection title="The cath lab environment" level="simple">
              <p className="text-slate-700 mb-4">Key components of the room:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li><strong>Table</strong> — radiolucent, can pan and rotate</li>
                <li><strong>C-arm</strong> — houses the X-ray tube and image intensifier</li>
                <li><strong>Monitors</strong> — live fluoro, hemodynamics, reference images</li>
                <li><strong>Contrast injector</strong> — for consistent injection pressure</li>
                <li><strong>Crash cart</strong> — always know where this is!</li>
              </ul>
              <ImagePlaceholder caption="Cath lab layout with labeled equipment" />
            </ExpandableSection>

            <ExpandableSection title="The draping and sheet colors" level="simple">
              <p className="text-slate-700 mb-4">
                Understanding the sterile field setup and the meaning of different colored sheets:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li><strong>Blue sheets</strong> — standard sterile drapes for the patient</li>
                <li><strong>Clear/fenestrated sheet</strong> — goes over the access site with an opening</li>
                <li><strong>Green towels</strong> — often used for the operator's working area</li>
                <li><strong>Lead skirts</strong> — radiation protection, hang from table edge</li>
              </ul>
              <Tip>
                Every lab has slight variations. Ask the techs on your first day — they know the setup better than anyone.
              </Tip>
            </ExpandableSection>

            <ExpandableSection title="Radiation safety principles" level="detailed">
              <p className="text-slate-700 mb-4">
                You will accumulate radiation exposure over your career. Minimize it from day one:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li><strong>Time</strong> — minimize fluoro time, use stored loops</li>
                <li><strong>Distance</strong> — step back during cine acquisitions</li>
                <li><strong>Shielding</strong> — wear your lead, thyroid collar, and glasses</li>
                <li><strong>Collimation</strong> — reduce field size to area of interest</li>
              </ul>
              <Warning>
                Always wear your dosimeter badge. Track your exposure monthly. 
                If you're pregnant or planning pregnancy, inform your program director immediately.
              </Warning>
            </ExpandableSection>
          </div>
        </section>

        {/* Section 3: Catheter Selection */}
        <section id="catheters" className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <button 
              onClick={() => toggleComplete('catheters')}
              className={`mt-1 ${completedSections.includes('catheters') ? 'text-green-500' : 'text-slate-300'}`}
            >
              <CheckCircle className="h-6 w-6" />
            </button>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">3. Catheter Selection</h2>
              <p className="text-slate-600 mt-2">Know your JL4, JR4, and when to reach for something else</p>
            </div>
          </div>

          <div className="ml-10">
            <VideoEmbed title="Catheter Selection Masterclass" duration="8:32" />

            <ExpandableSection title="The basic catheter set" level="simple">
              <p className="text-slate-700 mb-4">For most diagnostic cases, you'll use:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li><strong>JL 4.0 (Judkins Left)</strong> — for left coronary system</li>
                <li><strong>JR 4.0 (Judkins Right)</strong> — for right coronary artery</li>
                <li><strong>Pigtail</strong> — for LV gram and aortic root injections</li>
              </ul>
              <p className="text-slate-700 mt-4">
                The "4" refers to the length of the secondary curve in centimeters. 
                A normal-sized aortic root typically requires a 4.0 curve.
              </p>
              <ImagePlaceholder caption="JL4, JR4, and Pigtail catheters with labeled curves" />
            </ExpandableSection>

            <ExpandableSection title="When to size up or down" level="detailed">
              <p className="text-slate-700 mb-4">
                Aortic root size varies. Here's how to adjust:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li><strong>Dilated aortic root</strong> → JL 5.0 or 6.0</li>
                <li><strong>Small aortic root</strong> → JL 3.5</li>
                <li><strong>Horizontal heart</strong> → may need Amplatz Left (AL)</li>
                <li><strong>Shepherd's crook RCA</strong> → consider AL 0.75 or 1.0</li>
              </ul>
              <Tip>
                If your JL4 keeps falling out or diving too deep, try a different size 
                before struggling. Time spent switching catheters is time saved overall.
              </Tip>
            </ExpandableSection>

            <ExpandableSection title="Specialty catheters & anomalous origins" level="expert">
              <p className="text-slate-700 mb-4">
                When standard catheters don't work, consider:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li><strong>Amplatz Left (AL 1, 2, 3)</strong> — aggressive backup, horizontal takeoffs</li>
                <li><strong>Amplatz Right (AR)</strong> — anterior RCA takeoff</li>
                <li><strong>Multipurpose (MP)</strong> — when nothing else works</li>
                <li><strong>3D RC / IMA</strong> — for internal mammary grafts</li>
                <li><strong>Hockey stick</strong> — upward-oriented ostia</li>
              </ul>
              <Warning>
                Anomalous coronary origins are more common than you think (~1%). 
                If you can't find a coronary, do an aortic root shot before spending 
                30 minutes searching with the wrong catheter.
              </Warning>
            </ExpandableSection>
          </div>
        </section>

        {/* Continue reading CTA */}
        <section className="bg-slate-100 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Module continues...</h3>
          <p className="text-slate-600 mb-6">
            Remaining sections: Engaging the Coronaries, Standard Views & Angles, 
            Interpreting the Angiogram, Documentation & Reporting
          </p>
          <p className="text-sm text-slate-500">
            Full module content coming soon with videos, images, and interactive elements.
          </p>
        </section>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-slate-200">
          <Link href="/interventional" className="flex items-center gap-2 text-slate-600 hover:text-slate-900">
            <ArrowLeft className="h-4 w-4" />
            Back to Interventional
          </Link>
          <Link href="/interventional/pci" className="flex items-center gap-2 text-medical-600 hover:text-medical-700 font-medium">
            Next: PCI Fundamentals
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </article>
    </div>
  )
}
