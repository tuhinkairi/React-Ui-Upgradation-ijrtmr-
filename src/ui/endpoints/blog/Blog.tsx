import { useEffect, useState } from 'react';
import CommonLayout from '../../components/layout/CommonLayout';
import { BlogCard } from './BlogCard';
import { Pagination } from '../Editorial/Pagination';  // Reusing same pagination component
import type { Blog } from '../../../types/Api';
import { fetchBlog } from '../../../lib/axios/api/blog';
import { useAppDispatch, useAppSelector } from '../../../lib/store/store';
import { setStoreBlogList } from '../../../lib/store/Features/BlogSlice';
import { setLoading } from '../../../lib/store/Features/loadingSlice';
import Loading from '../../components/Loading';

export default function Blog() {
    const [page, setPage] = useState(1);
    const [BlogList, setBlogList] = useState<Blog[]>(useAppSelector((state) => state.blog.blogList));

    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 6;
    const dispatch = useAppDispatch();
    const loading = useAppSelector((state) => state.loadingScreen.loading);
     

    useEffect(() => {
        if(BlogList.length==0)fetchBlog()
        .then(data => {
                dispatch(setLoading(true));
                setBlogList(data);
                dispatch(setStoreBlogList(data));
                dispatch(setLoading(false));
                setTotalPages(Math.ceil(data.length / itemsPerPage));
            }).finally(() => {
                dispatch(setLoading(false));
            })
    }, [dispatch,BlogList]);

    const paginatedBlogs = BlogList.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    const getVisiblePages = () => {
        const maxVisible = 5;
        if (totalPages <= maxVisible) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const halfVisible = Math.floor(maxVisible / 2);
        let startPage = Math.max(1, page - halfVisible);
        let endPage = Math.min(totalPages, page + halfVisible);

        if (endPage - startPage + 1 < maxVisible) {
            if (startPage === 1) {
                endPage = Math.min(totalPages, startPage + maxVisible - 1);
            } else if (endPage === totalPages) {
                startPage = Math.max(1, endPage - maxVisible + 1);
            }
        }

        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    };

    return (
        <CommonLayout className='bg-white' title='Blog'>
            {loading ? <Loading /> : <><section className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 justify-between mb-12">
                {paginatedBlogs.map((blog, index) => (
                    <BlogCard blog={blog} key={index} />
                ))}
            </section>

                {totalPages > 1 && (
                    <Pagination
                        currentPage={page}
                        totalPages={totalPages}
                        onPageChange={setPage}
                        rangeList={getVisiblePages()}
                    />
                )}</>}
        </CommonLayout>
    );
}
