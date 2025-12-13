'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, FileCheck, BookOpen, HelpCircle, Info, Home } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Visa Checker', href: '/visa-checker', icon: FileCheck },
  { name: 'Visa Guide', href: '/visa-guide', icon: BookOpen },
  { name: 'FAQ', href: '/faq', icon: HelpCircle },
  { name: 'About', href: '/about', icon: Info },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar with Kuwait colors */}
      <div className="h-1 bg-gradient-to-r from-primary-500 via-white to-accent-500"></div>
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <FileCheck className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-primary-500">Kuwait</span>
              <span className="text-lg font-bold text-neutral-800"> Visa Checker</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-4 py-2 text-sm font-medium text-neutral-600 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-colors"
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/visa-checker"
              className="btn-primary text-sm"
            >
              Check Visa Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-100">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-4 py-3 text-base font-medium text-neutral-600 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link
                  href="/visa-checker"
                  className="btn-primary w-full text-center block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Check Visa Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
