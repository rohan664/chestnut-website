'use client'
import {React, useState} from 'react'
import logo from '../../public/logo.png'
import Image from 'next/image'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { ArrowPathIcon, Bars3Icon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon, XMarkIcon, } from '@heroicons/react/24/outline'
  import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false) 

    const handleScrollToService = (value) => {
        console.log(value)
        const Section = document.getElementById(value);
        if (Section) {
          Section.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
    return (
        <header className="bg-white fixed z-10 w-full">
            <div className="px-4 sm:px-6 lg:px-8 shadow-sm">
                <div className="flex h-16 items-center justify-between">
                <Image src = {logo} alt = {logo} width = {40} height = {40}/>

                <div className="md:flex md:items-center md:gap-12">
                    <nav aria-label="Global" className="hidden md:block">
                    <ul className="flex items-center gap-6 text-sm">
                        <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> Home </a>
                        </li>

                        <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75 cursor-pointer"  onClick={()=>(handleScrollToService('service'))}> Service </a>
                        </li>

                        <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75 cursor-pointer" onClick={()=>{handleScrollToService('aboutus')}}> About Us </a>
                        </li>

                        <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75 cursor-pointer" onClick={()=>{handleScrollToService('review')}}> Review </a>
                        </li>

                        <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75 cursor-pointer" onClick={() => {handleScrollToService('order')}}> Order </a>
                        </li>

                        {/* <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
                        </li> */}
                    </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                    <div className="block md:hidden">
                        <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75" onClick={()=>{setMobileMenuOpen(true)}}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-cyan-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                    <Image
                    src={logo}
                    alt='logo'/>
                </a>
                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)} >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                    <a href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" > Home </a>
                    <a onClick={()=>(handleScrollToService('service'))} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" > Service </a>
                    <a onClick={()=>{handleScrollToService('aboutus')}} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" > About Us </a>
                    <a onClick={()=>{handleScrollToService('review')}} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" > Review </a>
                    <a onClick={() => {handleScrollToService('order')}} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" > Order </a>
                </div>
                </div>
            </div>
            </Dialog.Panel>
        </Dialog>
        </header>
        )
}

export default Header
