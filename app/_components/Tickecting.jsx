import React from 'react'
import TicketCard from './TicketCard'

const tickets = [
    {
        type: 'Early Bird',
        price: 1999,
        originalPrice: 2999,
        startDate: '2025-01-01',
        endDate: '2025-01-31',
        // features: ['Access to all sessions', 'Lunch included', 'Networking event'],
        isActive: true,
    },
    {
        type: 'Regular',
        price: 2999,
        originalPrice: 2999,
        startDate: '2025-02-01',
        endDate: '2025-02-29',
        // features: ['Access to all sessions', 'Lunch included', 'Networking event'],
        isActive: false,
    },
    {
        type: 'Group',
        price: 2499,
        originalPrice: 2999,
        startDate: '2025-02-01',
        endDate: '2023-02-29',
        // features: ['Access to all sessions', 'Lunch included', 'Networking event', 'Group discount (min. 5 people)'],
        isActive: false,
    },
]

const TicketPricing = () => {
    return (
        <div className='mt-8 mb-8 ' id='ticketing'>
            <h2
        className="text-4xl md:text-7xl font-bold text-neutral-200 font-sans px-12">
       Get Your Ticket to the <br /> <span className="text-5xl text-red-500">TEDx AnuragU</span>
      </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-12 ">

                {tickets.map((ticket) => (
                    <TicketCard key={ticket.type} {...ticket} />
                ))}
            </div>
        </div>
    )
}

export default TicketPricing

