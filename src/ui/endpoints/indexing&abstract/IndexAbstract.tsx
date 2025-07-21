import CommonLayout from "../../components/layout/CommonLayout";
import Title from "../../other/Title";
import VerificationSection from "../about/VerificationSection";
import IndexingPartnerArchive from "../archive/components/IndexingPartnerArchive";

export default function IndexAbstract() {
  return (
    <CommonLayout>
      <div className="mb-3 text-[#333333]">
      <Title>Indexing & Abstraction</Title>
      <p className=" md:w-1/2 text-base 2xl:text-lg">Indexed in leading academic databases, Boosting visibility, reach, and research impact.</p>
      </div>
      <IndexingPartnerArchive/>
      <VerificationSection/>
    </CommonLayout>
  )
}
