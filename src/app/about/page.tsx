import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import Skills from '@/components/Skills';

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
              Hello! I&apos;m a student of Governor Sindh IT Initiative for Artificial Intelligence, Web 3.0, and Metaverse. I have completed my quarter 01 with submission of all assignments and scoring 83% and am now studying in quarter 02. I&apos;m also a student of second year pre-medical. My goal is to bring Artificial Intelligence into the Health Care sector.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-4xl text-blue-400 border-0 py-2 px-6">
                <Link href="https://www.linkedin.com/in/daniyal-aneeq-ahmed-3868452b7/" target="_blank"><FaLinkedin /></Link>
              </button>
              <button className="inline-flex text-4xl text-white border-0 py-2 px-6">
                <Link href="https://github.com/DaniyalAneeq?tab=repositories" target="_blank"><FaGithub /></Link>
              </button>
              <button className="inline-flex text-4xl text-[#3b5998] border-0 py-2 px-6">
                <Link href="https://www.facebook.com/daniyalaneeq.ahmed" target="_blank"><FaFacebook /></Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Skills />
    </div>
  );
}

export default About;
