import Navbar from "../components/Navbar";
import Cumple from "../components/Cumple";
import Pasteles from "../components/Pasteles";
import Footer2 from "../components/Footer2";
import Regalos from "../components/Regalos";

function Amedida() {
  return (
    <div>
        <div>
            <Navbar/>
            <div>
              <Cumple/>
            </div>
            <div>
              <Pasteles/>
            </div>
            <div>
              <Regalos/>
            </div>
            <div>
              <Footer2/>
            </div>
        </div>
    </div>
  )
}

export default Amedida;