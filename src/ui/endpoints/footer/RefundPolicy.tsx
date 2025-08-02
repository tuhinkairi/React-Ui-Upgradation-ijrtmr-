import CommonLayout from "../../components/layout/CommonLayout";
import Title from "../../other/Title";

export default function RefundPolicy() {
    return (

        <CommonLayout className='px-3 sm:px-6 bg-white text-base leading-relaxed'>
            <article className="xl:text-base 2xl:text-lg space-y-6 px-0 bg-white">

                <Title>Return and Refund Policy</Title>
                <h2>International Journal of Scientific Research in Engineering &amp; Technology (IJRTMR)</h2>
                <div className="space-y-3">
                    <h2 className="text-lg md:text-xl font-semibold">
                        1. General Policy
                    </h2>
                    <p>
                        IJRTMR operates as an open-access academic journal with Article Processing Charges
                        (APCs). Due to the digital nature of our publications and the costs associated with peer review,
                        editing, and hosting, we maintain a strict no-refund policy in most cases.
                    </p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-lg md:text-xl font-semibold">
                        2. Article Processing Charges (APCs)
                    </h2>
                    <p>

                        APCs are non-refundable once the peer review process has begun.
                        If a manuscript is rejected before peer review, authors may request a full or partial
                        refund (subject to administrative review).
                        Payments made in error (duplicate transactions, incorrect amounts) may be refunded upon
                        verification.
                    </p>

                </div>
                <div className="space-y-3">
                    <h2 className="text-lg md:text-xl font-semibold">
                        3. Fees &Payments
                    </h2>
                    <h3>
                        IJRTMR primarily follows an open-access model, but if any paid subscriptions/memberships
                        are offered:
                    </h3>
                    <h4>
                        No refunds for digital access after content has been delivered.
                    </h4>
                    <h4>
                        Cancellations must be requested before the next billing cycle.
                    </h4>

                </div>
                <div className="space-y-3">
                    <h2 className="text-lg md:text-xl font-semibold">
                        4. Waivers &Financial Assistance
                    </h2>
                    <div>
                        <p className="">
                            IJRTMR may provide fee waivers for authors from low-income countries or under special
                            circumstances. <br />
                            Waiver requests must be submitted before payment.
                        </p>
                    </div>
                </div>

                <div className="space-y-3">
                    <h2 className="text-lg md:text-xl font-semibold">
                        6. Contact for Refund Requests
                    </h2>
                    <ul>
                        <li>
                            For refund inquiries, contact:
                        </li>
                        <li>
                            International Journal Of Scientific Research In Engineering &amp; Technology
                        </li>
                        <li>
                            Email: <a href="mailto:editorinchief@ijrtmr.com" className="text-accent-blue hover:underline">editorinchief@ijrtmr.com</a>
                        </li>
                        <li>
                            Publisher:
                            <br />
                            Fifth Dimension research Publication (P) Ltd.
                        </li>
                        <li>
                            No: 38D5F, Rajaji nagar, Ariyalur-621713. Tamilnadu, India.
                        </li>

                    </ul>
                    <h3><span className="font-medium mr-1">Subject Line:</span> ”Refund Request - [Paper ID/Transaction ID]”</h3>
                </div>
            </article>
        </CommonLayout>
    )
}
