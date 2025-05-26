import { Search, Eye, Download, Share2, SearchIcon } from "lucide-react";
import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import ArchiveBtn from "../../components/Btns/ArchiveBtn";

const papers = [
  {
    title: "A Comprehensive Review on Antibiotic Resistance",
    author: "Krishnakant V. Late",
    date: "13 May 2025",
    pages: "01–09",
  },
  {
    title:
      "AI-Driven Conversational Models for Supporting Migrant Career Guidance and Labour Market Integration: A Scoping Review",
    author: "Krishnakant V. Late",
    date: "13 May 2025",
    pages: "01–09",
  },
  {
    title: "AI-Powered Career Advisor (A Personalized Career Guidance System)",
    author: "Krishnakant V. Late",
    date: "13 May 2025",
    pages: "01–09",
  },
];

export default function ArchiveVolumes() {
  const [active, setActive] =useState<string>("Volume 3, (2025)");
  const [volumeName, setVolumeName] = useState<string>("Volume 3, (2025)")
  return (
    <div className="mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-xl font-semibold">Volume 6, Issue 5 (2025)</h1>
      </div>

      {/* Volume Navigation */}
      <div className="flex flex-wrap justify-center items-center gap-2 gap-x-5 text-base font-medium ">
        <button><GrFormPrevious className="text-primary-text"/></button>
        <span className={`cursor-pointer ${active=="Volume 6, (2025)" && "text-primary font-semibold text-lg"}`}>Volume 6, (2025)</span>
        <span className={`cursor-pointer ${active=="Volume 4, (2025)" && "text-primary font-semibold text-lg"}`}>Volume 4, (2025)</span>
        <span className={`cursor-pointer ${active=="Volume 5, (2025)" && "text-primary font-semibold text-lg"}`}>Volume 5, (2025)</span>
        <span className={`cursor-pointer ${active=="Volume 3, (2025)" && "text-primary font-semibold text-lg"}`}>Volume 3, (2025)</span>
        <button><GrFormNext className="text-primary-text"/></button>
        <span className="cursor-pointer text-gray-500">See all volumes </span>
      </div>

      {/* Issue Tabs */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {["Issue 3", "Issue 2", "Issue 1"].map((issue) => (
            <button
              key={issue}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                issue === "Issue 3"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-primary-text"
              }`}
            >
              {issue}
            </button>
          ))}
        </div>

        <button className="text-sm text-primary font-semibold flex items-center gap-1">
          <Share2 size={16} /> Share
        </button>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 mt-2">
        <input
          type="text"
          placeholder="Search by Paper ID, Paper Name"
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
        />
        <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1">
          <Search size={16} /> Search
        </button>
      </div>

      {/* Paper Cards */}
      <div className="space-y-6">
        {papers.map((paper, idx) => (
          <div
            key={idx}
            className="bg-white shadow rounded-xl p-4 space-y-2 border"
          >
            <div className="flex justify-between items-start">
              <Link
                to="#"
                className="text-xl font-serif  text-primary group-hover:underline max-w-5/6"
              >
                {paper.title} <span className="text-orange-400">↗</span>
              </Link>
              <button className="text-base inline-flex items-center justify-center gap-2 text-primary border border-orange-400 px-3 py-1"style={{borderRadius:9999}}>
                <SearchIcon className="w-5"/> Google
              </button>
            </div>

            <div className="text-sm text-gray-600">
              Author: {paper.author}
              <br />
              Published Online: {paper.date}
              <br />
              Pages: {paper.pages}
            </div>

            {/* Metrics */}
            <div className="flex items-center gap-6 text-xs text-gray-500 mt-1">
              <div className="flex items-center gap-1">
                <Eye size={14} /> 256 Views
              </div>
              <div className="border-l h-4" />
              <div>0 CrossRef Citations</div>
              <div className="border-l h-4" />
              <div>0 Altmetric</div>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 text-sm text-primary font-medium">
                <button className="hover:underline">Abstract</button>
                <button className="hover:underline">Full Text</button>
                <button className="hover:underline">References</button>
              </div>

              <ArchiveBtn className="max-w-fit gap-1">
                View PDF <Download size={16} />
                </ArchiveBtn>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
