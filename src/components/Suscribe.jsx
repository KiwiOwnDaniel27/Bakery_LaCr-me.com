import React from 'react'

const Suscribe = () => {
  return (
    <div 
      data-aos="zoom-in" 
      className="bg-[url('/assets/logo.1.1.webp')] bg-rose-200 dark:bg-gray-900 dark:bg-[url('/assets/logo.1.1.webp')]  bg-center p-6 
      h-100 lg:h-130 shadow-lg 2xl:h-253 xl:h-150 md:h-103 sm:bg-contain"
    >
        
      <form 
        action="https://formsubmit.co/freepass.ec@gmail.com" 
        method="POST"
      >
        
        {/* Opcionales pero recomendados */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="Nueva Suscripción Free Pass" />
        <input type="hidden" name="_next" value="https://kiwiowndaniel27.github.io/FreePass.com/" 
        />

        <div className="container max-w-xl py-10 rounded-2xl 2xl:w-200 xl:w-250
        mt-12 md:mt-0 lg:mt-30 sm:-mt-3">

          
          <div className="space-y-6 mx-auto 2xl:w-250 2xl:-ml-30 2xl:mt-23 backdrop-blur-lg ">
            
            <h1 className="text-black dark:text-white text-2xl xl:text-5xl text-center 
            sm:text-4xl font-semibold 2xl:text-7xl 2xl:mb-23 lg:mb-11 sm:mb-16">
              Obtén nuestras mejores promociones.
            </h1>

            

            <div className="flex items-center text-sm 2xl:text-4xl ">
              
              <input 
                type="email" 
                name="email" 
                required
                data-aos="fade-up"
                placeholder="Ingresar tu correo electrónico"
                className="w-full p-3 bg-white rounded-2xl"
              />

              <button 
                data-aos="fade-up" 
                type="submit" 
                className="bg-amber-800 text-white p-3 rounded-lg cursor-pointer border
                 border-zinc-600 hover:bg-green-700 dark:hover:bg-amber-500 text-sm active:scale-95 
                 hover:scale-105 active:bg-white active:text-amber-400 active:duration-300 
                 2xl:text-4xl"
              >
                Suscribete
              </button>

            </div> 
            
          </div>
        </div>
      </form>
    </div>
  );
};

export default Suscribe;


{/* con base de datos propia nuestra ejemplo

  import React from 'react'
import emailjs from "emailjs-com";

const Suscribe = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "TU_SERVICE_ID",
      "TU_TEMPLATE_ID",
      e.target,
      "TU_PUBLIC_KEY"
    ).then(
      (result) => {
        console.log("Correo enviado");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div 
      data-aos="zoom-in" 
      className="bg-[url('/assets/fondo.webp')] dark:bg-[url('/assets/fondo1.0.webp')] bg-contain bg-center p-6 h-80 shadow-lg mt-23 2xl:h-120"
    >

      <form onSubmit={sendEmail}>
        <input 
          type="email"
          name="user_email"
          placeholder="Ingresar tu correo electrónico"
          required
        />
        <button type="submit">Suscribete</button>
      </form>

    </div>
  );
};

export default Suscribe;

*/}