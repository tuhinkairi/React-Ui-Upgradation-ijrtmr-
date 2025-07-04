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
        <section className="w-full grid grid-cols-5 px-16 gap-y-5 gap-10 ">
            <div className='col-span-5'>
                <Title>Editorial Board</Title>
            </div>
            <div className='col-span-1 space-y-6'>
                <img src={editorialMember?.member_image_url} className='w-full  rounded-2xl  aspect-square object-cover object-center' alt="img" />
                <div className='socials grid grid-cols-2 items-center justify-center gap-2 gap-y-6'>
                    {editorialMember?.member_linkedin && <Link to={editorialMember?.member_linkedin}>
                        <span className='flex-col flex items-center justify-center gap-2'>
                            <img src="/editorial/board/linkedin.png" className='w-10' alt="linkedin" />
                            <span className='text-[15px] text-[#2f2f2f]'>LinkedIn</span>
                        </span>
                    </Link>}
                </div>
                <ResearchAreaCard des={editorialMember?.member_researcharea.split(",") || ''} />
            </div>
            <div className='col-span-4'>
                <AuthorProfile member={editorialMember} />
            </div>
        </section>
    )
}
