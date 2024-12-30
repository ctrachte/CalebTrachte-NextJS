import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const onSubmit = async (e) => {
    e.preventDefault();
    const cardElement = elements?.getElement("card");

    try {
      if (!stripe || !cardElement) return null;
      const { data } = await axios.post("/api/create-payment-intent", {
        data: { amount: 89 },
      });
      const clientSecret = data.paymentIntent;
      console.log(clientSecret)
      await stripe?.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      }).then(res => {
        if (res.error) alert(res.error.message);
        if (res.paymentIntent) alert("payment submitted successfully!");
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <CardElement />
      <button type="submit">Submit</button>
    </form>
  );
}
