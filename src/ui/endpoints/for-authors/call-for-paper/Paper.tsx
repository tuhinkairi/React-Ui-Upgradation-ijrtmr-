import Title from "../../../other/Title";

const Paper = () => {
  return (
    <div className="xl:text-base 2xl:text-lg">
      <Title>Call for Papers</Title>

      <p className="my-6 text-justify leading-relaxed">
        International Journal of Recent Trends in Multidisciplinary Research (IJRTMR) has
        ISSN: 2583-0368 (online), Bi Monthly international journal by Fifth Dimension Research
        Publication. It is an academic, online, open access, Peer reviewed international journal. It aims
        to publish original, theoretical, and practical advances in Computer Science Engineering,
        Internet of things, Data Science, Machine learning, Information Technology, Electrical and
        Electronics Engineering, Electronics and Telecommunication, Mechanical Engineering, Civil
        Engineering, Textile Engineering, and all interdisciplinary streams of Engineering Sciences.
        The board of committee of IJRTMR will review all submitted papers.
      </p>

      <p className="mb-4 text-justify leading-relaxed">
        International Journal Papers for the regular issues of the Journal can be submitted, around the year, electronically at <span className="font-medium">editorinchief@ijrtmr.com</span>.
        After the final acceptance of the paper, based upon the detailed review process, it will immediately be published online. However, the assignment of the report to a specific Volume / Issue (see archive) of the journal will be taken up by the Editorial Board later;
        and the author will be intimated accordingly. For Theme Based Special Issues, time-bound Special Calls for Papers will be informed, and the same will only apply to that specific issue.
      </p>

      <p className="mb-6 text-justify">
        For the author’s convenience, we strongly follow the following steps.
      </p>

      <div className="bg-gray-50 p-5 border-l-4 border-primary rounded-md mb-6">
        <h3 className="font-semibold text-gray-800 mb-2">
          Last Date for Manuscript Submission: <span className="text-primary-text font-bold">25th of every Bimonthly (February, April, June, August, October, December)</span>
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3">
          <li>The response will be given within 12 hours.</li>
          <li>The paper will be reviewed within Two days.</li>
          <li>The author will get their Acceptance/Rejection Notification within three days of submitting the paper.</li>
          <li>All the accepted papers will be open and accessible with a full PDF download.</li>
          <li>All Authors will get a Soft copy of the certificate, acceptance letter, and reviewer evaluation grading.</li>
        </ul>
      </div>

      <p className="mt-4">
        <strong>Submit your article: </strong>
        <span className="text-primary-text font-medium">Editorial Management system–Online submission.</span>
      </p>
    </div>
  );
};

export default Paper;
