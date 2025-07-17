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
import { ImQuotesLeft } from "react-icons/im";
import { useAppDispatch, useAppSelector } from "../../../../lib/store/store";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { FetchActiveArticle } from "../../../../lib/axios/api/archive";
import { setActivePaper } from "../../../../lib/store/Features/ArchiveSlice";
import { setLoading } from "../../../../lib/store/Features/loadingSlice";
import Loading from "../../../components/Loading";
import type { ArchivePaperDetailProps } from "../../../../types/Api";
import PrimaryBtn from "../../../components/Btns/PrimaryBtn";
import { VscFilePdf } from "react-icons/vsc";
import { MdDone } from "react-icons/md";
import MetaDataWrapper from "../../../components/layout/MetaDataWrapper";
import { superscriptifyAllNumbers } from "../../../../lib/utils/other/superScript";

type TabOption = "FullArticle" | "References" | "Citations" | "Metrics" | "Licensing";

const ArticleDetails = () => {
  const searchQuery = useSearchParams();
  const id = searchQuery[0].get("paperId")
  const [currentItem, setCurrentItem] = useState<TabOption>(searchQuery[0].get("section")?.replace("-", " ") as TabOption || "FullArticle")
  const [copy, SetCopy] = useState<boolean>(false)
  const ActiveArticle = useAppSelector((state) => state.archiveSection.activePaper)
  const [activePaper, setPaper] = useState<ArchivePaperDetailProps | null>(ActiveArticle)

  const navigate = useNavigate()

  // store data
  const loading = useAppSelector((state) => state.loadingScreen.loading)
  const dispatch = useAppDispatch()
  const auther = [activePaper?.author_1, activePaper?.author_2, activePaper?.author_3, activePaper?.author_4, activePaper?.author_5, activePaper?.author_6].filter(item => item !== null)
  // const designation: string[] = activePaper?.paper_designation?.split(",") ?? []
  // functions
  useEffect(() => {
    if (id) {
      if (activePaper?.paper_id !== parseInt(id)) {

        FetchActiveArticle({ paperid: id }).then((data) => {
          dispatch(setLoading(true))
          if (data) {
            dispatch(setActivePaper(data))
            setPaper(data)
          }
        }).finally(() => {
          dispatch(setLoading(false))
        })
      }
    } else navigate("/archives")
  }, [navigate, activePaper, id, dispatch, ActiveArticle])

  if (loading || !activePaper) {
    return <Loading title="Paper Details" />
  }
  return (
    <MetaDataWrapper titleDynamic={activePaper.paper_title} desciptionDynamic={activePaper.paper_designation?.split(".")[0]}>
      <div className="mx-auto  bg-white space-y-3 sm:space-y-6 p-2 sm:p-5">
        {/* Header + PDF Button */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl xl:text-3xl font-medium leading-snug font-serif text-primary">
              {activePaper?.paper_title}
            </h2>
          </div>
        </div>

        {/* Meta Information */}
        <div className="space-y-3 text-primary-text leading-relaxed text-sm xl:text-base 2xl:text-2xl sm:text-base">
          <div className="flex gap-3 ">
            <div className="text-base flex flex-wrap sm:flex-col gap-3 ">
              <div className="flex flex-wrap gap-3 gap-x-6 ">
                {auther.map((author, index) => (
                  <span className=" text-primary flex gap-2 items-center text-base sm:text-lg xl:text-xl 2xl:text-2xl" key={index}>
                    <CgProfile className="text-lg sm:text-2xl xl:text-3xl" />
                    {author}<span className="text-xs h-full flex items-start -ml-1">{index + 1}</span>
                    {/* {index !== auther.length - 1 && ", "} */}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* <ul className="text-secondary-text list-decimal list-inside">
          {
            designation.map((designation, index) => (
              <li key={index}>{designation}</li>
            )
            )
          }
        </ul> */}
          <h2 className=" italic">
            {superscriptifyAllNumbers(activePaper?.paper_designation ?? "")}
          </h2>
          <h3 className="font-medium">Published Online: {activePaper.created_at.split("T")[0] ?? activePaper.created_at}</h3>
          <h3 className="font-medium">Pages: {activePaper?.paper_pages}</h3>
        </div>

        {/* DOI and Utilities */}
        <div className="flex items-start sm:items-center flex-wrap gap-4 w-full justify-between text-base">
          <div className="flex gap-4 sm:gap-0 w-4/5 sm:w-fit justify-between flex-col sm:flex-row ">
            <h3 className="text-primary text-bsae  xl:text-xl 2xl:text-2xl flex gap-2 items-center sm:mr-10 md:mr-5 xl:mr-10 2xl:mr-12 md:whitespace-nowrap">
              <ImQuotesLeft className="text-primary" /> Cite this article
            </h3>

            {activePaper?.paper_doi && <Link
              target="_blank"
              to={activePaper?.paper_doi_Link ?? "#"}
              className="text-primary flex items-center gap-1 hover:underline text-sm xl:text-xl 2xl:text-2xl wrap-anywhere sm:whitespace-nowrap"
            >
              ↗ {activePaper?.paper_doi}
            </Link>}
          </div>

          <button className="inline-flex sm:hidden items-center justify-center bg-[#fae0d0] text-primary-text text-sm xl:text-base 2xl:text-2xl font-medium w-12 h-12 xl:w-16 xl:h-16 hover:bg-[#f6d5c3] transition-colors rounded-full">
            <Share2 size={13} className="inline-block " />
          </button>

          <div className="flex gap-3 justify-between w-full sm:w-fit flex-wrap">
            <Link to={activePaper.paper_url} rel="noreferrer" className="sm:hidden">
              <PrimaryBtn className="whitespace-nowrap">
                View PDF
                <VscFilePdf size={18} className="ml-4" />
              </PrimaryBtn>
            </Link>
            <button className="bg-gradient-to-b from-gray-100  to-zinc-300 border border-gray-300 hover:scale-105 transition-all text-dark px-3 py-2 rounded-md font-semibold flex items-center justify-center space-x-3 text-sm xl:text-base 2xl:text-2xl">
              <span>
                Check for Updates</span> <IoReload height={20} />
            </button>
          </div>

          <button className={`hidden sm:inline-flex items-center justify-center ${copy ? "bg-green-300 hover:bg-green-400" : "bg-[#fae0d0] hover:bg-[#f6d5c3]"} text-primary-text text-sm xl:text-base 2xl:text-2xl font-medium w-12 h-12  xl:h-16 xl:w-16 transition-colors rounded-full`} onClick={() => {
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
        <div className="flex justify-between gap-6 text-lg xl:text-xl 2xl:text-2xl border-b border-gray-200 overflow-x-auto mt-6 sm:mt-0">
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
        <div className="xl:text-xl 2xl:text-2xl">

          {currentItem === "FullArticle" && <FullArtical content={activePaper?.paper_abstract ?? ""} pdf_url={activePaper?.paper_url ?? ""} />}
          {currentItem === "Citations" && <Citations content={activePaper?.paper_citation ?? ""} />}
          {currentItem === "Licensing" && <Licensing />}
          {currentItem === "Metrics" && <ArticleMetrics />}
          {currentItem === "References" && <References content={activePaper?.paper_references ?? ""} />}
          <RelatedArticles />
        </div>
      </div>
    </MetaDataWrapper>

  );
}; export default ArticleDetails;