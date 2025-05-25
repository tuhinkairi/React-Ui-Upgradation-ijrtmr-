// components/SubmitPaperCard.tsx

import { ArrowUpRight } from "lucide-react";

export default function ArchiveSubmitPaperCard() {
  return (
    <div className="max-w-xs rounded-2xl shadow-md bg-white p-6 space-y-4 transition-transform hover:scale-[1.02]">
      {/* Image */}
      <img
        src="./submitPaper.png" // Replace with your image path
        alt="Submit Illustration"
        className="w-full h-auto rounded-lg"
      />

      {/* Title & Description */}
      <div>
        <h3 className="text-lg font-semibold">Submit Paper</h3>
        <p className=" mt-2 text-base">
          Authors submit their profile <br />
          Paper/Manuscript doc/docx
        </p>
      </div>

      {/* CTA Button */}
      <button className="flex items-center justify-center gap-2 bg-peach-100 text-black text-sm font-medium py-2 px-4 rounded-lg border border-peach-200 hover:bg-peach-200 transition">
        Submit <ArrowUpRight size={16} />
      </button>
    </div>
  );
}
