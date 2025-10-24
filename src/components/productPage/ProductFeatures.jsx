import { Rating } from '@mui/material'
import React, { useState } from 'react'
import { addMultipleToCart } from '../../store/reducers/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setOpen, updateMessage } from '../../store/reducers/snackbarSlice';
import { addToFavorites, removeFromFavorites } from '../../store/reducers/favoritesSlice';



function ProductFeatures({ product }) {
    const { favoritesProducts } = useSelector((state) => state.favorites);

    const favoritesProductsIds = favoritesProducts.map(item => item.id);
    const isFavorited = favoritesProductsIds.includes(product.id);

    const dispatch = useDispatch();

    // Bu local state artık sadece bu component içinde kontrol amaçlı
    const [localQuantity, setLocalQuantity] = useState(1); // en az 1 olabilir

    const price = (product.price).toFixed(2);
    const discount = (product.discountPercentage).toFixed(0);

    let oldPrice;
    if (price && discount) {
        oldPrice = (price / (1 - discount / 100)).toFixed(0);
    }

    const handleAddToCart = () => {
    dispatch(addMultipleToCart({ product, quantity: localQuantity }));
    dispatch(setOpen(true))
    };

    const addToFavoritesClick = (e) => {
         e.stopPropagation();
        if (isFavorited) {
            dispatch(removeFromFavorites(product.id))
            dispatch(setOpen(true))
            dispatch(updateMessage("Product removed to favorites"))
        }else{
            dispatch(addToFavorites(product))
            dispatch(setOpen(true))
            dispatch(updateMessage("Product added to favorites"))
        }
       

    }


    return (
        <div className='md:w-[30rem] w-full flex flex-col gap-4'>

            <h1 className='text-3xl font-bold '>
                {
                    product.brand && <span className='text-base font-normal block'>{product.brand}</span>
                }

                {product.title}
            </h1>
            <div className='flex items-center gap-3'>
                <h2 className='text-2xl font-semibold flex items-center gap-2'>{product.price}$
                    {
                        oldPrice && <span className='text-[#B0B0B0] font-normal text-base line-through'>{oldPrice}$</span>
                    }
                </h2>
                {
                    discount && <span className='w-[3rem] h-[3rem] rounded-full flex items-center justify-center bg-[#E97171] text-white text-base font-medium'>-{discount}%</span>
                }
            </div>

            <div className='flex gap-2 items-center'>
                <div className='flex items-center gap-1'>
                    <Rating name="half-rating-read" value={product.rating} precision={0.5} readOnly />
                </div>
                |
                <h3 className='text-base font-medium'>{product.rating}</h3>
            </div>
            <p className='text-base'>{product.description}</p>
            <div className="flex gap-3">

                <div className='flex items-center gap-2 justify-between border-1 border-[#9F9F9F] rounded-md p-3 min-w-[7rem]'>
                    <button
                        className='cursor-pointer rounded-md text-base'
                        onClick={() => setLocalQuantity(prev => (prev > 1 ? prev - 1 : 1))}
                    >
                        -
                    </button>
                    <p>{localQuantity}</p>
                    <button
                        className='cursor-pointer rounded-md text-base'
                        onClick={() => setLocalQuantity(prev => prev + 1)}
                    >
                        +
                    </button>

                </div>
                <button onClick={handleAddToCart} className='p-3 border-1 border-black rounded-md text-base cursor-pointer hover:bg-black hover:text-white transition min-w-[8rem]'>Add To Cart</button>
                <Link to="/cart" className='w-full'>
                    <button onClick={handleAddToCart} className='p-3 border-1 border-black rounded-md text-base cursor-pointer hover:bg-black hover:text-white transition min-w-[8rem]'>Go To Cart</button>
                </Link>
                <button className={`cursor-pointer border border-black rounded-full min-w-[3rem] h-[3rem] flex items-center justify-center  hover:fill-black ${isFavorited ? 'fill-black' : "fill-none"}`} onClick={(e) => addToFavoritesClick(e)}>
                    <svg className={`w-[2rem] fill-inherit transition-all duration-1000 pointer-events-none ${isFavorited ? 'fill-black' : ""}`} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z" stroke="black" strokeWidth="1.8" />
                    </svg>
                </button>
            </div>


        </div>
    )
}

export default ProductFeatures