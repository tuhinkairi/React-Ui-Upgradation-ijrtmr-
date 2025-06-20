import CommonLayout from "../../../components/layout/CommonLayout";
import Title from "../../../other/Title";
import VerificationSection from "../VerificationSection";

export default function PublicationPolicy() {
    return (
        <CommonLayout>
            <div className="space-y-4 pb-4 text-muted-foreground text-base">
            <Title>Publication Ethics</Title>
                <p className="mt-6">
                    <span className="font-semibold">Originality & Plagiarism:</span> Submitted manuscripts must be original and not plagiarized. Proper citations must be given for any borrowed content.
                </p>

                <p>
                    <span className="font-semibold">Authorship Criteria:</span> All listed authors must have significantly contributed to the research. Ghost, guest, or gift authorship is prohibited.
                </p>

                <p>
                    <span className="font-semibold">Conflict of Interest:</span> Authors must disclose any financial or personal conflicts that could influence the research.
                </p>

                <p>
                    <span className="font-semibold">Data Integrity:</span> Fabrication, falsification, or manipulation of data is unethical and will lead to rejection or retraction.
                </p>

                <p>
                    <span className="font-semibold">Simultaneous Submission:</span> Submitting the sFDRP e manuscript to multiple journals at once is not allowed.
                </p>

                <p>
                    <span className="font-semibold">Peer Review:</span> The journal likely follows a peer-review process to ensure quality.
                </p>
            </div>
            <VerificationSection />

        </CommonLayout>
    )
}
