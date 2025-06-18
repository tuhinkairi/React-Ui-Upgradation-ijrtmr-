import { policies, quickLinks } from "../../../data/listingSection";
import ArchiveCard from "../cards/ArchiveCard";
import IndexingCard from "../cards/IndexingCard";
// import JoinIPNCard from "../cards/JoinIPNCard";
import LatestPublication from "../cards/LatestPublication";
import ListingSection from "../cards/ListingSection";
import RecentConferenceCard from "../cards/RecentConferenceCard";

export default function WrapperLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="_journalLayout ml-16 grid grid-cols-4 2xl:grid-cols-5 justify-between gap-5 mr-4 xl:mr-16">
      <div className="lhs col-span-3 2xl:col-span-4 mr-2">
        {children}

      </div>
      <div className="space-y-2 flex flex-col items-end">
        <IndexingCard />
        {/* <JoinIPNCard/> */}
        <LatestPublication />
        <ArchiveCard />
        <RecentConferenceCard />
        <ListingSection data={quickLinks} title='Quick Links' />
        <ListingSection data={policies} title='policies' />

      </div>
    </section>
  )
}
