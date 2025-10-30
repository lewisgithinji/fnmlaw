'use client'

import { motion } from 'framer-motion'
import Layout from '../../components/layout/Layout'
import { Shield, Lock, Eye, FileText, Mail, Phone } from 'lucide-react'

export default function PrivacyPolicyPage() {
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
            <Shield className="h-16 w-16 text-fnm-gold mx-auto mb-6" />
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
              Privacy <span className="text-fnm-gold">Policy</span>
            </h1>
            <p className="text-xl text-fnm-gray-300 max-w-3xl mx-auto">
              FNM Law Advocates LLP is committed to protecting your privacy and ensuring the security of your personal information.
            </p>
            <p className="text-sm text-fnm-gray-400 mt-4">
              Last Updated: {new Date().toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
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
                <Lock className="text-fnm-gold" size={32} />
                Introduction
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed">
                FNM Law Advocates LLP ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our legal services.
              </p>
              <p className="text-fnm-gray-700 leading-relaxed mt-4">
                This policy applies to all clients, prospective clients, and website visitors. By using our services or website, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4 flex items-center gap-3">
                <FileText className="text-fnm-gold" size={32} />
                Information We Collect
              </h2>

              <h3 className="text-2xl font-semibold text-fnm-black mb-3 mt-6">1. Personal Information</h3>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2 mb-4">
                <li>Contact us for legal services or consultations</li>
                <li>Fill out forms on our website (contact forms, booking forms, newsletter signup)</li>
                <li>Communicate with us via email, phone, or in person</li>
                <li>Engage our legal services</li>
              </ul>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                This information may include:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li>Full name and contact details (email address, phone number, postal address)</li>
                <li>Identification documents (National ID, Passport, etc.)</li>
                <li>Financial information (as required for legal services)</li>
                <li>Legal matter details and case information</li>
                <li>Employment and business information</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-2xl font-semibold text-fnm-black mb-3 mt-6">2. Automatically Collected Information</h3>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                When you visit our website, we automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Clickstream data</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4 flex items-center gap-3">
                <Eye className="text-fnm-gold" size={32} />
                How We Use Your Information
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                We use your personal information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li><strong>Legal Services:</strong> To provide legal representation, advice, and services</li>
                <li><strong>Communication:</strong> To respond to inquiries, schedule consultations, and maintain client relationships</li>
                <li><strong>Case Management:</strong> To manage your legal matters and maintain case files</li>
                <li><strong>Compliance:</strong> To comply with legal and regulatory obligations</li>
                <li><strong>Website Improvement:</strong> To enhance our website functionality and user experience</li>
                <li><strong>Marketing:</strong> To send newsletters and updates (with your consent)</li>
                <li><strong>Security:</strong> To protect against fraud and unauthorized access</li>
              </ul>
            </div>

            {/* Attorney-Client Privilege */}
            <div className="mb-12 bg-fnm-gold/5 border-l-4 border-fnm-gold p-6 rounded">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Attorney-Client Privilege
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed">
                All communications between you and FNM Law Advocates LLP are protected by attorney-client privilege and professional confidentiality rules. We maintain strict confidentiality of all client information in accordance with the Law Society of Kenya's Code of Conduct and applicable laws.
              </p>
            </div>

            {/* Data Sharing and Disclosure */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Data Sharing and Disclosure
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                We do not sell, rent, or trade your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or regulatory authority</li>
                <li><strong>Service Providers:</strong> With trusted third parties who assist in providing our services (e.g., court reporting services, expert witnesses)</li>
                <li><strong>Professional Advisors:</strong> With other legal professionals as necessary for your representation</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale, or transfer of our practice</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Data Security
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                We implement appropriate technical and organizational measures to protect your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li>Secure storage of physical and electronic files</li>
                <li>Encryption of sensitive data</li>
                <li>Access controls and authentication procedures</li>
                <li>Regular security assessments and updates</li>
                <li>Staff training on data protection and confidentiality</li>
              </ul>
              <p className="text-fnm-gray-700 leading-relaxed mt-4">
                While we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your data to the best of our ability.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Your Rights Under the Data Protection Act
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                Under Kenya's Data Protection Act, 2019, you have the following rights:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li><strong>Right to Access:</strong> Request copies of your personal data</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data (subject to legal obligations)</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation on how we use your data</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another organization</li>
                <li><strong>Right to Object:</strong> Object to our processing of your personal data</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
              </ul>
              <p className="text-fnm-gray-700 leading-relaxed mt-4">
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Data Retention
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Client files are typically retained for a minimum of seven (7) years after the conclusion of a matter, in accordance with Law Society of Kenya guidelines and legal requirements.
              </p>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed mb-3">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device that help us:
              </p>
              <ul className="list-disc pl-6 text-fnm-gray-700 space-y-2">
                <li>Remember your preferences</li>
                <li>Understand how you use our website</li>
                <li>Improve website functionality</li>
                <li>Analyze website traffic and trends</li>
              </ul>
              <p className="text-fnm-gray-700 leading-relaxed mt-4">
                You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Third-Party Links
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Children's Privacy
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a minor, please contact us immediately.
              </p>
            </div>

            {/* Updates to Privacy Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-4">
                Updates to This Privacy Policy
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-fnm-gray-50 p-8 rounded-lg border-2 border-fnm-gold/20">
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-6">
                Contact Us
              </h2>
              <p className="text-fnm-gray-700 leading-relaxed mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-fnm-gold mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-fnm-black">Email:</p>
                    <a href="mailto:info@fnmlawadvocates.com" className="text-fnm-gold hover:underline">
                      info@fnmlawadvocates.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-fnm-gold mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-fnm-black">Phone:</p>
                    <p className="text-fnm-gray-700">+254 728 657 560 | +254 713 286 796</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="text-fnm-gold mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-fnm-black">Office:</p>
                    <p className="text-fnm-gray-700">
                      Greyville Hub, 3rd Floor, Suite B3-08<br />
                      Off Ruiru-Ruai Bypass, Ruai<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-fnm-gray-600 mt-6">
                You may also lodge a complaint with the Office of the Data Protection Commissioner of Kenya if you believe your data protection rights have been violated.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
