import React from 'react'
import ArchiveSubmitPaperCard from '../cards/ArchiveSubmitPaperCard'
import ArchiveDownload from '../cards/ArchiveDownload'
// import AutherCardArchive from '../cards/AutherCardArchive'
// import RecentConferenceCard from '../cards/RecentConferenceCard'
import QuickLinks from '../cards/ListingSection'
import { policies, quickLinks } from '../../../data/listingSection'

export default function CommonLayout({children}:{children:React.ReactNode}) {

  return (
    <section className="_journalLayout ml-16 grid grid-cols-4 2xl:grid-cols-5 justify-between gap-5 mr-4 mt-6 xl:mr-16 ">
      <div className='lhs col-span-3 2xl:col-span-4 mr-2 bg-white px-6'>
        {children}
      </div>
      <div className='space-y-2 flex flex-col items-end'>
        <ArchiveSubmitPaperCard/>
        <QuickLinks data={quickLinks} title='Quick Links'/>
        <ArchiveDownload/>
        <QuickLinks data={policies} title='Policies'/>
        {/* {!path.includes("about") && <AutherCardArchive/>} */}        
        {/* <RecentConferenceCard/> */}
      </div>
    </section>
  )
}
