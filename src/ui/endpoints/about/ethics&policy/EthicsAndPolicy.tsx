import CommonLayout from '../../../components/layout/CommonLayout'
import Title from '../../../other/Title'
import IndexingPartnerArchive from '../../archive/components/IndexingPartnerArchive'
import VerificationSection from '../VerificationSection'
import EPDropdown from './EPDropdown'

export default function EthicsAndPolicy() {
  return (
    <CommonLayout>
      {/* section1 */}
      <section className='space-y-7 text-muted-foreground text-base mb-6'>
        <div className="w-full flex justify-center items-center text-[#333333]">
          <div className="">
            <Title>Ethics &amp; Policies</Title>
            <p className=" leading-[1.9] my-5">
              International Journal of Scientific Research in Engineering &amp; Technology (IJSREAT) is (Online), Bi-monthly international journal for publication of new ideas founded by academicians, educationist, engineers and corporate people. The research results and fund FDRP ental advancement are all aspects of Innovative Research in Advanced Engineering &amp; Technology and various engineering disciplines, etc. IJSREAT is a scholarly open access, Peer Review Journal which helps to academic person as well as student community. IJSREAT provides the academic community and industry for the submission of original research and applications related to Various Engineering discipline and Advanced Technologies by Fifth Dimension Research Publications (FDRP) Tamil Nadu, India since year 2020.
            </p>
            <p className=" leading-[1.9] ">
              The publication of an article in a peer-reviewed journal is an essential building block in the development of a coherent and respected network of knowledge. It is a direct reflection of the quality of work of the author and the institutions that support them. Double Blind Peer-reviewed articles support and embody the scientific method. It is therefore important to agree upon standards of expected ethical behaviour.
            </p>
          </div>
        </div>
        <IndexingPartnerArchive />
        {/* section 2 */}
        <div className="w-full flex justify-center items-center">
          <div>
            <Title>
              Ethics topics to consider when publishing:
            </Title>

            <ul className="space-y-4 text-[#333333] text-[15.5px] leading-[1.9]">
              <li>
                <strong>Authorship of the paper:</strong> Authorship should be limited to those who have made a significant contribution to the conception, design, execution, or interpretation of the reported study.
              </li>
              <li>
                <strong>Originality and plagiarism:</strong> The authors should ensure that they have written entirely original works, and if the authors have used the work and/or words of others that this has been appropriately cited or quoted.
              </li>
              <li>
                <strong>Data access and retention:</strong> Authors may be asked to provide the raw data in connection with a paper for editorial review, and should be prepared to provide public access to such data.
              </li>
              <li>
                <strong>Multiple, redundant or concurrent publication:</strong> An author should not in general publish manuscripts describing essentially the research in more than one journal or primary publication. FDRP Journals do not view the following uses of a work as prior publication: publication in the form of an abstract; publication as an academic thesis; publication as an electronic preprint. Information on prior publication is included within each FDRP journal Guide for Authors.
              </li>
              <li>
                <strong>Acknowledgement of sources:</strong> Proper acknowledgment.
              </li>
              <li>
                <strong>Disclosure and conflicts of interest:</strong> All submissions must include disclosure of all relationships that could be viewed as presenting a potential conflict of interest.
              </li>
              <li>
                <strong>Fundamental errors in published works:</strong> When an author discovers a significant error or inaccuracy in his/her own published work, it is the author’s obligation to promptly notify the journal editor or publisher and cooperate with the editor to retract or correct the paper.
              </li>
              <li>
                <strong>Reporting standards:</strong> Authors of reports of original research should present an accurate account of the work performed as well as an objective discussion of its significance.
              </li>
              <li>
                <strong>Hazards and human or animal subjects:</strong> Statements of compliance are required if the work involves chemicals, procedures or equipment that have any unusual hazards inherent in their use, or if it involves the use of animal or human subjects.
              </li>
              <li>
                <strong>Use of patient images or case details:</strong> Studies on patients or volunteers require ethics committee approval and informed consent, which should be documented in the paper.
              </li>
            </ul>
          </div>
        </div>
        <EPDropdown/>
        <VerificationSection/>
      </section>
    </CommonLayout>
  )
}
