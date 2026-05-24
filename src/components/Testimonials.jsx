import React from 'react'
import Slider from 'react-slick';
import { testimonialData } from '../const/data';

const Testimonials = () => {

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,

    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="py-10 bg-[url('/assets/fondo-bakery.png')] dark:bg-[url('/assets/fondo-bakery-osc.png')] 
      bg-cover flex mx-auto w-full flex-col md:bg-cover sm:bg-right">
        <div className="container">
          <div className="text-center mb-10 w-60 ml-16 xl:w-115
          2xl:w-200 2xl:ml-90 xl:ml-100 lg:ml-95 md:ml-53 sm:ml-45">
            <p data-aos="fade-up" className="text-sm font-bold text-amber-800 xl:text-3xl
             dark:text-amber-500 2xl:text-6xl">
              Lo que dicen nuestros clientes
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold 2xl:text-4xl lg:text-3xl md:text-xl dark:text-white">
              Esto nos hace diferentes
            </h1>
            <p data-aos="fade-up" className="text-xs text-gray-700 2xl:text-3xl xl:text-lg dark:text-amber-500">
            ✨ Creamos momentos únicos ✨
            </p>
          </div>
        </div>

        <div data-aos="zoom-in" className="container px-4 sm:px-6 md:px-8 mt-0 md:-mt-9 lg:mt-0">
          <Slider {...settings}>
            {
              testimonialData.map((data) => (
                <div key={data.id} className="my-6 px-2 ml-0 2xl:ml-110 xl:ml-70 lg:ml-60">
                  <div
                    className="flex flex-col gap-4 shadow-lg py-8 px-6 rounded-xl dark:bg-white bg-rose-200 relative
                      w-full max-w-sm sm:max-w-md md:max-w-lg h-auto
                      active:scale-95 hover:scale-105
              active:bg-white active:text-amber-400 active:duration-300"
                  >
                    <div className="mb-6 flex justify-center">
                      <img
                        src={data.image}
                        alt=""
                        className="rounded-full w-20 h-20 sm:w-28 sm:h-28"
                      />
                    </div>

                    <div className="flex flex-col items-center gap-3 text-center">
                      <p className="text-xs text-gray-600 2xl:text-2xl dark:text-gray-800">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light 2xl:text-3xl">
                        {data.name}
                      </h1>
                    </div>

                    <p
                      className="absolute top-0 right-6 transform -translate-x-1/2 -ml-90
                        text-black/80 font-serif text-7xl sm:text-9xl select-none pointer-events-none"
                    >
                      ,,
                    </p>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;