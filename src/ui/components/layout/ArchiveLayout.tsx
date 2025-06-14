import React from 'react'
import ArchiveSubmitPaperCard from '../cards/ArchiveSubmitPaperCard'
import ArchiveDownload from '../cards/ArchiveDownload'
import ListingSection from '../cards/ListingSection'
import { policies, quickLinks } from '../../../data/listingSection'
import PlumMetricsCard from '../cards/PlumMetricsCard'

export default function ArchiveLayout({ children }: { children: React.ReactNode }) {
  const isArticleDetails = window.location.pathname.includes('/volumn')

  return (
    <section className="_archiveLayout ml-16 grid grid-cols-4 2xl:grid-cols-5 justify-between gap-5 mr-4 xl:mr-16">
      <h2 className="text-3xl font-bold  my-4 col-span-4">ARCHIVES</h2>
      <div className='lhs col-span-3 2xl:col-span-4 mr-2 bg-white'>
        {children}
      </div>
      <div className='space-y-6 flex flex-col items-end'>
        {isArticleDetails ? <ArchiveSubmitPaperCard /> : <PlumMetricsCard/>}
        <ListingSection data={quickLinks} title='Quick Links' />
        <ArchiveDownload />
        <ListingSection data={policies} title='policies' />

      </div>
    </section>
  )
}