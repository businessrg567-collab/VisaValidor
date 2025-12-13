import type { Metadata } from 'next'
import Link from 'next/link'
import AdBanner from '@/components/AdBanner'
import FAQAccordion from '@/components/FAQAccordion'
import { HelpCircle, ArrowRight, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kuwait Visa FAQ | Frequently Asked Questions About Kuwait Visas',
  description: 'Find answers to common questions about Kuwait visas - validity, renewal, fees, requirements, overstay penalties, and more. أسئلة شائعة عن تأشيرة الكويت',
  keywords: [
    'Kuwait visa FAQ',
    'Kuwait visa questions',
    'Kuwait visa validity questions',
    'Kuwait visa renewal FAQ',
    'Kuwait visa overstay',
    'Kuwait visa fees',
    'Kuwait immigration FAQ',
    'أسئلة تأشيرة الكويت',
    'استفسارات الإقامة الكويت',
  ],
  openGraph: {
    title: 'Kuwait Visa FAQ | Common Questions Answered',
    description: 'Get answers to frequently asked questions about Kuwait visas, validity, renewal, and immigration.',
    url: 'https://kuwaitvisachecker.com/faq',
  },
  alternates: {
    canonical: 'https://kuwaitvisachecker.com/faq',
  },
}

const faqCategories = [
  {
    category: 'Visa Validity & Status',
    faqs: [
      {
        question: 'How can I check my Kuwait visa validity online?',
        answer: 'You can check your Kuwait visa validity using our free online tool. Simply enter your Civil ID number or passport number, select your visa type, and get instant results showing your visa status, expiry date, and remaining days. For official verification, you can also use the MOI Kuwait website (moi.gov.kw).',
      },
      {
        question: 'What does "visa validity" mean in Kuwait?',
        answer: 'Visa validity refers to the period during which your visa permits you to legally stay in Kuwait. This includes the issue date, expiry date, and the type of activities you\'re allowed to perform (work, visit, residence). Once your visa expires, you must either renew it or leave Kuwait.',
      },
      {
        question: 'How long is a Kuwait work visa valid?',
        answer: 'A Kuwait work visa (تأشيرة عمل) is typically valid for 1-2 years, depending on your employment contract and employer. The visa can be renewed before expiry as long as you maintain valid employment and meet all requirements.',
      },
      {
        question: 'How long is a Kuwait visit visa valid?',
        answer: 'Kuwait visit visas are generally valid for 1-3 months. Tourist visas are usually 30 days, while family visit visas can extend up to 90 days. Some visit visas may be extended through the MOI, subject to approval.',
      },
      {
        question: 'Can I check someone else\'s visa status?',
        answer: 'You can check visa status using Civil ID or passport numbers. However, for privacy and legal reasons, you should only check visa status for yourself or with the explicit consent of the visa holder. Employers may check their employees\' visa status.',
      },
    ],
  },
  {
    category: 'Visa Renewal',
    faqs: [
      {
        question: 'When should I start the visa renewal process?',
        answer: 'We recommend starting your Kuwait visa renewal process 30-60 days before your visa expires. This allows sufficient time for document preparation, medical examinations, and processing. Late renewals may result in fines and complications.',
      },
      {
        question: 'What documents are needed for visa renewal?',
        answer: 'For visa renewal, you typically need: valid passport (6+ months validity), current visa/residence permit, medical fitness certificate, employer letter, passport-size photographs, and completed application forms. Additional documents may be required based on visa type.',
      },
      {
        question: 'How much does visa renewal cost in Kuwait?',
        answer: 'Visa renewal fees in Kuwait vary by visa type. Work visa renewals typically cost 10-50 KD, residence permit renewals 2-10 KD annually. Additional fees may apply for medical tests, document attestation, and any late renewal fines.',
      },
      {
        question: 'Can I renew my visa online?',
        answer: 'Yes, many visa renewal services are available online through the MOI Kuwait portal (moi.gov.kw) and the Sahel app. Your employer/sponsor typically initiates the renewal process online. Some steps like medical examination must be done in person.',
      },
      {
        question: 'What if my employer doesn\'t renew my visa?',
        answer: 'If your employer fails to renew your visa, contact them immediately to understand the reason. You may need to find a new sponsor, transfer to another employer, or prepare to leave Kuwait. Seek legal advice if necessary to protect your rights.',
      },
    ],
  },
  {
    category: 'Overstay & Penalties',
    faqs: [
      {
        question: 'What happens if I overstay my Kuwait visa?',
        answer: 'Overstaying your Kuwait visa results in daily fines (approximately 2 KD per day), potential detention, deportation, and possible entry bans. The severity of penalties increases with the length of overstay. Always ensure your visa remains valid.',
      },
      {
        question: 'How much is the overstay fine in Kuwait?',
        answer: 'The overstay fine in Kuwait is approximately 2 KD (Kuwaiti Dinar) per day. Fines accumulate daily and must be paid before you can leave Kuwait or regularize your status. Extended overstays may result in additional penalties.',
      },
      {
        question: 'Is there a grace period after visa expiry?',
        answer: 'Kuwait may offer limited grace periods in certain situations, but this is not guaranteed. It\'s best to assume no grace period exists and ensure your visa is renewed before expiry. Check with MOI for any current amnesty programs.',
      },
      {
        question: 'Can I be banned from Kuwait for overstaying?',
        answer: 'Yes, significant overstays can result in entry bans to Kuwait. The ban duration depends on the overstay length and circumstances. Some bans may be lifted after a certain period, while others may be permanent.',
      },
      {
        question: 'How can I clear my overstay fines?',
        answer: 'To clear overstay fines, visit the MOI immigration department or use their online services. You\'ll need to pay all accumulated fines before you can renew your visa or exit Kuwait legally. Keep payment receipts for your records.',
      },
    ],
  },
  {
    category: 'Work Visa Specific',
    faqs: [
      {
        question: 'Can I work in Kuwait on a visit visa?',
        answer: 'No, working on a visit visa is illegal in Kuwait. You must have a valid work visa (تأشيرة عمل) sponsored by a Kuwait employer to work legally. Working illegally can result in fines, deportation, and entry bans.',
      },
      {
        question: 'Can I change employers in Kuwait?',
        answer: 'Yes, you can transfer your sponsorship to a new employer in Kuwait. This requires approval from both your current and new employer, as well as MOI approval. There may be restrictions based on your profession and time with current employer.',
      },
      {
        question: 'What is the minimum salary for a work visa in Kuwait?',
        answer: 'Minimum salary requirements vary by profession and nationality. Generally, there\'s no fixed minimum for work visas, but to sponsor family members, you need at least 450 KD monthly salary. Check current regulations with MOI.',
      },
      {
        question: 'Do I need a medical test for work visa?',
        answer: 'Yes, a medical fitness certificate is mandatory for Kuwait work visas. The medical examination includes tests for infectious diseases, blood tests, and chest X-ray. Tests must be done at approved medical centers in Kuwait.',
      },
    ],
  },
  {
    category: 'Family & Dependent Visa',
    faqs: [
      {
        question: 'What is the minimum salary to sponsor family in Kuwait?',
        answer: 'To sponsor family members (spouse and children) in Kuwait, you typically need a minimum monthly salary of 450 KD. Some professions may have different requirements. Verify current requirements with MOI.',
      },
      {
        question: 'Can my family work in Kuwait on dependent visa?',
        answer: 'Family members on dependent visas cannot work unless they obtain their own work visa with a separate employer sponsor. Some exceptions may apply for certain professions. Check current regulations with MOI.',
      },
      {
        question: 'How long does family visa processing take?',
        answer: 'Family visa processing in Kuwait typically takes 2-4 weeks after all documents are submitted. Processing time may vary based on nationality, document completeness, and current workload at immigration offices.',
      },
      {
        question: 'Can I bring my parents to Kuwait?',
        answer: 'Bringing parents to Kuwait is possible through visit visas or, in some cases, dependent visas. Requirements and eligibility vary. Visit visas are easier to obtain, while long-term residence for parents has stricter requirements.',
      },
    ],
  },
  {
    category: 'General Questions',
    faqs: [
      {
        question: 'Where is the MOI immigration office in Kuwait?',
        answer: 'The main MOI (Ministry of Interior) immigration offices are located in Kuwait City, with branches in various governorates. The General Department of Residency Affairs handles visa and residence matters. Check moi.gov.kw for specific locations and hours.',
      },
      {
        question: 'What is PACI in Kuwait?',
        answer: 'PACI (Public Authority for Civil Information) is the government body responsible for issuing Civil ID cards in Kuwait. Your Civil ID is linked to your residence permit and is required for most services in Kuwait.',
      },
      {
        question: 'Can I travel outside Kuwait and return?',
        answer: 'Yes, if you have a valid residence permit, you can travel outside Kuwait and return. Ensure your residence permit remains valid during your travel. Some visa types may have restrictions on re-entry.',
      },
      {
        question: 'What is the Kuwait e-Visa?',
        answer: 'Kuwait e-Visa is an electronic visa that can be applied for online through the official portal (evisa.moi.gov.kw). It\'s available for certain nationalities for visit purposes. The e-Visa is sent via email and presented at the airport.',
      },
    ],
  },
]

