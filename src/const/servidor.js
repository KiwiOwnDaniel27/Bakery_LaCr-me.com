import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/pagar", async (req, res) => {
  const { token, amount } = req.body;

  try {
    const response = await axios.post(
      "https://api.kushkipagos.com/card/v1/charges",
      {
        token,
        amount: {
          currency: "USD",
          totalAmount: amount
        }
      },
      {
        headers: {
          "Private-Merchant-Id": "TU_PRIVATE_KEY",
          "Content-Type": "application/json"
        }
      }
    );

    res.json(response.data);

  } catch (error) {
    res.status(500).json(error.response.data);
  }
});

app.listen(3000, () => console.log("Servidor corriendo"));


const handlePayment = async () => {
    try {
      const response = await window.kushki.requestToken();
  
      const payment = await fetch("http://localhost:3000/pagar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: response.token,
          amount: 115
        })
      });
  
      const data = await payment.json();
      console.log(data);
  
    } catch (error) {
      console.error(error);
    }
  };
  