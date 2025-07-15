import { ArrowUpRight, Download, Eye, SearchIcon } from "lucide-react";
import { Link, NavLink, useLocation, type NavigateFunction } from "react-router-dom";
import type { ArchivePaperDetailProps } from "../../../types/Api";
import { ImQuotesRight } from "react-icons/im";
import { PiChartPieSlice } from "react-icons/pi";
import PrimaryBtn from "../../components/Btns/PrimaryBtn";

export default function VolumeCardArchive({ paper, setActive, navigate }: { paper: ArchivePaperDetailProps, setActive: (arg: ArchivePaperDetailProps) => void, navigate: NavigateFunction }) {
    const url = useLocation().pathname
    const endpoint = `/${url.includes("archives") ? "archives" : "current-issue"}/paper-details?paperId=${paper.paper_id}&papertitle=${encodeURIComponent(paper.paper_title.replace(/ /g, "-"))}`
    const HandleGoolge = () => {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(paper.paper_title)}`, '_blank')
    }
    return (
        <div
            className="bg-white shadow rounded-xl p-4 space-y-2 border"
        >
            <div className="flex justify-between items-start">
                <Link
                    onClick={() => setActive(paper)}
                    to={endpoint}
                    className="text-xl font-serif  text-primary hover:underline sm:max-w-5/6 relative"
                >
                    {paper.paper_title}<ArrowUpRight fill="none" className="inline-block ml-1"/>
                </Link>
                <button onClick={HandleGoolge} className="hidden text-base sm:inline-flex items-center justify-center gap-2 text-primary border border-orange-400 px-3 py-1" style={{ borderRadius: 9999 }}>
                    <SearchIcon className="w-5" /> Google
                </button>
            </div>

            <div className=" text-primary-text text-base leading-8">
                <span className="font-semibold">Author: </span>{paper.author_1}
                <br />
                <span className="font-semibold">Published Online: </span> {paper.created_at.split("T")[0]}
                <br />
                <span className="font-semibold">Pages: </span> {paper.paper_pages}
            </div>

            {/* Metrics */}
            <div className="flex flex-wrap items-center gap-6 gap-y-3 text-gray-500 mt-1">
                <div className="flex items-center gap-3">
                    <Eye size={18} /> {256} Views
                </div>
                <div className="h-4" />
                <div className="flex items-center gap-3">
                    <ImQuotesRight size={18} /> 0 CrossRef Citations
                </div>
                <div className="h-4" />
                <div className="flex items-center gap-3">
                    <PiChartPieSlice size={18} /> 0 Altmetric
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap justify-between items-center mt-2 gap-2 sm:gap-0">
                <div className="w-full sm:w-fit flex gap-3 text-base sm:text-sm text-primary font-medium my-3 sm:my-0">
                    <button
                        className="hover:underline border-r-2 pr-3"
                        onClick={() => navigate(`${endpoint}&section=FullArticle`)}
                    >
                        Abstract
                    </button>
                    <button
                        className="hover:underline border-r-2 pr-3"
                        onClick={() => navigate(`${endpoint}&section=FullArticle`)}
                    >
                        Full Text
                    </button>
                    <button
                        className="hover:underline"
                        onClick={() => navigate(`${endpoint}&section=References`)}
                    >
                        References
                    </button>
                </div>
                <NavLink to={paper.paper_url}>
                    <PrimaryBtn>
                        Download PDF <Download size={16} />
                    </PrimaryBtn>
                </NavLink>
                <button onClick={HandleGoolge} className="sm:hidden text-base inline-flex items-center justify-center gap-2 text-primary border border-orange-400 px-3 py-1" style={{ borderRadius: 9999 }}>
                    <SearchIcon className="w-5" /> Google
                </button>
            </div>
        </div>
    )
}
