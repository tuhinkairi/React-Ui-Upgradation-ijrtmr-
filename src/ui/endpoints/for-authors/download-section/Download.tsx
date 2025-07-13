import CommonLayout from '../../../components/layout/CommonLayout'
import Title from '../../../other/Title'
import DownloadSectionCard from './DownloadSectionCard'

export default function Download() {
    return (
        <CommonLayout className=' px-3 sm:px-6 bg-white h-fit'>
            <Title>Downloads</Title>
            <div className='flex flex-wrap sm:flex-nowrap py-16 pt-14 gap-6'>
                <DownloadSectionCard title='Manuscript Template' downloadUrl='https://ijsreat.com/downloads/manuscript.docx' />
                <DownloadSectionCard title='CopyRight Form' downloadUrl='https://ijsreat.com/downloads/copyrights.pdf' />
            </div>
        </CommonLayout>
    )
}
