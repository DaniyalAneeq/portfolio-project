import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Projects = () => {
  return (
    <div>
      <h1 className='text-center font-bold text-[#4d4d91] text-2xl mt-20'>Here&apos;s Some of my projects</h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  width={400}
                  height={400}
                  alt="content"
                  className="object-cover object-center h-full w-full hover:scale-110"
                  src="/image/wed-assign-2.png"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Quarter 2 Wednesday assignment 2: Pixel perfect Website
              </h2>
              <p className="leading-relaxed text-base">
                Given by Sir Mubasshir Ali.
              </p>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                <Link href="https://wed-assignment-02.vercel.app/" target="_blank">Visit</Link>
              </button>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  width={400}
                  height={400}
                  alt="content"
                  className="object-cover object-center h-full w-full hover:scale-110"
                  src="/image/Html.png"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                HTML & CSS Final Assignment: Company Portfolio Website
              </h2>
              <p className="leading-relaxed text-base">
                From Prerequisites.
              </p>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                <Link href="https://html-css-final-assignment-mu.vercel.app/" target="_blank">Visit</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
