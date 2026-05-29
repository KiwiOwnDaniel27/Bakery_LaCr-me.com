import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { TbBasketSearch } from "react-icons/tb";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { DropdownLinks, Menu } from "../const/data";
import { Link } from "react-router-dom";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import { useShoppingCart } from "../context/shopping-cart";
import { div } from "framer-motion/client";
import { ProductsData1 } from "../const/data";
import { TrashIcon } from "@heroicons/react/24/solid";
import Payment from "./Payment";
import PagoKushki from "./PagoKushKi";

const Navbar = () => {

  const [showCart, setShowCart] = useState(false);
  const { products, removeProduct, totalAmount, clearShoppingCart } = useShoppingCart();

  const [isOpen, setIsOpen] = useState(false);

  const [isSweetModalOpen, setIsSweetModalOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(prev => !prev);
  };

  const [isRotating, setIsRotating] = useState(false);

  const handleClick1 = () => {
    setIsRotating(true);

    setTimeout(() => {
      setIsRotating(false);
    }, 500);
  };

  return (
    <div className="px-0 sticky top-0 z-50 bg-white">

      <div
        className="relative z-10 bg-[url('/assets/fondo-bakery.png')] 
        dark:bg-[url('/assets/fondo-bakery-osc.png')] bg-cover flex mx-auto w-full flex-col p-6 h-27 shadow-lg 2xl:h-70
        xl:h-35 lg:h-30 md:h-30 sm:h-36"
      >

        {/* SWEET SHOPPER */}
        <div className="absolute left-0">
          <button
            onClick={() => setIsSweetModalOpen(true)}
            className="active:scale-95 hover:scale-105"
          >
            <img
              src="./assets/bakeryico.png"
              alt=""
              className="w-24 md:w-30 mt-130 md:mt-100 rounded-full"
            />

            <p className="text-center text-[10px] md:text-[14px] -mt-3 font-bold text-black dark:text-white">
              Sweet <br /> shopper
            </p>
          </button>
        </div>

        {/* MENU BUTTON MOBILE */}
        <button
          className="md:hidden absolute mt-0 sm:mt-7 -ml-3 transition-transform duration-300"
          onClick={handleClick}
        >
          <RiMenuLine
            size={40}
            className={`text-black dark:text-white transition-transform duration-900 ${
              isOpen ? "rotate-270" : "rotate-0"
            }`}
          />
        </button>

        <div className="container">

          {/* LOGOS */}
          <img
            className="ml-15 2xl:-ml-55 xl:-ml-20 lg:-ml-9 md:-ml-9 -mt-16 2xl:-mt-33 xl:-mt-23 lg:-mt-16 md:-mt-12 
            sm:ml-45 sm:-mt-23
            w-45 2xl:w-126 xl:w-70 lg:w-50 md:w-40 sm:w-75 block dark:hidden"
            src="./assets/logo.1.1.webp"
            alt=""
            width={300}
          />

          <img
            className="ml-15 2xl:-ml-55 xl:-ml-20 lg:-ml-9 md:-ml-9 -mt-16 2xl:-mt-33 xl:-mt-23 lg:-mt-12 md:-mt-12 
            sm:ml-45 sm:-mt-23
            w-45 2xl:w-126 xl:w-70 lg:w-50 md:w-40 sm:w-75 hidden dark:block"
            src="./assets/logo.1.1.webp"
            alt=""
            width={300}
          />

          {/* CARRITO */}
          <div className="relative container">

            <button
              onClick={() => setShowCart(!showCart)}
              className="bg-rose-300 dark:bg-blue-900 hover:bg-amber-40 transition-all duration-200 text-white hover:text-black
              group-hover:bg-white group-hover:text-amber-400
              active:scale-95 hover:scale-105
              active:bg-white active:text-amber-400 active:duration-300
              py-3 px-2 2xl:px-5 xl:px-0 lg:px-3 rounded-full flex items-center h-7 gap-3 group ml-58 -mt-19 border border-black
              2xl:w-35 2xl:h-16 2xl:ml-365 lg:ml-225 md:ml-172 sm:ml-140 2xl:-mt-60 lg:-mt-23
              md:-mt-16 sm:-mt-36 md:w-14 md:h-7 lg:w-18 lg:h-8 w-16 xl:w-23 xl:h-10
              xl:ml-263 xl:-mt-35"
            >
              <span className="group-hover:block transition-all duration-200 ml-1 md:ml-0 lg:ml-1 xl:ml-6 2xl:ml-3 2xl:text-3xl">
                {products.length}
              </span>

              <FaCartShopping
                onClick={handleClick1}
                className={`
                  w-4 h-4 lg:w-6 lg:h-6 text-xl text-white hover:text-rose-400 dark:hover:text-blue-700
                  drop-shadow-[2px_2px_2px_black] cursor-pointer
                  2xl:w-11 2xl:h-11 2xl:ml-5 ml-0 lg:ml-0 md:ml-0
                  transition-transform duration-500
                  ${isRotating ? "rotate-360" : "rotate-0"}
                `}
              />
            </button>

            {/* DROPDOWN CARRITO */}
            {showCart && (
              <div
                className="absolute right-0 md:-right-19 mt-3 w-80 
                bg-white shadow-lg rounded-2xl z-50 
                flex flex-col max-h-[70vh]"
              >

                {/* HEADER */}
                <div className="p-4">
                  <h3 className="font-bold text-black">Carrito</h3>
                </div>

                {/* PRODUCTOS */}
                <div className="overflow-y-auto flex-1">
                  {products.length === 0 ? (
                    <p className="text-gray-500 ml-4">Carrito vacío</p>
                  ) : (
                    products.map((data) => (
                      <div
                        key={data.id}
                        className="flex items-center justify-between border-b py-2 text-black"
                      >
                        <img
                          src={data.image}
                          alt=""
                          className="w-23 h-auto object-cover ml-4"
                        />

                        <div className="flex flex-col flex-1 ml-3">
                          <span className="text-sm font-semibold">
                            {data.title}
                          </span>

                          <span className="mt-3">
                            ${data.price}
                          </span>
                        </div>

                        <button
                          className="p-6 rounded-full"
                          onClick={() => removeProduct(data.id)}
                        >
                          <TrashIcon
                            className="w-5 h-5 text-red-600 active:scale-95 hover:scale-105
                            active:duration-600 ml-0"
                          />
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {/* FOOTER */}
                <div className="p-4 bg-white rounded-2xl">
                  <div className="flex justify-between font-bold text-black">
                    <span>Total:</span>

                    <span>
                      $
                      {products
                        .reduce((acc, item) => acc + parseFloat(item.price), 0)
                        .toFixed(2)}
                    </span>
                  </div>

                  <PagoKushki
                    totalAmount={totalAmount}
                    clearShoppingCart={clearShoppingCart}
                  />
                </div>
              </div>
            )}
          </div>

          {/* DARKMODE */}
          <div
            className="
            2xl:-mt-40 xl:-mt-25 lg:-mt-20 md:-mt-19 sm:-mt-19 -mt-16 container"
          >
            <DarkMode
              className="active:scale-95 hover:scale-105 active:duration-300"
            />
          </div>

          {/* MENU DESKTOP */}
          <div
            className="hidden md:flex justify-center py-3 lg:w-full xl:w-200 xl:ml-75 xl:mt-6 
            2xl:ml-180 lg:ml-6 container relative cursor-pointe"
          >
            <ul
              className="flex items-center gap-13 text-1xl lg:text-lg 2xl:ml-33 xl:ml-35 lg:ml-16 md:ml-20
              2xl:gap-16 xl:gap-12 lg:gap-6 md:gap-0 sm:gap-4 md:text-sm"
            >

              {Menu.map((data) => (
                <li key={data.name}>
                  <Link
                    className="font-bold text-amber-800 dark:text-white inline-block px-4 primary-btn duration-200 2xl:text-3xl"
                    to={data.link}
                  >
                    {data.name}
                  </Link>
                </li>
              ))}

              <li className="group relative cursor-pointer">
                <a
                  href="https://kiwiowndaniel27.github.io/Bakery_LaCr-me.com/#/tienda"
                  className="flex items-center primary-btn 2xl:text-3xl text-amber-800 dark:text-white"
                >
                  Menú

                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </a>

                <div
                  className="absolute z-50 hidden group-hover:block w-41 rounded-md
                  bg-transparent backdrop-blur-sm p-2 text-black"
                >
                  <ul>
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <Link
                          to={data.link}
                          className="inline-block p-3 primary-btn w-full rounded-full"
                        >
                          {data.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* MENU MOBILE */}
      <nav className={`navbar ${isOpen ? "active" : ""}`}>

        <button
          className="absolute top-8 right-3 md:hidden 
          transition-transform duration-300 ease-in-out
          hover:scale-110 active:scale-95"
          onClick={handleClick}
        >
          <RiCloseLine
            size={50}
            className={`text-black dark:text-white transition-transform duration-900 ${
              isOpen ? "rotate-0 scale-100" : "rotate-270 scale-75"
            }`}
          />
        </button>

        {/* LOGOS */}
        <img
          className="-mt-140 absolute w-75 container block dark:hidden"
          src="./assets/logo.1.1.webp"
          alt=""
        />

        <img
          className="-mt-140 absolute w-75 container hidden dark:block"
          src="./assets/logo.1.1.webp"
          alt=""
        />

        <img
          className="active:scale-95 hover:scale-105 mt-108 2xl:mt-0 absolute w-33 container block dark:hidden"
          src="./assets/logoDQCompany.webp"
          alt=""
        />

        <img
          className="active:scale-95 hover:scale-105 mt-108 2xl:mt-0 absolute w-33 container hidden dark:block"
          src="./assets/logoDQCompany.webp"
          alt=""
        />

        {/* LINKS */}
        <ul className="flex flex-col items-center gap-6 text-xl -mt-19">

          <li>
            <a
              href=""
              className="text-black text-sm dark:text-white font-bold inline-block px-4 primary-btn duration-200 hover:text-amber-400 active:scale-95"
              onClick={handleClick}
            >
              Elije tu mejor opción
            </a>
          </li>

          <a
            href="https://kiwiowndaniel27.github.io/Bakery_LaCr-me.com/#/tienda"
            className="text-black text-xl dark:text-white font-bold inline-block px-4 primary-btn duration-200 hover:text-amber-400 active:scale-95 -mt-6"
          >
            Menú
          </a>

          {Menu.map((data) => (
            <li key={data.name}>
              <Link
                className="text-black dark:text-white font-bold inline-block px-4 primary-btn duration-200 hover:text-amber-400 active:scale-95 -mt-3"
                to={data.link}
                onClick={handleClick}
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* MODAL SWEET SHOPPER */}
      {isSweetModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-999">

          {/* FONDO */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsSweetModalOpen(false)}
          ></div>

          {/* CONTENIDO */}
          <div className="relative z-50 flex flex-col items-center gap-4 mt-11 md:mt-60">

            {/* WHATSAPP */}
            <a
              href="https://wa.me/593984611893?text=Hola%20,estoy%20interesado/a%20en%20un%20detalle%20exclusivo%20,que%20me%20recomiendas🍪🎂🎁💝"
              target="_blank"
              rel="noreferrer"
              className="active:scale-95 hover:scale-105"
            >
              <img
                src="./assets/bakeryico.png"
                alt=""
                className="w-24 -mt-80 ml-3"
              />

              <p className="text-center text-white text-sm font-semibold">
                Personal Shopper
              </p>
              <p className="text-center text-white text-sm font-semibold">
                Catálogo
              </p>
            </a>


            <div className="-ml-40 absolute -mt-40 md:-ml-90 active:scale-95 hover:scale-105">
            <a
              href="#"
              className=""
            >
              <img
                src="./assets/pastelico.png"
                alt=""
                className="w-16"
              />

              <p className="text-center text-white text-sm font-semibold mt-3">
                Pasteles
              </p>
            </a>
            </div>

            {/* CATALOGO */}
            <div className="ml-36  -mt-43 md:ml-0 active:scale-95 hover:scale-105">
            <a
              href="#"
              className=""
            >
              <img
                src="./assets/galletaico.png"
                alt=""
                className="w-23"
              />

              <p className="text-center text-white text-sm font-semibold mt-3">
                Galletas
              </p>
            </a>
            </div>

            {/* SOPORTE */}
            <div className="-ml-40 absolute -mt-3 md:-mt-43 md:ml-90 active:scale-95 hover:scale-105">
            <a
              href="#"
              className=""
            >
              <img
                src="./assets/desayunico.png"
                alt=""
                className="w-23"
              />

              <p className="text-center text-white text-sm font-semibold mt-3">
                Desayunos
              </p>
            </a>
            </div>

            <div className="ml-36  mt-7 md:-ml-90 active:scale-95 hover:scale-105">
            <a
              href="#"
              className=""
            >
              <img
                src="./assets/detallico.png"
                alt=""
                className="w-23"
              />

              <p className="text-center text-white text-sm font-semibold mt-3">
                Detalles
              </p>
            </a>
            </div>

            <div className="-ml-40 absolute mt-35 md:mt-0 md:ml-0 active:scale-95 hover:scale-105">
            <a
              href="#"
              className=""
            >
              <img
                src="./assets/cumplico.png"
                alt=""
                className="w-23"
              />

              <p className="text-center text-white text-sm font-semibold mt-3">
                Cumpleaños
              </p>
            </a>
            </div>

            <div className="ml-36  mt-33 absolute md:mt-0 md:ml-90 active:scale-95 hover:scale-105">
            <a
              href="#"
              className=""
            >
              <img
                src="./assets/especilico.png"
                alt=""
                className="w-29"
              />

              <p className="text-center text-white text-sm font-semibold mt-3">
                Fechas especiales
              </p>
            </a>
            </div>

            

            {/* BOTON CERRAR */}
            <button
              onClick={() => setIsSweetModalOpen(false)}
              className="bg-white dark:bg-gray-900 dark:text-white px-8 py-2 rounded-xl font-bold active:scale-95 hover:scale-105 mt-75 absolute md:mt-36"
            >
              Cancelar
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default Navbar;