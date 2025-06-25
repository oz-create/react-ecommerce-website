import React from 'react'
import { useNavigate } from 'react-router-dom';

function CategoryCard({categoryName}) {
   const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shop/${categoryName}`);
  };
  return (
    <div className='flex justify-center flex-col items-center gap-5 cursor-pointer hover:scale-105 transition-all duration-300' onClick={handleClick}>
        <div className='w-[23.8rem] h-[30rem] bg-cover bg-center rounded-xl' style={{backgroundImage:`url(./assets/${categoryName}.png)`}}></div>
        <h2 className='text-[#333333] text-xl font-semibold capitalize'>{categoryName}</h2>
    </div>
  )
}

export default CategoryCard