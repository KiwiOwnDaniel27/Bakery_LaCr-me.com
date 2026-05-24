import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DesayunosContain from '../components/DesayunosContain';
import DesayunosProducts from '../components/DesayunosProducts';

const Desayunos = () => {
  return (
    <div>
        <div>
            <Navbar/>
        <div>
            <DesayunosContain/>
        </div>
        <div>
            <DesayunosProducts/>
        </div>
        <div>
            <Footer/>
        </div>
        </div>
    </div>
  )
}

export default Desayunos;