import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductPageHeader from '../components/productPage/ProductPageHeader'
import ProductImages from '../components/productPage/ProductImages'
import ProductFeatures from '../components/productPage/ProductFeatures'
import ProductDetails from '../components/productPage/ProductDetails'
import { Skeleton } from '@mui/material'
import RelatedProducts from '../components/productPage/RelatedProducts'


function ProductPage() {
  const { id } = useParams()
  const { products,loading } = useSelector((state) => state.product)
  const product = products.find((product) => product.id === parseInt(id))
  

  if (loading) {
    return (
      <div className='flex flex-col justify-center items-center '>
        <Skeleton variant="rectangular" width={"100%"} height={"7rem"} />
        <div className='flex  gap-4'>
          <div className='flex gap-4 '>
          <Skeleton variant="text" width={"8rem"} height={"8rem"} />
          <Skeleton variant="text" width={"35rem"} height={"35rem"} />
          </div>
          <Skeleton variant="text" width={"30rem"} height={"35rem"} />
        </div>
        <div className='flex flex-col gap-4'>
          <Skeleton variant="rectangular" width={"78rem"} height={"11rem"} />
          <Skeleton variant="rectangular" width={"78rem"} height={"27rem"} />
        </div>
        
      </div>
    ) 
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductPageHeader productName={product.title} />
      <div className='custom-container'>
        <div className='flex md:flex-row flex-col justify-center md:items-start items-center gap-10  my-10'>
          <ProductImages images={product.images} />
          <ProductFeatures product={product} />
        </div>
          <ProductDetails product={product} />
          <RelatedProducts selectedProduct={product} />
      </div>
    </div>
  )
}

export default ProductPage