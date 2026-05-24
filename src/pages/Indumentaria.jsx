import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import IndumentariaContain from '../components/IndumentariaContain';
import IndumentariaProducts from '../components/IndumentariaProducts';

const Indumentaria = () => {
  return (
    <div>
        <div>
            <Navbar/>
        <div>
            <IndumentariaContain/>
        </div>
        <div>
            <IndumentariaProducts/>
        </div>
        <div>
            <Footer/>
        </div>
        </div>
    </div>
  )
}

export default Indumentaria;