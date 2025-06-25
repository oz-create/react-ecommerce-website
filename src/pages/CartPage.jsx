import React from 'react'
import { useSelector } from 'react-redux';
import PageHeaderBreadcrumb from '../components/PageHeaderBreadcrumb';
import CartProductsList from '../components/cartPage/CartProductsList';
import ShoppingAdventages from '../components/cartPage/ShoppingAdventages';

function CartPage() {

  const { cartProducts } = useSelector((state) => state.product);
  console.log(cartProducts);
  
  return (
    <div className='flex flex-col justify-center items-center'>
        <PageHeaderBreadcrumb pageName={"Cart"}/>
        {
            cartProducts.length > 0 ?  <CartProductsList /> : <h1 className='py-20 text-2xl capitalize'>Your cart is empty</h1>
        }
        <ShoppingAdventages />
       
    </div>
  )
}

export default CartPage