import { createSupabaseAdmin } from "@/utils/supabase";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const endpointSecret = process.env.ENDPOINT_SECRET!;

export const config = {
  runtime: "nodejs",
  bodyParser: false,
}

export async function POST(request: Request) {
  console.log("🔔 Webhook received");

  // Read the raw body as an ArrayBuffer
  const rawBodyBuffer = await request.arrayBuffer();
  const rawBody = Buffer.from(rawBodyBuffer).toString("utf-8");

  console.log("Raw Body Length:", rawBody.length);
  console.log("Raw Body Content:", rawBody);

  let event;

  try {
    const signature = request.headers.get("stripe-signature");

    console.log("🔍 Stripe signature received:", signature);
    console.log("🔑 Expected secret:", endpointSecret);

    if (!signature) {
      throw new NextResponse("Missing Stripe signature", { status: 400 });
    }

    event = stripe.webhooks.constructEvent(rawBody, signature!, endpointSecret);
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err);
    return new NextResponse("Invalid signature", { status: 400 });
  }

  console.log("✅ Event received:", event.type);

  // handle the event
  switch (event.type) {
    case "customer.updated":
      const customer = event.data.object;
      const subscription = await stripe.subscriptions.list({
        customer: customer.id,
      });

      if (subscription.data.length) {
        const sub = subscription.data[0];

        // call to supabase to update user table
        console.log("✅ Calling onSuccess()...");
        const { error } = await onSuccessSubscription(
          sub.status === "active",
          sub.id,
          customer.id,
          customer.email!,
        );
        console.log("✅ Calling onSuccess() completed...");

        if (error?.message) {
          console.error("Supabase update error:", error?.message)
          return Response.json({ error: error?.message });
        }
      }  
      break;
    
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  return Response.json({ });
}


// function to update user on subscription
const onSuccessSubscription = async (
  subscription_status: boolean,
  stripe_subscription_id: string,
  stripe_customer_id: string,
  email: string
) => {
  console.log("Update supbase users...")
  const supabaseAdmin = await createSupabaseAdmin();

  return await supabaseAdmin
    .from("users")
    .update({
      subscription_status,
      stripe_subscription_id,
      stripe_customer_id,
    })
    .eq("email", email);
};
