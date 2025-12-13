import Link from 'next/link'
import { 
  FileCheck, 
  Clock, 
  Shield, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Users,
  Calendar,
  FileText,
  AlertCircle,
  Zap,
  Award
} from 'lucide-react'
import AdBanner from '@/components/AdBanner'

const features = [
  {
    icon: FileCheck,
    title: 'Instant Visa Check',
    description: 'Check your Kuwait visa validity status instantly using your civil ID or passport number.',
  },
  {
    icon: Clock,
    title: 'Expiry Date Calculator',
    description: 'Calculate exactly how many days remain until your Kuwait visa expires.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your personal information is never stored. We prioritize your data privacy.',
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'Available in English and Arabic for your convenience.',
  },
]

const visaTypes = [
  {
    title: 'Work Visa (تأشيرة عمل)',
    description: 'For expatriates employed by Kuwait-based companies',
    validity: 'Up to 2 years',
    href: '/visa-guide#work-visa',
  },
  {
    title: 'Visit Visa (تأشيرة زيارة)',
    description: 'For tourists and family visitors to Kuwait',
    validity: '1-3 months',
    href: '/visa-guide#visit-visa',
  },
  {
    title: 'Residence Permit (إقامة)',
    description: 'Long-term stay permit for residents in Kuwait',
    validity: '1-5 years',
    href: '/visa-guide#residence',
  },
  {
    title: 'Transit Visa (تأشيرة عبور)',
    description: 'Short-term visa for travelers passing through Kuwait',
    validity: '72 hours',
    href: '/visa-guide#transit',
  },
]

const stats = [
  { value: '100K+', label: 'Visa Checks Monthly' },
  { value: '99.9%', label: 'Accuracy Rate' },
  { value: '24/7', label: 'Available Online' },
  { value: 'Free', label: 'No Hidden Charges' },
]

const steps = [
  {
    step: '1',
    title: 'Enter Your Details',
    description: 'Input your Civil ID number or Passport number in the checker tool.',
  },
  {
    step: '2',
    title: 'Verify Information',
    description: 'Confirm your details and select your visa type for accurate results.',
  },
  {
    step: '3',
    title: 'Get Instant Results',
    description: 'View your visa validity status, expiry date, and remaining days.',
  },
]

export default function HomePage() {
  return (
    <div className="content-area">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Free Online Tool - No Registration Required
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Kuwait Visa Validity Checker
              </h1>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Check your Kuwait visa status, expiry date, and validity online in seconds. 
                Free tool for work visa, visit visa, and residence permit verification.
              </p>
              <p className="text-lg text-primary-200 mb-8 font-arabic" dir="rtl">
                تحقق من صلاحية تأشيرة الكويت الخاصة بك عبر الإنترنت مجاناً
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/visa-checker"
                  className="inline-flex items-center justify-center bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-primary-50 transition-colors shadow-lg"
                >
                  Check Visa Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/visa-guide"
                  className="inline-flex items-center justify-center bg-primary-400/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-primary-400/30 transition-colors border border-white/20"
                >
                  Read Visa Guide
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>Work Visa Validity Check</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>Visit Visa Status Verification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>Residence Permit Expiry Check</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>Civil ID Validity Status</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>Visa Renewal Reminders</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <AdBanner slot="home-top" />

      {/* Features Section */}
      <section className="section-spacing bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Why Use Our Kuwait Visa Checker?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The most reliable and user-friendly tool to check your Kuwait visa validity online
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card card-hover text-center">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              How to Check Kuwait Visa Validity
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Follow these simple steps to check your visa status in seconds
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600">
                    {item.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary-200"></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/visa-checker" className="btn-primary inline-flex items-center">
              Start Checking Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <AdBanner slot="home-middle" />

      {/* Visa Types Section */}
      <section className="section-spacing bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Kuwait Visa Types We Support
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Check validity for all types of Kuwait visas and residence permits
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visaTypes.map((visa, index) => (
              <Link key={index} href={visa.href} className="card card-hover group">
                <div className="flex items-start justify-between mb-4">
                  <FileText className="w-8 h-8 text-primary-500" />
                  <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                    {visa.validity}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {visa.title}
                </h3>
                <p className="text-sm text-neutral-600">
                  {visa.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 md:p-8">
            <div className="flex items-start space-x-4">
              <AlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">
                  Important Notice About Kuwait Visa Validity
                </h3>
                <p className="text-amber-800 mb-4">
                  Always ensure your Kuwait visa is valid before traveling. Overstaying your visa can result in 
                  fines, deportation, and future entry bans. We recommend checking your visa status at least 
                  30 days before expiry to allow time for renewal.
                </p>
                <ul className="space-y-2 text-amber-800">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-amber-600" />
                    Check visa validity regularly
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-amber-600" />
                    Start renewal process 30 days before expiry
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-amber-600" />
                    Keep copies of all visa documents
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="section-spacing bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Complete Guide to Checking Kuwait Visa Validity Online
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  What is Kuwait Visa Validity?
                </h3>
                <p className="text-neutral-600 mb-4">
                  Kuwait visa validity refers to the period during which your visa permits you to stay legally 
                  in Kuwait. This includes work visas (تأشيرة عمل), visit visas (تأشيرة زيارة), residence permits 
                  (إقامة), and transit visas. Understanding your visa validity is crucial for legal compliance 
                  and avoiding penalties.
                </p>
                
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  How to Check Kuwait Visa Status Online
                </h3>
                <p className="text-neutral-600 mb-4">
                  You can check your Kuwait visa status through the Ministry of Interior (MOI) Kuwait portal 
                  or use our free visa validity checker tool. Simply enter your Civil ID number or passport 
                  number to get instant results about your visa status, expiry date, and remaining validity period.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  Kuwait Visa Renewal Requirements
                </h3>
                <p className="text-neutral-600 mb-4">
                  To renew your Kuwait visa, you typically need: valid passport, current visa copy, medical 
                  fitness certificate, employer sponsorship (for work visas), and payment of applicable fees. 
                  The renewal process should be initiated at least 30 days before your visa expires.
                </p>
                
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  Kuwait Immigration Contact
                </h3>
                <p className="text-neutral-600 mb-4">
                  For official inquiries, contact the Ministry of Interior Kuwait (وزارة الداخلية الكويت) 
                  through their official website at moi.gov.kw or visit the nearest immigration office. 
                  Our tool provides guidance but official verification should always be done through MOI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 mx-auto mb-6 text-primary-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Check Your Kuwait Visa?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Use our free tool to instantly verify your visa validity, check expiry dates, 
            and get renewal reminders.
          </p>
          <Link
            href="/visa-checker"
            className="inline-flex items-center bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-primary-50 transition-colors shadow-lg"
          >
            Check Visa Validity Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Ad Banner */}
      <AdBanner slot="home-bottom" />
    </div>
  )
}
