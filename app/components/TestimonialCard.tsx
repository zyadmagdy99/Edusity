
type Props = {
  image: string,
  text: string,
}

const TestimonialCard = ({image,text}:Props) => {
  return (
    /* From Uiverse.io by sudhucodes */ 
<div
  className="max-w-sm border border-gray-300 rounded-lg shadow-lg bg-white p-6 mx-4 space-y-4"
>
  <div className="flex items-center space-x-4"> 
    <img src={image} alt="user" className="w-12 h-12 rounded-full" />
    <div>
      <div className="text-gray-900 text-xs font-medium">{text}</div>
      <div className="text-gray-600 text-xs">Content Creator</div>
    </div>
  </div>

  <div className="flex text-red-500 text-xl">★★★★★</div>

  <p className="text-gray-700 text-xs">
    I've been using Imagify for nearly two years, primarily for Instagram, and
    it has been incredibly user-friendly, making my work much easier.
  </p>

  <div className="text-red-500 font-medium cursor-pointer hover:underline">
    Read more
  </div>
</div>

  )
}

export default TestimonialCard
