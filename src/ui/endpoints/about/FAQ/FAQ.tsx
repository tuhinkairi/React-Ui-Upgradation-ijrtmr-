import CommonLayout from "../../../components/layout/CommonLayout";
import Title from "../../../other/Title";
import VerificationSection from "../VerificationSection";

export default function FAQ() {
    return (
        <CommonLayout>
            <div className="space-y-6 text-muted-foreground text-base xl:text-xl 2xl:text-lg mb-6">
                <Title>Frequently Asked Questions :</Title>

                <div className="mt-6">
                    <p><span className="font-semibold">Q–1: What is the ISSN of the journal?</span></p>
                    <p className="text-paragraph">Ans: ISSN: ISSN–2583–1240</p>
                </div>

                <div>
                    <p><span className="font-semibold">Q–2: When it was started? | When first issue of the journal was published?</span></p>
                    <p className="text-paragraph">Ans: It was started in year 2021. IJSREAT is being published by 5th Dimension Research Publication. First Issue: January–February 2021</p>
                </div>

                <div>
                    <p><span className="font-semibold">Q–3: Is it open access journal?</span></p>
                    <p className="text-paragraph">Ans: Yes, it is an open access journal.</p>
                </div>

                <div>
                    <p><span className="font-semibold">Q–4: Is it peer reviewed journal?</span></p>
                    <p className="text-paragraph">Ans: Yes, it is peer reviewed journal.</p>
                </div>

                <div>
                    <p><span className="font-semibold">Q–5: How much time you will take to resolve a query?</span></p>
                    <p className="text-paragraph">Ans: It will be resolved within 24 hours.</p>
                </div>

                <div>
                    <p><span className="font-semibold">Q–6: What is the plagiarism policy?</span></p>
                    <p className="text-paragraph">Ans: We do not accept papers that are having plagiarized contents. Good quality plagiarism software/tool will be used to check similarity that would not be more than 30% including reference section. In the case of exclusion of references, it should be less than 5%.</p>
                </div>

                <div>
                    <p><span className="font-semibold">Q–7: Which software is referred for plagiarism/similarity check?</span></p>
                    <p className="text-paragraph">Ans: Turnitin software/ Ithenticate/ Plagiarism checker X</p>
                </div>

                <div>
                    <p><span className="font-semibold">Q–8: Can I send only abstract for review?</span></p>
                    <p className="text-paragraph">Ans: No, you have to send full length paper for review process.</p>
                </div>

                <div>
                    <p><span className="font-semibold">Q–9: Is it compulsory to come for reading/presenting the paper in PPT?</span></p>
                    <p className="text-paragraph">Ans: No, there is no need to come here for reading/presenting your paper. Your paper is sufficient for all purposes. Send your paper for review process. Once your paper is accepted by the editorial board of committee of the journal, we will send you notification of your paper over the email along with further guidelines for the publication of your paper.</p>
                </div>

                <div>
                    <p><span className="font-semibold">Q–10: How much time will you take for review process?</span></p>
                    <p className="text-paragraph">Ans: It depends on reviewer response. It will take min 01 to 07 days.</p>
                </div>

                <div>
                    <p><span className="font-semibold">Q–11: My paper has been published. Can make any changes now in the paper?</span></p>
                    <p className="text-paragraph">Ans: Author(s) can make rectification in the final paper but after the final submission to the journal, rectification is not possible.</p>
                </div>

                <div>
                    <p><span className="font-semibold">Q–12: What are the terms and conditions to withdraw my paper?</span></p>
                    <p className="text-paragraph">Ans: Terms and conditions are available in the ‘Ethics & Policy’ page. Please check the journal website. If once the paper is published It is not possible to withdraw the paper.</p>
                </div>

                <div>
                    <p><span className="font-semibold">Q–13: Is any Instructions/Guidelines for authors?</span></p>
                    <p className="text-paragraph">Ans: Yes, it is available in the ‘Ethics & Policy’ page. Please visit journal website.</p>
                </div>

                <div>
                    <p><span className="font-semibold">Q–14: What are the Terms & Conditions of the journal?</span></p>
                    <p className="text-paragraph">Ans: Please visit journal website. It is available in the “Ethics & Policy” page</p>
                </div>

                <div>
                    <p><span className="font-semibold">Q–15: Is any payment guideline available?</span></p>
                    <p className="text-paragraph">Ans: Journal does not take any kind of publication fee/acceptance fee/review fee/handling fee/processing fee. It is free journal</p>
                </div>

                <div>
                    <p><span className="font-semibold">Q–16: Is any paper publication fee/handling fee?</span></p>
                    <p className="text-paragraph">Ans: No, it’s free. Journal does not take any kind of publication fee/acceptance fee/review fee/handling fee/processing fee. It is free journal.</p>
                </div>

                <div>
                    <p><span className="font-semibold">Q–17: My article has been published but there is some correction. What did I do? | My article has been published but I want some changes. Is it possible?</span></p>
                    <p className="text-paragraph">Ans: Author(s) can make rectification in the final paper but after the final submission to the journal, rectification is not possible.</p>
                </div>

                <div>
                    <p><span className="font-semibold">Q–18: Is the scam, fake, predatory, standalone?</span></p>
                    <p className="text-paragraph">Ans: No, this journal is not a fake journal. It is 100% legal, registered and recognized journal. If you have proof of it then please write me. We will give verification and validation.</p>
                </div>
            </div>
            <VerificationSection />
        
        </CommonLayout>
    )
}
