import React, { useRef } from 'react'
import PageHeaderBreadcrumb from '../components/PageHeaderBreadcrumb'
import CheckoutForm from '../components/checkoutPage/CheckoutForm'
import OrderDetails from '../components/checkoutPage/OrderDetails'

function CheckoutPage() {
 const checkoutFormRef = useRef();

  const handlePlaceOrder = () => {
    if (checkoutFormRef.current) {
      checkoutFormRef.current.submitForm();
    }
  };

  return (
    <div>
      <PageHeaderBreadcrumb pageName={"Checkout"} />
      <div className='flex md:items-start items-center justify-center gap-15 my-10 flex-col md:flex-row w-full px-5'>
        <CheckoutForm ref={checkoutFormRef}/>
        <OrderDetails onPlaceOrder={handlePlaceOrder}/>
      </div>
      
    </div>
  )
}

export default CheckoutPage