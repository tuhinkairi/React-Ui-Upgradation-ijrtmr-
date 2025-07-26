import { Link } from "react-router-dom";
import Title2h2 from "../../other/Title2h2";

const steps = [
  {
    title: 'Submission',
    description: 'Submit your article using the Editorial Management System',
    image: './submitPaper.webp',
    button: true,
  },
  {
    title: 'Initial Check',
    description: 'Plagiarism (<30%) and formatting are reviewed by the editorial team.',
    image: './review.webp',
  },
  {
    title: 'Peer Review',
    description: 'Peer review ensures quality, originality, and relevance.',
    image: './acceptance.webp',
  },
  {
    title: 'Acceptance',
    description: 'Accepted authors receive a formal letter and payment instructions through EMS.',
    image: './processing.webp',
  },
  {
    title: 'Payment & Copy Right',
    description: 'Submit the Final article, Copyright Form, APC and required forms.',
    image: './copyright.webp',
  },
  {
    title: 'Final Processing',
    description: 'Typesetting and layout completed by our editorial staff.',
    image: './review.webp',
  },
  {
    title: 'Online Publication',
    description: 'Paper published with DOI(optional) and listed for indexing.',
    image: './publication.webp',
  },
  {
    title: 'Author Dashboard',
    description: 'Track views, downloads, DOI, and access post-publication support.',
    image: './submitPaper.webp',
  }
];

export default function PublishProcess() {
  return (
    <section className="">
      <div className="mb-10 md:mb-16">
        {/* <h2 className="text-3xl font-semibold">Streamlined Publication Process</h2> */}
        <Title2h2>Streamlined Publication Process</Title2h2>
        <p className="mt-2 text-sm 2xl:text-base text-secondaryText">Our efficient workflow ensures your research gets published quickly without sacrificing quality</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-8">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-start space-y-4 max-w-96 xl:max-w-full mx-auto ">
            <img loading='lazy'
              src={step.image} alt={step.title} className="w-full max-w-xs xl:max-w-full object-contain mx-auto" />
            <h4 className="text-lg  2xl:text-lg  font-semibold text-gray-900">{step.title}</h4>
            <p className="text-sm  2xl:text-base text-paragraph">{step.description}</p>
            {step.button && (
              <Link to="https://editorial.fdrpjournals.org/login?journal=2" target="_blank">
                <button className="mt-2 bg-teal-400  border border-teal-400 text-white text-base 2xl:text-lg  font-medium px-4 py-2 rounded-lg hover:bg-teal-500 transition-all inline-flex items-center gap-2 animate-bounce">
                  Submit
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
