import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Razorpay signature verification
  const webhookSecret = process.env.RAZORPAY_KEY_WEBHOOK!;
  const razorpaySignature = req.headers["x-razorpay-signature"] as string;
  const body = JSON.stringify(req.body);

  const expectedSignature = crypto
    .createHmac("sha256", webhookSecret)
    .update(body)
    .digest("hex");

  if (expectedSignature !== razorpaySignature) {
    return res.status(400).json({ error: "Invalid signature" });
  }

  const event = req.body.event;
  const payload = req.body.payload;

  switch (event) {
    case "payment.captured":
      console.log("Payment Captured:", payload.payment.entity);
      // ✅ Store payment details in your database here
      break;

    case "payment.failed":
      console.log("Payment Failed:", payload.payment.entity);
      // ✅ Handle failed payments (e.g., notify user)
      break;

    case "order.paid":
      console.log("Order Paid:", payload.order.entity);
      // ✅ Update order status in your database
      break;

    default:
      console.log("Unhandled event:", event);
  }

  return res.status(200).json({ success: true });
}
