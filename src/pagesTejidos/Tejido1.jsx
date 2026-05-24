import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TejidoPages from '../components/TejidoPages';


export const Tejido1 = () => {
  return (
    <div>
        <div>
            <Navbar/>
        <div>
            <TejidoPages/>
        </div>
        <div>
            <Footer/>
        </div>
        </div>
    </div>
  )
}

export default Tejido1;