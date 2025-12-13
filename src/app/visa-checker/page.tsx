import type { Metadata } from 'next'
import VisaCheckerTool from '@/components/VisaCheckerTool'
import AdBanner from '@/components/AdBanner'
import { Shield, Clock, CheckCircle, AlertTriangle, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kuwait Visa Validity Checker Tool | Check Visa Status Online Free',
  description: 'Free Kuwait visa validity checker tool. Enter your Civil ID or passport number to check visa status, expiry date, and remaining days. Works for work visa, visit visa, and residence permit.',
  keywords: [
    'Kuwait visa checker',
    'check Kuwait visa online',
    'Kuwait visa validity tool',
    'Kuwait visa status check',
    'MOI Kuwait visa inquiry',
    'Kuwait Civil ID check',
    'Kuwait residence validity',
    'فحص تأشيرة الكويت',
    'صلاحية الإقامة الكويت',
  ],
  openGraph: {
    title: 'Kuwait Visa Validity Checker Tool | Free Online',
    description: 'Check your Kuwait visa status and expiry date instantly with our free online tool.',
    url: 'https://kuwaitvisachecker.com/visa-checker',
  },
  alternates: {
    canonical: 'https://kuwaitvisachecker.com/visa-checker',
  },
}

const tips = [
  {
    icon: Shield,
    title: 'Keep Your Data Safe',
    description: 'We never store your personal information. All checks are processed securely.',
  },
  {
    icon: Clock,
    title: 'Check Regularly',
    description: 'We recommend checking your visa validity at least once a month.',
  },
  {
    icon: AlertTriangle,
    title: 'Plan Ahead',
    description: 'Start your renewal process 30-60 days before visa expiry.',
  },
]

export default function VisaCheckerPage() {
  return (
    <div className="content-area">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Kuwait Visa Validity Checker
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Check your Kuwait visa status, expiry date, and remaining validity period instantly
            </p>
            <p className="text-lg text-primary-200 mt-2 font-arabic" dir="rtl">
              تحقق من صلاحية تأشيرة الكويت الخاصة بك
            </p>
          </div>
        </div>
      </section>

      {/* Main Tool Section */}
      <section className="section-spacing bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checker Tool */}
            <div className="lg:col-span-2">
              <VisaCheckerTool />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Ad Space */}
              <AdBanner slot="checker-sidebar" format="rectangle" />

              {/* Tips Card */}
              <div className="card">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center">
                  <Info className="w-5 h-5 mr-2 text-primary-500" />
                  Helpful Tips
                </h3>
                <div className="space-y-4">
                  {tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <tip.icon className="w-4 h-4 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-900 text-sm">{tip.title}</h4>
                        <p className="text-xs text-neutral-600">{tip.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="card">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  Official Resources
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.moi.gov.kw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 text-sm flex items-center"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      MOI Kuwait Official Website
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://evisa.moi.gov.kw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 text-sm flex items-center"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Kuwait e-Visa Portal
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.paci.gov.kw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 text-sm flex items-center"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      PACI Kuwait (Civil ID)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <AdBanner slot="checker-middle" />

      {/* Instructions Section */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">
            How to Use the Kuwait Visa Checker
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Using Civil ID Number
              </h3>
              <ol className="space-y-3 text-neutral-600">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0">1</span>
                  <span>Select "Civil ID" as your identification type</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0">2</span>
                  <span>Enter your 12-digit Kuwait Civil ID number</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0">3</span>
                  <span>Select your visa type from the dropdown</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0">4</span>
                  <span>Click "Check Visa Status" to view results</span>
                </li>
              </ol>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Using Passport Number
              </h3>
              <ol className="space-y-3 text-neutral-600">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0">1</span>
                  <span>Select "Passport" as your identification type</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0">2</span>
                  <span>Enter your passport number exactly as shown</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0">3</span>
                  <span>Select your nationality from the list</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0">4</span>
                  <span>Click "Check Visa Status" to view results</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="section-spacing bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Understanding Kuwait Visa Validity Check Results
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  What Does "Valid" Status Mean?
                </h3>
                <p className="text-neutral-600 mb-4">
                  A "Valid" status indicates that your Kuwait visa is currently active and you are legally 
                  permitted to stay in Kuwait. The result will also show your visa expiry date and the 
                  number of remaining days. Even with a valid status, we recommend starting the renewal 
                  process 30-60 days before expiry.
                </p>
                
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  What Does "Expired" Status Mean?
                </h3>
                <p className="text-neutral-600 mb-4">
                  An "Expired" status means your Kuwait visa has passed its validity date. If you are 
                  still in Kuwait with an expired visa, you may be subject to fines and should contact 
                  the Ministry of Interior immediately to regularize your status or arrange departure.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  Kuwait Visa Overstay Penalties
                </h3>
                <p className="text-neutral-600 mb-4">
                  Overstaying your Kuwait visa can result in daily fines (typically 2 KD per day), 
                  detention, deportation, and potential entry bans. The severity depends on the 
                  overstay duration. Always ensure your visa remains valid throughout your stay.
                </p>
                
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  Need to Renew Your Visa?
                </h3>
                <p className="text-neutral-600 mb-4">
                  If your visa is expiring soon, visit our comprehensive 
                  <a href="/visa-guide#renewal" className="text-primary-600 hover:underline"> visa renewal guide</a> 
                  for step-by-step instructions on how to renew your Kuwait work visa, visit visa, 
                  or residence permit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <AdBanner slot="checker-bottom" />
    </div>
  )
}
