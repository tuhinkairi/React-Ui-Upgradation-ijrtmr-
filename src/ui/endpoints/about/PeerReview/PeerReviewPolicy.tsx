import CommonLayout from "../../../components/layout/CommonLayout";
import VerificationSection from "../VerificationSection";
import PeerReviewPaper from "./PeerReviewPaper";

export default function PeerReviewPolicy() {
  return (
    <CommonLayout>
      <PeerReviewPaper/>
      <VerificationSection/>
    </CommonLayout>
  );
}
