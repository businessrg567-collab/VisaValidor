import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Kuwait Visa Checker',
  description: 'Terms of Service for Kuwait Visa Checker. Read our terms and conditions for using our website and services.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://kuwaitvisachecker.com/terms-of-service',
  },
}

export default function TermsOfServicePage() {
  return (
    <div className="content-area">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
          Terms of Service
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-neutral-600 mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-neutral-600">
              By accessing and using Kuwait Visa Checker (kuwaitvisachecker.com), you accept and agree 
              to be bound by these Terms of Service. If you do not agree to these terms, please do not 
              use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">2. Description of Service</h2>
            <p className="text-neutral-600 mb-4">
              Kuwait Visa Checker provides:
            </p>
            <ul className="list-disc pl-6 text-neutral-600">
              <li>A visa validity checking tool for informational purposes</li>
              <li>Guides and information about Kuwait visa types and processes</li>
              <li>Frequently asked questions about Kuwait immigration</li>
              <li>Links to official government resources</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">3. Important Disclaimer</h2>
            <p className="text-neutral-600 mb-4">
              <strong>Kuwait Visa Checker is NOT affiliated with the Kuwait Ministry of Interior (MOI) 
              or any government agency.</strong>
            </p>
            <p className="text-neutral-600 mb-4">
              Our visa checker tool and information are provided for guidance purposes only. They should 
              NOT be considered as official verification of your visa status. For official visa status 
              and requirements, always refer to the Ministry of Interior Kuwait website (moi.gov.kw).
            </p>
            <p className="text-neutral-600">
              We make no guarantees about the accuracy, completeness, or timeliness of information 
              provided on this website. Visa regulations can change without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">4. User Responsibilities</h2>
            <p className="text-neutral-600 mb-4">
              By using our website, you agree to:
            </p>
            <ul className="list-disc pl-6 text-neutral-600">
              <li>Provide accurate information when using our tools</li>
              <li>Use the website only for lawful purposes</li>
              <li>Not attempt to access restricted areas or systems</li>
              <li>Not interfere with the website's operation</li>
              <li>Verify all visa information with official government sources</li>
              <li>Not rely solely on our tools for visa compliance decisions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">5. Limitation of Liability</h2>
            <p className="text-neutral-600 mb-4">
              To the fullest extent permitted by law, Kuwait Visa Checker and its operators shall not 
              be liable for:
            </p>
            <ul className="list-disc pl-6 text-neutral-600">
              <li>Any direct, indirect, incidental, or consequential damages</li>
              <li>Loss or damage arising from use of our website or tools</li>
              <li>Decisions made based on information from our website</li>
              <li>Visa-related penalties, fines, or legal issues</li>
              <li>Inaccuracies or errors in the information provided</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">6. Intellectual Property</h2>
            <p className="text-neutral-600">
              All content on this website, including text, graphics, logos, and software, is the 
              property of Kuwait Visa Checker or its content suppliers and is protected by copyright 
              and intellectual property laws. You may not reproduce, distribute, or create derivative 
              works without our express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">7. Third-Party Links</h2>
            <p className="text-neutral-600">
              Our website may contain links to third-party websites, including government portals. 
              We are not responsible for the content, accuracy, or practices of these external sites. 
              Linking to external sites does not imply endorsement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">8. Advertising</h2>
            <p className="text-neutral-600">
              Our website displays advertisements through Google AdSense and potentially other 
              advertising networks. We are not responsible for the content of these advertisements. 
              Clicking on ads is at your own discretion and risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">9. Modifications</h2>
            <p className="text-neutral-600">
              We reserve the right to modify these Terms of Service at any time. Changes will be 
              effective immediately upon posting. Your continued use of the website after changes 
              constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">10. Termination</h2>
            <p className="text-neutral-600">
              We reserve the right to terminate or restrict access to our website for any user who 
              violates these terms or engages in conduct we deem harmful to the website or other users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">11. Governing Law</h2>
            <p className="text-neutral-600">
              These Terms of Service shall be governed by and construed in accordance with applicable 
              laws. Any disputes arising from these terms shall be resolved through appropriate legal 
              channels.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">12. Contact</h2>
            <p className="text-neutral-600">
              For questions about these Terms of Service, please contact us through our 
              <a href="/contact" className="text-primary-600 hover:underline ml-1">Contact Page</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
