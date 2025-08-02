import { useNavigate } from "react-router-dom"
import type { Blog } from "../../../types/Api"
import { useAppDispatch } from "../../../lib/store/store"
import { setBlog } from "../../../lib/store/Features/BlogSlice"

export const BlogCard = ({ blog, keyProp }: { blog: Blog, keyProp: number }) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handelNavigate = () => {
        dispatch(setBlog(blog))
        navigate(`/blogs/${blog.url_title}`)
    }
    return (
        <div key={keyProp} className=" rounded-md overflow-hidden border border-gray-200 max-w-[400px] mx-auto">
            <img loading='lazy'
                src={blog.image !== "https://ijrtmr.com/blogImage/" ? blog.image ?? "" : "/blog.webp"} alt={blog.title ?? "blog image"} className="w-full h-64 object-cover" />
            <div className="p-5">
                <h2 onClick={handelNavigate} className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent text-2xl  mb-3 leading-snug font-serif relative cursor-pointer">
                    {blog.title}
                    <button onClick={handelNavigate} className="absolute right-0 sm:hidden text-white font-medium rounded-full bg-gradient-to-b from-primary to-primary-hover hover:from-[#d6d0fa] hover:to-[#d6d0fa] hover:text-primary-text transition p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 -rotate-45" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </h2>
                <div className="flex items-end justify-between ">
                    <div className="space-y-2">
                        <p className="font-semibold text-dark">{blog.meta_description ?? ""}</p>
                        <p className=""><span className="font-medium">Category By :</span> {blog.category}</p>
                        <p className=""><span className="font-medium">Date :</span> {blog.created_at?.split("T")[0]}</p>
                    </div>
                    <button onClick={handelNavigate} className="hidden sm:inline-block text-white font-medium rounded-full bg-gradient-to-b from-primary to-primary-hover hover:from-[#d6d0fa] hover:to-[#d6d0fa] hover:text-primary-text transition p-2">
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