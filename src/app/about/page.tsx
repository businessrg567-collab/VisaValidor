import type { Metadata } from 'next'
import Link from 'next/link'
import AdBanner from '@/components/AdBanner'
import { 
  Shield, 
  Users, 
  Globe, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Heart,
  Target,
  Award
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Kuwait Visa Validity Checker',
  description: 'Learn about Kuwait Visa Checker - your trusted resource for checking Kuwait visa validity, status, and expiry dates. Free online tool for expatriates in Kuwait.',
  keywords: [
    'about Kuwait visa checker',
    'Kuwait visa tool',
    'Kuwait immigration help',
    'Kuwait expatriate services',
  ],
  openGraph: {
    title: 'About Kuwait Visa Validity Checker',
    description: 'Your trusted resource for Kuwait visa information and validity checking.',
    url: 'https://kuwaitvisachecker.com/about',
  },
  alternates: {
    canonical: 'https://kuwaitvisachecker.com/about',
  },
}

const values = [
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'We never store your personal information. Your data is processed securely and never shared.',
  },
  {
    icon: Clock,
    title: 'Always Available',
    description: 'Our tools are available 24/7, allowing you to check your visa status anytime, anywhere.',
  },
  {
    icon: Globe,
    title: 'Multilingual Support',
    description: 'We provide information in English and Arabic to serve the diverse expatriate community.',
  },
  {
    icon: Heart,
    title: 'Community Focused',
    description: 'Built by expatriates for expatriates, understanding the challenges of living abroad.',
  },
]

const features = [
  'Free visa validity checker tool',
  'Comprehensive visa guides',
  'Frequently asked questions',
  'Renewal process information',
  'Official resource links',
  'Mobile-friendly design',
]

export default function AboutPage() {
  return (
    <div className="content-area">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Award className="w-16 h-16 mx-auto mb-4 text-primary-200" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About Kuwait Visa Checker
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Your trusted resource for Kuwait visa information, validity checking, and immigration guidance
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Target className="w-6 h-6 text-primary-500" />
                <span className="text-primary-600 font-semibold">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Simplifying Visa Information for Everyone
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Kuwait Visa Checker was created to help expatriates and visitors easily understand 
                and manage their visa status in Kuwait. We believe that access to clear, accurate 
                visa information should be free and accessible to everyone.
              </p>
              <p className="text-neutral-600 mb-6">
                Our platform provides tools and guides to help you check your visa validity, 
                understand renewal processes, and stay compliant with Kuwait immigration regulations. 
                We are committed to keeping our information up-to-date and accurate.
              </p>
              <div className="flex flex-wrap gap-3">
                {features.map((feature, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                  >
                    <CheckCircle className="w-4 h-4 mr-1" />
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-neutral-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">
                Why Choose Us?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-neutral-900">100% Free</h4>
                    <p className="text-sm text-neutral-600">All our tools and guides are completely free to use</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-neutral-900">No Registration Required</h4>
                    <p className="text-sm text-neutral-600">Use our tools instantly without creating an account</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-neutral-900">Accurate Information</h4>
                    <p className="text-sm text-neutral-600">Regularly updated content based on official sources</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-neutral-900">User-Friendly Design</h4>
                    <p className="text-sm text-neutral-600">Simple, intuitive interface for easy navigation</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <AdBanner slot="about-middle" />

      {/* Values Section */}
      <section className="section-spacing bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card card-hover text-center">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-semibold text-amber-900 mb-4">
              Important Disclaimer
            </h2>
            <p className="text-amber-800 mb-4">
              Kuwait Visa Checker is an informational website designed to help users understand 
              Kuwait visa processes and check visa validity. We are not affiliated with the 
              Kuwait Ministry of Interior (MOI) or any government agency.
            </p>
            <p className="text-amber-800 mb-4">
              While we strive to provide accurate and up-to-date information, visa regulations 
              can change. For official visa status verification and the most current requirements, 
              please always refer to the official Ministry of Interior Kuwait website at 
              <a href="https://www.moi.gov.kw" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline ml-1">
                moi.gov.kw
              </a>.
            </p>
            <p className="text-amber-800">
              Our visa checker tool provides guidance based on the information you enter. 
              It should not be considered as official verification of your visa status.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Check Your Visa Status?
          </h2>
          <p className="text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
            Use our free tool to verify your Kuwait visa validity and get helpful information 
            about your visa status.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/visa-checker"
              className="inline-flex items-center justify-center bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-primary-50 transition-colors"
            >
              Check Visa Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/visa-guide"
              className="inline-flex items-center justify-center bg-primary-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-400 transition-colors border border-primary-400"
            >
              Read Visa Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <AdBanner slot="about-bottom" />
    </div>
  )
}
