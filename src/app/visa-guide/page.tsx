import type { Metadata } from 'next'
import Link from 'next/link'
import AdBanner from '@/components/AdBanner'
import { 
  FileText, 
  Briefcase, 
  Users, 
  Home, 
  Plane, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  DollarSign,
  FileCheck,
  Calendar,
  ArrowRight
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kuwait Visa Guide 2024 | Work Visa, Visit Visa, Residence Permit',
  description: 'Complete guide to Kuwait visas in 2024. Learn about work visa requirements, visit visa process, residence permit renewal, fees, and documents needed. دليل تأشيرة الكويت',
  keywords: [
    'Kuwait visa guide',
    'Kuwait work visa requirements',
    'Kuwait visit visa process',
    'Kuwait residence permit',
    'Kuwait visa fees 2024',
    'Kuwait visa documents',
    'Kuwait visa renewal',
    'Kuwait family visa',
    'Kuwait employment visa',
    'دليل تأشيرة الكويت',
    'متطلبات تأشيرة العمل الكويت',
  ],
  openGraph: {
    title: 'Kuwait Visa Guide 2024 | Complete Information',
    description: 'Everything you need to know about Kuwait visas - work visa, visit visa, residence permit, fees, and requirements.',
    url: 'https://kuwaitvisachecker.com/visa-guide',
  },
  alternates: {
    canonical: 'https://kuwaitvisachecker.com/visa-guide',
  },
}

const visaCategories = [
  {
    id: 'work-visa',
    icon: Briefcase,
    title: 'Work Visa (تأشيرة عمل)',
    subtitle: 'Employment Visa for Kuwait',
    description: 'Required for expatriates working in Kuwait under employer sponsorship.',
    validity: '1-2 years (renewable)',
    processingTime: '2-4 weeks',
    fees: '10-50 KD',
    requirements: [
      'Valid passport (6+ months validity)',
      'Employment contract from Kuwait employer',
      'Medical fitness certificate',
      'Educational certificates (attested)',
      'Police clearance certificate',
      'Passport-size photographs',
      'Completed visa application form',
    ],
    process: [
      'Employer applies for work permit at Ministry of Social Affairs',
      'Work permit approval received',
      'Employer submits visa application to MOI',
      'Visa approval and entry permit issued',
      'Employee enters Kuwait and completes medical',
      'Civil ID and residence permit issued',
    ],
  },
  {
    id: 'visit-visa',
    icon: Plane,
    title: 'Visit Visa (تأشيرة زيارة)',
    subtitle: 'Tourist & Family Visit Visa',
    description: 'For tourists, business visitors, and family members visiting Kuwait.',
    validity: '1-3 months',
    processingTime: '3-7 days',
    fees: '3-10 KD',
    requirements: [
      'Valid passport (6+ months validity)',
      'Return flight ticket',
      'Hotel reservation or host invitation',
      'Proof of sufficient funds',
      'Travel insurance (recommended)',
      'Passport-size photographs',
    ],
    process: [
      'Apply online through Kuwait e-Visa portal',
      'Upload required documents',
      'Pay visa fees online',
      'Receive e-Visa via email',
      'Present e-Visa at Kuwait airport',
    ],
  },
  {
    id: 'residence',
    icon: Home,
    title: 'Residence Permit (إقامة)',
    subtitle: 'Kuwait Residency Card',
    description: 'Long-term residence permit for expatriates living in Kuwait.',
    validity: '1-5 years',
    processingTime: '1-2 weeks',
    fees: '2-10 KD annually',
    requirements: [
      'Valid work visa or family visa',
      'Valid passport',
      'Medical fitness certificate',
      'Employer/sponsor documents',
      'Passport-size photographs',
      'Completed application form',
    ],
    process: [
      'Complete medical examination at approved center',
      'Employer submits residence application',
      'Biometrics and fingerprinting at MOI',
      'Civil ID card issued by PACI',
      'Residence sticker in passport',
    ],
  },
  {
    id: 'family-visa',
    icon: Users,
    title: 'Family Visa (تأشيرة عائلية)',
    subtitle: 'Dependent Visa for Family Members',
    description: 'For spouses and children of Kuwait residents to join them.',
    validity: 'Linked to sponsor\'s visa',
    processingTime: '2-4 weeks',
    fees: '5-20 KD',
    requirements: [
      'Sponsor\'s valid residence permit',
      'Minimum salary requirement (450+ KD)',
      'Marriage certificate (attested)',
      'Birth certificates for children',
      'Family members\' passports',
      'Sponsor\'s employment letter',
    ],
    process: [
      'Sponsor applies at MOI for family visa',
      'Submit all required documents',
      'Pay applicable fees',
      'Family visa approval issued',
      'Family members enter Kuwait',
      'Complete medical and get residence',
    ],
  },
]

