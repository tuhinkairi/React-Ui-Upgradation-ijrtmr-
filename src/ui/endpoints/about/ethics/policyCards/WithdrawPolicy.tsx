import Titleh2 from "../../../../other/Titleh2";

export default function WithdrawPolicy() {
    return (
        <article className="leading-relaxed space-y-6">
            <Titleh2>Article withdraw policy</Titleh2>
            <p className="mt-6">It is a general principle of scholarly communication that the editor/guest editor of a
                learned journal/series is solely and independently responsible for deciding which
                articles submitted to the journal shall be published. In making this decision the
                editor/guest editor is guided by policies of the journal’s editorial board and
                constrained by such legal requirements in force regarding libel, copyright
                infringement and plagiarism. An outcome of this principle is the importance of the
                scholarly archive as a permanent, historic record of the transactions of scholarship.
                Articles that have been published shall remain extant, exact and unaltered as far as
                is possible. However, very occasionally circumstances may arise where an article is
                published that must later be retracted or even removed. Such actions must not be
                undertaken lightly and can only occur under exceptional circumstances, such as:</p>
            <div>
                <h2 className="font-medium text-lg xl:text-xl 2xl:text-3xl mb-2">
                    Article Withdrawal:
                </h2>
                <p>
                    Only used for Articles in Press which represent early versions of articles and sometimes
                    contain errors, or may have been accidentally submitted twice. Occasionally, but less
                    frequently, the articles may represent infringements of professional ethical codes, such
                    as multiple submission, bogus claims of authorship, plagiarism, fraudulent use of data
                    or the like. Articles in Press (articles that have been accepted for publication but which
                    have not been formally published and will not yet have the complete
                    volume/issue/page information) that include errors, or are discovered to be accidental
                    duplicates of other published article(s), or are determined to violate our journal
                    publishing ethics guidelines in the view of the editors (such as multiple submission,
                    bogus claims of authorship, plagiarism, fraudulent use of data or the like), may be
                    “Withdrawn” from IJSREAT . Withdrawn means that the article content (HTML and
                    PDF) is removed and replaced with a HTML page and PDF simply stating that the
                    article has been withdrawn according to the IJSREAT Policy on Article in Press
                    Withdrawal with a link to the current policy document.
                </p>
            </div>
            <div>
                <h2 className="font-medium text-lg xl:text-xl 2xl:text-3xl mb-2">
                    Article Retraction:
                </h2>
                <p>
                    Infringements of professional ethical codes, such as multiple submission, bogus claims
                    of authorship, plagiarism, fraudulent use of data or the like. Occasionally a retraction
                    will be used to correct errors in submission or publication. The retraction of an article by
                    its authors or the editor under the advice of members of the scholarly community has
                    long been an occasional feature of the learned world. Standards for dealing with
                    retractions have been developed by a number of library and scholarly bodies, and this
                    best practice is adopted for article retraction by IJSREAT
                </p>
                <ul className="space-y-1 ml-6 mt-6 list-disc">
                    <li>
                        A retraction note titled “Retraction: [article title]” signed by the authors and/or the
                        editor is published in the paginated part of a subsequent issue of the journal and
                        listed in the contents list.
                    </li>
                    <li>In the electronic version, a link is made to the original article.</li>
                    <li>The online article is preceded by a screen containing the retraction note. It is to this
                        screen that the link resolves; the reader can then proceed to the article itself.</li>
                    <li>The original article is retained unchanged save for a watermark on the .pdf
                        indicating on each page that it is “retracted.” The HTML version of the document is
                        removed.</li>
                </ul>
            </div>
            <div>
                <h2 className="font-medium text-lg xl:text-xl 2xl:text-3xl mb-2">
                    Article removal: legal limitations
                </h2>
                <p>
                    In an extremely limited number of cases, it may be necessary to remove an article from
                    the online database. This will only occur where the article is clearly defFDRP atory, or
                    infringes others’ legal rights, or where the article is, or we have good reason to expect it
                    will be, the subject of a court order, or where the article, if acted upon, might pose a
                    serious health risk. In these circumstances, while the metadata (Title and Authors) will
                    be retained, the text will be replaced with a screen indicating the article has been
                    removed for legal reasons.
                </p>
            </div>
            <div>
                <h2 className="font-medium text-lg xl:text-xl 2xl:text-3xl mb-2">
                    Article replacement
                </h2>
                <p>
                    In cases where the article, if acted upon, might pose a serious health risk, the authors of
                    the original article may wish to retract the flawed original and replace it with a
                    corrected version. In these circumstances the procedures for retraction will be followed
                    with the difference that the database retraction notice will publish a link to the
                    corrected re-published article and a history of the document.
                </p>
            </div>
        </article>
    )
}
