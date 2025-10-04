import React from 'react'
import BannerImage1 from "../assets/banners/banner_1.png"
import BannerImage2 from "../assets/banners/banner_3.png"

function Banner({image1 = BannerImage1, image2 = BannerImage2}) {
  return (
    <div className=' w-full h-full flex shadow-2xl '>
        <img className='w-[50%] h-[500px]' src={image1} alt="" />
        <img className='w-[50%] h-[500px]' src={image2} alt="" />
    </div>
  )
}

export default Banner