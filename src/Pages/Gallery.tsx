import React from 'react'
import Maharaji from "../assets/Maharaji Img.jpg"

const Gallery: React.FC = () => {
  return (
    <div id="gallery" className="flex justify-center my-6">
      <img
        className="rounded-xl shadow-xl w-80 h-80 object-cover"
        src={Maharaji}
        alt="Shivaji Maharaj"
      />
    </div>
  )
}

export default Gallery
