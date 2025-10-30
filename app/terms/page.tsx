'use client'

import { motion } from 'framer-motion'
import Layout from '../../components/layout/Layout'
import { Scale, FileText, AlertCircle, CheckCircle, XCircle, Mail } from 'lucide-react'

export default function TermsOfServicePage() {
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
            <Scale className="h-16 w-16 text-fnm-gold mx-auto mb-6" />
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
              Terms of <span className="text-fnm-gold">Service</span>
            </h1>
            <p className="text-xl text-fnm-gray-300 max-w-3xl mx-auto">
              Please read these terms carefully before using our services or website.
            </p>
            <p className="text-sm text-fnm-gray-400 mt-4">
              Last Updated: {new Date().toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-fnm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4 flex items-center gap-3">
                <FileText className="text-fnm-gold" size={32} />
                Agreement to Terms
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and FNM Law Advocates LLP ("Firm," "we," "us," or "our") concerning your access to and use of our website (fnmlawadvocates.com) and legal services.
              </p>
              <p className="text-fnm-gray-700 leading-relaxed mt-4">
                By accessing our website or engaging our legal services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not access our website or use our services.
              </p>
            </div>

            {/* Attorney-Client Relationship */}
            <div className="mb-12 bg-fnm-gold/5 border-l-4 border-fnm-gold p-6 rounded">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4 flex items-center gap-3">
                <AlertCircle className="text-fnm-gold" size={32} />
                No Attorney-Client Relationship
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                <strong>Important:</strong> Use of this website or communication with the Firm does not establish an attorney-client relationship. An attorney-client relationship is only formed when:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li>You formally engage our services through a written retainer agreement</li>
                <li>We explicitly agree in writing to represent you</li>
                <li>We confirm acceptance of your matter</li>
                <li>You have paid the required retainer or fees</li>
              </ul>
              <p className="text-fnm-gray-700 leading-relaxed mt-4">
                Do not send confidential or time-sensitive information through this website until an attorney-client relationship has been established.
              </p>
            </div>

            {/* Legal Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Legal Services
              </h2>

              <h3 className="text-2xl font-semibold text-fnm-black mb-3 mt-6">1. Scope of Services</h3>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                We provide legal services in accordance with:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li>The Laws of Kenya</li>
                <li>The Advocates Act (Cap 16)</li>
                <li>The Law Society of Kenya Code of Conduct</li>
                <li>Professional standards and ethics</li>
              </ul>

              <h3 className="text-2xl font-semibold text-fnm-black mb-3 mt-6">2. Engagement Terms</h3>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                When you engage our services:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li>We will provide you with a written retainer agreement outlining the scope of work</li>
                <li>You must provide accurate and complete information</li>
                <li>You must cooperate with us in the conduct of your matter</li>
                <li>You are responsible for timely payment of fees and costs</li>
                <li>You must inform us of any changes to your contact information or circumstances</li>
              </ul>

              <h3 className="text-2xl font-semibold text-fnm-black mb-3 mt-6">3. Fees and Payment</h3>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                Our fees are based on:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li>The complexity and nature of the matter</li>
                <li>Time spent on your case</li>
                <li>The experience and expertise required</li>
                <li>Industry standards and Law Society guidelines</li>
              </ul>
              <p className="text-fnm-gray-700 leading-relaxed mt-4">
                Payment terms will be specified in your retainer agreement. We reserve the right to suspend services for non-payment and may withdraw from representation in accordance with professional rules.
              </p>
            </div>

            {/* Website Use */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Website Use and Restrictions
              </h2>

              <h3 className="text-2xl font-semibold text-fnm-black mb-3 mt-6">Permitted Use</h3>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                You may use our website for:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li>Learning about our services and practice areas</li>
                <li>Contacting us for legal consultations</li>
                <li>Booking appointments</li>
                <li>Accessing general legal information</li>
              </ul>

              <h3 className="text-2xl font-semibold text-fnm-black mb-3 mt-6">Prohibited Activities</h3>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                You must not:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li>Use the website for any unlawful purpose</li>
                <li>Transmit viruses, malware, or harmful code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Scrape, mine, or harvest data from the website</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with website functionality or security</li>
                <li>Use automated systems to access the website</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Intellectual Property Rights
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                All content on this website, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2 mb-4">
                <li>Text, graphics, logos, and images</li>
                <li>Software and code</li>
                <li>Design and layout</li>
                <li>Legal articles and publications</li>
              </ul>
              <p className="text-fnm-gray-700 leading-relaxed">
                is the exclusive property of FNM Law Advocates LLP or our licensors and is protected by Kenyan and international copyright, trademark, and intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
              </p>
            </div>

            {/* Confidentiality */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Confidentiality and Privacy
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                We are committed to maintaining the confidentiality of all client communications and information in accordance with:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li>Attorney-client privilege</li>
                <li>Professional conduct rules</li>
                <li>The Data Protection Act, 2019</li>
                <li>Our Privacy Policy</li>
              </ul>
              <p className="text-fnm-gray-700 leading-relaxed mt-4">
                Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your personal information.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Disclaimers and Limitations
              </h2>

              <h3 className="text-2xl font-semibold text-fnm-black mb-3 mt-6">No Guarantee of Results</h3>
              <p className="text-fnm-gray-700 leading-relaxed">
                While we strive to provide excellent legal services, we cannot guarantee specific outcomes or results. Legal matters involve inherent uncertainties, and past success does not guarantee future results.
              </p>

              <h3 className="text-2xl font-semibold text-fnm-black mb-3 mt-6">Website Availability</h3>
              <p className="text-fnm-gray-700 leading-relaxed">
                We do not guarantee that our website will be available at all times or error-free. We reserve the right to modify, suspend, or discontinue the website at any time without notice.
              </p>

              <h3 className="text-2xl font-semibold text-fnm-black mb-3 mt-6">Third-Party Links</h3>
              <p className="text-fnm-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of external sites. Links do not constitute endorsement.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12 bg-fnm-gray-50 p-6 rounded-lg border-2 border-fnm-gray-200">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Limitation of Liability
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                To the fullest extent permitted by law:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li>We shall not be liable for any indirect, incidental, special, or consequential damages</li>
                <li>Our liability for any claim arising from our services is limited to the fees paid for those specific services</li>
                <li>We are not liable for damages resulting from website use, unavailability, or errors</li>
                <li>We are not responsible for losses caused by third-party actions or circumstances beyond our control</li>
              </ul>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Indemnification
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed">
                You agree to indemnify, defend, and hold harmless FNM Law Advocates LLP, its partners, associates, and employees from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2 mt-3">
                <li>Your violation of these Terms</li>
                <li>Your misuse of our website</li>
                <li>Your violation of any law or third-party rights</li>
                <li>Any false or misleading information you provide</li>
              </ul>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Termination of Services
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                Either party may terminate the attorney-client relationship in accordance with professional rules:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li><strong>By Client:</strong> You may terminate our services at any time, subject to payment for work completed</li>
                <li><strong>By Firm:</strong> We may withdraw from representation for reasons including non-payment, conflict of interest, or client misconduct</li>
              </ul>
              <p className="text-fnm-gray-700 leading-relaxed mt-4">
                We reserve the right to terminate your access to our website at any time for violation of these Terms.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Governing Law and Jurisdiction
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of Kenya.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Dispute Resolution
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                In the event of any dispute:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li>We encourage informal resolution through direct communication</li>
                <li>Disputes may be referred to mediation or alternative dispute resolution</li>
                <li>Unresolved disputes may be submitted to the Law Society of Kenya or appropriate courts</li>
              </ul>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Severability
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Modifications to Terms
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website with an updated "Last Updated" date. Your continued use of our website or services constitutes acceptance of the modified Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-fnm-gold/10 p-8 rounded-lg border-2 border-fnm-gold/30">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-6">
                Questions About These Terms?
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed mb-6">
                If you have any questions or concerns about these Terms of Service, please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-fnm-gold" size={20} />
                  <div>
                    <p className="font-semibold text-fnm-black">Email:</p>
                    <a href="mailto:info@fnmlawadvocates.com" className="text-fnm-gold hover:underline">
                      info@fnmlawadvocates.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Scale className="text-fnm-gold" size={20} />
                  <div>
                    <p className="font-semibold text-fnm-black">Office:</p>
                    <p className="text-fnm-gray-700">
                      Greyville Hub, 3rd Floor, Suite B3-08, Ruai, Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="mt-12 p-6 bg-fnm-black text-fnm-white rounded-lg">
              <p className="text-center font-semibold">
                By using our website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
