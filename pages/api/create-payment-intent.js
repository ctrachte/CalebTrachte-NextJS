import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";
export const runtime = 'edge';

const stripe = new Stripe(process.env.NEXT_PUBLIC_stripe_test_secret, {
  typescript: false,
  apiVersion: "2022-11-15"
});

export default async function POST(req) {
  const { data } = await req.json();
  const { amount } = data;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "USD",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json(
      { paymentIntent: paymentIntent.client_secret },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 400 }
    );
  }
}