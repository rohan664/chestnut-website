import React from 'react'

function Service({id}) {
    console.log("id",id)
  return (
    <section className="min-h-screen flex flex-col justify-center bg-white" id={id}>
        <h1 className='font-extrabold text-rose-700 text-center text-4xl py-3'>Explore Our Main Services</h1>
        <div className='flex flex-col justify-center px-10 py-2'>
        
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="rounded-lg relative">
            <article className="group">
            <img
                alt=""
                src="https://static.vecteezy.com/system/resources/previews/023/894/492/original/24-hours-medical-servises-24-7-medical-call-center-emergency-patient-support-first-aid-doctor-holding-in-hand-24x7-sign-and-medicine-icons-network-connection-on-virtual-screen-illustration-vector.jpg"
                className="h-56 w-full rounded-xl object-fit shadow-xl transition"
            />

        <div className="p-4">
            <a href="#">
            <h3 className="text-lg font-medium text-gray-900">24 / 7 Hours Service</h3>
            </a>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            we understand the importance of convenience and reliability when it comes to your health. 
            That's why our doors are open 24 hours a day, 7 days a week, 
            so you can rely on us.
            </p>
        </div>
        </article>
    </div>
    <div className="rounded-lg relative">
        <article className="group ">
            <img
                alt=""
                src="https://png.pngtree.com/thumb_back/fh260/back_our/20190625/ourmid/pngtree-medical-security-technology-sense-blue-banner-image_261139.jpg"
                className="h-56 w-full rounded-xl object-cover shadow-xl transition"
            />

            <div className="p-4">
                <a href="#">
                <h3 className="text-lg font-medium text-gray-900">Licence Of Goverment</h3>
                </a>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                we prioritize your safety and well-being by adhering to strict government licensing regulations.
                Our pharmacy is fully licensed by the government, 
                ensuring the highest standards
                </p>
            </div>
        </article>
    </div>
    <div className="rounded-l">
        <article className="group">
            <img
                alt=""
                src="https://www.carepartnersct.com/sites/default/files/styles/width_731/public/2023-01/P32H%20-%20Article%20Photo%20Size_0.png?itok=YpdLCwuo"
                className="h-56 w-full rounded-xl object-fit shadow-xl transition"
            />

            <div className="p-4">
                <a href="#">
                <h3 className="text-lg font-medium text-gray-900">Free And Fast Delivery</h3>
                </a>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                with our free delivery service, you can enjoy the convenience of having your medications 
                delivered right to your doorstep, saving you time and hassle.
                </p>
            </div>
        </article>
    </div>
    </div>
  </div>
</section>
    
  )
}

export default Service
