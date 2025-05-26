import React from 'react'
import ArchiveSubmitPaperCard from '../cards/ArchiveSubmitPaperCard'
import AutherCardArchive from '../cards/AutherCardArchive'
import ArchiveDownload from '../cards/ArchiveDownload'

export default function ArchiveLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="_journalLayout ml-16 grid grid-cols-4 2xl:grid-cols-5 justify-between gap-5 mr-4 xl:mr-16">
      <h2 className="text-3xl font-bold  my-4 col-span-4">ARCHIVES</h2>
      <div className='lhs col-span-3 2xl:col-span-4 mr-2'>
        {children}
      </div>
      <div className='space-y-6 flex flex-col items-end'>
        <ArchiveSubmitPaperCard/>
        <ArchiveDownload/>
        <AutherCardArchive/>
      </div>
    </section>
  )
}
