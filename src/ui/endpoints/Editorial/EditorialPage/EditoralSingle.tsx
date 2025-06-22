import Title from '../../../other/Title'
import AuthorProfile from './AuthorProfile'
import ResearchAreaCard from './ResearchAreaCard'

export default function EditoralSingle() {
    return (
        <section className="w-full grid grid-cols-5 px-16 gap-y-5 gap-10 ">
            <div className='col-span-5'>
                <Title>Editorial Board</Title>
            </div>
            <div className='col-span-1 space-y-6'>
                <img src="/editorial/board/man2.png" className='w-full  rounded-2xl  aspect-square object-cover object-center' alt="img" />
                <div className='socials grid grid-cols-2 items-center justify-center gap-2 gap-y-6'>
                    <span className='flex-col flex items-center justify-center gap-2'>
                    <img src="/editorial/board/linkedin.png" className='w-10' alt="linkedin"/>
                    <span className='text-[15px] text-[#2f2f2f]'>LinkedIn</span>
                    </span>
                    <span className='flex-col flex items-center justify-center gap-2'>
                    <img src="/editorial/board/linkedin.png" className='w-10' alt="linkedin"/>
                    <span className='text-[15px] text-[#2f2f2f]'>LinkedIn</span>
                    </span>
                    <span className='flex-col flex items-center justify-center gap-2'>
                    <img src="/editorial/board/linkedin.png" className='w-10' alt="linkedin"/>
                    <span className='text-[15px] text-[#2f2f2f]'>LinkedIn</span>
                    </span>
                    <span className='flex-col flex items-center justify-center gap-2'>
                    <img src="/editorial/board/linkedin.png" className='w-10' alt="linkedin"/>
                    <span className='text-[15px] text-[#2f2f2f]'>LinkedIn</span>
                    </span>
                    <span className='flex-col flex items-center justify-center gap-2'>
                    <img src="/editorial/board/linkedin.png" className='w-10' alt="linkedin"/>
                    <span className='text-[15px] text-[#2f2f2f]'>LinkedIn</span>
                    </span>
                </div>
                <ResearchAreaCard />
            </div>
            <div className='col-span-4'>
                <AuthorProfile />
            </div>
        </section>
    )
}
