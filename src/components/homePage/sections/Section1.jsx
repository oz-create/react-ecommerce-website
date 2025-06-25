import React from 'react'

function Section1() {
    return (
        <section className='flex h-[50rem] w-full relative items-center justify-end px-20 bg-[url("./assets/home-page-bg.png")] bg-cover bg-center'>
            <div className='custom-container flex justify-end'>
                <div className='bg-[#FFF3E3] p-5 rounded-2xl w-[40rem]'>
                    <h3 className='text-base font-semibold tracking-widest text-[#333333]'>New Arrival</h3>
                    <h1 className='text-[#B88E2F] font-bold text-[3.25rem] leading-[120%]'>Discover Our <br /> New Collection</h1>
                    <p className='text-lg text-[#333333] leading-[120%] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <button className='bg-[#B88E2F] text-white text-base leading-none font-bold px-15 py-7 mt-10 cursor-pointer hover:bg-white hover:text-[#B88E2F] transition-all sm:w-auto w-full'>BUY NOW</button>
                </div>
            </div>
        </section>
    )
}

export default Section1