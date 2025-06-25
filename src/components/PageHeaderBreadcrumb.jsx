import { Breadcrumbs, Typography, Link } from '@mui/material'
import React from 'react'

function PageHeaderBreadcrumb({pageName}) {
  return (
    <div
        className='w-full h-[20rem] bg-cover bg-center flex flex-col justify-center items-center gap-3'
        style={{ backgroundImage: "url(../assets/page-header-bg.png)" }}
      >
        <h1 className='text-black text-5xl font-semibold'>{pageName}</h1>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography sx={{ color: 'text.primary' }}>{pageName}</Typography>
        </Breadcrumbs>
      </div>
  )
}

export default PageHeaderBreadcrumb