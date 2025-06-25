import React from 'react'
import PageHeaderBreadcrumb from '../components/PageHeaderBreadcrumb'
import ContactForm from '../components/contactPage/ContactForm'

function ContactPage() {
  return (
    <div>
      <PageHeaderBreadcrumb pageName='Contact' />
      <div className='custom-container align-center my-10'>
        <h1 className='text-3xl text-center font-semibold mb-5 '>Get In Touch With Us</h1>
        <p className='text-base text-[#9F9F9F] mb-10 text-center'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        <div className="flex flex-col md:flex-row items-start justify-between md:px-5">
          <div className='flex flex-col gap-5 w-full lg:w-[50%]'>
            <div className='flex items-start gap-3'>
              <img src={"/assets/location.svg"} alt="" />
              <div className='flex flex-col'>
                <h3 className='font-semibold text-lg'>Address</h3>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className='flex items-start gap-3'>
              <img src={"/assets/phone.svg"} alt="" />
              <div className='flex flex-col'>
                <h3 className='font-semibold text-lg'>Phone</h3>
                <p>Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className='flex items-start gap-3'>
              <img src={"/assets/clock.svg"} alt="" />
              <div className='flex flex-col'>
                <h3 className='font-semibold text-lg'>Working Time</h3>
                <p>Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>

      </div>

    </div>
  )
}

export default ContactPage