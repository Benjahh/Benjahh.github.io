import React from 'react'
import { frontEndTech, backEndTech, otherTech } from '@/data' 

export const SkillPage = () => {
  return (
    <div className="border-yellow-500 border-2 justify-center items-center flex-col gap-2 flex w-full h-full">
      <h1 className='border-2 border-yellow-300'>TITLE</h1>
      <div className="border-pink-700 border-2 p-2 h-2/5 flex flex-col gap-4">
        <section className='border-2 border-blue-700 flex gap-2 flex-row'>

          <div id='frontend' className='bg-green-500'>
            {frontEndTech.map((frontEndTech)=>(
              <div key={frontEndTech.id}>
                {frontEndTech.skillName}
              </div>
            ))}
          </div>

          <div id='backend' className='bg-orange-200'>
            {backEndTech.map((backEndTech)=>(
              <div key={backEndTech}>
                {backEndTech.skillName}
              </div>
            ))}
          </div>

        </section >

          <div id='other' className='border-2 border-red-950'> 
           {otherTech.map((otherTech)=>(
            <div key={otherTech.id}>
              {otherTech.skillName}
            </div>
           ))}
          </div>

      </div>
    </div>
  )
}
