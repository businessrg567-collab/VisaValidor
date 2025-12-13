import Link from 'next/link'
import { FileCheck, Mail, Globe, Shield } from 'lucide-react'

const footerLinks = {
  tools: [
    { name: 'Visa Validity Checker', href: '/visa-checker' },
    { name: 'Visa Expiry Calculator', href: '/visa-checker#calculator' },
    { name: 'Document Checklist', href: '/visa-guide#documents' },
  ],
  guides: [
    { name: 'Kuwait Work Visa', href: '/visa-guide#work-visa' },
    { name: 'Kuwait Visit Visa', href: '/visa-guide#visit-visa' },
    { name: 'Kuwait Residence Permit', href: '/visa-guide#residence' },
    { name: 'Visa Renewal Process', href: '/visa-guide#renewal' },
  ],
  resources: [
    { name: 'MOI Kuwait Official', href: 'https://www.moi.gov.kw', external: true },
    { name: 'Kuwait e-Visa Portal', href: 'https://evisa.moi.gov.kw', external: true },
    { name: 'FAQ', href: '/faq' },
    { name: 'About Us', href: '/about' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Contact Us', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-primary-400">Kuwait</span>
                <span className="text-lg font-bold text-white"> Visa</span>
              </div>
            </Link>
            <p className="text-sm text-neutral-400 mb-4">
              Your trusted resource for checking Kuwait visa validity and comprehensive visa guides.
            </p>
            <div className="flex items-center space-x-2 text-sm text-neutral-400">
              <Shield className="w-4 h-4 text-primary-400" />
              <span>Secure & Free Tool</span>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-white font-semibold mb-4">Tools</h3>
            <ul className="space-y-2">
              {footerLinks.tools.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visa Guides */}
          <div>
            <h3 className="text-white font-semibold mb-4">Visa Guides</h3>
            <ul className="space-y-2">
              {footerLinks.guides.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {'external' in link ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-primary-400 transition-colors flex items-center"
                    >
                      {link.name}
                      <Globe className="w-3 h-3 ml-1" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} Kuwait Visa Checker. All rights reserved.
            </p>
            <p className="text-xs text-neutral-600 text-center md:text-right max-w-md">
              Disclaimer: This is an informational tool. For official visa status, please visit the 
              <a href="https://www.moi.gov.kw" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline ml-1">
                Ministry of Interior Kuwait
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
