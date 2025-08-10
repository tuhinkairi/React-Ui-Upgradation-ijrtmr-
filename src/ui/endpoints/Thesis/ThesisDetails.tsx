import { Share2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
import type { ThesisListingItem } from "../../../types/Api";
import { setLoading } from "../../../lib/store/Features/loadingSlice";
import Loading from "../../components/Loading";
import PrimaryBtn from "../../components/Btns/PrimaryBtn";
import { VscFilePdf } from "react-icons/vsc";
import { MdDone } from "react-icons/md";
import MetaDataWrapper from "../../components/layout/MetaDataWrapper";
import { superscriptifyAllNumbers } from "../../../lib/utils/other/superScript";
import useDimensionsBadge from "../../components/cards/plumx/useDimensionsBadge";
import { FetchThesisPaperDetails } from "../../../lib/axios/api/thesis";
import { setActiveThesis } from "../../../lib/store/Features/ThesisSlice";

type TabOption = "FullArticle" | "References" | "Citations" | "Metrics" | "Licensing";

const ThesisDetails = () => {
  const dtitle = useRef<HTMLHeadingElement>(null)
  const searchQuery = useSearchParams();
  const [currentItem, setCurrentItem] = useState<TabOption>(searchQuery[0].get("section")?.replace("-", " ") as TabOption || "FullArticle")
  const id = searchQuery[0].get("paperid")
  const [copy, SetCopy] = useState<boolean>(false)
  const navigate = useNavigate()
  const loading = useAppSelector((state) => state.loadingScreen.loading)
  const dispatch = useAppDispatch()
  const ActiveArticle = useAppSelector((state) => state.thesis.ActiveThesis)
  const [activePaper, setPaper] = useState<ThesisListingItem | null>(ActiveArticle)


  // store data
  const auther = [activePaper?.author_1, activePaper?.author_2, activePaper?.author_3, activePaper?.author_4, activePaper?.author_5, activePaper?.author_6].filter(item => item !== null)
  // const designation: string[] = activePaper?.designation?.split(",") ?? []

  useDimensionsBadge()
  // functions
  useEffect(() => {
    dispatch(setLoading(true))
    if (id) {
      if (activePaper?.id !== parseInt(id)) {
        // fetch conference here
        FetchThesisPaperDetails({ thesis_id: id }).then((data) => {
          if (data) {
            // console.log(data)
            dispatch(setActiveThesis(data))
            setPaper(data)
          }
        })
      }
      dispatch(setLoading(false))
    } else {
      dispatch(setLoading(false))
      navigate("/conference")
    }
  }, [navigate, activePaper, dispatch, id]);

  if (loading || !activePaper) {
    return <Loading title="Paper Details" />
  }
  return (
    <MetaDataWrapper titleDynamic={activePaper.title ?? dtitle.current?.innerText} desciptionDynamic={activePaper.abstract?.split(".")[0]}>
      <div className="mx-auto  bg-white space-y-3 sm:space-y-6 p-2 sm:p-5">
        {/* Header + PDF Button */}
        <div className="flex justify-between items-start">
          <div>
            <h2 id="dtitle" ref={dtitle} className="text-2xl xl:text-3xl font-medium leading-snug font-serif text-primary">
              {activePaper?.title}
            </h2>
          </div>
        </div>

        {/* Meta Information */}
        <div className="space-y-3 text-primary-text leading-relaxed text-sm xl:text-base 2xl:text-lg sm:text-base">
          <div className="flex gap-3 ">
            <div className="w-full flex gap-3 gap-x-12 justify-between">
              <div className="flex flex-wrap gap-3 gap-x-6 py-2 mb-2">
                {auther.map((author, index) => (
                  <span className="text-primary flex gap-2 items-center text-base sm:text-lg  2xl:text-lg" key={index}>
                    <CgProfile className="text-lg sm:text-2xl xl:3xl" />
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
              <button className="hidden sm:inline-flex items-center justify-center bg-[#d6d0fa]  text-sm xl:text-base 2xl:text-lg font-medium px-6 py-2.5 gap-3 hover:bg-[#c5bbff]  text-paragraph transition-colors rounded-full h-fit">
                <Share2 size={13} className="inline-block" /> Share
              </button>
            </div>
          </div>
          {/* <ul className="text-secondary-text list-decimal list-inside">
            {
              designation.map((designation, index) => (
                <li key={index}>{supersc\riptifyLeadingNumbers(designation)}</li>
              )
              )
            }
          </ul> */}
          <h2 className="italic">
            {superscriptifyAllNumbers(activePaper?.designation ?? "")}
          </h2>
          {/* <h3 className="font-medium">Published Online: {activePaper?.created_at.split("T")[0]}</h3> */}
          <h3 className="font-medium">Published Online: {activePaper.year && activePaper.month? `${activePaper.month} ${activePaper.year}`: new Date(activePaper.updated_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h3>
          <h3 className="font-medium">Pages: {activePaper?.pages}</h3>
        </div>

        {/* DOI and Utilities */}
        <div className="flex items-start sm:items-center flex-wrap gap-4 w-full justify-between text-base">
          <div className="flex gap-4 sm:gap-0 w-2/3 sm:w-fit justify-between flex-col sm:flex-row ">
            <h3 className="text-primary text-bsae   2xl:text-lg flex gap-2 items-center sm:mr-10 md:mr-5 xl:mr-10 2xl:mr-12 md:whitespace-nowrap">
              <ImQuotesLeft className="text-primary" /> Cite this article
            </h3>

            {activePaper?.doi_no !== "." ? <Link
              target="_blank"
              to={activePaper?.doi_no ?? window.location.href}
              className="text-primary flex items-center gap-1 hover:underline text-sm xl:text-base 2xl:text-lg wrap-anywhere sm:whitespace-nowrap"
            >
              ↗ {activePaper?.doi_no && activePaper?.doi_no.length > 5 ? activePaper?.doi_no : "No Doi"}
            </Link> :
              <span className="text-primary flex items-center gap-1 hover:underline text-sm xl:text-base 2xl:text-lg wrap-anywhere sm:whitespace-nowrap">No Doi</span>
            }
          </div>

          <button className="inline-flex sm:hidden items-center justify-center bg-[#d6d0fa] text-primary-text text-sm xl:text-base 2xl:text-lg font-medium w-12 h-12 hover:bg-[#c5bbff] transition-colors rounded-full">
            <Share2 size={13} className="inline-block" />
          </button>

          <div className="flex gap-3 justify-between w-full sm:w-fit flex-wrap">
            <Link to={activePaper.paper_url} rel="noreferrer" className="sm:hidden">
              <PrimaryBtn className="whitespace-nowrap">
                View PDF
                <VscFilePdf size={18} className="ml-4" />
              </PrimaryBtn>
            </Link>
             <Link to="https://www.google.com/search?vsrid=COOX4YXQ3LTLOBACGAEiJDBiZDliZDNjLTFmOTMtNDEzYS1iMDc3LWJiYjBkNTU4NjVkNjIGIgJ0cCgXOKSW2vqQ3Y4D&vsint=CAIqDAoCCAcSAggKGAEgAToiChYNAAAAPxUAAAA_HQAAgD8lAACAPzABEPsDGGMlAACAPw&udm=26&lns_mode=un&source=lns.web.gisivli&vsdim=507,99&gsessionid=MEe5nLFgKkpw61lPRzTizbLuDmFtyOpy_alFhg2WyJag7KJrm3nngw&lsessionid=W5ZeX3DIvGZGjgwH9J6Krc-Z7ADog1IXWZ5n5ckps_pGHgh9XrH9ZA&lns_surface=19&authuser=0&qsubts=1753622518509&biw=375&bih=631&ved=2ahUKEwiq99nwkN2OAxVOxzgGHaIZLOEQh6cGegUI3gMQGg&tbnid=VrqyejqFWaGG5M&ictx=2#imgrc=c33bqrBnl_OOQM&imgdii=Yuf27tXGSk4KgM" className="hover:scale-105 transition-all text-dark rounded-md font-semibold flex items-center justify-center space-x-3 text-sm xl:text-base 2xl:text-lg">
              <img loading="lazy" src="/checkupdate.webp" alt=" check update" width={180} />
            </Link>
          </div>

           <button className={`hidden sm:inline-flex items-center justify-center ${copy ? "bg-green-300 hover:bg-green-400" : "bg-[#d6d0fa] hover:bg-[#c5bbff]"} text-primary-text text-sm xl:text-base 2xl:text-lg font-medium w-12 h-12  xl:h-16 xl:w-16 transition-colors rounded-full`} onClick={() => {
            navigator.clipboard.writeText(window.location.href)
            SetCopy(true)
            setTimeout(() => {
              SetCopy(false)
            }, 2000)
          }}>
            {!copy ? <Share2 size={13} className="inline-block xl:scale-150" /> : <MdDone size={13} className="inline-block xl:scale-150" />}

          </button>
        </div>


        {/* Navigation Tabs */}
        <div className="flex justify-between gap-6 text-lg  2xl:text-lg border-b border-gray-200 overflow-x-auto mt-6 sm:mt-0">
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

        {currentItem === "FullArticle" && <FullArtical content={activePaper?.abstract ?? ""} pdf_url={activePaper?.paper_url ?? ""} />}
        {currentItem === "Citations" && <Citations content={activePaper?.citation ?? ""} />}
        {currentItem === "Licensing" && <Licensing />}
        {currentItem === "Metrics" && <ArticleMetrics content={activePaper?.doi_no ?? ""} />}
        {/* <div className={`${currentItem === "Metrics" ? "" : "absolute -z-10"}`}><ArticleMetrics /></div> */}

        {currentItem === "References" && <References content={activePaper?.reference ?? ""} />}
        <RelatedArticles />
      </div>
      <script async src="https://badge.dimensions.ai/badge.js"></script>
      
    </MetaDataWrapper>

  );
}; export default ThesisDetails;