import { Share2 } from "lucide-react";
import { IoReload } from "react-icons/io5";
import { useEffect, useState } from "react";

import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../lib/store/store";
import { CgProfile } from "react-icons/cg";
import { ImQuotesLeft } from "react-icons/im";
import FullArtical from "../archive/details/FullArtical";
import Citations from "../archive/details/Citations";
import Licensing from "../archive/details/Licensing";
import ArticleMetrics from "../archive/details/ArticleMetrics";
import References from "../archive/details/References";
import RelatedArticles from "../archive/components/RelatedArticals";
import type { ConferenceArticleProps } from "../../../types/Api";
import { setLoading } from "../../../lib/store/Features/loadingSlice";
import { setActiveConference } from "../../../lib/store/Features/conferenceSlice";
import Loading from "../../components/Loading";
import { FetchActiveConference } from "../../../lib/axios/api/conference";
import PrimaryBtn from "../../components/Btns/PrimaryBtn";
import { VscFilePdf } from "react-icons/vsc";
import { MdDone } from "react-icons/md";

type TabOption = "FullArticle" | "References" | "Citations" | "Metrics" | "Licensing";

const ConferenceDetails = () => {
  const searchQuery = useSearchParams();
  const [currentItem, setCurrentItem] = useState<TabOption>(searchQuery[0].get("section")?.replace("-", " ") as TabOption || "FullArticle")
  const id = searchQuery[0].get("paperId")
  const [copy, SetCopy] = useState<boolean>(false)
  const navigate = useNavigate()
  const loading = useAppSelector((state) => state.loadingScreen.loading)
  const dispatch = useAppDispatch()
  const ActiveArticle = useAppSelector((state) => state.conferenceArtical.selectedArticle)
  const [activePaper, setPaper] = useState<ConferenceArticleProps | null>(ActiveArticle)


  // store data
  const auther = [activePaper?.author_1, activePaper?.author_2, activePaper?.author_3, activePaper?.author_4, activePaper?.author_5, activePaper?.author_6].filter(item => item !== null)
  const designation: string[] = activePaper?.designation?.split(",") ?? []


  // functions
  useEffect(() => {
    if (id) {
      if (activePaper?.id !== parseInt(id)) {
        // fetch conference here
        FetchActiveConference({ id: id }).then((data) => {
          dispatch(setLoading(true))
          if (data) {
            dispatch(setActiveConference(data))
            setPaper(data)
          }
        }).finally(() => {
          dispatch(setLoading(false))
        })
      }
    } else navigate("/conference")
  }, [navigate, activePaper, dispatch, id])

  if (loading || !activePaper) {
    return <Loading title="Paper Details" />
  }
  return (
    <div className="mx-auto  bg-white space-y-3 sm:space-y-6 p-2 sm:p-5">
      {/* Header + PDF Button */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-semibold leading-snug">
            {activePaper?.title}
          </h2>
        </div>
      </div>

      {/* Meta Information */}
      <div className="space-y-3 text-primary-text leading-7 text-base">
        <div className="flex gap-3 ">
          <div className="w-full text-base flex gap-3 gap-x-12 justify-between">
            <div className="flex gap-3 gap-x-6 flex-wrap py-2 mb-2">
              {auther.map((author, index) => (
                <span className=" text-primary flex gap-2 items-center text-base sm:text-lg" key={index}>
                  <CgProfile className="text-lg sm:text-2xl" />
                  {author}<span className="text-xs h-full flex items-start -ml-1">{index + 1}</span>
                  {/* {index !== auther.length - 1 && ", "} */}
                </span>
              ))}
            </div>
            {/* <div className="flex gap-3">
              {auther.map((author, index) => (
                index>2 &&  <span className="text-primary flex gap-2 items-center" key={index}>
                  <CgProfile size={20} />
                  {author}
                  {index !== auther.length - 1 && ", "}
                </span>
              ))}
            </div> */}
            <button className="hidden sm:inline-flex items-center justify-center bg-[#fae0d0]  text-sm font-medium px-6 py-2.5 gap-3 hover:bg-[#f6d5c3]  text-paragraph transition-colors rounded-full h-fit">
              <Share2 size={13} className="inline-block" /> Share
            </button>
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
        <h3 className="font-medium">Published Online: {activePaper?.created_at.split("T")[0]}</h3>
        <h3 className="font-medium">Pages: {activePaper?.pages}</h3>
      </div>

      {/* DOI and Utilities */}
     <div className="flex items-start sm:items-center flex-wrap gap-4 w-full justify-between text-base">
             <div className="flex gap-4 sm:gap-0 w-2/3 sm:w-fit justify-between flex-col sm:flex-row ">
               <h3 className="text-primary text-bsae sm:text-lg flex gap-2 items-center sm:mr-10">
                 <ImQuotesLeft className="text-primary" /> Cite this article
               </h3>
     
               {activePaper?.doi && <Link
                 target="_blank"
                 to={activePaper?.doi_link ?? "#"}
                 className="text-primary flex items-center gap-1 hover:underline"
               >
                 ↗ {activePaper?.doi}
               </Link>}
             </div>
     
             <button className="inline-flex sm:hidden items-center justify-center bg-[#fae0d0] text-primary-text text-sm font-medium w-12 h-12 hover:bg-[#f6d5c3] transition-colors rounded-full">
               <Share2 size={13} className="inline-block" />
             </button>
     
             <div className="flex gap-3 justify-between w-full sm:w-fit flex-wrap">
               <Link to={activePaper.pdf_url} rel="noreferrer" className="sm:hidden">
                 <PrimaryBtn className="whitespace-nowrap">
                   View PDF
                   <VscFilePdf size={18} className="ml-4" />
                 </PrimaryBtn>
               </Link>
               <button className="bg-gradient-to-b from-gray-100  to-zinc-300 border border-gray-300 hover:scale-105 transition-all text-dark px-3 py-2 rounded-md font-semibold flex items-center justify-center space-x-3 text-sm">
                 <span>
                   Check for Updates</span> <IoReload height={20} />
               </button>
             </div>
     
                   <button className={`hidden sm:inline-flex items-center justify-center ${copy?"bg-green-300 hover:bg-green-400":"bg-[#fae0d0] hover:bg-[#f6d5c3]"} text-primary-text text-sm font-medium w-12 h-12  transition-colors rounded-full`} onClick={() => {
                     navigator.clipboard.writeText(window.location.href)
                     SetCopy(true)
                     setTimeout(() => {
                       SetCopy(false)
                     }, 2000)
                   }}>
               {!copy ? <Share2 size={13} className="inline-block" /> :<MdDone size={13} className="inline-block" />}
               
             </button>
           </div>
     

      {/* Navigation Tabs */}
      <div className="flex justify-between gap-6 text-lg border-b border-gray-200 overflow-x-auto mt-6 sm:mt-0">
        {["FullArticle", "References", "Citations", "Metrics", "Licensing"].map(
          (tab, idx) => (
            <button
              onClick={() => setCurrentItem(tab as TabOption)}
              key={idx}
              className={`pb-2 px-4 ${tab === currentItem
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

      {currentItem === "FullArticle" && <FullArtical content={activePaper?.abstract ?? ""} pdf_url={activePaper?.pdf_url ?? ""} />}
      {currentItem === "Citations" && <Citations content={activePaper?.citation ?? ""} />}
      {currentItem === "Licensing" && <Licensing />}
      {currentItem === "Metrics" && <ArticleMetrics />}
      {currentItem === "References" && <References content={activePaper?.references ?? ""} />}
      <RelatedArticles />
    </div>

  );
}; export default ConferenceDetails;