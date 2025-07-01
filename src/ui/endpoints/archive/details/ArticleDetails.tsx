import { Share2 } from "lucide-react";
import { IoReload } from "react-icons/io5";
import { useEffect, useState } from "react";
import FullArtical from "./FullArtical";
import RelatedArticles from "../components/RelatedArticals";
import References from "./References";
import Citations from "./Citations";
import ArticleMetrics from "./ArticleMetrics";
import Licensing from "./Licensing";
import { CgProfile } from "react-icons/cg";
import PrimaryBtn from "../../../components/Btns/PrimaryBtn";
import { ImQuotesLeft } from "react-icons/im";
import { useAppSelector } from "../../../../lib/store/store";
import { Link, useNavigate } from "react-router-dom";

type TabOption = "Full Article" | "References" | "Citations" | "Metrics" | "Licensing";

const ArticleDetails = () => {
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
              style={{ borderRadius: 0 }}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {currentItem === "Full Article" && <FullArtical content={ActiveArtical?.abstract ?? ""} pdf_url={ActiveArtical?.pdf_url ?? ""} />}
      {currentItem === "Citations" && <Citations />}
      {currentItem === "Licensing" && <Licensing />}
      {currentItem === "Metrics" && <ArticleMetrics />}
      {currentItem === "References" && <References content={ActiveArtical?.references ?? ""} />}
      <RelatedArticles />
    </div>

  );
}; export default ArticleDetails;