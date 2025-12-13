import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer | Kuwait Visa Checker',
  description: 'Disclaimer for Kuwait Visa Checker. Important information about our services and limitations.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://kuwaitvisachecker.com/disclaimer',
  },
}

export default function DisclaimerPage() {
  return (
    <div className="content-area">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
          Disclaimer
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-amber-900 mb-3">
              Important Notice
            </h2>
            <p className="text-amber-800">
              Kuwait Visa Checker is an independent informational website. We are NOT affiliated with, 
              endorsed by, or connected to the Kuwait Ministry of Interior (MOI), Kuwait Government, 
              or any official government agency.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">General Disclaimer</h2>
            <p className="text-neutral-600 mb-4">
              The information provided on Kuwait Visa Checker (kuwaitvisachecker.com) is for general 
              informational purposes only. While we strive to keep the information up-to-date and 
              accurate, we make no representations or warranties of any kind, express or implied, 
              about the completeness, accuracy, reliability, suitability, or availability of the 
              information, products, services, or related graphics contained on the website.
            </p>
            <p className="text-neutral-600">
              Any reliance you place on such information is strictly at your own risk. We will not 
              be liable for any loss or damage including without limitation, indirect or consequential 
              loss or damage, arising from the use of this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Visa Checker Tool Disclaimer</h2>
            <p className="text-neutral-600 mb-4">
              Our visa validity checker tool is provided as a helpful guide only. The results generated 
              by this tool:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 mb-4">
              <li>Are NOT official verification of your visa status</li>
              <li>Should NOT be used as the sole basis for visa-related decisions</li>
              <li>May not reflect real-time updates to visa regulations</li>
              <li>Cannot replace official verification from the Ministry of Interior</li>
            </ul>
            <p className="text-neutral-600">
              For official visa status verification, you MUST contact the Kuwait Ministry of Interior 
              directly or use their official portal at <a href="https://www.moi.gov.kw" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">moi.gov.kw</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">No Legal Advice</h2>
            <p className="text-neutral-600">
              The content on this website does not constitute legal advice. For specific visa-related 
              legal matters, immigration issues, or complex situations, please consult with a qualified 
              immigration lawyer or contact the relevant Kuwait government authorities directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Information Accuracy</h2>
            <p className="text-neutral-600 mb-4">
              Visa regulations, fees, requirements, and processes in Kuwait can change without notice. 
              While we make efforts to update our content regularly, we cannot guarantee that all 
              information is current at any given time.
            </p>
            <p className="text-neutral-600">
              Always verify information with official sources before making any visa-related decisions 
              or taking action based on information from this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">External Links</h2>
            <p className="text-neutral-600">
              This website may contain links to external websites that are not under our control. 
              We have no control over the nature, content, and availability of those sites. The 
              inclusion of any links does not necessarily imply a recommendation or endorsement 
              of the views expressed within them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Limitation of Liability</h2>
            <p className="text-neutral-600 mb-4">
              Under no circumstances shall Kuwait Visa Checker, its owners, operators, or contributors 
              be liable for any:
            </p>
            <ul className="list-disc pl-6 text-neutral-600">
              <li>Visa application rejections or delays</li>
              <li>Fines, penalties, or legal consequences related to visa status</li>
              <li>Financial losses arising from visa-related decisions</li>
              <li>Deportation or entry ban issues</li>
              <li>Any other direct, indirect, incidental, or consequential damages</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">User Responsibility</h2>
            <p className="text-neutral-600">
              Users are solely responsible for verifying all visa-related information with official 
              government sources and ensuring compliance with Kuwait immigration laws. It is your 
              responsibility to maintain valid visa status and take appropriate action before your 
              visa expires.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Contact Official Sources</h2>
            <p className="text-neutral-600 mb-4">
              For official and authoritative information about Kuwait visas, please contact:
            </p>
            <ul className="list-disc pl-6 text-neutral-600">
              <li>Ministry of Interior Kuwait: <a href="https://www.moi.gov.kw" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">moi.gov.kw</a></li>
              <li>Kuwait e-Visa Portal: <a href="https://evisa.moi.gov.kw" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">evisa.moi.gov.kw</a></li>
              <li>PACI (Civil ID): <a href="https://www.paci.gov.kw" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">paci.gov.kw</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
