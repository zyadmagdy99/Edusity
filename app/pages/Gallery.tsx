import React from 'react'
import gallery1 from "app/images/gallery-1.png"
import gallery2 from "app/images/gallery-2.png"
import gallery3 from "app/images/gallery-3.png"
import gallery4 from "app/images/gallery-4.png"

const Gallery = () => {
  return (
    <section className='mt-10 p-2 flex flex-col justify-center items-center gap-10'>
        <div className='flex justify-center gap-3 items-center flex-col'>
         <h6 className='text-blue-800 font-bold text-xl'>Gallery</h6>
         <h1 className='text-2xl font-bold text-center'>Campus Photo</h1>
        </div>
        <div className='flex flex-col sm:flex-row justify-center items-center mt-8 gap-4'>
            <img src={gallery1} alt="gallery1" className='w-full rounded-3xl sm:w-1/5' />
            <img src={gallery2} alt="gallery2" className='w-full rounded-3xl sm:w-1/5'/>
            <img src={gallery3} alt="gallery3" className='w-full rounded-3xl sm:w-1/5'/>
            <img src={gallery4} alt="gallery"  className='w-full rounded-3xl sm:w-1/5'/>
        </div> 
<button className="button">
  See more here
  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
    <path
      clip-rule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      fill-rule="evenodd"
    ></path>
  </svg>
</button>

    </section>
  )
}

export default Gallery
