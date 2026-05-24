import Hero from '../components/Hero';
import Products from '../components/Products';
import TopProductsOf from '../components/TopProductsOf';
import Banner from '../components/Banner';
import Suscribe from '../components/Suscribe';
import Testimonials from '../components/Testimonials';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Products/>
      <TopProductsOf/>
      <Banner/>
      <Suscribe/>
      <Testimonials/>
      <Footer/>
    </>
  )
}
export default Home;