import type { Metadata } from 'next'
import { Mail, MessageSquare, Globe, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Kuwait Visa Checker',
  description: 'Contact Kuwait Visa Checker for questions, feedback, or support regarding our visa validity checker tool and guides.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://kuwaitvisachecker.com/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="content-area">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-xl font-semibold text-neutral-900">Email Us</h2>
            </div>
            <p className="text-neutral-600 mb-4">
              For general inquiries, feedback, or support questions.
            </p>
            <a 
              href="mailto:contact@kuwaitvisachecker.com" 
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              contact@kuwaitvisachecker.com
            </a>
          </div>

          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-xl font-semibold text-neutral-900">Response Time</h2>
            </div>
            <p className="text-neutral-600">
              We typically respond to inquiries within 24-48 hours during business days. 
              Please be patient as we handle all messages personally.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6 flex items-center">
            <MessageSquare className="w-6 h-6 mr-3 text-primary-500" />
            Send Us a Message
          </h2>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="form-label">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="form-input"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="form-label">
                Subject *
              </label>
              <select id="subject" name="subject" required className="form-input">
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="feedback">Feedback</option>
                <option value="bug">Report a Bug</option>
                <option value="suggestion">Feature Suggestion</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="form-label">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="form-input"
                placeholder="Type your message here..."
              />
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-800">
                <strong>Note:</strong> We cannot provide official visa status verification or legal advice. 
                For official visa inquiries, please contact the Ministry of Interior Kuwait directly.
              </p>
            </div>

            <button type="submit" className="btn-primary w-full md:w-auto">
              Send Message
            </button>
          </form>
        </div>

        {/* Official Resources */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6 flex items-center">
            <Globe className="w-6 h-6 mr-3 text-primary-500" />
            Official Kuwait Government Resources
          </h2>
          <p className="text-neutral-600 mb-6">
            For official visa inquiries, status verification, or immigration matters, please contact 
            the Kuwait government directly through these official channels:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="https://www.moi.gov.kw"
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover text-center"
            >
              <h3 className="font-semibold text-neutral-900 mb-1">MOI Kuwait</h3>
              <p className="text-sm text-neutral-600">Ministry of Interior</p>
              <p className="text-xs text-primary-600 mt-2">moi.gov.kw</p>
            </a>
            <a
              href="https://evisa.moi.gov.kw"
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover text-center"
            >
              <h3 className="font-semibold text-neutral-900 mb-1">e-Visa Portal</h3>
              <p className="text-sm text-neutral-600">Online Visa Services</p>
              <p className="text-xs text-primary-600 mt-2">evisa.moi.gov.kw</p>
            </a>
            <a
              href="https://www.paci.gov.kw"
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover text-center"
            >
              <h3 className="font-semibold text-neutral-900 mb-1">PACI</h3>
              <p className="text-sm text-neutral-600">Civil ID Services</p>
              <p className="text-xs text-primary-600 mt-2">paci.gov.kw</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
