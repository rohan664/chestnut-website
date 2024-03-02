import React from 'react'

function Hero() {
  return (
    <section className="relative bg-[url(https://wallpapers.com/images/hd/pharmacy-background-vbhbxb3h2dmr2l6k.jpg)] bg-cover bg-center bg-no-repeat" id='#Home'>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
       Welcome To Our 

        <strong className="block font-extrabold text-rose-700">Chestnut Medicial </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
      your trusted destination for all your healthcare needs. We take pride in being the most trusted medical shop by customers.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}
export default Hero
