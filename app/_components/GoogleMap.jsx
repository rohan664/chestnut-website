import React from 'react'
import Image from 'next/image'
import map from '../../public/google_map.png'
import Link from 'next/link'

function GoogleMap() {
    
  return (
        <div>
            <Link className = 'relative' href="https://www.google.com/maps/place/Chestnut+Medicals/@19.2312016,72.9672133,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b95ffd681dbf:0xb6a045ccda6ead93!8m2!3d19.2311966!4d72.9697882!16s%2Fg%2F11clzqvtcn?entry=ttu" target="_blank">
                    <Image
                        src={map}
                        alt='map'
                        className='mt-4 rounded-sm cursor-pointer'
                    />
            <div className='absolute h-full w-full bg-blue-50/20 flex items-center justify-center -bottom-10 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-100'>
                <div className='text-stone-950 font-extrabold'>Click Me</div>
            </div>
            </Link>
        </div>
  )
}

export default GoogleMap
