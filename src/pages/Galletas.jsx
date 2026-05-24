import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GalletasContain from '../components/GalletasContain';
import GalletasProducts from '../components/GalletasProducts';

const Galletas = () => {
  return (
    <div>
        <div>
            <Navbar/>
        <div>
            <GalletasContain/>
        </div>
        <div>
            <GalletasProducts/>
        </div>
        <div>
            <Footer/>
        </div>
        </div>
    </div>
  )
}

export default Galletas;