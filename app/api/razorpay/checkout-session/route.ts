import { NextRequest, NextResponse } from "next/server";

import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: NextRequest) {
  const { price, userId, plan } = await req.json();

  if (!userId) {
    return NextResponse.json({ error: "User not found" }, { status: 400 });
  }

  const successful = process.env.NEXTAUTH_URL
    ? `${process.env.NEXTAUTH_URL}/success`
    : null;
  const cancelUrl = process.env.NEXTAUTH_URL
    ? ` ${process.env.NEXTAUTH_URL}/cancel`
    : null;

  if (!successful || !cancelUrl) {
    return NextResponse.json(
      { error: "Frontend_url invalid" },
      { status: 400 }
    );
  }
  try {
    const session = await razorpay.orders.create({
      amount: price * 100, // Amount in paise (e.g., 100 INR = 10000 paise)
      currency: "INR", // Change to "USD" if your account supports it
      receipt: `receipt_${Date.now()}`, // Unique receipt ID
      notes: {
        userId: userId as string, // Optional: Add user ID or other metadata
        plan: `You are choosing ${plan} plan`, // Optional: Add plan details
      },
    });
    
    return NextResponse.json(
      {
        sessionId: session.id,
        currency: session.currency,
        amount: session.amount,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      { error: "Failed to create Razorpay order" },
      { status: 500 }
    );
  }
}
