'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Building2, Scale, FileText, Handshake, Gavel, Users } from 'lucide-react'
import Layout from '../components/layout/Layout'
import Hero from '../components/sections/Hero'

export default function HomePage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const practiceAreas = [
    {
      icon: <Building2 className="h-12 w-12" />,
      title: "Real Estate & Conveyancing",
      description: "Land purchases, joint ventures, mortgages, title applications and financing assistance"
    },
    {
      icon: <Scale className="h-12 w-12" />,
      title: "Intellectual Property Law",
      description: "Trademarks, patents, licensing, copyrights, registration services and renewals"
    },
    {
      icon: <FileText className="h-12 w-12" />,
      title: "Corporate & Commercial Law",
      description: "Company incorporation, M&A, joint ventures, banking, finance and competition law"
    },
    {
      icon: <Handshake className="h-12 w-12" />,
      title: "Alternative Dispute Resolution",
      description: "Arbitration and mediation services, saving time and costs for our clients"
    },
    {
      icon: <Gavel className="h-12 w-12" />,
      title: "Litigation",
      description: "Insurance law, tort law, contract law, family succession, and employment law"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Debt Recovery",
      description: "Collection services and legal proceedings to recover outstanding debts"
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Practice Areas Section */}
      <section className="py-20 lg:py-32 bg-section-primary bg-pattern-legal section-divider-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-fnm-black mb-4">
              Our Practice Areas
            </h2>
            <p className="text-xl text-fnm-gray-600 max-w-3xl mx-auto">
              We provide comprehensive legal solutions across multiple practice areas,
              tailored to meet your specific needs with professional excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group card-elevated p-8 cursor-pointer hover-lift hover-glow-gold"
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-fnm-gold/5 to-fnm-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="text-fnm-gold mb-6 flex justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-fnm-black mb-4 text-center group-hover:text-fnm-gold transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-fnm-gray-600 text-center leading-relaxed group-hover:text-fnm-gray-700 transition-colors duration-300">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href="/practice-areas"
              className="inline-flex items-center bg-fnm-gold text-fnm-black px-8 py-4 rounded-lg font-semibold hover:bg-fnm-gold/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View All Practice Areas
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-section-secondary bg-pattern-subtle-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Partners Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="image-container-styled overflow-hidden rounded-2xl">
                <Image
                  src="/images/team/optimized/partners-friendly.jpg"
                  alt="Fiona and Maureen - FNM Law Advocates Partners"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  quality={85}
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-fnm-black mb-6">
                Why Choose <span className="text-fnm-gold">FNM Law Advocates?</span>
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-fnm-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-fnm-black"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-fnm-black mb-2">Experienced Team</h4>
                    <p className="text-fnm-gray-600">Our partners and associates bring years of specialized expertise across various practice areas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-fnm-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-fnm-black"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-fnm-black mb-2">Client-Centered Approach</h4>
                    <p className="text-fnm-gray-600">We prioritize your needs and provide personalized legal solutions tailored to your unique situation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-fnm-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-fnm-black"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-fnm-black mb-2">Commissioners for Oath & Notaries Public</h4>
                    <p className="text-fnm-gray-600">Certified commissioners and notaries providing official document authentication services.</p>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-fnm-white p-8 rounded-lg shadow-lg border-2 border-fnm-gold/20">
                <h3 className="text-2xl font-serif font-bold text-fnm-black mb-6">Ready to Get Started?</h3>
                <p className="text-fnm-gray-600 mb-6">
                  Schedule a consultation with our experienced legal team today.
                  We're here to help you navigate your legal challenges with confidence.
                </p>
                <div className="space-y-4">
                  <Link
                    href="/booking"
                    className="block w-full text-center bg-fnm-gold text-fnm-black px-6 py-3 rounded-lg font-semibold hover:bg-fnm-gold/90 transition-colors duration-200"
                  >
                    Book Free Consultation
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full text-center border-2 border-fnm-gold text-fnm-gold px-6 py-3 rounded-lg font-semibold hover:bg-fnm-gold hover:text-fnm-black transition-colors duration-200"
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="mt-6 pt-6 border-t border-fnm-gray-200">
                  <div className="text-sm text-fnm-gray-600">
                    <p><strong>Call:</strong> +254 728 657 560</p>
                    <p><strong>Email:</strong> info@fnmlawadvocates.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}