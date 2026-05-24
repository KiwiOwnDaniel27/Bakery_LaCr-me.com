const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/pagar", async (req, res) => {

  const { token, amount } = req.body;

  try {

    const response = await axios.post(
      "https://api.kushkipagos.com/card/v1/charges",
      {
        token: token,
        amount: {
          subtotalIva: 0,
          subtotalIva0: amount,
          ice: 0,
          iva: 0,
          currency: "USD"
        }
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Private-Merchant-Id": process.env.PRIVATE_MERCHANT_ID
        }
      }
    );

    res.json({
      approved: response.data.approved,
      data: response.data
    });

  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json({
      approved: false,
      error: "Error procesando pago"
    });
  }

});

app.listen(3001, () => {
  console.log("Servidor corriendo en puerto 3001");
});