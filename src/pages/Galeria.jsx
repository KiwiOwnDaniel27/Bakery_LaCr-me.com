import Especiales from "../components/Especiales";
import Eventos from "../components/Eventos";
import Flores from "../components/Flores";
import Footer2 from "../components/Footer2";
import Navbar from "../components/Navbar";


function Galeria ()  {
  return (
    <div>
      <div>
        <Navbar/>
      <div >
        <Especiales/>
      </div>
      <div >
        <Flores/>
      </div>
      <div >
        <Eventos/>
      </div>
      <div>
        <Footer2/>
      </div>
      </div>
    </div>
  )
}

export default Galeria;