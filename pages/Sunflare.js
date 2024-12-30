import CheckoutForm from "../components/CheckoutForm";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_stripe_test_pub);

const elementsOptions = {
  mode: "payment",
  amount: 1099,
  currency: "usd",
  appearance: {
    theme: "stripe",
    variables: {
      colorText: '#30313d',
      colorDanger: '#df1b41',
      fontFamily: 'Ideal Sans, system-ui, sans-serif',
      spacingUnit: '2px',
      borderRadius: '4px',
      // See all possible variables below
    }
  },
};

const options = {
  layout: {
    type: 'accordion',
    defaultCollapsed: false,
    radios: true,
    spacedAccordionItems: false
  }
};

const Sunflare = () => {
  return (
    <Elements stripe={stripePromise} options={elementsOptions}>
      <CheckoutForm options={options} />
    </Elements>
  );
};

export default Sunflare;
