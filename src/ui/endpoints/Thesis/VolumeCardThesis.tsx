import { Download, Eye, SearchIcon } from "lucide-react";
import { Link, NavLink, type NavigateFunction } from "react-router-dom";
import type { ThesisListingItem } from "../../../types/Api";
import { ImQuotesRight } from "react-icons/im";

import PrimaryBtn from "../../components/Btns/PrimaryBtn";

export default function VolumeCardThesis({ paper, setActive, navigate }: { paper: ThesisListingItem, setActive: (arg: ThesisListingItem) => void, navigate: NavigateFunction }) {
    const endpoint = `/thesis/paper-details?paperid=${paper.id}&papertitle=${encodeURIComponent(paper.title.replace(/ /g, "-"))}`
    const HandleGoolge = () => {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(paper.title)}`, '_blank')
    }
    return (
        <div
            className="bg-white shadow rounded-xl p-4 space-y-2 border"
        >
            <div className="flex justify-between items-start">
                <Link
                    onClick={() => setActive(paper)}
                    to={endpoint}
                    className="text-xl 2xl:text-2xl font-serif  text-primary hover:underline max-w-5/6"
                >
                    {paper.title} <span className="text-orange-400">↗</span>
                </Link>
                <button onClick={HandleGoolge} className="text-base inline-flex items-center justify-center gap-2 text-primary border border-orange-400 px-3 py-1" style={{ borderRadius: 9999 }}>
                    <SearchIcon className="w-5" /> Google
                </button>
            </div>

            <div className=" text-primary-text text-base leading-8">
                <span className="font-bold">Author : </span>{[paper.author_1, paper.author_2, paper.author_3, paper.author_4, paper.author_5, paper.author_6].map((e, index) => {
                    if (e) return index === 0 ? e.toString() : (", ").concat(e.toString())
                })}
                <br />
                <span className="font-bold">Published Online : </span> {paper.month} {paper.year}
                <br />
                <span className="font-bold">Pages : </span> {paper.pages}
            </div>

            {/* Metrics */}
            <div className="flex items-center gap-6  text-gray-500 mt-1">
                <div className="flex items-center gap-3">
                    <Eye size={18} /> {50} Views
                </div>
                <div className="h-4" />
                <div className="flex items-center gap-3">
                    <ImQuotesRight size={18} /> 0 CrossRef Citations
                </div>
                <div className="h-4" />
                <div className="flex items-center gap-3">
                    <img
                        src="/plummatrix/plum.webp"
                        alt="plumx"
                        className="w-6 h-6 object-contain"
                    /> Plumex
                </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center mt-2">
                <div className="flex gap-3 text-sm xl:text-base 2xl:text-lg text-primary font-medium">
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
                        className="hover:underline border-r-2 pr-3"
                        onClick={() => navigate(`${endpoint}&section=References`)}
                    >
                        References
                    </button>
                </div>
                <NavLink to={paper.paper_url} target="_blank">
                    <PrimaryBtn>
                        View PDF <Download size={16} />
                    </PrimaryBtn>
                </NavLink>
            </div>
        </div>
    )
}
