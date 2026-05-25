import React from 'react';
import { ImageList } from '../const/data';
import Slider from "react-slick";



const Hero = () => {

    var settings ={
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };
    return (
        <div className="relative overflow-y-hidden min-h-30 bg-rose-200  text-white dark:bg-gray-900 dark:text-white
        duration-200 h-108
        2xl:h-175  
        xl:h-135
        lg:h-130
        md:h-103
        sm:h-90">

            <div className="h-60 w-60
            bg-[url('/assets/hero-fondo.png')]  bg-contain  bg-center flex -ml-35 2xl:ml-265
            xl:ml-155 lg:ml-100 md:ml-103 sm:-ml-29 mt-19 rounded-3xl rotate-45 -z-10
            2xl:h-160 2xl:w-160 2xl:-mt-45
            xl:h-150 xl:w-150 xl:-mt-65
            lg:w-140 lg:h-140 lg:-mt-75
            md:w-90 md:h-90 md:-mt-30
            sm:w-60 sm:h-60 sm:mt-14  dark:hidden
            ">
            </div>
            <div className="h-60 w-60
            bg-[url('/assets/hero-fondo-osc.png')] bg-contain bg-center -ml-35 2xl:ml-265
            xl:ml-155 lg:ml-100 md:ml-103 sm:-ml-29 mt-19 rounded-3xl rotate-45 -z-10
            2xl:h-160 2xl:w-160 2xl:-mt-60
            xl:h-150 xl:w-150 xl:-mt-65
            lg:w-140 lg:h-140 lg:-mt-100
            md:w-90 md:h-90 md:-mt-30
            sm:w-60 sm:h-60 sm:mt-14 hidden dark:block
            ">
            </div>

            <div className="container pb-8 sm:pb-0 -mt-80
            2xl:-mt-69
            xl:-mt-60
            lg:-mt-30
            md:-mt-45
            sm:-mt-65" >
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2" >
    
                                <div className="xl:ml-20 2xl:ml-0 lg:ml-16 md:ml-0 sm:ml-0 ml-5
                                md:mt-0 mt-9">
                                        <h1 className="text-2xl 2xl:text-7xl xl:text-6xl 
                                        lg:text-5xl md:text-4xl sm:text-3xl
                                        2xl:w-150
                                        text-center md:text-left font-bold  text-amber-800 dark:text-white">
                                            {data.title}
                                        </h1>
    
                                        <p className="2xl:text-3xl
                                        text-sm text-center md:text-left ml-1 text-black dark:text-white mt-3 md:mt-3 ">
                                            {data.description}
                                        </p>
                                        <div >
    
                                            <button className="primary-button-cat
                                            2xl:text-4xl lg:text-md
                                            2xl:mt-12 xl:mt-12 lg:mt-12 md:mt-12 sm:mt-12 mt-60 text-white
                                            2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-0 sm:ml-11 ml-19">
                                                <a href="https://kiwiowndaniel27.github.io/Bakery_LaCr-me.com/#/tienda">
                                                Pídelo y disfrútalo
                                                </a>
                                            </button>
                                        </div>
                                </div>
    
    
                                <div className="order-1 sm:order-2">
                                    <div>
                                        <img className=" w-60 h-auto sm:scale-105 -mt-70 ml-21 rounded-4xl
                                        2xl:w-150 2xl:h-auto 2xl:-mt-30 2xl:ml-12
                                        xl:w-120 xl:h-auto xl:-mt-20 xl:-ml-13
                                        lg:w-100 lg:h-auto lg:-mt-25 lg:ml-0
                                        md:w-80 md:h-auto md:-mt-20 md:ml-0
                                        sm:w-65 sm:h-auto sm:mt-0 sm:ml-10" src={data.image} alt=""/>
                                    </div>    
                                </div>    
                        </div>
                    </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Hero;