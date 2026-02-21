'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Heart, ChevronDown } from 'lucide-react'

const specialties = [
  { name: 'Interventional Cardiology', href: '/interventional', color: 'text-red-600' },
  { name: 'Structural Heart', href: '/structural', color: 'text-purple-600' },
  { name: 'General Cardiology', href: '/general', color: 'text-blue-600' },
  { name: 'Heart Failure', href: '/heart-failure', color: 'text-orange-600' },
  { name: 'Electrophysiology', href: '/electrophysiology', color: 'text-green-600' },
  { name: 'Peripheral/Vascular', href: '/peripheral', color: 'text-teal-600' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-cardiac-500" fill="currentColor" />
              <span className="text-xl font-bold text-slate-900">Cardiology Hub</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Specialties Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSpecialtiesOpen(!specialtiesOpen)}
                className="flex items-center gap-1 text-slate-600 hover:text-slate-900 font-medium"
              >
                Specialties
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {specialtiesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-slate-200 py-2">
                  {specialties.map((specialty) => (
                    <Link
                      key={specialty.href}
                      href={specialty.href}
                      className="block px-4 py-2 hover:bg-slate-50"
                      onClick={() => setSpecialtiesOpen(false)}
                    >
                      <span className={specialty.color}>●</span>
                      <span className="ml-2 text-slate-700">{specialty.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/trials" className="text-slate-600 hover:text-slate-900 font-medium">
              Landmark Trials
            </Link>
            <Link href="/cases" className="text-slate-600 hover:text-slate-900 font-medium">
              Cases
            </Link>
            <Link href="/blog" className="text-slate-600 hover:text-slate-900 font-medium">
              Blog
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-slate-900 font-medium">
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Specialties</p>
            {specialties.map((specialty) => (
              <Link
                key={specialty.href}
                href={specialty.href}
                className="block py-2 text-slate-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className={specialty.color}>●</span>
                <span className="ml-2">{specialty.name}</span>
              </Link>
            ))}
            <div className="border-t border-slate-200 pt-3 mt-3">
              <Link href="/trials" className="block py-2 text-slate-700">Landmark Trials</Link>
              <Link href="/cases" className="block py-2 text-slate-700">Cases</Link>
              <Link href="/blog" className="block py-2 text-slate-700">Blog</Link>
              <Link href="/about" className="block py-2 text-slate-700">About</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
