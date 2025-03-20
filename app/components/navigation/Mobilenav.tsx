import React from 'react'
import { item } from './Nav'
import { CgClose } from "react-icons/cg";

type Props ={
  closeNav:()=>void,
  ShowNav:boolean
  }

const Mobilenav = ({closeNav,ShowNav}:Props) => {
    const Navopening = ShowNav?"translate-x-0":"translate-x-[-100%]"
  return (
    <div className={`${Navopening} fixed top-0 transform transition-all duration-500 z-20 left-0 right-0 bottom-0 bg-black opacity-70 w-full h-[100vh]`}>
    <div className={`${Navopening} text-white fixed justify-center cursor-pointer gap-3 items-center text-2xl flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-indigo-900 space-y-6 z-30`}>
      {item.map((item, index) => (
          <div key={index}>
            {item}
        </div>
      )
      
    )}
    <CgClose onClick={closeNav} className='absolute top-[4rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer'/>
    </div>

    </div>
  )
}

export default Mobilenav
