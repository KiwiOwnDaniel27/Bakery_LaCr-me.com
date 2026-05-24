import { useEffect } from "react";

const Payment = () => {

  return (
    <button >
      
    </button>
  );
};

export default Payment;

/* 
import { useEffect } from "react";

const Payment = () => {

  useEffect(() => {
    const kushki = new window.KushkiCheckout({
      merchantId: "TU_PUBLIC_MERCHANT_ID",
      currency: "USD",
      amount: {
        subtotalIva: 100,
        subtotalIva0: 0,
        iva: 15,
      }
    });

    window.kushki = kushki;
  }, []);

  const handlePayment = () => {
    window.kushki.requestToken()
      .then((response) => {
        console.log("Token generado:", response.token);
        // enviar token al backend
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <button onClick={handlePayment}>
      Pagar ahora
    </button>
  );
};

export default Payment;

*/


