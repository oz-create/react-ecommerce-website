import { useSelector } from 'react-redux';
import React from 'react'
import SimpleSlider from '../Slider'


function Section4() {

    const { products } = useSelector((state) => state.product)
    const furnitureProducts = products.filter(product => product.category === "furniture");

  return (
    <div className='relative flex-col-reverse lg:flex-row flex items-center justify-center bg-[#FCF8F3] py-15 px-5 gap-15 '>
        <div className='flex flex-col gap-3 lg:items-start items-center'>
            <h1 className='text-[#3A3A3A] font-extrabold text-4xl lg:text-left text-center'>50+ Beautiful rooms <br />
            inspiration
            </h1>
            <p className='text-[#616161] font-medium text-base lg:text-left text-center'>Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</p>
            <button className='bg-[#B88E2F] text-white text-base leading-none font-bold px-10 py-4 cursor-pointer hover:bg-white hover:text-[#B88E2F] transition-all'>Explore More</button>
        </div>
        
        <div className='max-w-[50rem] w-full'>
            <SimpleSlider products={furnitureProducts}/>
            
        </div>
        
    </div>
  )
}

export default Section4