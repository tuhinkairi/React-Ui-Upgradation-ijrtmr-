import ArchiveCard from "../cards/ArchiveCard";
import JoinIPNCard from "../cards/JoinIPNCard";
import LatestPublication from "../cards/LatestPublication";
import RecentConferenceCard from "../cards/RecentConferenceCard";
import ImpactUGCCard from "../ImpactUGCCard";

export default function WrapperLayout({children}:{children:React.ReactNode}) {
  return (
    <section className="_journalLayout ml-16 grid grid-cols-4 2xl:grid-cols-5 justify-between gap-5 mr-4 xl:mr-16">
        <div className="lhs col-span-3 2xl:col-span-4 mr-2">
          {children}
            
        </div>
        <div className="space-y-6 flex flex-col items-end">
            <ImpactUGCCard/>
            <JoinIPNCard/>
            <LatestPublication/>
            <ArchiveCard/>
            <RecentConferenceCard/>
        </div>
    </section>
  )
}
