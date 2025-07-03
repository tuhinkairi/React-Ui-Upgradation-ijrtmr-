import { Share2 } from "lucide-react";
import { IoReload } from "react-icons/io5";
import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../lib/store/store";
import { CgProfile } from "react-icons/cg";
import { ImQuotesLeft } from "react-icons/im";
import FullArtical from "../archive/details/FullArtical";
import Citations from "../archive/details/Citations";
import Licensing from "../archive/details/Licensing";
import ArticleMetrics from "../archive/details/ArticleMetrics";
import References from "../archive/details/References";
import RelatedArticles from "../archive/components/RelatedArticals";

type TabOption = "Full Article" | "References" | "Citations" | "Metrics" | "Licensing";

const ConferenceDetails = () => {
  const [currentItem, setCurrentItem] = useState<TabOption>("Full Article")
  const navigate = useNavigate()

  // store data
  const ActiveArtical = useAppSelector((state) => state.conferenceArtical.selectedArticle)
  const auther = [ActiveArtical?.author_1, ActiveArtical?.author_2, ActiveArtical?.author_3, ActiveArtical?.author_4, ActiveArtical?.author_5, ActiveArtical?.author_6].filter(item => item !== null)
  const designation: string[] = ActiveArtical?.designation?.split(",") ?? []
  // functions
  useEffect(() => {
    if (!ActiveArtical) navigate("/conference")
  }, [navigate, ActiveArtical])
  return (
    <div className="mx-auto  bg-white space-y-6 p-5">
      {/* Header + PDF Button */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-semibold leading-snug">
            {ActiveArtical?.title}
          </h2>
        </div>
      </div>

      {/* Meta Information */}
      <div className="space-y-3 text-primary-text leading-7 text-base">
        <div className="flex gap-3 ">
          <span className="font-medium">Author:</span>{" "}
          <div className="text-base flex flex-col gap-3 font-medium">
            <div className="flex gap-3">
              {auther.map((author, index) => (
                index<=2 && <span className="text-primary flex gap-2 items-center" key={index}>
                  <CgProfile size={20} />
                  {author}
                  {index !== auther.length - 1 && ", "}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              {auther.map((author, index) => (
                index>2 &&  <span className="text-primary flex gap-2 items-center" key={index}>
                  <CgProfile size={20} />
                  {author}
                  {index !== auther.length - 1 && ", "}
                </span>
              ))}
            </div>
          </div>
        </div>
        <ul className="text-secondary-text list-decimal list-inside">
          {
            designation.map((designation, index) => (
              <li key={index}>{designation}</li>
            )
            )
          }
        </ul>
        <div>Published Online: {ActiveArtical?.created_at.split("T")[0]}</div>
        <div>Pages: {ActiveArtical?.pages}</div>
      </div>

      {/* DOI and Utilities */}
      <div className="flex items-center gap-4 w-full justify-between text-base">
        <h3 className="text-primary flex gap-2 items-center  mr-10">
          <ImQuotesLeft className="text-primary" /> Cite this article
        </h3>

        {ActiveArtical?.doi && <Link
          to={ActiveArtical?.doi}
          className="text-primary flex items-center gap-1 hover:underline"
        >
          ↗ {ActiveArtical?.doi}
        </Link>}
        <button className="bg-gradient-to-b from-gray-100  to-zinc-300 border border-gray-300 hover:scale-105 transition-all text-dark px-3 py-2 rounded-md font-semibold flex items-center justify-center space-x-3 text-sm">
          <span>
            Check for Updates</span> <IoReload height={20} />
        </button>
        <button className="inline-flex items-center justify-center bg-[#fae0d0] text-primary-text text-sm font-medium w-12 h-12 hover:bg-[#f6d5c3] transition-colors rounded-full">
          <Share2 size={16} className="inline-block" />
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-6 text-lg border-b border-gray-200">
        {["Full Article", "References", "Citations", "Metrics", "Licensing"].map(
          (tab, idx) => (
            <button
              onClick={() => setCurrentItem(tab as TabOption)}
              key={idx}
              className={`pb-2 ${tab === currentItem
                ? "text-primary font-semibold border-b-2 border-primary rounded-none"
                : "text-primary-text"
                }`}
              style={{ borderRadius: 0 }}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {currentItem === "Full Article" && <FullArtical content={ActiveArtical?.abstract ?? ""} pdf_url={ActiveArtical?.pdf_url ?? ""} />}
      {currentItem === "Citations" && <Citations content={ActiveArtical?.citation ?? ""} />}
      {currentItem === "Licensing" && <Licensing />}
      {currentItem === "Metrics" && <ArticleMetrics />}
      {currentItem === "References" && <References content={ActiveArtical?.references ?? ""} />}
      <RelatedArticles />
    </div>

  );
}; export default ConferenceDetails;