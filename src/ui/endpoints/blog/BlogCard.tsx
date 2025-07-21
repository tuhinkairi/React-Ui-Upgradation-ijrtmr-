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
                src={blog.image !== "https://ijsreat.com/blogImage/" ? blog.image ?? "" : "/blog.jpg"} alt={blog.title ?? "blog image"} className="w-full h-64 object-cover" />
            <div className="p-5">
                <h2 className="bg-gradient-to-r from-[#FF8C42] to-[#995428] bg-clip-text text-transparent text-2xl  mb-3 leading-snug font-serif relative">
                    {blog.title}
                    <button onClick={handelNavigate} className="absolute right-0 sm:hidden text-white font-medium rounded-full bg-gradient-to-b from-[#FF8C42] to-[#995428] hover:from-[#fae0d0] hover:to-[#fae0d0] hover:text-primary-text transition p-2">
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
                    <button onClick={handelNavigate} className="hidden sm:inline-block text-white font-medium rounded-full bg-gradient-to-b from-[#FF8C42] to-[#995428] hover:from-[#fae0d0] hover:to-[#fae0d0] hover:text-primary-text transition p-2">
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