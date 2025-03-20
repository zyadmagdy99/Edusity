import React from 'react'

import Slider from "react-slick";
import user1 from "app/images/user-1.png"
import user2 from "app/images/user-2.png"
import user3 from "app/images/user-3.png"
import user4 from "app/images/user-4.png"
import TestimonialCard from "app/components/TestimonialCard";




const Testemonials = () => {
  return (
    <section className='mt-10 p-2 flex flex-col justify-center items-center gap-10'>
        <h6 className='text-sm font-semibold text-black/90'>Testimonials</h6>
        <h1 className='text-2xl font-bold text-black mt-1'>What Student Says</h1>
        <div className='w-full max-w-screen-lg'>
        {/* <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider> */}
        </div>
      
    </section>
  )
}

export default Testemonials