export default function FAQPage() {
  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(cat => 
      cat.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  }

  return (
    <div className="content-area">
      {/* Schema.org FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-4 text-primary-200" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Kuwait Visa FAQ
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Find answers to frequently asked questions about Kuwait visas, validity, renewal, and immigration
            </p>
            <p className="text-lg text-primary-200 mt-2 font-arabic" dir="rtl">
              أسئلة شائعة عن تأشيرات الكويت
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white border-b border-neutral-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-4 scrollbar-hide">
            {faqCategories.map((cat, index) => (
              <a
                key={index}
                href={`#${cat.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-neutral-100 hover:bg-primary-50 hover:text-primary-600 rounded-lg text-sm font-medium whitespace-nowrap transition-colors"
              >
                {cat.category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <AdBanner slot="faq-top" />

      {/* FAQ Sections */}
      <section className="section-spacing bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              id={category.category.toLowerCase().replace(/\s+/g, '-')}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 mr-3 text-primary-500" />
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <FAQAccordion
                    key={faqIndex}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
              
              {/* Ad after every 2 categories */}
              {(catIndex + 1) % 2 === 0 && catIndex < faqCategories.length - 1 && (
                <div className="mt-8">
                  <AdBanner slot={`faq-mid-${catIndex}`} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              If you couldn't find the answer you're looking for, check our comprehensive visa guide 
              or use our visa checker tool.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/visa-guide"
                className="btn-primary inline-flex items-center justify-center"
              >
                Read Visa Guide
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/visa-checker"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Check Visa Status
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <AdBanner slot="faq-bottom" />

      {/* Official Resources */}
      <section className="section-spacing bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
            Official Kuwait Government Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://www.moi.gov.kw"
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover text-center"
            >
              <h3 className="font-semibold text-neutral-900 mb-2">MOI Kuwait</h3>
              <p className="text-sm text-neutral-600">Ministry of Interior - Official visa and immigration services</p>
            </a>
            <a
              href="https://evisa.moi.gov.kw"
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover text-center"
            >
              <h3 className="font-semibold text-neutral-900 mb-2">Kuwait e-Visa</h3>
              <p className="text-sm text-neutral-600">Online visa application portal</p>
            </a>
            <a
              href="https://www.paci.gov.kw"
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover text-center"
            >
              <h3 className="font-semibold text-neutral-900 mb-2">PACI Kuwait</h3>
              <p className="text-sm text-neutral-600">Civil ID and civil information services</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
