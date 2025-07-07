import { Link } from "react-router-dom";

const steps = [
  {
    title: 'Online Submission',
    description: 'Submit your paper through our advanced editorial management system anytime, from anywhere in the world.',
    image: './submitPaper.png',
    button: true,
  },
  {
    title: 'Initial Review',
    description: 'Our editorial team conducts a quick quality check and assigns reviewers within 12 hours of submission.',
    image: './review.png',
  },
  {
    title: 'Peer Review',
    description: 'Expert reviewers evaluate your paper\'s quality, originality, and significance within 2-7 days.',
    image: './acceptance.png',
  },
  {
    title: 'Decision Notification',
    description: 'Receive acceptance, revision, or rejection notification within 3-7 days of submission.',
    image: './processing.png',
  },
  {
    title: 'Publication & Certification',
    description: 'Accepted papers are published immediately with open access, and authors receive digital certificates.',
    image: './copyright.png',
  },
  // {
  //   title: 'Published',
  //   description: 'The paper will be published, and the author will be notified via their registered email address.',
  //   image: './publication.png',
  // },
];

export default function PublishProcess() {
  return (
    <section className="py-16">
      <div className=" mb-16">
        <h2 className="text-3xl font-semibold">Streamlined Publication Process</h2>
        <p className="mt-2 text-sm text-secondaryText">Our efficient workflow ensures your research gets published quickly without sacrificing quality</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-start space-y-4 max-w-96">
            <img src={step.image} alt={step.title} className="w-full max-w-xs object-contain" />
            <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
            <p className="text-sm text-paragraph">{step.description}</p>
            {step.button && (
              <Link to="https://editorial.fdrpjournals.org/login?journal=2" target="_blank">
              <button className="mt-2 bg-[#FF8C4233]  border border-peach-200 text-sm px-4 py-2 rounded-lg hover:bg-peach-200 transition inline-flex items-center gap-2">
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
