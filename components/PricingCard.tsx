"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { Button } from "./ui/button";

import { PricingPlan, pricingPlan } from "@/lib/pricingPlan";
import { Badge } from "./ui/badge";
import { useRouter } from "next/navigation";
import { getStripe } from "@/lib/stripe-client";

type Props = {
  userId: string | undefined;
};

const PricingCard: React.FC<Props> = ({ userId }) => {
  const router = useRouter();

  const checkoutHandler = async (price: number, plan: string) => {
    if (!userId) {
      router.push("/sign-in");
      return;
    }
    if (price === 0) {
      return;
    }

    try {
      const { sessionId } = await fetch("/api/stripe/checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ price, userId, plan }),
      }).then((res) => res.json());




      const stripe = await getStripe();

console.log("session id", sessionId)
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="pb-12 text-center">
        <h1 className="font-bold text-2xl">Plan and Pricing</h1>
        <p className="text-gray-600">
          Recieve unlimited credits when you pay early, and save your plan
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-items-center">
        {pricingPlan.map((item: PricingPlan, index: number) => {
          return (
            <Card
              key={index}
              className={`${item.level === "Enterprise" ? "bg-black text-white" : null
                } sm:w-[350px] w-full  h-full flex flex-col cursor-pointer`}
            >
              <CardHeader className="flex items-center gap-2 flex-row">
                <CardTitle className="text-lg sm:text-xl lg:text-2xl">
                  {item.level}
                </CardTitle>

                {item.level === "Pro" && (
                  <Badge className="rounded-full bg-amber-700 hover:bg-amber-700 cursor-pointer">
                    {" "}
                    🔥Popular
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="flex-1">
                <p className="font-bold text-lg sm:text-xl lg:text-2xl pb-2">
                  {item.price}
                </p>
                <ul className="space-y-2">
                  {item.services.map((item, index) => {
                    return (
                      <li key={index}>
                        {" "}
                        <span className="text-green-700 px-2"> ✓</span> {item}
                      </li>
                    );
                  })}
                </ul>
              </CardContent>{" "}
              <CardFooter className="">
                <Button
                  variant={"outline"}
                  className={`${item.level === "Enterprise"
                    ? "bg-white text-black font-medium"
                    : null
                    }  w-full`}
                  onClick={() =>
                    checkoutHandler(
                      item.level === "Pro"
                        ? 15
                        : item.level === "Enterprise"
                          ? 40
                          : 0,
                      item.level
                    )
                  }
                >
                  Start With {item.level}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default PricingCard;
