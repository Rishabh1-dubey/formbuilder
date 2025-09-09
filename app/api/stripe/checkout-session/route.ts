import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
export async function POST(req: Request) {
  const { price, userId, plan } = await req.json();
  console.log(price, userId, plan);

  if (!userId) {
    return NextResponse.json({ error: "User not found" }, { status: 400 });
  }
  const successUrl = `${process.env.NEXTAUTH_URL}/success`;
  const cancelUrl = `${process.env.NEXTAUTH_URL}/cancel`;

  if (!successUrl || !cancelUrl) {
    return NextResponse.json(
      { error: "Frontend_url invalid" },
      { status: 400 }
    );
  }
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: Number(price) * 100,
            product_data: {
              name: `You are choosing ${plan} plan`,
            },
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        userId: userId as string,
      },
    });

    console.log("session.metadata.userId", session?.metadata?.userId);
    return NextResponse.json(
      { sessionId: session?.id, url: session?.url },

      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
