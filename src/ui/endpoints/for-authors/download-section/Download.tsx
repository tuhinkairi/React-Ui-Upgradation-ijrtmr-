import CommonLayout from '../../../components/layout/CommonLayout'
import Title from '../../../other/Title'
import DownloadSectionCard from './DownloadSectionCard'

export default function Download() {
    return (
        <CommonLayout className='px-6 bg-white h-fit'>
            <Title>Downloads</Title>
            <div className='flex py-16 pt-14 '>
                <DownloadSectionCard title='Manuscript Template' downloadUrl='#' />
                <DownloadSectionCard title='CopyRight Form' downloadUrl='#' />
            </div>
        </CommonLayout>
    )
}
