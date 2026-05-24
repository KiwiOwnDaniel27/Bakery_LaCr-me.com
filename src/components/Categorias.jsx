import React from 'react'
import { CategoriasData } from '../const/data';
import { FaStar } from 'react-icons/fa6';
import { motion } from "framer-motion";
import * as variants from '../motion/animation';

const Categorias = () => {
  return (
    <div className=" bg-rose-200  dark:bg-gray-900">
        <div className="text-center mx-w-[600] mx-auto py-9">
            <p data-aos="fade-up" className="text-sm font-bold text-amber-400 dark:text-amber-500
            2xl:text-7xl
            xl:text-sm
            lg:text-sm
            md:text-sm
            sm:text-3xl">Bienvenido a nuestro menú</p>
            <h1 data-aos="fade-up" className="text-3xl font-bold
            2xl:text-4xl
            xl:text-3xl
            lg:text-3xl
            md:text-3xl
            sm:text-2xl">Tenemos para ti</h1>
        </div>
        <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4  lg:grid-cols-5
            place-items-center gap-9 text-center ml-0 -mt-9 
            2xl:ml-125 2xl:gap-140
            xl:ml-75 xl:gap-90
            lg:ml-45 lg:gap-90
            md:ml-43 md:gap-68
            sm:-ml-9 sm:gap-9">
                {CategoriasData.map((data) =>(
                    <div
                    data-aos= "fade-up"
                    data-aos-delay= {data.aosDeLay}
                    key={data.id}
                    className="space-y-3 w-80
                    2xl:w-130
                    xl:w-80
                    lg:w-80
                    md:w-63">
                        <a href={data.link}>
                        <img src={data.image} alt="" className="
                        object-cover rounded-md active:scale-95 hover:scale-105
                        active:duration-300" />
                        
                        <div className="mt-6 text-center text-2xl/tight font-bold mb-9">
                            <h3 className="font-semibold
                            2xl:text-4xl">{data.title}</h3>
                        </div>
                        </a>
                    </div>
                ))}

            </div>
        </div>
    </div> 
  )
}

export default Categorias;