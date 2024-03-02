import React from 'react'

function Offer() {
  return (
    <section className='bg-gray-200'>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
                alt=""
                src="https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg"
                className="absolute inset-0 h-full w-full object-cover"
            />
            </div>
    
            <div className="lg:py-24">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Get Upto <span className='text-rose-700'>10% Discount</span> On Your Every Order</h2>
    
            <p className="mt-4 text-gray-600">
            Don't miss out on this fantastic opportunity to save on your healthcare essentials. 
            Visit us today at Chestnut Medical and take advantage of our exclusive 10% discount 
            on every order. Your health and satisfaction are our top priorities, and we're here to 
            support you every step of the way.
            </p>
    
            <a
                href="/Order"
                className="mt-8 inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
                Get Started Today
            </a>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Offer
