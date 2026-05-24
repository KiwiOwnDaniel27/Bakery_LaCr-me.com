import React, { useState } from "react";

const PagoKushki = ({ totalAmount, clearShoppingCart }) => {

  const [loading, setLoading] = useState(false);

  const pagar = async (e) => {
    e.preventDefault();

    if (totalAmount === 0) {
      alert("El carrito está vacío");
      return;
    }

    if (!window.KushkiCheckout) {
      alert("Kushki no está cargado");
      return;
    }

    setLoading(true);

    const kushki = new window.KushkiCheckout({
      publicMerchantId: "TU_PUBLIC_KEY",
      currency: "USD",
      amount: totalAmount.toFixed(2),
    });

    // Abrir checkout
    kushki.open();

    // 🔹 Cuando se cierre el modal
    kushki.on("close", () => {
      setLoading(false);
    });

    // 🔹 Cuando responda el pago
    kushki.on("response", (response) => {
      setLoading(false);

      if (response.approved) {
        alert("Pago aprobado ✅");
        clearShoppingCart();
      } else {
        alert("Pago rechazado ❌");
      }
    });
  };

  return (
    <form onSubmit={pagar}>
      <button
        type="submit"
        disabled={loading}
        className="mt-3 w-full bg-green-500 hover:bg-green-600 
        text-white py-2 rounded-lg 
        hover:scale-105 active:scale-95 
         disabled:cursor-not-allowed"
      >
        {loading ? "Procesando..." : "Pagar"}
      </button>
    </form>
  );
};

export default PagoKushki;

