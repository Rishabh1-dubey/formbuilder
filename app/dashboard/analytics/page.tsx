
import Analtytics from "@/components/Analtytics";
import { getFormStats } from "@/actions/formStats";

const page = async () => {
  const data = await getFormStats();

  return (
    <div>
      <Analtytics noOfSubmissions={data || 0} />
    </div>
  );
};

export default page;
