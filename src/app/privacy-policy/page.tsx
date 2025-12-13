import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Kuwait Visa Checker',
  description: 'Privacy Policy for Kuwait Visa Checker. Learn how we handle your data and protect your privacy.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://kuwaitvisachecker.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="content-area">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-neutral-600 mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">1. Introduction</h2>
            <p className="text-neutral-600 mb-4">
              Welcome to Kuwait Visa Checker ("we," "our," or "us"). We are committed to protecting your 
              privacy and ensuring the security of any information you provide while using our website 
              and services.
            </p>
            <p className="text-neutral-600">
              This Privacy Policy explains how we collect, use, and protect information when you visit 
              our website at kuwaitvisachecker.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-medium text-neutral-800 mb-3">2.1 Information You Provide</h3>
            <p className="text-neutral-600 mb-4">
              When using our visa checker tool, you may enter:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 mb-4">
              <li>Civil ID numbers</li>
              <li>Passport numbers</li>
              <li>Nationality information</li>
              <li>Visa type selections</li>
            </ul>
            <p className="text-neutral-600 mb-4">
              <strong>Important:</strong> We do NOT store any personal identification information you enter 
              into our visa checker tool. This data is processed temporarily to provide you with results 
              and is not saved to our servers.
            </p>

            <h3 className="text-xl font-medium text-neutral-800 mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-neutral-600 mb-4">
              We may automatically collect certain information when you visit our website, including:
            </p>
            <ul className="list-disc pl-6 text-neutral-600">
              <li>IP address (anonymized)</li>
              <li>Browser type and version</li>
              <li>Device type</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">3. How We Use Information</h2>
            <p className="text-neutral-600 mb-4">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 text-neutral-600">
              <li>Provide and improve our visa checking services</li>
              <li>Analyze website usage and performance</li>
              <li>Ensure website security</li>
              <li>Display relevant advertisements through Google AdSense</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">4. Cookies and Tracking</h2>
            <p className="text-neutral-600 mb-4">
              Our website uses cookies and similar tracking technologies to enhance your experience. 
              These include:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 mb-4">
              <li><strong>Essential cookies:</strong> Required for basic website functionality</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Advertising cookies:</strong> Used by Google AdSense to display relevant ads</li>
            </ul>
            <p className="text-neutral-600">
              You can control cookie preferences through your browser settings. Note that disabling 
              certain cookies may affect website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">5. Third-Party Services</h2>
            <p className="text-neutral-600 mb-4">
              We use the following third-party services:
            </p>
            <ul className="list-disc pl-6 text-neutral-600">
              <li><strong>Google AdSense:</strong> For displaying advertisements</li>
              <li><strong>Google Analytics:</strong> For website analytics</li>
            </ul>
            <p className="text-neutral-600 mt-4">
              These services may collect information according to their own privacy policies. 
              We encourage you to review their policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">6. Data Security</h2>
            <p className="text-neutral-600">
              We implement appropriate security measures to protect against unauthorized access, 
              alteration, or destruction of data. However, no internet transmission is 100% secure, 
              and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">7. Your Rights</h2>
            <p className="text-neutral-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-neutral-600">
              <li>Access information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Disable cookies through browser settings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">8. Children's Privacy</h2>
            <p className="text-neutral-600">
              Our website is not intended for children under 13 years of age. We do not knowingly 
              collect personal information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">9. Changes to This Policy</h2>
            <p className="text-neutral-600">
              We may update this Privacy Policy from time to time. Changes will be posted on this page 
              with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">10. Contact Us</h2>
            <p className="text-neutral-600">
              If you have questions about this Privacy Policy, please contact us through our 
              <a href="/contact" className="text-primary-600 hover:underline ml-1">Contact Page</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
