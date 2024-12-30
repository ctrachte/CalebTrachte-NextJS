import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";
export const runtime = 'edge';

const stripe = new Stripe(process.env.NEXT_PUBLIC_stripe_test_secret, {
  typescript: false,
  apiVersion: "2022-11-15",
});

export default async function POST(req) {
  const { data } = await req.json();
  try {
    const session = await stripe.checkout.sessions.create({
        billing_address_collection: 'required',
        shipping_address_collection: {
          allowed_countries: ['US', 'CA'],
        },
        shipping_options: [{
            id: 'shr_1QbYOvCMHZu7lKLBUsWrrmju',
            label: 'Ground shipping',
            detail: 'Ground shipping via USPS',
          }],
        line_items: data.line_items,
        mode: 'payment',
        ui_mode: 'custom',
        return_url: 'https://calebtrachte.com/sunflare',
      });
      

    return NextResponse.json(
      { session: session },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 400 }
    );
  }
}
