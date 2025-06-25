import { Box, Rating, Tab, Tabs } from '@mui/material'
import React from 'react'
import CustomTabPanel from './CustomTabPanel'


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function ProductDetails({product}) {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   
  return (
    <div>
        <div className=''>
           
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Description" {...a11yProps(0)} />
                <Tab label="Reviews" {...a11yProps(1)} />
            </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              {
                product.brand && <p><b>Brand:</b> {product.brand}</p> 
              }
              {
                product.warrantyInformation &&
                <p><b>Warranty:</b> {product.warrantyInformation}</p>
              }
              <br />
                <p>{product.description}</p> 
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
             <p className='text-base text-[#9F9F9F]'>{product.reviews.length} Customer Reviews</p>
              {
                product.reviews.map((review, index) => (
                    <div key={index} className='flex flex-col border-b border-gray-300 py-2 gap-1'>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center gap-1'>
                              <Rating name="half-rating-read" defaultValue={review.rating} precision={0.5} readOnly />
                            </div> |
                            <p>{review.rating}</p> 
                        </div>
                        <div className='flex items-center gap-2'>
                            <p className='text-sm font-semibold'>{review.reviewerName}</p>
                            |
                            <p>{review.date.split('T')[0]}</p>
                        </div>
                        <p className='text-sm'>{review.comment}</p>
                    </div>
                ))
            }
            </CustomTabPanel>

           
        </div>
    </div>
  )
}

export default ProductDetails