import React, { useEffect, useRef, useState } from 'react'
import Logo from '/assets/logo.svg'
import User from '/assets/user-icon.svg'
import Search from '/assets/search-icon.svg'
import Heart from '/assets/heart-icon.svg'
import Cart from '/assets/shopping-cart.svg'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDrawer } from '../store/reducers/modalSlice'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Navbar() {
  const location = useLocation()
  const dispatch = useDispatch()
  const [openNavMobile,setOpenNavMobile] = useState(false);
  const { cartProducts } = useSelector((state) => state.product)
  const { favoritesProducts } = useSelector((state) => state.favorites)

   const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenNavMobile(false);
      }
    }

    if (openNavMobile) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openNavMobile]);

  let totalQuantity = 0;
  cartProducts.map((product) => {
    totalQuantity += product.quantity
  })


  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: '0 4px',
    },
  }));



  return (
    <div className='flex lg:flex-row flex-col w-full lg:justify-between justify-center lg:gap-0 gap-3 items-center lg:px-20 px-10 lg:h-[6.25rem] h-[10rem] sticky top-0 bg-white z-10'>
      <div className='flex items-center justify-between lg:w-auto w-full'>
        <img src={Logo} alt="" className='w-[12rem] mt-2' />
      <div  ref={menuRef} className='lg:hidden inline-block' onClick={() => setOpenNavMobile(!openNavMobile)}>
        {
          openNavMobile ? <CloseIcon style={{fontSize: "3rem"}} /> : <MenuIcon style={{fontSize: "3rem"}} />
        }
        
      </div>
      </div>
      
     
      <div
          className={`menu flex lg:flex-row gap-20 items-center lg:relative fixed lg:right-auto lg:top-auto lg:p-0 top-[10rem] flex-col bg-white px-5 py-10 lg:w-auto w-[20rem] transition-all duration-300 ${
          openNavMobile ? 'right-0' : '-right-[20rem]'
        }`}
      >
        <Link to="/" className={`text-xl font-medium ${location.pathname === '/' ? 'border-b-2 border-black' : ''}`}>Home</Link>
        <Link to="/shop" className={`text-xl font-medium ${location.pathname.includes('shop') ? 'border-b-2 border-black' : ''}`}>Shop</Link>
        <Link to="/about" className={`text-xl font-medium ${location.pathname === '/about' ? 'border-b-2 border-black' : ''}`}>About</Link>
        <Link to="/contact" className={`text-xl font-medium ${location.pathname === '/contact' ? 'border-b-2 border-black' : ''}`}>Contact</Link>
      </div>
      <div className='icons flex lg:gap-20 md:gap-20 gap-0 items-center lg:justify-center md:justify-center justify-between lg:w-auto w-full'>
        <img src={Search} alt="" />
        <Link to="/favorites">
        <StyledBadge badgeContent={favoritesProducts.length} color='primary'>
          <img src={Heart} alt="" />
        </StyledBadge>
          
        </Link>
        
        <IconButton aria-label="cart"  onClick={() => dispatch(toggleDrawer())}>
          <StyledBadge badgeContent={totalQuantity} color='primary'>
            <img src={Cart} alt="" className='cursor-pointer' />
          </StyledBadge>
        </IconButton>
      </div>

    </div>
  )
}

export default Navbar