import JoinIPNCard from "../cards/JoinIPNCard";
import ImpactUGCCard from "../ImpactUGCCard";
import JournalParticulars from "../JournalParticulars";

export default function JournalLayout() {
  return (
    <section className="_journalLayout ml-16 grid grid-cols-4 justify-center gap-2 mr-4 xl:mr-16">
        <div className="lhs col-span-3">
            <JournalParticulars/>
        </div>
        <div className="space-y-6">
            <ImpactUGCCard/>
            <JoinIPNCard/>
        </div>
    </section>
  )
}
