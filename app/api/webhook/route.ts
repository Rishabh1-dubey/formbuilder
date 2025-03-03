import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const body = await req.text(); // Use `req.text()` instead of `req.body` in App Router
    const webhookSecret = process.env.RAZORPAY_KEY_WEBHOOK!;
    const razorpaySignature = req.headers.get("x-razorpay-signature") || "";

    // Validate webhook signature
    const expectedSignature = crypto
      .createHmac("sha256", webhookSecret)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpaySignature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    const jsonBody = JSON.parse(body); // Parse the JSON body
    const event = jsonBody.event;

    switch (event) {
      case "payment.captured":
        // ✅ Store payment details in the database
        break;

      case "payment.failed":
        // ✅ Handle failed payments (e.g., notify user)
        break;

      case "order.paid":
        // ✅ Update order status in the database
        break;

      default:
        return NextResponse.json({ error: "Unhandled event" }, { status: 400 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
