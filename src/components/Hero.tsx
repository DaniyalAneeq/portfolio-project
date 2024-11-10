
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-8 p-6'>
      <div className='flex justify-center lg:justify-center mt-10 lg:mt-28'>
        <Image src="/image/banner_bg.jpeg" alt="my-pic" width={300} height={300} className="rounded-full"/>
      </div>
      <div className='flex flex-col justify-center mt-10 lg:mt-0'>
        <h2 className='text-3xl lg:text-5xl text-left font-bold text-[#404d8b]'>
          Welcome! <br /> My Name Is <br /> Daniyal Aneeq
        </h2>
        <div className='mt-6 lg:mt-12 flex justify-start space-x-4'>
          <button className='text-base lg:text-xl p-2 lg:p-3 border-2 border-slate-700 rounded-2xl hover:scale-95'>
            <Link href="/about">About me!</Link>
          </button>
          <button className='text-base lg:text-xl p-2 lg:p-3 border-2 border-slate-700 rounded-2xl hover:scale-95'>
            <Link href="/contact">Contact</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Hero
