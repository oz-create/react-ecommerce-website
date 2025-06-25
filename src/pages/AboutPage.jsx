import React from 'react'
import PageHeaderBreadcrumb from '../components/PageHeaderBreadcrumb'

function AboutPage() {
  return (
    <div>
      <PageHeaderBreadcrumb pageName='About' />
      <div className='custom-container my-10 flex flex-col gap-10'>
        <div className='flex flex-col gap-5 border-b border-[#c2c0c0] pb-5'>
          <img src={"/assets/about-img-1.png"} alt="" className='w-full' />
          <h1 className='text-4xl font-medium'>Going all-in with millennial design</h1>
          <p className='text-[#9F9F9F] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
        </div>
        <div className='flex flex-col gap-5 border-b border-[#c2c0c0] pb-5'>
          <img src={"/assets/about-img-2.png"} alt="" className='w-full' />
          <h1 className='text-4xl font-medium'>Exploring new ways of decorating</h1>
          <p className='text-[#9F9F9F] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
        </div>
        <div className='flex flex-col gap-5 '>
          <img src={"/assets/about-img-3.png"} alt="" className='w-full' />
          <h1 className='text-4xl font-medium'>Handmade pieces that took time to make</h1>
          <p className='text-[#9F9F9F] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
        </div>
      </div>

    </div>
  )
}

export default AboutPage