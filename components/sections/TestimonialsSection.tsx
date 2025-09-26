'use client'

import { motion } from 'framer-motion'
import { Star, Quote, User, Building, CheckCircle } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  position: string
  company?: string
  location: string
  rating: number
  review: string
  practiceArea: string
  caseType: string
  avatar?: string
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Mwangi',
      position: 'Business Owner',
      company: 'Mwangi Enterprises Ltd',
      location: 'Nairobi',
      rating: 5,
      review: 'FNM Law Advocates provided exceptional service during our property acquisition. Fiona was thorough, professional, and guided us through every step of the complex conveyancing process. I highly recommend their real estate services.',
      practiceArea: 'Real Estate & Conveyancing',
      caseType: 'Commercial Property Purchase'
    },
    {
      id: '2',
      name: 'James Ochieng',
      position: 'Managing Director',
      company: 'TechFlow Solutions',
      location: 'Nairobi',
      rating: 5,
      review: 'The intellectual property team at FNM helped us secure our trademark and copyright protection efficiently. Their expertise in IP law is outstanding, and they explained complex legal concepts in terms we could understand.',
      practiceArea: 'Intellectual Property Law',
      caseType: 'Trademark Registration'
    },
    {
      id: '3',
      name: 'Grace Wanjiku',
      position: 'Entrepreneur',
      location: 'Kiambu',
      rating: 5,
      review: 'I needed legal representation for a commercial dispute, and Maureen at FNM Law Advocates exceeded my expectations. Her litigation skills and attention to detail helped us achieve a favorable settlement. Professional and reliable.',
      practiceArea: 'Litigation',
      caseType: 'Commercial Dispute Resolution'
    },
    {
      id: '4',
      name: 'Michael Kiprop',
      position: 'CFO',
      company: 'Kiprop & Associates',
      location: 'Nakuru',
      rating: 5,
      review: 'FNM Law Advocates assisted with our company incorporation and ongoing corporate compliance. Their commercial law expertise is top-notch, and they continue to provide valuable legal counsel for our growing business.',
      practiceArea: 'Corporate & Commercial Law',
      caseType: 'Company Incorporation'
    },
    {
      id: '5',
      name: 'Patricia Akinyi',
      position: 'Property Developer',
      company: 'Akinyi Properties',
      location: 'Mombasa',
      rating: 5,
      review: 'Working with FNM on our joint venture agreement was seamless. Abigael provided clear guidance on the contract terms and ensured our interests were protected. Their attention to detail is remarkable.',
      practiceArea: 'Real Estate & Conveyancing',
      caseType: 'Joint Venture Agreement'
    },
    {
      id: '6',
      name: 'David Mutiso',
      position: 'Small Business Owner',
      location: 'Machakos',
      rating: 5,
      review: 'The debt recovery services at FNM helped us recover significant outstanding amounts professionally and efficiently. They handled the matter with discretion and achieved excellent results. Highly recommended.',
      practiceArea: 'Debt Recovery',
      caseType: 'Commercial Debt Collection'
    }
  ]

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? 'text-fnm-gold fill-current' : 'text-fnm-gray-300'
        }`}
      />
    ))
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
  }

  return (
    <section className="py-20 lg:py-32 bg-fnm-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-fnm-black mb-6">
            What Our <span className="text-fnm-gold">Clients Say</span>
          </h2>
          <p className="text-xl text-fnm-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied clients have to say
            about their experience working with FNM Law Advocates.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-fnm-gold mb-2">98%</div>
            <div className="text-sm text-fnm-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-fnm-gold mb-2">200+</div>
            <div className="text-sm text-fnm-gray-600">Cases Handled</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-fnm-gold mb-2">5⭐</div>
            <div className="text-sm text-fnm-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-fnm-gold mb-2">15+</div>
            <div className="text-sm text-fnm-gray-600">Years Combined Experience</div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-fnm-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 left-6">
                <div className="w-8 h-8 bg-fnm-gold rounded-full flex items-center justify-center">
                  <Quote size={14} className="text-fnm-black" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 mt-2">
                <div className="flex gap-1 mr-3">
                  {renderStars(testimonial.rating)}
                </div>
                <span className="text-sm text-fnm-gray-600">
                  {testimonial.rating}.0
                </span>
              </div>

              {/* Review */}
              <p className="text-fnm-gray-700 mb-6 leading-relaxed">
                "{testimonial.review}"
              </p>

              {/* Case Info */}
              <div className="mb-4 pb-4 border-b border-fnm-gray-200">
                <div className="text-xs text-fnm-gray-500 mb-1">Case Type:</div>
                <div className="text-sm font-medium text-fnm-black mb-1">
                  {testimonial.caseType}
                </div>
                <div className="text-xs text-fnm-gold">
                  {testimonial.practiceArea}
                </div>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-fnm-gold rounded-full flex items-center justify-center">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-fnm-black font-semibold text-sm">
                      {getInitials(testimonial.name)}
                    </span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-fnm-black truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-fnm-gray-600 truncate">
                    {testimonial.position}
                    {testimonial.company && `, ${testimonial.company}`}
                  </p>
                  <p className="text-xs text-fnm-gray-500">
                    {testimonial.location}
                  </p>
                </div>

                <CheckCircle className="text-fnm-gold flex-shrink-0" size={20} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-fnm-white rounded-lg p-8 shadow-lg"
        >
          <h3 className="text-2xl font-serif font-bold text-fnm-black mb-4">
            Ready to Experience Exceptional Legal Service?
          </h3>
          <p className="text-fnm-gray-600 mb-6 max-w-2xl mx-auto">
            Join our satisfied clients and get the professional legal representation you deserve.
            Schedule your free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/booking"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-fnm-gold text-fnm-black px-8 py-4 rounded-lg font-semibold hover:bg-fnm-gold/90 transition-colors duration-200 shadow-lg"
            >
              Schedule Free Consultation
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center border-2 border-fnm-gold text-fnm-gold px-8 py-4 rounded-lg font-semibold hover:bg-fnm-gold hover:text-fnm-black transition-colors duration-200"
            >
              Contact Us Today
            </motion.a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-fnm-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-fnm-gold" size={16} />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-fnm-gold" size={16} />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-fnm-gold" size={16} />
              <span>Confidential</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}