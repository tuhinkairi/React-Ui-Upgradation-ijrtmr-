import {  Share2 } from "lucide-react";
import { IoReload } from "react-icons/io5";
import { useState } from "react";
import FullArtical from "./FullArtical";
import RelatedArticles from "../components/RelatedArticals";
import References from "./References";
import Citations from "./Citations";
import ArticleMetrics from "./ArticleMetrics";
import Licensing from "./Licensing";
import { CgProfile } from "react-icons/cg";
import PrimaryBtn from "../../../components/Btns/PrimaryBtn";
import { ImQuotesLeft } from "react-icons/im";

type TabOption = "Full Article" | "References" | "Citations" | "Metrics" | "Licensing";

const ArticleDetails = () => {
  const auther = ["Bisaso Samuel","Muhumuza Gilbert"]
  const [currentItem, setCurrentItem] = useState<TabOption>("Full Article")
  return (
    <div className="mx-auto  bg-white space-y-6 p-5">
      {/* Header + PDF Button */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-semibold leading-snug">
            AI-Driven Conversational Models for Supporting Migrant Career
            Guidance and Labour Market Integration: A Scoping Review
          </h2>
        </div>
      </div>

      {/* Meta Information */}
      <div className="space-y-3 text-primary-text leading-7 text-base">
        <div className="flex items-center gap-3 ">
          <span className="font-medium">Author:</span>{" "}
          {auther.map((author, index) => (
            <span className="text-primary flex gap-2 items-center" key={index}>
              <CgProfile size={18} />
              {author}
              {index !== auther.length - 1 && ", "}
            </span>
          ))}
        </div>
        <ul className="text-secondary-text list-decimal list-inside">
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, ratione!</li>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, ratione!</li>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, ratione!</li>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, ratione!</li>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, ratione!</li>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, ratione!</li>
        </ul>
        <div>Published Online: 13 May 2025</div>
        <div>Pages: 01–09</div>
      </div>

      {/* DOI and Utilities */}
      <div className="flex items-center gap-4 w-full justify-between text-base">
        <h3 className="text-primary flex gap-2 items-center  mr-10">
          <ImQuotesLeft className="text-primary" /> Cite this article
        </h3>
        <a
          href="https://doi.org/10.1080/00051144.2025.2476806"
          className="text-primary flex items-center gap-1 hover:underline"
        >
          ↗ https://doi.org/10.1080/00051144.2025.2476806
        </a>
        <button className="bg-[#995428] text-white px-3 py-2 rounded-md font-semibold flex items-center justify-center space-x-3 text-sm">
          <span>
            Check for Updates</span> <IoReload height={20} />
        </button>
        <PrimaryBtn className="rounded-full">
          <Share2 size={16} />
        </PrimaryBtn>
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
};export default ArticleDetails;