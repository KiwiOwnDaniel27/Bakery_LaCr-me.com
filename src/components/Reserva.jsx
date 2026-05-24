import React from 'react'
import { IconsReserv } from '../const/data';
import { RiTiktokFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";

const Reserva = () => {
  return (
    <div>
        <div data-aos="zoom-in" className="mb-9 mt-23 bg-[url('/assets/centro.webp')] bg-cover bg-center bg-no-repeat w-full h-170
        2xl:h-130
        xl:h-130
        lg:h-130
        md:h-130
        sm:h-130">
            <div className="py-26">
                <div data-aos="zoom-in" className="container backdrop-blur-lg w-75 py-9 rounded-2xl text-center
                2xl:w-999
                xl:w-999
                lg:w-999
                md:w-999
                sm:w-999">
                    <h1 className="text-2xl text-white drop-shadow-[2px_2px_0_black] ml-0
                    2xl:text-4xl 2xl:ml-0
                    xl:text-2xl xl:ml-0
                    lg:text-3xl lg:ml-0
                    md:text-2xl md:ml-0
                    sm:text-2xl sm:ml-0">
                        Si quieres vivir esta experiencia, mandanos un mensaje 📲
                        <br /><br />
                        Agendaremos una cita virtual para conocernos y comenzar con el proceso 📅
                    </h1>
                    <div className="py-6 px-4 ml-9">
                        <h1 className=" text-white drop-shadow-[2px_2px_0_black] -ml-9
                        2xl:text-3xl
                        xl:text-2xl
                        lg:text-2xl
                        md:text-2xl
                        sm:text-2xl">
                            Contáctanos
                        </h1>
                        <ul className="flex items-center ml-0 mt-6 text-white drop-shadow-[2px_2px_0_black]
                        2xl:ml-140
                        xl:ml-105
                        lg:ml-90
                        md:ml-55
                        sm:ml-40">
                            {IconsReserv.map(({id, icon: Icon, url}) =>(
                                <a
                                key={id}
                                href={url}
                                target="_blank"
                                >
                                <Icon size={75}/>
                                    
                                </a>
                            ))}
                        </ul>
                    </div>
                </div> 
            </div>           
        </div>
    </div>
  )
}

export default Reserva;