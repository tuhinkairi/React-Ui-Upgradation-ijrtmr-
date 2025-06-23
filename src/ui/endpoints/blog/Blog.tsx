import { useState } from 'react';
import CommonLayout from '../../components/layout/CommonLayout'
import { BlogCard } from './BlogCard'
import { Pagination } from '../Editorial/Pagination';

const tempo = {
    "title": "Best Journal for Publishing Research Paper in Mechanical Engineering",
    "subtitle": "Best Journal for Publishing Research Paper in Mechanical Engineering",
    "category": "Journals",
    "date": "2025-03-06",
    "imageUrl": "/blog/blog1.png"
}

export default function Blog() {
    const [page, setPage] = useState(1);

    return (
        <CommonLayout className='bg-white' title='Blog'>
            <section className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 justify-between mb-12 ">
                <BlogCard {...tempo} />
                <BlogCard {...tempo} />
                <BlogCard {...tempo} />
            </section>
            <Pagination
                currentPage={page}
                totalPages={5}
                onPageChange={(page) => setPage(page)}
            />
        </CommonLayout>
    )
}
