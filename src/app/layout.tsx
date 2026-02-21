import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cardiology Hub | Education for the Modern Cardiologist',
  description: 'Comprehensive cardiology education platform for medical students, residents, fellows, and attendings. Interventional, structural, and beyond.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <Navigation />
        <main>{children}</main>
        <footer className="bg-slate-900 text-white py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Cardiology Hub</h3>
                <p className="text-slate-400 text-sm">
                  Education for the modern cardiologist. From students to attendings.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-3">Specialties</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><a href="/interventional" className="hover:text-white">Interventional</a></li>
                  <li><a href="/structural" className="hover:text-white">Structural Heart</a></li>
                  <li><a href="/electrophysiology" className="hover:text-white">Electrophysiology</a></li>
                  <li><a href="/heart-failure" className="hover:text-white">Heart Failure</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Resources</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><a href="/trials" className="hover:text-white">Landmark Trials</a></li>
                  <li><a href="/cases" className="hover:text-white">Case Discussions</a></li>
                  <li><a href="/blog" className="hover:text-white">Blog</a></li>
                  <li><a href="/about" className="hover:text-white">About</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Connect</h4>
                <p className="text-sm text-slate-400">
                  Built with ❤️ for cardiology education
                </p>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
              © 2026 Cardiology Hub. Educational purposes only.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
