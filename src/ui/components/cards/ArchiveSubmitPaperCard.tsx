// components/SubmitPaperCard.tsx

import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ArchiveSubmitPaperCard() {
  return (
    <div className="max-w-md w-full bg-white rounded-2xl shadowSprade overflow-hidden">
      <img
        src="/submitPaper.webp"
        alt="Online Submission"
        className="object-cover h-52 mx-auto"
      />
      <div className="p-5">
        <h3 className="text-xl 2xl:text-xl font-semibold text-primary-text mb-2">Ready to Submit?</h3>
        <p className="text-base 2xl:text-lg text-gray-700 mb-5 leading-relaxed">
          Submit your Article through our editorial management system.
        </p>
        <Link target="_blank" to="https://editorial.fdrpjournals.org/login?journal=3">
        <button className="inline-flex items-center gap-3 bg-green-200 text-sm 2xl:text-base animate-bounce px-6 py-2 hover:bg-green-300 transition-colors rounded-md text-green-600 font-semibold">
          Submit <ArrowUpRight size={16} />
        </button>
        </Link>
      </div>
    </div>

  );
}
