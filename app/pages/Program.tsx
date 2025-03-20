import React from 'react'
import ProgramCard from '~/components/ProgramCard'
import program1 from "app/images/program-1.png"
import program2 from "app/images/program-2.png"
import program3 from "app/images/program-3.png"
import icon1 from "app/images/program-icon-1.png"
import icon2 from "app/images/program-icon-2.png"
import icon3 from "app/images/program-icon-3.png"

const Program = () => {
  return (
      <section className='flex flex-col justify-center items-center mt-10'>
        <h6 className='text-sm font-semibold text-black/90'>OUR PROGRAM</h6>
        <h1 className='text-2xl font-bold text-black mt-1'>What We Offer</h1>
        <div className='flex flex-col lg:flex-row justify-center items-center px-6 gap-6 mt-10'>

        <ProgramCard link={program1} text="Graduation Degree" icon={icon1}/>
        <ProgramCard link={program2} text="Master Degree" icon={icon2}/>
        <ProgramCard link={program3} text="Podt Graduation" icon={icon3}/>
        </div>
      </section>
  )
}

export default Program
