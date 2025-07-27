import React from 'react'
import ArchiveSubmitPaperCard from '../cards/ArchiveSubmitPaperCard'
import ArchiveDownload from '../cards/ArchiveDownload'
// import AutherCardArchive from '../cards/AutherCardArchive'
// import RecentConferenceCard from '../cards/RecentConferenceCard'
import QuickLinks from '../cards/ListingSection'
import { policies, quickLinks } from '../../../data/listingSection'
import Title from '../../other/Title'
import { useLocation } from 'react-router-dom'

export default function CommonLayout({ children, className, title }: { children: React.ReactNode, className?: string, title?: string | React.ReactNode }) {
  const path = useLocation();
  return (
    <section className="_journalLayout lg:ml-16 grid grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 justify-between gap-y-5 md:gap-5 px-6 lg:px-0  lg:mr-4 xl:mr-16">
      {title && <Title>{title}</Title>}
      <div className={`lhs ${!["/privacy-policy","/terms-and-conditions","/refund-policy"].includes(path.pathname) ? "col-span-3 2xl:col-span-4":"col-span-3 md:col-span-4 2xl:col-span-5"} px-0 md:mr-2 text-base text-[#333333] ${className ? className : "bg-white px-3 md:px-6"}`}>
        {children}
      </div>
      {!["/privacy-policy","/terms-and-conditions","/refund-policy"].includes(path.pathname) && <div className='space-y-2 hidden md:flex flex-col items-end'>
        <ArchiveSubmitPaperCard />
        {path.pathname.toLocaleLowerCase() !== "/contact-us" && <><QuickLinks data={quickLinks} title='Quick Links' />
          <ArchiveDownload />
          <QuickLinks data={policies} title='Policies' /></>}
        {/* {!path.includes("about") && <AutherCardArchive/>} */}
        {/* <RecentConferenceCard/> */}
      </div>
      }
    </section>
  )
}
