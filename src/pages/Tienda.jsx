import React from 'react'
import Navbar from '../components/Navbar';
import Footer2 from '../components/Footer2';
import Categorias from '../components/Categorias';


function Tienda () {
  return (
    <div>
      <div>
       <Navbar/>
      <div>
        <Categorias/>
      </div>
      <div>
        <Footer2/>
      </div>
      </div>
    </div>
  )
}

export default Tienda;