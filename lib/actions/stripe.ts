"use server";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function checkout(email: string, redirectTo: string) {
  return JSON.stringify(
    await stripe.checkout.sessions.create({
      success_url: redirectTo || process.env.NEXT_PUBLIC_SITE_URL,
      cancel_url: process.env.SITE_URL,
      customer_email: email,
      line_items: [{ price: process.env.PRO_PRICE_ID, quantity: 1 }],
      mode: "subscription",
    })
  );
}

export async function manageBilling(customer_id: string) {
  return JSON.stringify(
    await stripe.billingPortal.sessions.create({
      customer: customer_id,
      return_url: process.env.NEXT_PUBLIC_SITE_URL,
    })
  );
}
