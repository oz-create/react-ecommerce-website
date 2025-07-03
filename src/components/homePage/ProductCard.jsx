import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/reducers/productSlice';
import { setOpen } from '../../store/reducers/snackbarSlice';
import ShareProduct from './ShareProduct';
import { useState } from 'react';


function ProductCard({ product }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const addToCartClick = (e) => {
        e.stopPropagation();
        dispatch(addToCart(product))
        dispatch(setOpen(true))
    }


    const name = product.title;
    const price = (product.price).toFixed(2);
    const description = product.description;
    const isNew = product.isNew;
    const imgSrc = product.images[0];
    const discount = (product.discountPercentage).toFixed(0);
    const rating = product.rating;


    let oldPrice;
    if (price && discount) {
        oldPrice = (price / (1 - discount / 100)).toFixed(0);
    }



    const handleClick = (e) => {
        e.stopPropagation();
        navigate('/' + product.id, { replace: true });
        window.location.reload(); 
    }
    const [share,setShare] = useState(false)
    const [isHovered, setIsHovered] = useState(false);

    const handleShare = (e) => {
        e.stopPropagation();
        setShare(!share)
        
        
    }
   

    return (
        <div 
        onClick={(e) => handleClick(e)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
            setIsHovered(false);
            setShare(false); 
        }}
        >
            <div className='flex flex-col justify-between cursor-pointer md:w-[17.8rem] w-[25rem] md:h-[27.8rem] h-[35.8rem] md:pb-0 pb-[8rem] bg-[#F4F5F7] relative productCard'>
                <div className='productCardHover w-full md:h-full h-[8rem] absolute bg-[rgba(58,58,58,0.7)] flex flex-col items-center justify-center gap-3 z-1 md:opacity-0 opacity-100 transition-opacity duration-300 bottom-0 md:p-0 p-4'>

                    <button onClick={(e) => addToCartClick(e)} className='bg-white text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition-all md:text-base text-xl font-semibold md:py-3 py-4 px-10 cursor-pointer md:w-auto w-full'>Add to cart</button>


                    <div className='flex items-center justify-center relative gap-3' onClick={(e) => e.stopPropagation()}>
                        <div className='flex items-center  justify-center gap-2 cursor-pointer'>
                            
                            <svg className='w-[1rem]' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 10.6667C11.4747 10.6667 11 10.8734 10.644 11.2047L5.94 8.46671C5.97333 8.31337 6 8.16004 6 8.00004C6 7.84004 5.97333 7.68671 5.94 7.53337L10.64 4.79337C11 5.12671 11.4733 5.33337 12 5.33337C13.1067 5.33337 14 4.44004 14 3.33337C14 2.22671 13.1067 1.33337 12 1.33337C10.8933 1.33337 10 2.22671 10 3.33337C10 3.49337 10.0267 3.64671 10.06 3.80004L5.36 6.54004C5 6.20671 4.52667 6.00004 4 6.00004C2.89333 6.00004 2 6.89337 2 8.00004C2 9.10671 2.89333 10 4 10C4.52667 10 5 9.79337 5.36 9.46004L10.0587 12.2054C10.0211 12.3563 10.0014 12.5112 10 12.6667C10 13.0623 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.3631 11.2346 14.5145C11.6001 14.6658 12.0022 14.7054 12.3902 14.6283C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0569C14.0387 12.6689 13.9991 12.2668 13.8478 11.9013C13.6964 11.5359 13.44 11.2235 13.1111 11.0038C12.7822 10.784 12.3956 10.6667 12 10.6667Z" fill="white" />
                            </svg>
                            <p className='text-white text-base font-semibold' onClick={(e) => handleShare(e)}>Share</p>
                                {
                                        isHovered && share && (
                                        <ShareProduct
                                            url={`${window.location.href}${product.id}`}
                                            name={product.name}
                                            onClick={(e) => e.stopPropagation()}
                                        />
                                        )
                                }
                            
                        </div>

                        <div className='flex items-center justify-center gap-2 cursor-pointer'>
                            <svg className='w-[1rem]' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z" stroke="white" strokeWidth="1.8" />
                            </svg>
                            <p className='text-white text-base font-semibold'>Like</p>
                        </div>

                    </div>
                </div>
                <div className='bg-contain bg-no-repeat bg-center w-full h-[18.8rem] relative' style={{ backgroundImage: `url(${imgSrc})` }}>
                    {
                        discount && <span className='w-[3rem] h-[3rem] rounded-full flex items-center justify-center bg-[#E97171] text-white text-base font-medium absolute top-5 right-5'>-{discount}%</span>
                    }
                    {
                        isNew && <span className='w-[3rem] h-[3rem] rounded-full flex items-center justify-center bg-[#2EC1AC] text-white text-base font-medium absolute top-5 right-5'>New</span>
                    }
                </div>
                <div className='flex flex-col justify-center gap-2 h-[9rem] px-4'>
                    <h2 className='text-[#3A3A3A] font-semibold text-2xl'>{name}</h2>
                    <p className='text-[#898989] font-medium text-base overflow-hidden text-ellipsis whitespace-nowrap'>{description}</p>
                    <div className='flex items-center justify-between'>
                        {
                            price ? <h3 className='text-[#3A3A3A] font-semibold text-xl flex items-center gap-3'>{price}$
                                {
                                    oldPrice && <span className='text-[#B0B0B0] font-normal text-base line-through'>{oldPrice}$</span>
                                }

                            </h3>
                                : <h3 className='text-[#3A3A3A] font-semibold text-xl'>{oldPrice}</h3>
                        }
                        <div className='flex items-center justify-center gap-2'>
                            <img src={"/assets/star.svg"} alt="star" className='w-[1rem] h-auto' />
                            <p className='text-[#3A3A3A] font-semibold text-base'>{rating}</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default ProductCard