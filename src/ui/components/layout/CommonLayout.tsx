import React from 'react'
import ArchiveSubmitPaperCard from '../cards/ArchiveSubmitPaperCard'
import ArchiveDownload from '../cards/ArchiveDownload'
import AutherCardArchive from '../cards/AutherCardArchive'
import { useLocation } from 'react-router-dom'
import RecentConferenceCard from '../cards/RecentConferenceCard'
import QuickLinks from '../cards/ListingSection'

export default function CommonLayout({children}:{children:React.ReactNode}) {
  const path = useLocation().pathname

  return (
    <section className="_journalLayout ml-16 grid grid-cols-4 2xl:grid-cols-5 justify-between gap-5 mr-4 xl:mr-16">
      <div className='lhs col-span-3 2xl:col-span-4 mr-2 bg-white'>
        {children}
      </div>
      <div className='space-y-6 flex flex-col items-end'>
        <ArchiveSubmitPaperCard/>
        <QuickLinks/>
        <ArchiveDownload/>
        {!path.includes("about") && <AutherCardArchive/>}
        <RecentConferenceCard/>
      </div>
    </section>
  )
}
