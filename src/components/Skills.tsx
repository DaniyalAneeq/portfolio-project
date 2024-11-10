const Skills = () => {
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
export default Skills