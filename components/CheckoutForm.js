import {
  CardElement,
  AddressElement,
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";
import { useRouter, usePathname } from "next/router";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!stripe) return null;
      const { data } = await axios.post("/api/create-payment-intent", {
        data: { amount: 89 },
      });
      if (data.paymentIntent) {
        handleSubmit(data.paymentIntent);
      } else {
        alert(
          "Error validating your payment information. Please correct any errors and try again."
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  async function handleSubmit(clientSecret) {
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    try {
      const submittedElements = elements.submit();
      const result = await stripe.confirmPayment({
        clientSecret: clientSecret,
        //`Elements` instance that was used to create the Payment Element
        elements,
        confirmParams: {
          return_url: "https://calebtrachte.com/Sunflare",
        },
        redirect: "if_required",
      });

      if (result.error) {
        console.error(result.error);
      } else if (result.paymentIntent && result.paymentIntent.status === "succeeded") {
        console.log("Payment succeeded");
        history.pushState({ result: result.paymentIntent.id }, "", "/OrderSuccess");
        router.push("/OrderSuccess");
      } else {
        console.log("Payment failed");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <form className="w-96" onSubmit={onSubmit}>
        <h1 className="text-xl font-bold">Payment Information:</h1>
        <PaymentElement />
        <h3 className="text-lg my-3">Shipping Address</h3>
        <AddressElement
          options={{
            mode: "shipping",
            allowedCountries: ["US"],
            fields: {
              phone: "always",
            },
            validation: {
              phone: {
                required: "never",
              },
            },
          }}
        />
        <button
          className="my-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
