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
        <h3 className="text-xl 2xl:text-xl font-semibold text-primary-text mb-2">Online Submission</h3>
        <p className="text-base 2xl:text-lg text-gray-700 mb-5 leading-relaxed">
          Submit your paper through our advanced editorial management system anytime, from anywhere in the world.
        </p>
        <Link target="_blank" to="https://editorial.fdrpjournals.org/login?journal=2">
        <button className="inline-flex items-center gap-3 bg-green-300 text-primary-text text-sm 2xl:text-base font-medium px-6 py-2 hover:bg-green-400 transition-colors rounded-md">
          Submit <ArrowUpRight size={16} />
        </button>
        </Link>
      </div>
    </div>

  );
}
