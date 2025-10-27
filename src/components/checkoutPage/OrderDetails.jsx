import React from 'react'
import { useSelector } from 'react-redux';

function OrderDetails({ onPlaceOrder }) {
    const { cartProducts } = useSelector((state) => state.product);

    let total = 0;
    for (let i = 0; i < cartProducts.length; i++) {
        total += cartProducts[i].price * cartProducts[i].quantity;
    }
    total = total.toFixed(2);

    return (
        <div className='md:w-auto w-full'>
            <div className='flex items-end justify-center gap-20 mt-13'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-xl font-semibold'>Product</h1>
                    {
                        cartProducts.map((product) => {
                            return <p key={product.id} className='text-base text-[#9F9F9F] font-medium'>{product.title} <span className='text-black'>x {product.quantity}</span></p>
                        })
                    }
                    <h2 className='text-base'>Total</h2>
                </div>
                <div className='flex flex-col gap-3'>
                    {
                        cartProducts.map((product) => {
                            return <p key={product.id}>{product.price}$</p>
                        })
                    }
                    <h2 className='text-2xl text-[#B88E2F] font-semibold'>{total}$</h2>
                </div>

            </div>
            <hr className='text-[#D9D9D9] my-5' />
            <button
                onClick={onPlaceOrder}
                type="submit"
                className="p-3 border-1 border-black rounded-md text-base cursor-pointer hover:bg-black hover:text-white transition w-full"
            >
                Place order
            </button>
        </div>

    )
}

export default OrderDetails