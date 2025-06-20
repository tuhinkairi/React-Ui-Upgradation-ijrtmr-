import CommonLayout from "../../components/layout/CommonLayout";
import VerificationSection from "../about/VerificationSection";
import IndexingPartnerArchive from "../archive/components/IndexingPartnerArchive";

export default function IndexAbstract() {
  return (
    <CommonLayout>
      <IndexingPartnerArchive/>
      <VerificationSection/>
    </CommonLayout>
  )
}
