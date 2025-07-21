import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../../lib/store/store'
import Title from '../../../other/Title'
import AuthorProfile from './AuthorProfile'
import ResearchAreaCard from './ResearchAreaCard'

export default function EditoralSingle() {
    const editorialMember = useAppSelector((state) => state.editorial.currentMember)
    if (!editorialMember) {
        return <div>Loading...</div>
    }
    return (
        <section className="w-full sm:grid sm:grid-cols-5 px-6 md:px-10 lg:px-16 gap-y-5 gap-10 ">
            <div className='col-span-5'>
                <Title>Editorial Board</Title>
            </div>
            <div className='hidden sm:block sm:col-span-2 xl:col-span-1 space-y-6 mx-auto sm:mx-0'>
                <img loading='lazy' 
src={editorialMember?.member_image_url} className='w-full max-w-60 rounded-2xl  aspect-square object-cover object-center' alt="img" />
                <div className='socials grid grid-cols-2 items-center justify-center gap-2 gap-y-6'>
                    {editorialMember?.member_linkedin && <Link to={editorialMember?.member_linkedin}>
                        <span className='flex-col flex items-center justify-center gap-2'>
                            <img loading='lazy' 
src="/editorial/board/linkedin.webp" className='w-10' alt="linkedin" />
                            <span className='text-[15px] text-[#2f2f2f]'>LinkedIn</span>
                        </span>
                    </Link>}
                </div>
                <ResearchAreaCard des={editorialMember?.member_researcharea.split(",") || ''} />
            </div>
            <div className='sm:col-span-3 xl:col-span-4'>
                <AuthorProfile member={editorialMember} />
            </div>
        </section>
    )
}
