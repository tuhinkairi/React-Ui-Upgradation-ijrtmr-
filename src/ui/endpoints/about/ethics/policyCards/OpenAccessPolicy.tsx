import Titleh2 from "../../../../other/Titleh2";
import LicenseTable from "./component/LicenseTable";

export default function OpenAccessPolicy() {
    return (
        <article className="space-y-8 leading-relaxed">
            <Titleh2>Open Access Policy</Titleh2>
            <p className="mt-6">
                The aim of Fifth Dimension Research Publications (FDRP) and its journals are to provide the
                best choice of user license options which define how readers can reuse open access articles
                published on our platforms.
            </p>
            <div>
                <h3 className="text-lg xl:text-2xl 2xl:text-3xl font-medium mb-4">
                    FDRP Publications and its journal Policy:
                </h3>
                <ul className="list-disc ml-6 mt-4 space-y-1">
                    <li>
                        Offer a choice between a commercial and a non commercial Creative Commons
                        license for gold open access articles in our proprietary titles. The choice is dependent
                        on the journal in which the author chooses to publish. Please refer to the journal’s
                        homepage for specific details.
                    </li>
                    <li>
                        Use the user license for our open archive content
                    </li>
                    <li>
                        FDRP Publications and it’s journals support green open access and accepted
                        manuscripts can be self-archived following our sharing guidelines and are r3quired to
                        attach a CC-BY-NC-ND license.
                    </li>
                </ul>
            </div>

            <div>
            <h3 className="text-lg xl:text-2xl 2xl:text-3xl font-medium mb-4">
                    Choosing a License
                </h3>
                <p>
                    Once selected, Creative Commons user licenses are Non Commercial-No Derivs. FDRP
                    Publications and Its journals recommend author(s) check if their funding body requires a
                    specific license. See the Creative Commons website for more details about what to consider
                    before choosing a user license. Click here for a full list of user licenses used by FDRP
                    Publications and its journal.
                </p>
        </div>
            <LicenseTable />
            <p className="text-gray-600">Please note: Under the CC BY-NC-ND license and for the FDRP Publications and its journal
                user license permitted 3rd party reuse is only applicable for non-commercial purposes. For
                further details on the rights granted to FDRP publications and Its Journal.</p>
            <div>
             <h3 className="text-lg xl:text-2xl 2xl:text-3xl font-medium mb-2">
                    Creative Commons Attribution (CC BY)
                </h3>
                <p>
                    Allows users to: distribute and copy the article; create extracts, abstracts, and other revised
                    versions, adaptations or derivative works of or from an article (such as a translation); include
                    in a collective work (such as an anthology); and text or data mine the article. These uses are
                    permitted even for commercial purposes, provided the user: gives appropriate credit to the
                    author(s) (with a link to the formal publication through the relevant DOI); includes a link t3
                    the license; indicates if changes were made; and does not represent the author(s) as
                    endorsing the adaptation of the article or modify the article in such a way as to damage the
                    authors’ honor or reputation.
                </p>
            </div>
            <div>
           <h3 className="text-lg xl:text-2xl 2xl:text-3xl font-medium mb-2">
                    Creative Commons Attribution-Non Commercial-NoDerivs (CC BY-NC-ND)
                </h3>
                <p>
                    Allows users to: distribute and copy the article; and include in a collective work (such as an
                    anthology). These uses are permitted only for non-commercial purposes, and provided the
                    user: gives appropriate credit to the author(s) (with a link to the formal publication through
                    the relevant DOI); provides a link to the license; and does not alter or modify the article.
                    If you need to comply with your funding body policy you can apply for a CC BY license after
                    your manuscript is accepted for publication.
                </p>
            </div>
        </article>
    )
}
