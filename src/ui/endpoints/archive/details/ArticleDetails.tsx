import { FileDown, Share2 } from "lucide-react";
import ArchiveBtn from "../../../components/Btns/ArchiveBtn";
import { FaQuoteLeft } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { useState } from "react";
import FullArtical from "./FullArtical";
import RelatedArticles from "../components/RelatedArticals";
import References from "./References";
import Citations from "./Citations";
import ArticleMetrics from "./ArticleMetrics";
import Licensing from "./Licensing";

type TabOption = "Full Article" | "References" | "Citations" | "Metrics" | "Licensing";

const ArticleDetails = () => {
  const [currentItem, setCurrentItem] = useState<TabOption>("Full Article")
  return (
    <div className="mx-auto  bg-white space-y-6 p-5">
      {/* Header + PDF Button */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-semibold leading-snug max-w-5/6">
            AI-Driven Conversational Models for Supporting Migrant Career
            Guidance and Labour Market Integration: A Scoping Review
          </h2>
        </div>
        <ArchiveBtn className="max-w-fit gap-1" >
          View PDF
          <FileDown size={16} className="ml-4"/> 
        </ArchiveBtn>
      </div>

      {/* Meta Information */}
      <div className="space-y-1 text-primary-text leading-7 text-base">
        <div>
          <span className="font-medium">Author:</span>{" "}
          <span className="text-primary font-medium">Bisaso Samuel</span>,{" "}
          <span className="text-primary font-medium">Muhumuza Gilbert</span>
        </div>
        <div>Published Online: 13 May 2025</div>
        <div>Pages: 01–09</div>
      </div>

      {/* DOI and Utilities */}
      <div className="flex items-center gap-4 w-full justify-between text-base">
        <h3 className="text-primary flex gap-2 items-center font-medium mr-10">
          <FaQuoteLeft className="text-primary" /> Cite this article
        </h3>
        <a
          href="https://doi.org/10.1080/00051144.2025.2476806"
          className="text-orange-500 flex items-center gap-1 hover:underline"
        >
          ↗ https://doi.org/10.1080/00051144.2025.2476806
        </a>
        <button className="bg-[#995428] text-white px-3 py-2 rounded-md font-semibold flex items-center justify-center space-x-3 text-sm">
          <span>
            Check for Updates</span> <IoReload height={20} />
        </button>
        <button className="text-primary bg-peach-100 hover:bg-peach-200 flex items-center justify-center gap-1 h-11 w-11" style={{borderRadius:9999}}>
          <Share2 size={16} />
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
                style={{borderRadius:0}}
            >
              {tab}
            </button>
          )
        )}
      </div>
        
      {currentItem === "Full Article" && <FullArtical/>}
      {currentItem === "Citations" && <Citations/>}
      {currentItem === "Licensing" && <Licensing/>}
      {currentItem === "Metrics" && <ArticleMetrics/>}
      {currentItem === "References" && <References/>}
      <RelatedArticles/>
    </div>

  );
};
export default ArticleDetails;