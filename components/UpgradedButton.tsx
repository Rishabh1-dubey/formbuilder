import Link from "next/link";
import { Progress } from "./ui/progress";
import {  MAX_FREE_FORM_TOKEN } from "@/lib/utils";
import { getForms } from "@/actions/getForm";
import { getUserSubscription } from "@/actions/getUserSubscription";



type Props = {
  userId:string | undefined;
}

const UpgradeButton : React.FC<Props> = async ({userId}) => {
  const forms = await getForms(); 
  const isSubscribed = await getUserSubscription(userId!)
  // console.log("checking the upgrade button of mer",userId)


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
            {formsGenerated} out of {MAX_FREE_FORM_TOKEN} forms generated.{" "}
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