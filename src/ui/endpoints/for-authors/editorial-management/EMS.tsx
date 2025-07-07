import CommonLayout from '../../../components/layout/CommonLayout'
import VerificationSection from '../../about/VerificationSection'
import EMSPage from './EMSPage'

export default function EMS() {
  return (
    <CommonLayout>
      <EMSPage/>
      <VerificationSection/>
    </CommonLayout>
  )
}
