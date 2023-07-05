import React from 'react'
import { frontEndTech, backEndTech, otherTech } from '@/data' 

export const SkillPage = () => {
  return (
    <div className="border-yellow-500 border-2 justify-center items-center flex-col gap-2 flex w-full h-full">
      <h1 className='border-2 border-yellow-300'>TITLE</h1>
      <section className="border-pink-700 border-2 p-2 h-2/5 flex flex-col gap-4">
        <div className='border-2 border-blue-700 flex gap-2 flex-row'>
          <div id='frontend' className='bg-green-500'>
            asfapofhpoahf ahfòahpfh paihfihaf

          </div>
          <div id='backend' className='bg-orange-200'>
            asfapofhpoahf ahfòahpfh paihfihaf
          </div>
        </div >
          <div id='other' className='border-2 border-red-950'> 
            asfapofhpoahf ahfòahpfh paihfihaf
          </div>
      </section>
    </div>
  )
}
