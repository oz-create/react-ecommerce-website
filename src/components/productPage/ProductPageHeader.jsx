import { Breadcrumbs, Typography, Link } from '@mui/material'
import React from 'react'


function ProductPageHeader({ productName }) {
  return (
    <div className='w-full p-10 bg-[#F9F1E7]'>
      <div className='custom-container mx-auto flex justify-start items-center'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/shop">
            Shop
          </Link>
          <Typography sx={{ color: 'text.primary' }}>{productName}</Typography>
        </Breadcrumbs>
      </div>



    </div>
  )
}

export default ProductPageHeader