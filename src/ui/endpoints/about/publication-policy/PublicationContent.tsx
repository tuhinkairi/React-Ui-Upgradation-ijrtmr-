import { Link, useLocation } from 'react-router-dom'
import Title from '../../../other/Title'
import Titleh2 from '../../../other/Titleh2'

export default function PublicationContent() {
    const path = useLocation().pathname.includes("/ethics")
    return (
        <div className="space-y-4 pb-4 text-muted-foreground text-base 2xl:text-lg text-[#333333] leading-relaxed">
            {path ? <Titleh2>Publication Ethics Policy:</Titleh2> : <Title>Publication Ethics Policy:</Title>}
            <h3 className='font-medium text-center'>(The comments that follow are founded on Elsevier guidelines as well as COPE's Best Practice Guidelines for Journal Editors.)</h3>
            <p className='mt-6'>We at IJRTMR (International Journal of Recent Trends in Multidisciplinary Research) strongly believe in following these guidelines to maintain fair practice. We are committed to fair practice of publication. Success in this regard can be achieved if the following participants will practice ethics:</p>
            <div className="space-y-3">
                <h4 className="font-semibold text-lg 2xl:text-xl">Journal publishing ethics rules:</h4>
                <p>
                    The International Journal of Scientific Research in Engineering and Technology is committed to ensuring ethics in the publication and quality of articles. The International Journal of Scientific Research in Engineering and Technology follows the Code of Conduct as defined by the Committee of Publication Ethics (COPE). {<Link to="https://publicationethics.org/files/u2/New_Code.pdf." className="text-accent-blue" target='_blank'>https://publicationethics.org/files/u2/New_Code.pdf. </Link>}
                    These ethics include the editor following specific rules on relations with readers, authors, and reviewers and procedures for handling complaints. Conformance to standards of ethical behavior is therefore expected of all parties involved: Authors, Editors, Reviewers, and the Publisher. In particular.
                </p>
            </div>

            <div className='space-y-3'>
                <h4 className="font-semibold text-lg 2xl:text-xl">Authors:</h4>
                <p>
                    Authors should present an objective discussion of the significance of research work as well as sufficient details and references.Authors should maintain accurate records of data associated with their submitted manuscript and supply or provide access to these data, on reasonable request. Authors guarantee that all data used in the article are real and authentic. Where appropriate and where allowed by employer, funding body and others who might have an interest, authors should deposit data in a suitable repository or storage location, for sharing and further use by others.Fraudulent or knowingly inaccurate statements constitute unethical behavior and are unacceptable.
                </p>
                <p>
                    The authors should ensure that their work is entirely original, and if the work and/or words of others have been used, this fact has been appropriately acknowledged. Plagiarism in all its forms constitutes unethical publishing behavior and is unacceptable. Submitting the same manuscript to more than one journal concurrently constitutes unethical publishing behavior and is unacceptable. Authors should not submit articles describing essentially the same re-search to more than one journal.
                </p >
                <p>
                    Authors should acknowledge the financial support and help/guidance of others if appropriate.Authors should provide the disclaimer if appropriate.All co-authors should significantly contribute to the International Journal Research. The corresponding author should ensure that there is a full consensus of all co-authors in approving the final version of the paper and its submission for publication.Authors are obliged to participate in the peer review process.Authors should promptly notify the editor if a significant error in their publication is identified, and cooperate with the editor to publish an erratum, addendum, corrigendum notice, or to retract the paper, where it is deemed necessary.
                </p >

            </div>

            <div className='space-y-3'>
                <h4 className="font-semibold text-lg 2xl:text-xl">Editors:</h4>
                <p>Editors have complete responsibility and authority to accept/reject a manuscript.</p>
                <ul className='ml-4 list-disc space-y-1'>
                    <li>
                        Editors should evaluate manuscripts exclusively based on their academic merit. Editors act in a balanced, objective and fair way while carrying out their expected duties, without discrimination on grounds of gender, sexual orientation, religious or political beliefs, ethnic or geographical origin of the authors.
                    </li>
                    <li>

                        Editors accept the paper when reasonably certain.
                    </li>
                    <li>
                        Editors must not use unpublished information in the editor's own International Journal Research without the express written consent of the author.
                    </li>
                    <li>
                        Editors preserve the anonymity of reviewers.
                    </li>
                    <li>
                        When errors are found, editors promote International Journal Research Publication of correction or retraction.
                        Editors should take reasonable responsive measures when ethical complaints have been presented concerning a submitted manuscript or published article.
                    </li>
                </ul>
            </div>

            <div className='space-y-3'>
                <h4 className="font-semibold text-lg 2xl:text-xl">Reviewers:</h4>
                <ul className='ml-4 list-disc space-y-1'>
                    <li>
                        Any manuscripts received for review must be treated as confidential documents. Privileged information or ideas obtained through peer review must be kept confidential and not used for personal advantage.
                    </li>
                    <li>
                        Reports should be conducted objectively, and observations should be formulated clearly with supporting arguments, so that authors can use them for improving the paper. Any relevant published work which is not yet cited should be pointed out.
                    </li>
                    <li>
                        Any selected referee who feels unqualified to review the International Journal Research reported in a manuscript or knows that its prompt review will be impossible should notify the editor and excuse himself from the review process.
                    </li>
                    <li>
                        Reviewers should not consider manuscripts in which they have conflicts of interest resulting from competitive, collaborative, or other relationships or connections with any of the authors, companies, or institutions connected to the papers.
                    </li>
                </ul>
            </div>
            <div className='space-y-3'>
                <h4 className="font-semibold text-lg 2xl:text-xl">Publisher:</h4>
                <p>
                </p>
                <ul className='ml-4 list-disc space-y-1'>
                    <li>
                        Publisher monitors and safeguards publishing ethics.
                    </li>
                    <li>
                        Publisher communicates journal policies.
                    </li>
                    <li>
                        Publisher respects the privacy of all parties involved.
                    </li>
                    <li>
                        Publishers foster editorial independence.
                    </li>
                    <li>
                        Publisher maintains the integrity of the academic record.
                    </li>
                    <li>
                        Publishers protect intellectual property and copyrights.
                    </li>
                    <li>
                        Publisher publishes corrections, clarifications, and retractions.
                    </li>
                    <li>
                        Publisher constantly improves the quality of the journal.
                    </li>
                </ul>
            </div>

        </div>
    )
}
