import Title from '../../../other/Title'

export default function ChargesPaper() {
    return (
        <section className='space-y-4 leading-relaxed mb-10 2xl:text-lg'>
            <Title>Article Processing  Charges</Title>
            <p>Open-access publication, so it is freely available online. The cost on publishing online editions, and to ensure the continuous appearance of the journal, the core committee has decided to charge a minimal fee from the authors after the acceptance of manuscript as follows:</p>
            <div>
                <h2 className='font-medium mb-2 text-lg xl:text-xl 2xl:text-2xl'>Case Report/Original Article/Review Article Fee:</h2>
                <h2 className='font-medium mb-2 text-lg xl:text-xl 2xl:text-2xl'>For Indian authors:</h2>
                <ul className='list-disc list-inside space-y-1'>
                    <li className='font-medium ml-2'><span >Without DOI :</span> <span className='text-[#0E4B82]'>1200 INR</span> <span className='text-primary'>+ 18% GST</span></li>
                    <li className='font-medium ml-2'><span >With DOI :</span><span className='text-[#0E4B82]'> 1400 INR</span> <span className='text-primary'> + 18% GST</span></li>
                    <h2 className='font-medium'>For other than Indian authors:</h2>
                    <li className='font-medium ml-2'><span >With DOI :</span><span className='text-[#0E4B82]'> $ 60 USD</span></li>
                </ul>
                Authors of any country can convert USD to their respective currency using the google currency calculator.
            </div>
            <br />
            <section className='space-y-6'>

                <div className=''>
                    <h2 className='font-medium mb-2 text-lg xl:text-xl 2xl:text-2xl'>
                        Journal Hosting System
                    </h2>
                    <ul className='list-disc list-inside space-y-1'>
                        <li>Editorial management System</li>
                        <li>In-house copyediting and linguistic support</li>
                        <li>Pagination & typesetting</li>
                        <li>Archiving, where appropriate, in an internationally recognized, open access repositories.</li>
                    </ul>
                </div>
                <div className=''>
                    <h2 className='font-medium mb-2 text-lg xl:text-xl 2xl:text-2xl'>
                        Note
                    </h2>
                    <ul className='list-decimal list-inside space-y-1 '>
                        <li>
                            After making payment the proof of payment should be produced.
                        </li>
                        <li>
                            The manuscript fee is non-refundable, and if the author wishes to withdraw the manuscript after paying the charges, the fees, in that case, would not be refunded.
                        </li>
                        <li>
                            Detailed information about how to transfer the manuscript fee will be sent on request.
                        </li>
                        <p>
                            If you face any problems or difficulties please contact us for further guidance. Send us a copy of the receipt as proof of the transfer of the money. Once the required transaction is confirmed by our bank, we will intimate you promptly.
                        </p>
                    </ul>
                </div>
                <div className=''>
                    <h2 className='font-medium mb-2 text-lg xl:text-xl 2xl:text-2xl'>
                        Waivers Policy
                    </h2>
                    <p>
                        Publication of an article in the journal is not contingent upon the author's ability to pay the charges. Neither is acceptance to pay the handling fee a guarantee that the paper will be accepted for publication. Authors that may not be able to pay can request the editorial office to reduce the fee to an amount as per editorial office norms. We only accept payment of handling fee/processing charges after the manuscript has been accepted for publication.
                    </p>
                </div>
                <div className=''>
                    <h2 className='font-medium mb-2 text-lg xl:text-xl 2xl:text-2xl'>
                        Qualifying for a Waiver
                    </h2>
                    <p>
                        To help support researchers in low-income economies according to World Bank, the Journal provides an automatic 50% waiver of any Article Processing Charges for manuscripts where all authors listed affiliation is in one of these countries.
                        <br />
                        <br />

                        Additionally, the Journal will provide a 50% reduction in any APCs when the author(s) of an article does not have the funding required to cover these charges and can provide one of the following to demonstrate this:
                        <br />
                        <br />

                        Signed letter from author(s) suitable institutional representative, such as institutional Head of Department, with verifiable institutional email address confirming payment will be made from author’s personal funds (all authors must provide a letter to this effect)
                        <br />
                        <br />

                        Signed letter from retired or independent author(s) indicating their lack of institutional association and confirming payment will be made from personal funds (all authors on paper must be retired or independent and confirm this)
                        <br />
                        <br />
                        Signed letter from the author(s) institution(s) confirming budget constraints, indicating their funding body does not cover publication charges or indicating the institutional budgets are severely impacted. This must be signed by the Institutional Head of Department with verifiable institutional email address clearly stating the budget constraints (all authors must provide a letter to this effect)
                    </p>
                </div>
            </section>
        </section>
    )
} 
