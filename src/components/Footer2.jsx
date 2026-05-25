import React from 'react'
import { FooterLinks, socialIcons, contactInfo } from '../const/data';
import { RiTiktokFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import { Link } from 'react-router-dom';


const Footer2 = () => {
  return (
    <div data-aos="zoom-in" className="bg-[url('/assets/fondo-bakery.png')] dark:bg-[url('/assets/fondo-bakery-osc.png')] h-100 md:h-80 xl:h-85 2xl:h-129 ">
        
        <div className="mt-21 ml-33">
            <div className="container 2xl:text-2xl">
                <div className="grid md:grid-cols-3 pv-44 pt-5 -mt-21">

                    <div className="hidden md:block py-8 px-4 2xl:-ml-35 xl:ml-0 lg:-ml-15 md:-ml-30 sm:ml-43 ml-0">
                        <h1 className="sm:-ml-3 text-amber-800 dark:text-amber-500">
                            Links Web
                        </h1>
                        <ul className="flex flex-col gap-3 mt-3 2xl:ml-0 xl:ml-0 ml-3 sm:ml-0">
                            {FooterLinks.map((link) =>(
                                <li className="cursor-pointer hover:text-black hover:translate-x-1 duration-300 text-black dark:text-white active:scale-95 hover:scale-105"
                                key={link.title}>
                                <Link to={link.link}>
                                    <span>{link.title}</span>  
                                </Link>
                                

                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="py-8 px-4 -ml-4 2xl:ml-16 xl:ml-18 lg:ml-7 md:-ml-2 sm:ml-36">
                        <h1 className="mb-6 text-amber-800 dark:text-amber-500 -ml-4 2xl:ml-0">
                            Redes Sociales
                        </h1>
                        <ul className="flex gap-9 2xl:gap-6 mt-3 2xl:-ml-35 -ml-13 text-black dark:text-white">
                            {socialIcons.map(({id, icon: Icon, url, title}) =>(
                                <a
                                key={id}
                                href={url}
                                target="_blank"
                                >
                                <Icon size={39} className="ml-0 active:scale-95 hover:scale-105 2xl:w-16 2xl:h-auto"/>
                                <p className="text-sm 2xl:text-2xl 2xl:-ml-6 -ml-3 text-amber-800 font-semibold dark:text-amber-500
                                 active:scale-95 hover:scale-105 2xl:w-50">{title}</p>
                                    
                                </a>
                            ))}
                        </ul>
                    </div>
                    <div className=" container">
                    <div className="mt-8 space-y-4 text-black dark:text-white 2xl:ml-45 -ml-15 xl:ml-20 2xl:w-100 2xl:text-2xl md:ml-8">
                        {contactInfo.map(item => (
                            <a href={item.url} target="_blank" key={item.id} className="active:scale-95 hover:scale-105 flex items-center gap-1.5 hover:text-green-800
                            hover:underline transition-colors">
                                {<item.icon />}
                                {item.label}
                            </a>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container" >
                <br />
                <p className="text-xs text-center mt-0 ml-0 xl:-mt-16 2xl:-mt-19 lg:-mt-16 
                md:-mt-16 sm:mt-9 text-black dark:text-white
                2xl:text-2xl">
                 Derechos reservados
                 <br />
                 © Copyright La Créme - Bakery
                <br /><br />
                Endulza tus momentos, crea recuerdos. Cada bocado cuenta.
                </p>
        </div>
    </div>
    
  )
}

export default Footer2;