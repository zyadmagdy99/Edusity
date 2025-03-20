import React from 'react'

const About = () => {
  return (
    <section className='flex flex-wrap p-6 my-10 md:flex-row-reverse md:flex-nowrap'>
       <div className='flex flex-col gap-6 mt-4 md:max-w-1/2 md:p-6'>
        <h6 className='text-blue-800 font-bold text-xl'>About University</h6>
        <h1 className='text-3xl font-bold '>Nuturing Tomorrows Leaders Today.</h1>
        <p className='md:max-w-[50rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium beatae, eligendi eveniet natus tempora ex rem laboriosam iusto asperiores fugiat, iure sequi sit officiis quidem illum amet sint, harum hic quaerat. Et nihil dignissimos eligendi?</p>
        <p className='md:max-w-[50rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nisi delectus odio iure laboriosam magni sint in ut veritatis, dolore perspiciatis officia! Dignissimos, error tempore?</p>
        <p className='md:max-w-[50rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nisi delectus odio iure laboriosam magni sint in ut veritatis, dolore perspiciatis officia! Dignissimos, error tempore?</p>
       </div>
       <div className="flex justify-center mt-14 items-center w-full max-w-[50rem] h-[20rem] ">
  <div className="w-full flex justify-center items-center">
    <iframe
      title="video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      src="https://www.youtube.com/embed/LlCwHnp3kL4"
      className="w-full h-[20rem] md:h-96 rounded-lg"
      allowFullScreen
    ></iframe>
  </div>
</div>

    </section>
  )
}

export default About
