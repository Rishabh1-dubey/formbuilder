


export type PricingPlan={
    level:string;
    price:string;
    services:string[];
}


export const pricingPlan :PricingPlan[] = [
  {
    level: "Free",
    price: "$0/Month",
    services: [
      "3 Free Credits",
      "Basic Supports",
      "Limited Featured",
      "Community Access",
    ],
  },
  {
    level: "Pro",
    price: "$15/Month",
    services: [
      "Unlimited Credits",
      "Basic Supports",
      "Limited Featured",
      "Community Access",
    ],
  },
  {
    level: "Enterprise",
    price: "$40/Month",
    services: [
      "Unlimited Credits",
      "Basic Supports",
      "Limited Featured",
      "Community Access",
      "Monthly Updates"
    ],
  },
];
