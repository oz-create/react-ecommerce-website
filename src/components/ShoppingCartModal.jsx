import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer } from '../store/reducers/modalSlice';
import { addToCart, clearCart, decreaseFromCart, removeFromCart } from '../store/reducers/productSlice';
import { Link } from 'react-router-dom'

function ShoppingCartModal() {


  const drawerOpen = useSelector((state) => state.modal.drawerOpen);


  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state) => state.product);

  let total = 0;
  for (let i = 0; i < cartProducts.length; i++) {
    total += cartProducts[i].price * cartProducts[i].quantity;
  }
  total = total.toFixed(2);


  return (
    <Drawer anchor="right" open={drawerOpen} onClose={() => dispatch(toggleDrawer())}>
      <div className="lg:w-[30rem] w-[80vw] p-4 flex flex-col items-start justify-center">
        <div className='flex items-center justify-between w-full border-b-1 border-[#D9D9D9] py-3 mb-5'>
          <h1 className='text-2xl font-bold'>Shopping Cart</h1>
          <img src={"/shopping-cart-icon.svg"} alt="" className='w-[1.3rem] cursor-pointer' open={drawerOpen} onClick={() => dispatch(toggleDrawer())} />
        </div>

        {
          cartProducts.map((product) => {
            return (
              <div key={product.id} className="flex justify-between gap-3 items-center mb-4 w-full border-b-1 border-[#D9D9D9] pb-5">
                 <Link to={`/${product.id}`}>
                  <img className='w-[5rem] h-[5rem] object-cover bg-[#F9F1E7] rounded-lg' src={product.images[0]} alt="" />
                 </Link>
                <div className='flex flex-col justify-center items-start w-full'>
                  <h2 className="font-bold mb-1 text-base text-left">{product.title}</h2>
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-1 justify-between border-1 border-[#9F9F9F] rounded-md p-2 min-w-[5rem]'>
                      <button className='cursor-pointer rounded-md text-sm'
                        aria-label="reduce"
                        onClick={() => {
                          dispatch(decreaseFromCart(product));
                        }}
                      >
                        -
                      </button>
                      <p className='text-sm'>{product.quantity}</p>
                      <button className='cursor-pointer rounded-md text-sm'
                        aria-label="increase"
                        onClick={() => {
                          dispatch(addToCart(product));
                        }}
                      >
                        +
                      </button>
                    </div>
                    <h3>{(product.price * product.quantity).toFixed(2)}$</h3>
                  </div>

                </div>
                <button onClick={() => dispatch(removeFromCart(product.id))}>
                  <img src={"/assets/delete-x-icon.svg"} alt="delete" className='cursor-pointer min-w-[1.5rem]' />
                </button>
              </div>
            )
          })
        }
        {
          cartProducts.length > 0 &&
          <div className='flex items-center w-full gap-3'>
            <button onClick={() => dispatch(clearCart())} className='p-3 border-1 border-black rounded-md text-base cursor-pointer hover:bg-black hover:text-white transition w-full'>Clear All</button>
            <Link to="/cart" className='w-full' onClick={() => dispatch(toggleDrawer())}>
              <button className='p-3 border-1 border-black rounded-md text-base cursor-pointer hover:bg-black hover:text-white transition w-full'>Go to Cart</button>
            </Link>

          </div>

        }
        {
          cartProducts.length > 0 &&
          <p className='text-base mt-5'>Total Price: <span className='text-lg font-bold'>{total}$</span></p>
        }
      </div>
    </Drawer>
  );
}

export default ShoppingCartModal;
