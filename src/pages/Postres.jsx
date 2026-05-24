import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PostresContain from '../components/PostresContain';
import PostresProducts from '../components/PostresProducts';

const Postres = () => {
  return (
    <div>
        <div>
            <Navbar/>
        <div>
            <PostresContain/>
        </div>
        <div>
            <PostresProducts/>
        </div>
        <div>
            <Footer/>
        </div>
        </div>
    </div>
  )
}

export default Postres;