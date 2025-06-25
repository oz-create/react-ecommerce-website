import { useSelector } from 'react-redux';
import ProductsPagination from '../../ProductsPagination';


function Section3() {
   const { products } = useSelector((state) => state.product)
   const productList =  products || []
  
  return (
    <div className='flex flex-col items-center justify-center my-10'>
      <h1 className='text-2xl font-bold text-[#333333]'>Our Products</h1>
      <ProductsPagination productPerPage={12}  productList={productList}/>
     
    </div>
  )
}

export default Section3
