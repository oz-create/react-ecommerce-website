import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '/assets/logo.svg'

function Footer() {
  return (
    <div className='flex flex-col lg:gap-20 gap-5 justify-center border-t-1 pt-10 border-[#D9D9D9]'>
      <div className='flex lg:flex-row flex-col flex-wrap lg:gap-20 gap-15 lg:px-0 px-10 justify-between max-w-[70rem] w-full m-auto'>
      <div className='flex flex-col lg:gap-10 gap-5 lg:items-start items-center'>
        <img src={Logo} alt="" className='w-[10rem] mt-2'/>
        <p className='text-[#9F9F9F] text-base font-normal lg:text-left text-center'>400 University Drive Suite 200 Coral Gables, <br />
          FL 33134 USA
        </p>
      </div>
      <div className='flex lg:flex-col flex-row lg:gap-10 gap-x-10 gap-y-5 lg:justify-start justify-center lg:flex-nowrap flex-wrap'>
        <h3 className='text-[#9F9F9F] text-base font-medium'>Links</h3>
        <Link to="/" className='text-base font-medium text-black'>Home</Link>
        <Link to="/shop" className='text-base font-medium text-black'>Shop</Link>
        <Link to="/about" className='text-base font-medium text-black'>About</Link>
        <Link to="/contact" className='text-base font-medium text-black'>Contact</Link>
      </div>
      <div className='flex lg:flex-col flex-row lg:gap-10 gap-x-10 gap-y-5 lg:justify-start justify-center lg:flex-nowrap flex-wrap'>
        <h3 className='text-[#9F9F9F] text-base font-medium'>Help</h3>
        <p className='text-base font-medium text-black'>Payment Options</p>
        <p className='text-base font-medium text-black'>Returns</p>
        <p className='text-base font-medium text-black'>Privacy Policies</p>
      </div>
      <div className='flex flex-col lg:gap-10 gap-x-10 gap-y-5 lg:justify-start justify-center lg:flex-nowrap flex-wrap lg:items-start items-center'>
        <h3 className='text-[#9F9F9F] text-base font-medium'>Newsletter</h3>
        <div className='flex items-center gap-1.5 sm:w-auto w-full'>
          <input type="email" placeholder='Enter Your Email Address' className='border-b-1 outline-none text-sm text-black sm:w-auto w-full'/>
          <label className='text-black font-medium text-sm border-b-1 leading-5'>SUBSCRIBE</label>
        </div>
        
      </div>
      </div>
     
      <div className='flex max-w-[70rem] w-full m-auto justify-start border-[#D9D9D9] border-t-1'>
        <p className='text-black font-medium text-base py-10 w-full lg:text-left text-center'>2023 furino. All rights reverved</p>
      </div>
    </div>
  )
}

export default Footer