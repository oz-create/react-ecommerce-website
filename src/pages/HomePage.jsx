import React from 'react'
import Navbar from '../components/Navbar'
import Section1 from '../components/homePage/sections/Section1'
import Section2 from '../components/homePage/sections/Section2'
import Section3 from '../components/homePage/sections/Section3'
import Section4 from '../components/homePage/sections/Section4'

function HomePage() {
  return (
    <div>
         <Section1 />
         <Section2 />
         <Section3 />
         <Section4 />
    </div>
  )
}

export default HomePage