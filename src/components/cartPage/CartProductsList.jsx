import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseFromCart, removeFromCart } from '../../store/reducers/productSlice';
import { Link } from 'react-router-dom';

function CartProductsList() {
    const dispatch = useDispatch();
    const { cartProducts } = useSelector((state) => state.product);

    let total = 0;
    for (let i = 0; i < cartProducts.length; i++) {
        total += cartProducts[i].price * cartProducts[i].quantity;
    }
    total = total.toFixed(2);

    return (
        <div className='custom-container flex lg:flex-row flex-col lg:items-start items-center justify-center gap-10 py-10'>
            <div className='overflow-x-auto w-full'>
                <table className='min-w-[40rem] w-full'>
                    <tr className='bg-[#F9F1E7]'>
                        <th className='border-spacing-2 p-3 font-semibold text-base text-left'></th>
                        <th className='border-spacing-2 p-3 font-semibold text-base text-left'>Product</th>
                        <th className='border-spacing-2 p-3 font-semibold text-base text-left'>Price</th>
                        <th className='border-spacing-2 p-3 font-semibold text-base text-left'>Quantity</th>
                        <th className='border-spacing-2 p-3 font-semibold text-base text-left'>Subtotal</th>
                        <th className='border-spacing-2 p-3 font-semibold text-base text-left'></th>
                    </tr>
                    {
                        cartProducts.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <td className='border-spacing-2 py-3 text-base'><img src={product.images[0]} className='w-[6rem] h-[6rem] object-contain bg-[#F9F1E7] rounded-md' alt="" /></td>
                                    <td className='border-spacing-2 p-3 text-base'>{product.title}</td>
                                    <td className='border-spacing-2 p-3 text-base'>{product.price}$</td>
                                    <td className='border-spacing-2 p-3 text-base'>
                                        <div className='inline-flex items-center gap-1 justify-between border-1 border-[#9F9F9F] rounded-md p-2 min-w-[5rem] w-auto'>
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
                                    </td>
                                    <td className='border-spacing-2 p-3 text-base'>{(product.price * product.quantity).toFixed(2)}$</td>
                                    <td className='border-spacing-2 p-3 text-base'>
                                        <DeleteIcon className='text-xl text-[#B88E2F] cursor-pointer'  onClick={() => dispatch(removeFromCart(product.id))}/>
                                    </td>
                                </tr>)
                        })

                    }


                </table>
            </div>
            <div className='bg-[#F9F1E7] flex flex-col items-center justify-center gap-10 p-10 sm:min-w-[25rem] sm:w-auto w-full'>
                <h1 className='font-semibold text-2xl'>Cart Totals</h1>
                <div className='flex items-center gap-5'>
                    <h3 className='text-base font-medium'>Total: </h3>
                    <p className='text-xl text-[#B88E2F] font-semibold'>{total}$</p>
                </div>
                <Link to="/checkout" className='w-full'>
                 <button  className='p-3 border-1 border-black rounded-md text-base cursor-pointer hover:bg-black hover:text-white transition w-full'>Check Out</button>
                </Link>
                
            </div>
        </div>
    )
}

export default CartProductsList