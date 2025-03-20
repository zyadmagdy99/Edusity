import React, { useEffect, useState } from 'react'
import Logo from "app/images/logo.png"
import { RxHamburgerMenu } from "react-icons/rx";

export const item = ["Home","Program","About Us","Campus","Testimonials"]

type Props = {
  openNav:()=>void
}

const Nav = ({openNav}:Props) => {
    const [IsNavMoved, setIsNavMoved] = useState(false)
    useEffect(() => {
      function handleNav(){
        setIsNavMoved(window.scrollY > 100)
      }
      window.addEventListener('scroll',handleNav)
      return () => {
        window.removeEventListener('scroll',handleNav)
      }
    }, [IsNavMoved])
    
  return (
    <nav className={`${IsNavMoved?"bg-blue-500":""} w-full h-20 fixed top-0 z-50 flex justify-around items-center px-4 `}>
      <div>
        <img src={Logo} alt="logo" width={200} height={60}/>
      </div>
      <div className='lg:flex gap-8 justify-around items-center text-xl hidden'>
        {item.map((item,index) => (<div key={index} className="flex relative justify-center hover:cursor-pointer text-white font-bold items-center
         after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-white 
               after:transition-all after:duration-500 after:ease-in-out hover:after:w-full py-1">
            {item}
        </div>
        ))}
        <button className='bg-white flex justify-center cursor-pointer items-center text-black/80 px-6 py-3 rounded-3xl'>Contact us</button>
      </div>
      <RxHamburgerMenu onClick={openNav} className='text-3xl cursor-pointer text-white lg:hidden'/>

    </nav>
  )
}

export default Nav
