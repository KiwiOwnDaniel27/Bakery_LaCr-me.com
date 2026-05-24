import React from 'react'
import { ProductsData1 } from '../const/data';
import { FaStar } from 'react-icons/fa6';
import Slider from "react-slick";
import { motion } from "framer-motion";
import * as variants from '../motion/animation';


const TopProducts = () => {

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
            <div className="text-left mb-9">
                <p className="text-sm font-bold text-amber-400">Productos recomendados para ti</p>
                <h1 className="text-3xl font-bold">Los mejores productos</h1>
                <p className="text-xs text-gray-700">Viste con actitud: cada prenda hecha para ti ✨</p>
            </div>
        </div>


        <motion.div variants={variants.fadeInUp}
        className="grid grid-cols-1 sm:grid-cols-2  2xl:grid-cols-4 -mt-16">

          
            
          {ProductsData1.map((data) => (

            <div className="bg-white dark:bg-gray-800  hover:bg-amber-400 dark:hover:bg-amber-400
            hover:text-white relative shadow-xl duration-300 group max-w-[500] rounded-2xl">

              <div className="h-86">

                  <img src={data.image} alt="" 
                  className="max-w-[140] block mx-auto transform -translate-y-6 group-hover:scale-116 duration-300
                  drop-shadow-md"
                  />
              </div>
              
              <div className="p-4 text-center mt-3">
                  <div className="w-full flex items-center justify-center gap-6">
                    <FaStar className="text-yellow-500 group-hover:text-white"/>
                    <FaStar className="text-yellow-500 group-hover:text-white"/>
                    <FaStar className="text-yellow-500 group-hover:text-white"/>
                  </div>

                  <h1 className="text-white text-xl font-bold mt-6">{data.title}</h1>

                  <p
                   className="text-gray-500 group-hover:text-white duration-300 mt-3
                   text-sm line-clamp-2">
                    {data.description}
                   </p>

                  <a href={data.link}>
                      <button className="bg-amber-400 hover:scale-105 duration-300 text-white
                      py-3 px-6 rounded-full mt-6 group-hover:bg-white group-hover:text-amber-400 ml-9"
                      onClick>
                            Ordenar Ahora
                      </button>
                  </a>

              </div>

            </div>

          ))}
        </motion.div>
    </div>
    </motion.div>
  )
};

export default TopProducts;