import Link from "next/link";
import React from "react";
import { Progress } from "./ui/progress";

import {  MAX_FREE_FORM_TOKEN } from "@/lib/utils";

import { getForm } from "@/actions/getForm";
import { getUserSubscription } from "@/actions/getUserSubscription";


type Props = {
  userId:string | undefined;
}

const UpgradeButton : React.FC<Props> = async ({userId}) => {
  const forms = await getForm(); 
  const isSubscribed = await getUserSubscription(userId!)

  const formsGenerated = forms?.data?.length;
  const percentage = (formsGenerated! / MAX_FREE_FORM_TOKEN) * 100;


  return (
    <div className="m-3">
      {isSubscribed ? (
        <span className="text-sm">
          You have a subscription plan, you are eligble to create more forms
        </span>
      ) : (
        <>
          <Progress value={percentage}/>
          <p>
            2 out of 3 forms generated.{" "}
            <Link
              href={"/dashboard/upgrade"}
              className="text-blue-600 underline"
            >
              {" "}
              Upgrade{" "}
            </Link>{" "}
            to generate more forms
          </p>
        </>
      )}
    </div>
  );
};

export default UpgradeButton;