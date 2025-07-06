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

export default function ArchiveLayout({ children }: { children: React.ReactNode }) {
  const isArticleDetails = useLocation().pathname.includes('/paper-details')
  const activeArticle = useAppSelector(state=> state.archiveSection.activePaper)
  
  return (
    <section className="_archiveLayout ml-16 grid grid-cols-4 2xl:grid-cols-5 justify-between gap-5 mr-4 xl:mr-16">
      <Title>ARCHIVES</Title>
      <div className='lhs col-span-3 2xl:col-span-4 mr-2 bg-white'>
        {children}
      </div>
      <div className='space-y-2 flex flex-col items-end'>
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