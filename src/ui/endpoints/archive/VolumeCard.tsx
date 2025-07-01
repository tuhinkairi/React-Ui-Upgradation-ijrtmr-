import { Download, Eye, SearchIcon } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import type { ConferenceArticleProps } from "../../../types/Api";
import { ImQuotesRight } from "react-icons/im";
import { PiChartPieSlice } from "react-icons/pi";
import PrimaryBtn from "../../components/Btns/PrimaryBtn";

export default function VolumeCard({ paper}: { paper: ConferenceArticleProps }) {
    return (
        <div
            className="bg-white shadow rounded-xl p-4 space-y-2 border"
        >
            <div className="flex justify-between items-start">
                <Link
                    to="/archives/artical-details"
                    className="text-xl font-serif  text-primary hover:underline max-w-5/6"
                >
                    {paper.title} <span className="text-orange-400">↗</span>
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
                Pages: {paper.pages}
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
                    <button className="hover:underline">Abstract</button>
                    <button className="hover:underline">Full Text</button>
                    <button className="hover:underline">References</button>
                </div>
                <NavLink to={paper.pdf_url}>
                    <PrimaryBtn>
                        View PDF <Download size={16} />
                    </PrimaryBtn>
                </NavLink>
            </div>
        </div>
    )
}
