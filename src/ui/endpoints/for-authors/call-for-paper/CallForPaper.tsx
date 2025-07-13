import CommonLayout from "../../../components/layout/CommonLayout";
import VerificationSection from "../../about/VerificationSection";
import Paper from "./Paper";

const CallForPapers = () => {
  return (

    <CommonLayout className="px-3 sm:px-6 bg-white text-base">
        <Paper/>
        <VerificationSection />
    </CommonLayout>
  );
};

export default CallForPapers;
