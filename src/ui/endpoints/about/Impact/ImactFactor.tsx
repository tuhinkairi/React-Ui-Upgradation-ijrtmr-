import CommonLayout from "../../../components/layout/CommonLayout";
import Title from "../../../other/Title";
import IndexingPartnerArchive from "../../archive/components/IndexingPartnerArchive";

export default function ImactFactor() {
  return (
    <CommonLayout>
      <Title>Impact Factor</Title>
      <div className="space-y-4  text-muted-foreground text-base">

      <img src="/Impact1.png" alt="Impact Factor" className="w-full h-auto mt-10" />
      <img src="/Impact2.png" alt="Impact Factor" className="w-full h-auto mt-5" />
      <img src="/Impact3.png" alt="Impact Factor" className="w-full h-auto mt-5" />
      <img src="/Impact4.png" alt="Impact Factor" className="w-full h-auto -mt-3" />
      </div>
      <IndexingPartnerArchive/>
    </CommonLayout>
  )
}
