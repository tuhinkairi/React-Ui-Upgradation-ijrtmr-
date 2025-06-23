import { useNavigate } from "react-router-dom"
import type { BlogPost } from "../../../types/Api"

export const BlogCard = ({ imageUrl, title, date, subtitle, category }: BlogPost) => {
    const navigate = useNavigate()
    const handelNavigate = () => {
        navigate(`/blog/${title}`, {
            state: { imageUrl, title, date, subtitle, category }
        }
        )
    }
    return (
        <div className=" rounded-md  overflow-hidden border border-gray-200 max-w-[460px]">
            <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
            <div className="p-5">
                <h2 className="bg-gradient-to-r from-[#FF8C42] to-[#995428] bg-clip-text text-transparent text-2xl  mb-3 leading-snug font-serif">
                    {title}
                </h2>
                <div className="flex items-end justify-between ">
                    <div className="space-y-2">
                        <p className="font-semibold text-dark">{subtitle}</p>
                        <p className=""><span className="font-medium">Category By :</span> {category}</p>
                        <p className=""><span className="font-medium">Date :</span> {date}</p>
                    </div>
                    <button onClick={handelNavigate} className="text-white font-medium rounded-full bg-gradient-to-b from-[#FF8C42] to-[#995428] hover:from-[#fae0d0] hover:to-[#fae0d0] hover:text-primary-text transition p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 -rotate-45" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}