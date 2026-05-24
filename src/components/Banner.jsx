import React from 'react'
import { BannerImg } from '../const/data';
import { GrSecure } from 'react-icons/gr';
import { FaCrown, FaTruck } from 'react-icons/fa6';
import { GiFoodTruck } from 'react-icons/gi';
import { FaShieldAlt } from 'react-icons/fa';


const Banner = () => {
  return (

    
    
    <div className="flex justify-center items-center py-0 sm:py-0 bg-[url('/assets/fondo-bakery.png')] 
    dark:bg-[url('/assets/fondo-bakery-osc.png')]  md:bg-cover sm:bg-right
    bg-cover flex mx-auto w-full flex-col sm:h-270
    md:h-115 lg:h-130 xl:h-178 h-233 2xl:h-260">

        <div className="container">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 
            gap-6 items-center mt-16 md:-mt-19">

                <div data-aos="zoom-in">
                    <img src="./assets/Banner.png" alt="" 
                    className=" bg-rose-200  dark:bg-gray-900
                    2xl:w-200  2xl:h-166 2xl:ml-0 2xl:mt-12
                    xl:w-160 xl:h-auto xl:ml-13 xl:mt-29
                    lg:w-200 lg:h-auto lg:ml-13 lg:mt-0
                    md:w-100 md:h-70 md:ml-6 md:mt-30
                    sm:w-100 sm:h-65 sm:ml-39 sm:-mt-110
                    drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-2xl"
                    />
                </div>

                <div className="ml-0 mt-0 xl:mt-20
                2xl:ml-16
                xl:ml-16
                lg:ml-16 
                md:ml-16
                sm:-ml-80">
                <div className="flex flex-col justify-center gap-12 sm:pt-0 text-center">
                    <h1 data-aos="zoom-in" className="text-4xl sm:text-5xl font-bold 2xl:w-200 xl:w-135 text-amber-800 dark:text-white
                    2xl:text-6xl
                    xl:text-4xl lg:text-2xl md:text-xl
                    2xl:mt-0
                    xl:mt-0
                    lg:mt-10
                    md:mt-20
                    sm:mt-90 backdrop-blur-lg rounded-full px-3">Te acompañamos en momentos especial</h1>
                    <p data-aos="fade-up"
                    className="text-sm tracking-wide leading-5 2xl:leading-12 lg:leading-5 lg:-mt-4
                    2xl:text-2xl 2xl:ml-16 2xl:w-170 dark:text-white text-amber-800 backdrop-blur-lg rounded-full px-3
                    xl:text-sm font-bold md:-mt-9 md:text-sm"
                    >Solicita tu detalle para tu personita especial, conecta con FreePass</p>

                <div className="flex flex-col gap-4 ml-12 mt-0 md:-mt-4 lg:mt-0">
                <div data-aos="fade-up" className="flex items-center gap-4 ml-9 
                2xl:ml-40
                xl:ml-23
                lg:ml-9
                md:-ml-3
                sm:ml-30
                ">
                        <img src="./assets/calidad.png" alt="" className="text-4xl h-16 w-16 shadow-sm p-2 rounded-full bg-green-700
                        dark:bg-amber-500
                        2xl:h-16 2xl:w-16
                        xl:h-12 xl:w-12 lg:h-12 lg:w-12 md:h-10 md:w-10" />
                        <p className="2xl:text-3xl dark:text-white backdrop-blur-lg rounded-full px-3
                        xl:text-lg font-serif"> 
                            Producto de Calidad.
                        </p>
                    </div> 
                    <div data-aos="fade-up" className="flex items-center gap-4 ml-9
                    2xl:ml-40
                    xl:ml-23
                    lg:ml-9
                    md:-ml-3
                    sm:ml-30">
                        <img src="./assets/entrega.png" alt="" className="text-4xl h-16 w-16 shadow-sm p-2 rounded-full bg-green-700
                        dark:bg-amber-500
                        2xl:h-16 2xl:w-16
                        xl:h-12 xl:w-12 lg:h-12 lg:w-12 md:h-10 md:w-10" />
                        <p className="2xl:text-3xl dark:text-white backdrop-blur-lg rounded-full px-3
                        xl:text-lg font-serif">
                            Entrega Rápida.
                        </p>
                    </div>
                    <div data-aos="fade-up" className="flex items-center gap-4 ml-9
                    2xl:ml-40
                    xl:ml-23
                    lg:ml-9
                    md:-ml-3
                    sm:ml-30">
                        <img src="./assets/servicio.png" alt="" className="text-4xl h-16 w-16 shadow-sm p-2 rounded-full bg-green-700
                       dark:bg-amber-500
                        2xl:h-16 2xl:w-16
                        xl:h-12 xl:w-12 lg:h-12 lg:w-12 md:h-10 md:w-10"/>
                        <p className="2xl:text-3xl dark:text-white backdrop-blur-lg rounded-full px-3
                        xl:text-lg font-serif">
                            Servicio de calidad.
                        </p>
                    </div>
                    <div data-aos="fade-up" className="flex items-center gap-4 ml-9
                   2xl:ml-40
                    xl:ml-23
                    lg:ml-9
                    md:-ml-3
                    sm:ml-30">
                        <img src="./assets/miembro.png" alt="" className="text-4xl h-16 w-16 shadow-sm p-2 rounded-full bg-green-700
                        dark:bg-amber-500 
                        2xl:h-16 2xl:w-16
                        xl:h-12 xl:w-12 lg:h-12 lg:w-12 md:h-10 md:w-10"/>
                        <p className="2xl:text-3xl dark:text-white backdrop-blur-lg rounded-full px-1
                        xl:text-lg font-serif text-left ">
                            Obtén Ofertas por ser miembro exclusivo.
                        </p>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner;