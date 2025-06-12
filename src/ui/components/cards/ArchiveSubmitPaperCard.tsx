// components/SubmitPaperCard.tsx

import { ArrowUpRight } from "lucide-react";
import PrimaryBtn from "../Btns/PrimaryBtn";

export default function ArchiveSubmitPaperCard() {
  return (
    <div className="max-w-xs w-full bg-white rounded-2xl shadowSprade overflow-hidden grid grid-rows-2">
      <img
        src="/submitPaper.png"
        alt="Online Submission"
        className="object-cover h-52 mx-auto"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-primary-text mb-2">Online Submission</h3>
        <p className="text-sm text-gray-700 mb-5 leading-relaxed">
          Submit your paper through our advanced editorial management system
          anytime, from anywhere in the world.
        </p>
        <PrimaryBtn>
          Submit <ArrowUpRight size={16} />

        </PrimaryBtn>
      </div>
    </div>

  );
}