const renewalInfo = {
  id: 'renewal',
  title: 'Visa Renewal Process',
  description: 'How to renew your Kuwait visa before it expires',
  steps: [
    {
      title: 'Check Eligibility',
      description: 'Ensure your current visa is still valid or within grace period. Check employer sponsorship status.',
    },
    {
      title: 'Gather Documents',
      description: 'Collect passport, current visa, medical certificate, employer letter, and photographs.',
    },
    {
      title: 'Medical Examination',
      description: 'Complete medical fitness test at an approved medical center in Kuwait.',
    },
    {
      title: 'Submit Application',
      description: 'Employer submits renewal application through MOI online portal or in person.',
    },
    {
      title: 'Pay Fees',
      description: 'Pay renewal fees and any applicable fines for late renewal.',
    },
    {
      title: 'Receive New Visa',
      description: 'Collect renewed residence permit and update Civil ID if needed.',
    },
  ],
  tips: [
    'Start renewal process 30-60 days before expiry',
    'Keep copies of all submitted documents',
    'Track application status online',
    'Ensure medical certificate is recent (within 3 months)',
    'Verify employer has paid all required fees',
  ],
}

export default function VisaGuidePage() {
  return (
    <div className="content-area">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Complete Kuwait Visa Guide 2024
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Everything you need to know about Kuwait visas - requirements, fees, process, and renewal information
            </p>
            <p className="text-lg text-primary-200 mt-2 font-arabic" dir="rtl">
              دليل شامل لتأشيرات الكويت - المتطلبات والرسوم والإجراءات
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white border-b border-neutral-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-4 scrollbar-hide">
            {visaCategories.map((visa) => (
              <a
                key={visa.id}
                href={`#${visa.id}`}
                className="flex items-center px-4 py-2 bg-neutral-100 hover:bg-primary-50 hover:text-primary-600 rounded-lg text-sm font-medium whitespace-nowrap transition-colors"
              >
                <visa.icon className="w-4 h-4 mr-2" />
                {visa.title.split(' (')[0]}
              </a>
            ))}
            <a
              href="#renewal"
              className="flex items-center px-4 py-2 bg-neutral-100 hover:bg-primary-50 hover:text-primary-600 rounded-lg text-sm font-medium whitespace-nowrap transition-colors"
            >
              <Clock className="w-4 h-4 mr-2" />
              Renewal
            </a>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <AdBanner slot="guide-top" />

      {/* Visa Categories */}
      {visaCategories.map((visa, index) => (
        <section key={visa.id} id={visa.id} className={`section-spacing ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Info */}
              <div className="lg:col-span-2">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <visa.icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                      {visa.title}
                    </h2>
                    <p className="text-primary-600 font-medium">{visa.subtitle}</p>
                  </div>
                </div>

                <p className="text-lg text-neutral-600 mb-6">
                  {visa.description}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="p-4 bg-primary-50 rounded-lg text-center">
                    <Calendar className="w-5 h-5 text-primary-600 mx-auto mb-1" />
                    <p className="text-xs text-neutral-500">Validity</p>
                    <p className="font-semibold text-neutral-900 text-sm">{visa.validity}</p>
                  </div>
                  <div className="p-4 bg-primary-50 rounded-lg text-center">
                    <Clock className="w-5 h-5 text-primary-600 mx-auto mb-1" />
                    <p className="text-xs text-neutral-500">Processing</p>
                    <p className="font-semibold text-neutral-900 text-sm">{visa.processingTime}</p>
                  </div>
                  <div className="p-4 bg-primary-50 rounded-lg text-center">
                    <DollarSign className="w-5 h-5 text-primary-600 mx-auto mb-1" />
                    <p className="text-xs text-neutral-500">Fees</p>
                    <p className="font-semibold text-neutral-900 text-sm">{visa.fees}</p>
                  </div>
                </div>

                {/* Requirements */}
                <div className="card mb-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4 flex items-center">
                    <FileCheck className="w-5 h-5 mr-2 text-primary-500" />
                    Requirements
                  </h3>
                  <ul className="space-y-2">
                    {visa.requirements.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div className="card">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-primary-500" />
                    Application Process
                  </h3>
                  <ol className="space-y-4">
                    {visa.process.map((step, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-7 h-7 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-neutral-700 pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* CTA Card */}
                <div className="card bg-primary-50 border-primary-100">
                  <h4 className="font-semibold text-neutral-900 mb-3">
                    Check Your {visa.title.split(' (')[0]} Status
                  </h4>
                  <p className="text-sm text-neutral-600 mb-4">
                    Use our free tool to verify your visa validity and expiry date.
                  </p>
                  <Link
                    href="/visa-checker"
                    className="btn-primary w-full text-center text-sm flex items-center justify-center"
                  >
                    Check Visa Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>

                {/* Ad Space */}
                <AdBanner slot={`guide-${visa.id}`} format="rectangle" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Renewal Section */}
      <section id="renewal" className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {renewalInfo.title}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {renewalInfo.description}
            </p>
          </div>

          {/* Renewal Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {renewalInfo.steps.map((step, index) => (
              <div key={index} className="card card-hover">
                <div className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Renewal Tips */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 md:p-8">
            <div className="flex items-start space-x-4">
              <AlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">
                  Important Renewal Tips
                </h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {renewalInfo.tips.map((tip, index) => (
                    <li key={index} className="flex items-start text-amber-800">
                      <CheckCircle className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <AdBanner slot="guide-bottom" />

      {/* SEO Content */}
      <section className="section-spacing bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Frequently Asked Questions About Kuwait Visas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  How long can I stay in Kuwait on a visit visa?
                </h3>
                <p className="text-neutral-600 mb-4">
                  A standard Kuwait visit visa allows stays of 1-3 months depending on the visa type. 
                  Tourist visas are typically valid for 30 days, while family visit visas can be 
                  extended up to 3 months. Extensions may be possible through the MOI.
                </p>
                
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  What is the minimum salary for family visa in Kuwait?
                </h3>
                <p className="text-neutral-600 mb-4">
                  To sponsor family members in Kuwait, you typically need a minimum monthly salary 
                  of 450 KD. Some professions may have different requirements. Check with MOI for 
                  the latest salary requirements.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  Can I change my visa type while in Kuwait?
                </h3>
                <p className="text-neutral-600 mb-4">
                  Yes, it's possible to change visa types in Kuwait under certain conditions. 
                  For example, you can convert a visit visa to a work visa if you find employment. 
                  This requires employer sponsorship and approval from MOI.
                </p>
                
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  What happens if my Kuwait visa expires?
                </h3>
                <p className="text-neutral-600 mb-4">
                  Overstaying your Kuwait visa results in daily fines (approximately 2 KD per day). 
                  Extended overstays can lead to detention, deportation, and potential entry bans. 
                  Always renew your visa before expiry or leave Kuwait on time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need to Check Your Visa Status?
          </h2>
          <p className="text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
            Use our free visa validity checker to instantly verify your Kuwait visa status and expiry date.
          </p>
          <Link
            href="/visa-checker"
            className="inline-flex items-center bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-primary-50 transition-colors"
          >
            Check Visa Validity
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
