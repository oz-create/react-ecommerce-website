import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; // Sadece Routes ve Route kullan
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './store/reducers/productSlice';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import NotFound from './pages/NotFound';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts()) // Sayfa yüklenir yüklenmez fetch
  }, [dispatch])

  


  return (
    <MainLayout>
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/shop/:category" element={<ShopPage />} />
      <Route path="/:id" element={<ProductPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </MainLayout>
  );
}

export default App;
