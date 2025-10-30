'use client'

import { motion } from 'framer-motion'
import Layout from '../../components/layout/Layout'
import { AlertTriangle, FileWarning, Info, Shield, Scale, Mail } from 'lucide-react'

export default function DisclaimerPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fnm-black via-fnm-gray-900 to-fnm-black text-fnm-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center">
            <AlertTriangle className="h-16 w-16 text-fnm-gold mx-auto mb-6" />
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
              Legal <span className="text-fnm-gold">Disclaimer</span>
            </h1>
            <p className="text-xl text-fnm-gray-300 max-w-3xl mx-auto">
              Important information regarding the use of this website and legal services provided by FNM Law Advocates LLP.
            </p>
            <p className="text-sm text-fnm-gray-400 mt-4">
              Last Updated: {new Date().toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-20 bg-fnm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            {/* General Disclaimer */}
            <div className="mb-12 bg-red-50 border-l-4 border-red-600 p-6 rounded">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4 flex items-center gap-3">
                <FileWarning className="text-red-600" size={32} />
                Important Notice
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed font-semibold">
                PLEASE READ THIS DISCLAIMER CAREFULLY BEFORE USING THIS WEBSITE OR ENGAGING OUR LEGAL SERVICES.
              </p>
              <p className="text-fnm-gray-700 leading-relaxed mt-4">
                This disclaimer governs your use of our website (fnmlawadvocates.com) and sets forth important limitations and conditions regarding the information and services provided by FNM Law Advocates LLP.
              </p>
            </div>

            {/* No Legal Advice */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4 flex items-center gap-3">
                <Info className="text-fnm-gold" size={32} />
                Not Legal Advice
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                The information provided on this website is for <strong>general informational purposes only</strong> and does not constitute legal advice. The content on this website:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li>Is not intended to create an attorney-client relationship</li>
                <li>Should not be relied upon as legal advice for any specific situation</li>
                <li>May not reflect the most current legal developments</li>
                <li>Is not a substitute for professional legal counsel</li>
                <li>Does not address the specific circumstances of your case</li>
              </ul>
              <p className="text-fnm-gray-700 leading-relaxed mt-4 font-semibold">
                DO NOT send confidential information to us through this website or email until an attorney-client relationship has been formally established through a written retainer agreement.
              </p>
            </div>

            {/* No Attorney-Client Relationship */}
            <div className="mb-12 bg-fnm-gold/5 border-l-4 border-fnm-gold p-6 rounded">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                No Attorney-Client Relationship
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                Merely visiting, browsing, or communicating through this website does not create an attorney-client relationship between you and FNM Law Advocates LLP. An attorney-client relationship is established only when:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li>We have conducted a conflict of interest check and determined we can represent you</li>
                <li>Both parties have executed a written retainer agreement</li>
                <li>We have explicitly agreed in writing to represent you in a specific matter</li>
                <li>Any required retainer fees have been paid</li>
              </ul>
              <p className="text-fnm-gray-700 leading-relaxed mt-4">
                Until such a relationship is established, nothing you submit or communicate to us will be treated as confidential or privileged, and we have no obligation to represent you or protect your interests.
              </p>
            </div>

            {/* Accuracy of Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Accuracy and Currency of Information
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                While we strive to provide accurate and up-to-date information:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li>Laws, regulations, and legal interpretations change frequently</li>
                <li>Information on this website may become outdated</li>
                <li>We make no warranties about the accuracy, completeness, or timeliness of content</li>
                <li>Content may contain typographical or technical errors</li>
                <li>Information may not apply to your specific jurisdiction or circumstances</li>
              </ul>
              <p className="text-fnm-gray-700 leading-relaxed mt-4">
                You should always consult with a qualified attorney about your specific legal situation before taking any action.
              </p>
            </div>

            {/* No Guarantee of Results */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                No Guarantee of Results
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                We cannot and do not guarantee specific outcomes or results:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li>Every legal matter is unique and depends on specific facts and circumstances</li>
                <li>Past results do not guarantee or predict future outcomes</li>
                <li>Success in previous cases does not ensure success in yours</li>
                <li>Legal proceedings involve inherent uncertainties</li>
                <li>Court decisions, opposing parties' actions, and other factors beyond our control affect outcomes</li>
              </ul>
              <p className="text-fnm-gray-700 leading-relaxed mt-4">
                Testimonials, case results, or success stories mentioned on this website are not indicative of future results and should not be interpreted as a guarantee of success in any particular matter.
              </p>
            </div>

            {/* Jurisdiction Limitations */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Jurisdictional Limitations
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                FNM Law Advocates LLP is licensed to practice law in the Republic of Kenya. The information on this website:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li>Relates primarily to Kenyan law and legal procedures</li>
                <li>May not be applicable in other jurisdictions</li>
                <li>Should not be relied upon for matters outside Kenya</li>
              </ul>
              <p className="text-fnm-gray-700 leading-relaxed mt-4">
                If your legal matter involves laws of other countries, you should consult with attorneys licensed in those jurisdictions.
              </p>
            </div>

            {/* Third-Party Content */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Third-Party Links and Content
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                This website may contain links to third-party websites or resources:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li>We do not control, endorse, or assume responsibility for third-party content</li>
                <li>Links are provided for convenience only</li>
                <li>We make no representations about the accuracy or suitability of linked content</li>
                <li>You access third-party sites at your own risk</li>
                <li>We are not liable for any damages arising from your use of third-party websites</li>
              </ul>
            </div>

            {/* Technical Limitations */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Website Availability and Technical Issues
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                We make no warranties regarding:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li>Continuous availability or uninterrupted access to the website</li>
                <li>Freedom from viruses, errors, or other harmful components</li>
                <li>Security of information transmitted through the website</li>
                <li>Accuracy of downloads or transmitted data</li>
              </ul>
              <p className="text-fnm-gray-700 leading-relaxed mt-4">
                We reserve the right to modify, suspend, or discontinue the website at any time without notice or liability.
              </p>
            </div>

            {/* Communication Limitations */}
            <div className="mb-12 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Communication Disclaimer
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                <strong>Important:</strong> Email and internet communications are not secure methods of communication:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li>Do not send confidential or time-sensitive information via unsecured email</li>
                <li>We cannot guarantee the security of electronic communications</li>
                <li>Information sent via this website may be intercepted by third parties</li>
                <li>We are not responsible for unauthorized access to communications</li>
              </ul>
              <p className="text-fnm-gray-700 leading-relaxed mt-4">
                For urgent matters, please contact us directly by telephone at +254 728 657 560.
              </p>
            </div>

            {/* Professional Conduct */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4 flex items-center gap-3">
                <Scale className="text-fnm-gold" size={32} />
                Professional Standards
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                FNM Law Advocates LLP operates in accordance with:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li>The Advocates Act (Cap 16) of the Laws of Kenya</li>
                <li>The Law Society of Kenya Code of Conduct for Advocates</li>
                <li>The Constitution of Kenya</li>
                <li>All applicable laws and regulations governing legal practice</li>
              </ul>
              <p className="text-fnm-gray-700 leading-relaxed mt-4">
                Our duty to the court and the administration of justice takes precedence over our duty to clients. We will not engage in illegal, unethical, or unprofessional conduct.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12 bg-fnm-gray-50 p-6 rounded-lg border-2 border-fnm-gray-200">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Limitation of Liability
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                To the fullest extent permitted by law, FNM Law Advocates LLP shall not be liable for:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li>Any damages arising from your use of or inability to use this website</li>
                <li>Reliance on information provided on this website</li>
                <li>Decisions made based on website content</li>
                <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Damages caused by viruses, technical failures, or unauthorized access</li>
              </ul>
              <p className="text-fnm-gray-700 leading-relaxed mt-4 font-semibold">
                USE OF THIS WEBSITE IS AT YOUR OWN RISK.
              </p>
            </div>

            {/* Copyright Notice */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Copyright and Intellectual Property
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property of FNM Law Advocates LLP or our licensors and is protected by copyright and intellectual property laws. Unauthorized use, reproduction, or distribution of any content is strictly prohibited.
              </p>
            </div>

            {/* Changes to Disclaimer */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Modifications
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed">
                We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting with an updated "Last Updated" date. Your continued use of the website constitutes acceptance of any modifications.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Governing Law
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed">
                This disclaimer is governed by the laws of the Republic of Kenya. Any disputes arising from this disclaimer or use of this website shall be subject to the exclusive jurisdiction of Kenyan courts.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Severability
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed">
                If any provision of this disclaimer is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>
            </div>

            {/* Contact for Legal Advice */}
            <div className="bg-fnm-black text-fnm-white p-8 rounded-lg">
              <h2 className="text-3xl font-serif font-bold text-fnm-gold mb-6 flex items-center gap-3">
                <Shield size={32} />
                Need Legal Advice?
              </h2>
              <p className="text-fnm-gray-200 leading-relaxed mb-6">
                If you have a specific legal matter that requires professional advice, please contact us to schedule a consultation. We will evaluate your situation and determine how we can assist you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-fnm-gold" size={20} />
                  <div>
                    <p className="font-semibold text-fnm-gold">Email:</p>
                    <a href="mailto:info@fnmlawadvocates.com" className="text-fnm-white hover:text-fnm-gold transition-colors">
                      info@fnmlawadvocates.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Scale className="text-fnm-gold" size={20} />
                  <div>
                    <p className="font-semibold text-fnm-gold">Call:</p>
                    <p className="text-fnm-white">+254 728 657 560 | +254 713 286 796</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="mt-12 p-6 bg-fnm-gold/10 border-2 border-fnm-gold rounded-lg">
              <p className="text-center text-fnm-gray-700 font-semibold text-lg">
                By using this website, you acknowledge that you have read, understood, and agree to be bound by this Legal Disclaimer.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
