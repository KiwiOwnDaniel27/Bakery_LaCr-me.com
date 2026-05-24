import React from 'react'
import { FaStar } from 'react-icons/fa6';
import Slider from "react-slick";
import { motion } from "framer-motion";
import * as variants from '../motion/animation';
import { useShoppingCart } from '../context/shopping-cart';
import { Link } from 'react-router-dom';
import { CamisaData1 } from '../const/data';

const IndumentariaProducts = () => {

     const { products, addProduct} = useShoppingCart();
    
      const checkAvailableToAddCart = productId => {
        return Boolean (products.find(data => data.id === productId ));
      }

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 4, 
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: { slidesToShow: 2 },
          },
          {
            breakpoint: 640,
            settings: { slidesToShow: 1 },
          },
        ],
      };
  return (
<motion.div variants={variants.staggerContainer} initial='hidden' whileInView='show'
        viewport={{once: true}} className="">

    <div className="container">
        <div>
            <div className="text-left mb-9 -mt-9">
                <h1 className="text-3xl font-bold
                2xl:text-5xl
                xl:text-4xl
                lg:text-3xl
                md:text-3xl
                sm:text-3xl">Los mejores productos</h1>
                <p className="text-xs text-gray-700
                2xl:text-2xl
                xl:text-2xl
                lg:text-sm
                md:text-sm
                sm:text-sm">Viste con actitud ✨</p>
            </div>
        </div>

        
        <motion.div variants={variants.fadeInUp}
         className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3 gap-3 md:gap-5 place-items-center mt-9">
       
          
            
          {CamisaData1.map((data) => (

         <div className="bg-white bg-[url('/assets/fondo.prod1.png')] bg-cover hover:bg-amber-400 dark:hover:bg-amber-400
                   hover:text-white relative shadow-xl duration-300 group rounded-2xl
                   2xl:w-full xl:w-full">
         
          <div className="h-40 2xl:h-86 xl:h-86 lg:h-86 md:h-86 sm:h-86">
              <Link to={data.link}>
                <img src={data.image} alt="" 
                className="w-60 h-auto block mx-auto transform -translate-y-6
                group-hover:scale-110 duration-300 drop-shadow-md mt-6
                2xl:w-90 xl:w-70 lg:w-full md:w-full sm:w-full  active:scale-95 hover:scale-105
                active:duration-300"
                />
                 <img 
                    className="-mt-40 w-30 ml-9 absolute 2xl:ml-20 2xl:w-50 2xl:-mt-60
                    xl:ml-16 xl:w-40 xl:-mt-50 lg:ml-20 lg:w-40 lg:-mt-45 md:ml-13 md:w-35 md:-mt-40
                    sm:ml-16 sm:w-40 sm:-mt-50"
                    src={data.img} 
                    alt="" />
              </Link>
          </div>
          
          <div className="p-4 text-center mt-16 2xl:mt-27 xl:mt-6 lg:mt-16 md:-mt-9 sm:mt-0">
              <div className="w-full flex items-center justify-center gap-6">
                <FaStar className="text-yellow-500 group-hover:text-white"/>
                <FaStar className="text-yellow-500 group-hover:text-white"/>
                <FaStar className="text-yellow-500 group-hover:text-white"/>
              </div>

              <h1 className="text-white text-3 font-bold mt-6">{data.title}</h1>

              <p
              className="text-white group-hover:text-white duration-300 mt-3
              text-sm line-clamp-2 hidden md:block">
                {data.description}
              </p>

              <h1 className="text-white sm:text-lg font-bold mt-3 md:mt-6">$ {data.price}</h1>

              <button className="bg-amber-400 dark:text-white hover:scale-105 active:scale-95 duration-300 text-white
                  py-3 px-6 rounded-full mt-3 md:mt-6 group-hover:bg-white  group-hover:text-amber-400
                  active:bg-white active:text-amber-400 active:duration-300
                  ml-0 2xl:ml-10 xl:ml-10 lg:ml-15 md:ml-3 sm:ml-6
                  2xl:text-2xl 2xl:mb-6 text-sm
                  [WebkitTapHighlightColor:transparent]"
                  onClick={() => addProduct(data)}
                  disabled={checkAvailableToAddCart(data.id)}
                  >
                    Añadir al carrito
                </button>

              </div>

            </div>

          ))}
        </motion.div>
        
        {/* 
        <div className="container">
            <h1 className="text-center
            2xl:text-5xl 2xl:mb-120 xl:text-3xl xl:mt-9 2xl:mt-13
            lg:text-3xl lg:mt-9 md:text-3xl md:mt-9 sm:text-3xl sm:mt-16
            mb-90 xl:mb-120 
            mt-30"> Sección disponible pronto</h1>
            <img src="./assets/logo-circular.png"
             alt="" className="w-50 -mt-80 ml-19 mb-30
             2xl:ml-120 2xl:w-90 xl:ml-108 xl:-mt-110
             lg:ml-90 md:ml-55 sm:ml-43" />
        </div>
        */}
    </div>
    </motion.div>
  )
};
export default IndumentariaProducts;