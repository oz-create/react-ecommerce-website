import React from 'react'
import CategoryCard from '../CategoryCard'
import { useSelector } from 'react-redux'

function Section2() {

 const { categories } = useSelector((state) => state.product)
  
  return (
    <div className='flex flex-col items-center justify-center my-10'>
        <h1 className='text-2xl font-bold text-[#333333]'>Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className='flex items-center justify-center gap-4 mt-10 flex-wrap'>
          {
            categories.map((category,index) => {
              return <CategoryCard categoryName={category} key={index}/>
            })
          }
           
        </div>
      
    </div>
  )
}

export default Section2