import React from 'react'
import Navbar from '../components/Navbar';
import Footer2 from '../components/Footer2';
import Dulces from '../components/Dulces';
import Detalles from '../components/Detalles';
import Peluches from '../components/Peluches';


const Origen = () => {
    return (
      <div>
        <div>
            <Navbar/> 
        
        <div>
            <Detalles/>
        </div>

        <div>
            <Peluches/>
        </div>

        <div>
            <Dulces/>
        </div>
        <div>
            <Footer2/>
        </div>
        </div>
      </div>
    );
  };
  
  export default Origen;
  