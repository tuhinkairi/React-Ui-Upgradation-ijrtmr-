
const steps = [
  {
    title: 'Submit Paper',
    description: 'Authors submit their profile Paper/Manuscript doc/docx',
    image: './submitPaper.png',
    button: true,
  },
  {
    title: 'Review Process',
    description: 'Paper review by Reviewer committee.',
    image: './review.png',
  },
  {
    title: 'Acceptance Status',
    description: 'If a paper is accepted after review, the author will be notified via their registered email address.',
    image: './acceptance.png',
  },
  {
    title: 'Processing Charges',
    description: 'Pay paper processing charges as per mentioned in acceptance letter.',
    image: './processing.png',
  },
  {
    title: 'Copyright Submission',
    description: 'Submit the signed copyright and undertaking forms.',
    image: './copyright.png',
  },
  {
    title: 'Published',
    description: 'The paper will be published, and the author will be notified via their registered email address.',
    image: './publication.png',
  },
];

export default function PublishProcess() {
  return (
    <section className="py-16">
      <div className=" mb-16">
        <h2 className="text-3xl font-semibold">How to Publish Research Paper online</h2>
        <p className="mt-2 text-sm text-secondaryText">2,157 people have said how good Rareblocks</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-start space-y-4 max-w-96">
            <img src={step.image} alt={step.title} className="w-full max-w-xs object-contain" />
            <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
            <p className="text-sm text-paragraph">{step.description}</p>
            {step.button && (
              <button className="mt-2 bg-[#FF8C4233]  border border-peach-200 text-sm px-4 py-2 rounded-lg hover:bg-peach-200 transition inline-flex items-center gap-2">
                Submit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
