import CommonLayout from '../../components/layout/CommonLayout'
import IndexingPartnerArchive from '../archive/components/IndexingPartnerArchive'
import AimScope from './AimScope'
import VerificationSection from './VerificationSection'

function About() {
  return (
    <CommonLayout >
        <AimScope/>
        <VerificationSection/>
        <IndexingPartnerArchive/>
    </CommonLayout>
  )
}

export default About
