import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ShoppingCartModal from '../components/ShoppingCartModal';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawerOpen, toggleDrawer } from '../store/reducers/modalSlice';
import SnackbarComp from '../components/SnackbarComp';

function MainLayout({ children }) {

  return (
    <>
      <Navbar />
      <ShoppingCartModal />
      <SnackbarComp />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
