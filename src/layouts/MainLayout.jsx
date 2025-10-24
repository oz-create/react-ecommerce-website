import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ShoppingCartModal from '../components/ShoppingCartModal';
import SnackbarComp from '../components/SnackbarComp';

function MainLayout({ children }) {

  return (
    <>
      <Navbar />
      <ShoppingCartModal />
      <SnackbarComp/>
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
