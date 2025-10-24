import React from 'react'
import PageHeaderBreadcrumb from '../components/PageHeaderBreadcrumb'
import ShoppingAdventages from '../components/cartPage/ShoppingAdventages'
import { useSelector } from 'react-redux';
import FavoritesList from '../components/favoritesPage/FavoritesList';


function FavoritesPage() {
  const { favoritesProducts } = useSelector((state) => state.favorites);
  return (
    <div className='flex flex-col justify-center items-center'>
        <PageHeaderBreadcrumb pageName={"Favorites"}/>
         {
            favoritesProducts.length > 0 ?  <FavoritesList /> : <h1 className='py-20 text-2xl capitalize'>Your favorites are empty</h1>
        }
        <ShoppingAdventages />
       
    </div>
  )
}

export default FavoritesPage