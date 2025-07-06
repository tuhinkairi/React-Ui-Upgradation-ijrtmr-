import { Download, Eye, SearchIcon } from "lucide-react";
import { Link, NavLink, type NavigateFunction } from "react-router-dom";
import type { ArchivePaperDetailProps } from "../../../types/Api";
import { ImQuotesRight } from "react-icons/im";
import { PiChartPieSlice } from "react-icons/pi";
import PrimaryBtn from "../../components/Btns/PrimaryBtn";

export default function VolumeCardArchive({ paper, setActive, navigate }: { paper: ArchivePaperDetailProps, setActive: (arg: ArchivePaperDetailProps) => void, navigate: NavigateFunction }) {
    const endpoint = `/archives/paper-details?paperId=${paper.paper_id}&papertitle=${encodeURIComponent(paper.paper_title.replace(/ /g, "-"))}`

    return (
        <div
            className="bg-white shadow rounded-xl p-4 space-y-2 border"
        >
            <div className="flex justify-between items-start">
                <Link
                    onClick={()=>setActive(paper)}
                    to={endpoint}
                    className="text-xl font-serif  text-primary hover:underline max-w-5/6"
                >
                    {paper.paper_title} <span className="text-orange-400">↗</span>
                </Link>
                <button className="text-base inline-flex items-center justify-center gap-2 text-primary border border-orange-400 px-3 py-1" style={{ borderRadius: 9999 }}>
                    <SearchIcon className="w-5" /> Google
                </button>
            </div>

            <div className=" text-primary-text text-base leading-8">
                Author: {paper.author_1}
                <br />
                Published Online: {paper.created_at.split("T")[0]}
                <br />
                Pages: {paper.paper_pages}
            </div>

            {/* Metrics */}
            <div className="flex items-center gap-6  text-gray-500 mt-1">
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
            <div className="flex justify-between items-center mt-2">
                <div className="flex gap-3 text-sm text-primary font-medium">
                    <button
                        className="hover:underline"
                        onClick={() => navigate(`${endpoint}&section=FullArticle`)}
                    >
                        Abstract
                    </button>
                    <button
                        className="hover:underline"
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
                        View PDF <Download size={16} />
                    </PrimaryBtn>
                </NavLink>
            </div>
        </div>
    )
}
