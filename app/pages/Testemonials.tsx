import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import user1 from "app/images/user-1.png"
import user2 from "app/images/user-2.png"
import user3 from "app/images/user-3.png"
import user4 from "app/images/user-4.png"
import TestimonialCard from "app/components/TestimonialCard";


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Testemonials = () => {
  return (
    <section className='mt-10 p-2 flex flex-col justify-center items-center gap-10'>
        <h6 className='text-sm font-semibold text-black/90'>Testimonials</h6>
        <h1 className='text-2xl font-bold text-black mt-1'>What Student Says</h1>
        <div className='w-full max-w-screen-lg'>
        <Carousel
  swipeable={true}
  draggable={true}
  responsive={responsive}
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  removeArrowOnDeviceType={["tablet", "mobile"]}
>

  <TestimonialCard image={user1} text="Emily Willams"/>
  <TestimonialCard image={user2} text="Emily Willams"/>
  <TestimonialCard image={user3} text="Emily Willams"/>
  <TestimonialCard image={user4} text="Emily Willams"/>
</Carousel>
        </div>
      
    </section>
  )
}

export default Testemonials
