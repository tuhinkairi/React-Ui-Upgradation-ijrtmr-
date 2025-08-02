import { Link } from 'react-router-dom'
import CommonLayout from '../../../components/layout/CommonLayout'
import VerificationSection from '../VerificationSection'
import Titleh2 from '../../../other/Titleh2'

function CrossMarkPolicy() {
    return (
        <CommonLayout>
            <article className='text-base 2xl:text-lg'>
                <div className='flex items-center justify-between flex-wrap '>
                    <Titleh2>Crossmark Policy</Titleh2>
                    <p className="text-sm xl:text-base 2xl:text-lg text-muted-foreground lg:mt-1">
                        <span className='font-medium text-base 2xl:text-lg'>Crossmark Policy DOI : </span><Link target='_blank' to="http://dx.doi.org/10.59256/ijrtmr/CrossMark-Policy-Page" className="text-primary hover:text-primary-hover underline">http://dx.doi.org/10.59256/ijrtmr/CrossMark-Policy-Page</Link>
                    </p>
                </div>
                <div className="my-4 mt-2 space-y-4 text-[#333333]">
                    <p>
                        Our journal participates in CrossMark, a multi-publisher initiative that has developed a standard way for readers to locate
                        the current version of an article. By enforcing CrossMark policies, <strong>Our journal</strong> is committed to maintaining
                        the content it publishes and alerting readers to changes as and when they occur.
                    </p>
                    <p>
                        Clicking on the CrossMark logo (at the top of each article) provides the current status of an article and directs you to the
                        latest published version and may also provide additional information.
                    </p>
                    <p>
                        To maintain the integrity and integrity of the academic record, the following policies will apply when published content needs
                        to be corrected; These policies take into account current best practices in the academic publishing and library communities:
                    </p>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>
                            Correction of an article is peer-reviewed prior to publication, corrections (or Erratum) are published to alert readers to
                            errors in the article that became apparent after the publication of the final article.
                        </li>
                        <li>
                            Retraction Articles may be removed for a variety of reasons, including research misconduct (data fabrication), duplicate or
                            overlapping publication, fraudulent use of data, clear plagiarism, and unethical research.
                        </li>
                    </ol>
                    <p>
                        For any article withdrawn, the reason for the withdrawal and who is instigating the withdrawal will be clearly stated in the
                        Withdrawal notice. The withdrawal notice will be linked to the withdrawn article (which usually remains on the site) and the
                        article will be clearly marked as withdrawn (including the PDF). Generally, an article is withdrawn at the request of the
                        authors or the editor in response to an institutional investigation.
                    </p>
                    <p>
                        The content of a withdrawn article will only be removed when legal limitations are imposed on the publisher, copyright holder,
                        or author(s), for example, if the article is clearly defamatory or violates the legal rights of others or if the article is
                        the same, subject to a court order. In such cases, the bibliographic information of the article will be kept on the site, along
                        with information about the circumstances that led to the removal of the content.
                    </p>
                    <p>
                        In rare circumstances, for example, if false or inaccurate data has been published and, if adopted, presents a serious health
                        risk, the original incorrect versions may be removed and a corrected version published. The reason for this partial removal
                        would be clearly stated in the most recent version.
                    </p>
                </div>
                <VerificationSection />
                <div className="text-[#333333] space-y-10  my-6">
                    <div>
                        <h2 className='font-semibold text-xl xl:text-2xl 2xl:text-3xl mb-2'>What does it look like?</h2>
                        <p>
                            The CrossMark logo will appear on the title page of every published document:
                        </p>
                    </div>
                    <div className='space-y-10'>
                        <h1 className='font-semibold text-xl xl:text-2xl 2xl:text-3xl mb-2'>How it works?</h1>
                        <p>
                            We have added the <span className="text-primary underline">Crossmark</span> logo to the version of record for all published documents. Clicking on the CrossMark icon will inform the reader of the current status of a document and additional publication record information, such as funding information and author ORCIDs (if available). As an author, this gives your work an extra level of authenticity.
                        </p>

                        <p>
                            Clicking on the Crossmark logo will tell you the current status of a document and may also give you additional publication record information about the document (e.g. information on content type, peer review, publication history, availability of supplementary materials, and copyright and licencing).
                        </p>
                    </div>
                </div>
            </article>
        </CommonLayout>
    )
}

export default CrossMarkPolicy
