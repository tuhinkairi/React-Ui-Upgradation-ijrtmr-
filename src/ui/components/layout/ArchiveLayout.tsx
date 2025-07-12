import React from 'react'
import ArchiveSubmitPaperCard from '../cards/ArchiveSubmitPaperCard'
import ArchiveDownload from '../cards/ArchiveDownload'
import ListingSection from '../cards/ListingSection'
import { policies, quickLinks } from '../../../data/listingSection'
import PlumMetricsCard from '../cards/PlumMetricsCard'
import ArchiveBtn from '../Btns/ArchiveBtn'
import { GrDocumentPdf } from 'react-icons/gr'
import Title from '../../other/Title'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from '../../../lib/store/store'

export default function ArchiveLayout({ children, title }: { children: React.ReactNode, title?: string }) {
  const isArticleDetails = useLocation().pathname.includes('/paper-details')
  const activeArticle = useAppSelector(state=> state.archiveSection.activePaper)
  
  return (
    <section className="_archiveLayout lg:ml-16 grid grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 justify-between gap-y-5 md:gap-5 px-6 lg:px-0  lg:mr-4 xl:mr-16">
      <Title>{title? title:"ARCHIVES"}</Title>
      <div className='lhs col-span-3 2xl:col-span-4 md:mr-2 '>
        {children}
      </div>
      <div className='space-y-2 hidden md:flex flex-col items-end'>
        {!isArticleDetails ? <ArchiveSubmitPaperCard /> : 
        <>
        <ArchiveBtn 
          icon={true}
          label={<>Download Pdf <GrDocumentPdf size={18}/> </>}
          href={activeArticle?.paper_url??""}
        />
        <PlumMetricsCard/>
        </>
        }
        <ListingSection data={quickLinks} title='Quick Links' />
        <ArchiveDownload />
        <ListingSection data={policies} title='policies' />

      </div>
    </section>
  )
}