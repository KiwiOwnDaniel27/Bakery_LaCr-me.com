import React, { useState, useEffect } from 'react'
import { ProductsData5 } from '../const/data';
import { FaStar } from 'react-icons/fa6';
import Slider from "react-slick";
import { motion } from "framer-motion";
import * as variants from '../motion/animation';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/shopping-cart';

const Regalos = () => {

  const { products, addProduct} = useShoppingCart();

  const checkAvailableToAddCart = productId => {
    return Boolean (products.find(data => data.id === productId ));
  }

  const [slides, setSlides] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setSlides(1);
      } else if (width < 1024) {
        setSlides(2);
      } else {
        setSlides(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <motion.div
      variants={variants.staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
    >

      <div className="bg-rose-200  dark:bg-gray-900 h-200">

        <div className="text-center md:text-left mb-9 md:ml-26 xl:py-6 py-9 2xl:py-13 ">
          <p className="text-sm font-bold text-amber-800 dark:text-white 2xl:text-7xl xl:text-3xl 
          lg:text-2xl">
            Regalos disponibles para ti
          </p>

          <h1 className="text-2xl font-bold 2xl:text-5xl dark:text-amber-500 
          lg:text-2xl md:text-xl">
          Encuentra un detalle para su cumple.
          </h1>

          <p className="text-xs text-gray-700 dark:text-white 2xl:text-3xl xl:text-lg 
          lg:text-lg">
          ✨ “Un pequeño detalle puede regalar el momento más grande.” ✨
          </p>
        </div>

        {/* Slider */}
        <motion.div variants={variants.fadeInUp} className="-mt-36 md:-mt-30 container">

          <Slider {...settings} className="px-2 md:px-0 ">

            {ProductsData5.map((data) => (

              <div key={data.id} className="px-4 mb-13">

                <div className="backdrop-blur-lg dark:backdrop-blur-lg dark:bg-center bg-cover hover:bg-amber-800 dark:hover:bg-amber-500
                hover:text-white relative shadow-xl duration-300 group rounded-2xl
                2xl:w-full xl:w-full">

                  <Link to={data.link}>
                    <img
                      src={data.image}
                      alt=""
                      className="w-66 h-full block mx-auto transform -translate-y-14
                      group-hover:scale-110 duration-300 drop-shadow-md mt-26
                      2xl:w-100 xl:w-65 lg:w-40 md:w-40 sm:w-50
                      active:scale-95 hover:scale-105 active:duration-300"
                    />

                  </Link>

                  <div className="p-4 text-center">

                    <div className="w-full flex items-center justify-center gap-6 2xl:text-2xl
                    -mt-16 2xl:-mt-20 xl:-mt-19 lg:-mt-19 md:-mt-16 sm:-mt-16 ">
                      <FaStar className="text-yellow-500 dark:text-yellow-300 "/>
                      <FaStar className="text-yellow-500 dark:text-yellow-300"/>
                      <FaStar className="text-yellow-500 dark:text-yellow-300 "/>
                    </div>

                    <h1 className="text-black dark:text-white text-xl font-bold mt-4 2xl:text-3xl md:text-sm lg:text-xl ">
                      {data.title}
                    </h1>

                    <p className="text-black dark:text-white  duration-300 mt-3 text-sm line-clamp-2 2xl:text-2xl">
                      {data.description}
                    </p>

                    <h1 className="text-black dark:text-white text-lg font-bold mt-6 xl:mt-3 2xl:text-3xl"> $ 
                      {data.price}
                    </h1>

                    
                      <button className="bg-amber-800 dark:bg-amber-500 hover:scale-105 active:scale-95 duration-300 text-white
                      py-3 px-6 rounded-full mt-6 group-hover:bg-amber-500 dark:group-hover:bg-amber-800 group-hover:text-white
                      active:bg-white active:text-amber-400 active:duration-300
                      ml-17 2xl:ml-19 xl:ml-24 lg:ml-7 md:ml-3 sm:ml-6
                      2xl:text-3xl 2xl:mb-6
                      [WebkitTapHighlightColor:transparent]"
                      onClick={() => addProduct(data)}
                      disabled={checkAvailableToAddCart(data.id)}
                      >
                        Añadir al carrito
                      </button>
                   

                  </div>

                </div>

              </div>

            ))}

          </Slider>
            
        </motion.div>

      </div>

      <div className="flex justify-center bg-rose-200  dark:bg-gray-900 ">
                  <button className="text-center mt-10 cursor-pointer bg-amber-400 dark:bg-amber-500  text-white py-3 px-9
                  rounded-md xl:mb-6
                  active:scale-95 hover:scale-105
                active:bg-white active:text-amber-400 active:duration-300
                  2xl:text-4xl"> 
                      <a href="https://kiwiowndaniel27.github.io/Bakery_LaCr-me.com/#/tienda">
                      Ver más
                      </a>
                  </button>
        </div>

    </motion.div>
  )
};

export default Regalos;