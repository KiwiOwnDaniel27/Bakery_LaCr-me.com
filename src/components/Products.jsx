import React from 'react'
import { ProductsData } from '../const/data';
import { FaStar } from 'react-icons/fa6';
import { motion } from "framer-motion";
import * as variants from '../motion/animation';

const Products = () => {
  return <div className="mt-0 mb-0 bg-[url('/assets/fondo-bakery.png')] dark:bg-[url('/assets/fondo-bakery-osc.png')] 
  bg-cover flex mx-auto w-full flex-col md:bg-cover sm:bg-right
  h-210 2xl:h-250 xl:h-150 sm:h-200 md:h-190 lg:h-140">
        
        
        <div className="text-center mb-3 w-90 ml-3 container py-10 2xl:py-10 xl:py-16
        2xl:ml-195 2xl:w-153 2xl:mb-27
        xl:ml-95 xl:w-120
        lg:ml-60
        md:ml-30
        sm:ml-20">
            <p data-aos="fade-up" className="text-sm font-bold text-amber-800 dark:text-white
            2xl:text-7xl xl:text-3xl 2xl:w-193 2xl:-ml-16 lg:text-2xl">Postres más vendidos</p>
            <h1 data-aos="fade-up" className="text-2xl  font-bold dark:text-amber-500
            2xl:text-5xl lg:text-2xl md:text-xl 2xl:w-150">Tu momento dulce empiza aquí</h1>
            <p data-aos="fade-up" className="text-xs text-gray-700 dark:text-white xl:text-lg
            2xl:text-3xl lg:text-lg lg:w-86 2xl:w-143 xl:w-90 2xl:ml-0 xl:ml-11">✨ Nuestra misión endulzar corazones ✨</p>
        </div>

        <div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            place-items-center gap-6 2xl:gap-5 xl:gap-3 lg:xl:gap-5 md:gap-3 sm:gap-5 text-center xl:-mt-13 mb-0">
                {ProductsData.map((data) =>(
                    <div 
                    data-aos= "fade-up"
                    data-aos-delay= {data.aosDeLay}
                    key={data.id}
                    className="space-y-3 mb-6 md:mb-0 px-2 md:px-0 ">
                        <a href={data.link}>
                        <img src={data.image} alt="" className="h-auto w-50 rounded-md
                        2xl:h-auto 2xl:w-130
                        xl:h-auto xl:w-250
                        lg:h-auto lg:w-130
                        md:h-auto md:w-65
                        sm:h-auto sm:w-55" />
                        
                        <div className="mt-6 w-full sm:w-60 md:w-full">
                            <h3 className="font-semibold backdrop-blur-lg dark:text-white
                            2xl:text-2xl">{data.title}</h3>
                            <p className="text-sm text-black mt-1 xl:font-bold dark:text-amber-500
                            2xl:text-2xl backdrop-blur-lg" >{data.color}</p>
                        </div>
                        </a>

                        <div className="flex items-center gap-3">
                            <span className="ml-19 sm:ml-23 md:ml-25 dark:text-white backdrop-blur-md
                            2xl:text-2xl">{data.rating}</span>
                            <FaStar className="text-amber-400 dark:text-amber-500"/>
                        </div>
                    </div>
                ))}

            </div>
            <div className="flex justify-center">
                <button className="text-center mt-10 cursor-pointer bg-amber-400 dark:bg-amber-500  text-white py-3 px-9
                rounded-md xl:mb-6
                active:scale-95 hover:scale-105
              active:bg-white active:text-amber-400 active:duration-300
                2xl:text-4xl"> 
                    <a href="https://kiwiowndaniel27.github.io/FreePass.com/#/tienda">
                    Ver más
                    </a>
                </button>
            </div>
        </div>
    </div>;
};

export default Products;