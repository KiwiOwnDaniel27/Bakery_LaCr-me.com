import React from 'react'
import Slider from "react-slick";
import { Galery } from '../const/data';


const Pasarelas = () => {
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
   <div className="relative overflow-y-hidden bg-gray-900  text-white dark:bg-gray-950 dark:text-white
        duration-200 h-110
        2xl:h-270 xl:h-153 lg:h-153 md:h-100 sm:h-80">
            <div>
                <div className="text-center text-3xl/tight font-bold mb-6 mt-21 ml-0">
                    <div className="-mt-10">
                        <p data-aos="zoom-in" className="text-xl/tight
                        2xl:text-7xl
                        xl:text-4xl/tight
                        lg:text-4xl/tight
                        md:text-4xl/tight
                        sm:text-4xl/tight">Colección "La esencia de lo único"</p>
                    </div>
                </div>
                
            </div>

            <div data-aos="zoom-in"  className="container w-80 h-100 pb-8 sm:pb-0 mt-0 mb-11 ml-18
            2xl:w-400 2xl:h-200 2xl:ml-60 2xl:mb-11
            xl:w-260 xl:h-100 xl:ml-0 xl:mb-23
            lg:w-260 lg:h-100 lg:-ml-33 lg:mb-23
            md:w-360 md:h-100 md:-ml-60 md:mb-0
            sm:w-240 sm:h-90 sm:-ml-75" >
                <Slider {...settings}>
                    {Galery.map((data) => (
                        <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 ml-21
                        2xl:ml-100
                        xl:ml-100
                        lg:ml-100
                        md:ml-100
                        sm:ml-100" >
                                <div className="order-1 sm:order-2">
                                    <div>
                                        <img className="relative sm:scale-105 -ml-10
                                        2xl:ml-20 2xl:w-400 2xl:h-200
                                        xl:-ml-13
                                        lg:-ml-8
                                        md:-ml-30
                                        sm:-ml-35
                                        mx-auto rounded-2xl" src={data.image} alt=""/>
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

export default Pasarelas;