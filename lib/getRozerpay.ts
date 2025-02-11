import Razorpay from "razorpay";

let RazorpayPromise: Promise<Razorpay | null>;

export const getRazorpay = () => {
  if (!RazorpayPromise) {
    RazorpayPromise = new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => {
          resolve((window as any).Razorpay); // Correct way to expose Razorpay
       
      };
      script.onerror = () => {
        resolve(null);
      };
      document.body.appendChild(script);
    });
  }
  return RazorpayPromise;
};