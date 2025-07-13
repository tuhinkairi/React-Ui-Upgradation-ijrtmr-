import CommonLayout from '../../../components/layout/CommonLayout'
import Title from '../../../other/Title'
import DownloadSectionCard from './DownloadSectionCard'

export default function Download() {
    return (
        <CommonLayout className=' px-0 sm:px-6 bg-white h-fit'>
            <Title>Downloads</Title>
            <div className='flex flex-wrap sm:flex-nowrap py-16 pt-14 gap-6'>
                <DownloadSectionCard title='Manuscript Template' downloadUrl='#' />
                <DownloadSectionCard title='CopyRight Form' downloadUrl='#' />
            </div>
        </CommonLayout>
    )
}
