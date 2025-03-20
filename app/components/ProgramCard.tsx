import React from 'react'
type Props = {
  link:string,
  text:string,
  icon:string
}

const ProgramCard = ({link,text,icon}:Props) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl">
    {/* Background Image */}
    <img src={link} alt="" className="rounded-2xl w-full h-full pointer-events-none" />
  
    {/* Overlay - Hidden below by default, slides up on hover */}
    <div className="absolute inset-0 flex flex-col gap-4 justify-center items-center bg-blue-800/50 
        rounded-2xl translate-y-full group-hover:translate-y-0 transition-transform duration-500">
      <img src={icon} alt="icon" className="w-20 h-20" />
      <p className="text-white text-2xl">{text}</p>
    </div>
  </div>
  
  
  )
}

export default ProgramCard
