import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const About = () => {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
      alt="hero"
      src="/image/banner_bg.jpeg"
      width={400}
      height={300}
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#556ac0] hover:text-gray-400 ">
        About me!
      </h1>
      <p className="mb-8 leading-relaxed text-[#3c4a83] ">
       Hello! I'm a student of Governor Sindh IT Intitiative for Artificial Intelligence, Web 3.0 and Metaverse. I have completed my quarter 01 with submission of all assignments and scoring 83% and now strudying in quarter 02. I'm also a student of second year pre-medical. My goal is to bring Artificial Intelligence in Health Care sector.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-4xl text-blue-400  border-0 py-2 px-6">
        <Link href="https://www.linkedin.com/in/daniyal-aneeq-ahmed-3868452b7/" target='_blank'><FaLinkedin /></Link>
        </button>
        <button className="inline-flex text-4xl text-white  border-0 py-2 px-6">
        <Link href="https://github.com/DaniyalAneeq?tab=repositories" target='_blank'><FaGithub /></Link>
        </button>
        <button className="inline-flex text-4xl text-[#3b5998]  border-0 py-2 px-6">
        <Link href="https://www.facebook.com/daniyalaneeq.ahmed" target='_blank'><FaFacebook /></Link>
        </button>
      </div>
    </div>
  </div>
</section>
<Skills/>
    </div>
    
  )
}

export default About


export const Skills = () => {
  return (
    <div className='mb-32'> 
        <h2 className='mt-18 mb-20 ml-20 text-4xl font-bold underline text-[#556ac0] hover:text-gray-400'>Skills:</h2>
        <ul className='text-2xl text-white ml-20 leading-[50px]'>
           <div className='flex hover:scale-105'> 
            <li className='mb-3 text-green-400'>HTML</li>
            <div className='w-[20%] h-4 ml-24 mt-1.5 bg-green-400 rounded-2xl'>
            </div>
            <p className='text-[20px] ml-2 mt-[-2px]'>90%</p>
           </div>
           <div className='flex hover:scale-105'> 
            <li className='mb-3 text-orange-300'>CSS</li>
            <div className='w-[18%] h-4 ml-28 mt-1.5 bg-orange-300 rounded-2xl'>
            </div>
            <p className='text-[20px] ml-2 mt-[-2px]'>70%</p>
           </div>
           <div className='flex hover:scale-105'> 
            <li className='mb-3 text-blue-400'>TypeScript</li>
            <div className='w-[16%] h-4 ml-12 mt-1.5 bg-blue-400 rounded-2xl'>
            </div>
            <p className='text-[20px] ml-2 mt-[-2px]'>70%</p>
           </div>
           <div className='flex hover:scale-105'> 
            <li className='mb-3 text-gray-400'>Next.Js</li>
            <div className='w-[13%] h-4 ml-20 mt-1.5 bg-gray-400 rounded-2xl'>
            </div>
            <p className='text-[20px] ml-2 mt-[-2px]'>50%</p>
           </div>
           <div className='flex hover:scale-105'> 
            <li className='mb-3 text-[#3e3e66]'>Tailwind CSS</li>
            <div className='w-[16%] h-4 ml-4 mt-1.5 bg-[#3e3e66] rounded-2xl'>
            </div>
            <p className='text-[20px] ml-2 mt-[-2px]'>70%</p>
           </div>
        </ul>
    </div>
  )
}
