import CommonLayout from '../../../components/layout/CommonLayout'
import VerificationSection from '../../about/VerificationSection'
import Publishing from './Publishing'

export default function JournalPublishingProcess() {
  return (
    <CommonLayout className='space-y-12 px-0 sm:px-6 bg-white'>
      <Publishing/>
      <VerificationSection/>
    </CommonLayout>
  )
}
