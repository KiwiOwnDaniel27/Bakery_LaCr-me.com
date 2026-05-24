import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Catalogos from '../components/Catalogos';

const Catalogo = () => {
  return (
    <div>
        <div>
            <Navbar/>
        <div>
            <Catalogos/>
        </div>
        <div>
            <Footer/>
        </div>
        </div>
    </div>
  )
}

export default Catalogo;