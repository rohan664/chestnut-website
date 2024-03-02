import React from 'react'
import Image from 'next/image'
import GoogleMap from './GoogleMap'
import logo from '../../public/logo.png'

function Footer() {
 
  return (
  <footer className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="lg:grid lg:grid-cols-2">
      <div
        className="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16"
      >
        <div className="block text-teal-600 lg:hidden">
          <div className="hidden text-teal-600 lg:block">
            <div className='flex items-center'>
              <Image
              src={logo}
              alt='logo'
              />
              <div className=' flex flex-col font-bold'>
                <label>Chestnut Medical</label>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-8 space-y-4 lg:mt-0">
          <span className="hidden h-1 w-10 rounded bg-teal-500 lg:block"></span>

          <div>
            <h2 className="text-2xl font-medium text-gray-900">Shop Address</h2>
            <p className="mt-4 max-w-lg text-gray-500">
            No. 2, Siddhachal Phase 2, 10B, Ground Floor, Chestnut Plaza, 
            Eden Woods Rd, off Pokhran Road, Thane West, Thane, Maharashtra 400610
            </p>
            <GoogleMap/>
          </div>

        </div>
      </div>

      <div className="py-8 lg:py-16 lg:pe-16">
        <div className="hidden text-teal-600 lg:block">
          <div className='flex items-center'>
            <Image
            src={logo}
            alt='logo'
            />
            <div className=' flex flex-col font-bold'>
              <label>Chestnut Medical</label>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="font-medium text-gray-900">Services</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> Free Delivery </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> Online Services </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> Health and Wellness Products </a>
              </li>

            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900">Specialist</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">Medical Equipment and Supplies </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> Over-the-Counter (OTC) Medications </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> Healthcare Advice and Consultation </a>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8">
          <p className="mt-8 text-xs text-gray-500">&copy; 2024. Chestnut Medical. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer
