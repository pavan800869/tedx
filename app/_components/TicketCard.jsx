import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'



const TicketCard = ({
  type,
  price,
  originalPrice,
  startDate,
  endDate,
  features,
  isActive,
}) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <motion.div
      className={`bg-gray-900 rounded-lg shadow-xl overflow-hidden ${
        isActive ? 'border-2 border-red-600' : 'opacity-75'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white mb-4">{type}</h2>
        <div className="flex items-end mb-4">
          <span className="text-4xl font-bold text-red-600">₹{price.toLocaleString('en-IN')}</span>
          {price < originalPrice && (
            <span className="ml-2 text-lg text-gray-400 line-through">
              ₹{originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-400 mb-4">
         {/* {formatDate(startDate)}{formatDate(endDate)} */}
         {startDate}{endDate}
         {/* Extended */}
        </p>
        {/* <ul className="mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mb-2 text-gray-300">
              <svg
                className="w-4 h-4 mr-2 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul> */}
        <Link href={isActive ? "/register" : "/"} passHref>
          <motion.button
            className={`w-full py-3 px-4 rounded-lg text-white font-semibold ${
              isActive
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-gray-700 cursor-not-allowed'
            }`}
            whileHover={isActive ? { scale: 1.05 } : {}}
            whileTap={isActive ? { scale: 0.95 } : {}}
            disabled={!isActive}
          >
            {isActive ? 'Buy Now' : 'Coming Soon'}
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

export default TicketCard

