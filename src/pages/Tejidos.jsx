import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TejidosContain from '../components/TejidosContain';
import TejidosProducts from '../components/TejidosProducts';

const Tejidos = () => {
  return (
    <div>
        <div>
            <Navbar/>
        <div>
            <TejidosContain/>
        </div>
        <div>
            <TejidosProducts/>
        </div>
        <div>
            <Footer/>
        </div>
        </div>
    </div>
  )
}

export default Tejidos;