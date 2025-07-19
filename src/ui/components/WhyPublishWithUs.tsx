import Title2 from "../other/Title2";

const features = [
  {
    title: "Rigorous Peer Review",
    img: "/review.webp", // Replace with actual path
    points: [
      "Strict peer review standards",
      "Multi-disciplinary expert reviewers",
      "Constructive feedback",
    ],
    desc: "Our multi-stage review process ensures quality while maintaining rapid turnaround times.",
  },
  {
    title: "Rapid Publication",
    img: "/publication.webp",
    points: [
      "Initial response within 12 hours",
      "Review completed in 2–7 days",
      "Final decision within 3–7 days",
    ],
    desc: "From submission to publication in record time without compromising quality.",
  },
  {
    title: "Global Impact",
    img: "/global.webp",
    points: [
      "Open Access policy",
      "Broad international readership",
      "Policy-maker engagement",
    ],
    desc: "Your research reaches beyond academia to influence policy and industry.",
  },
  {
    title: "Efficient Process",
    img: "/process.webp",
    desc: "From submission to publication, our streamlined workflow saves you time with quick responses at every stage.",
  },
  {
    title: "Plagiarism Protection",
    img: "/protection.webp",
    desc: "Rigorous screening maintains academic integrity while our automated systems handle administrative tasks.",
  },
  {
    title: "COPE Compliance",
    img: "/cope.webp",
    desc: "We adhere to the highest publication ethics following COPE's Best Practice Guidelines.",
  },
];

export default function WhyPublishWithUs() {
  return (
    <section className="pt-8  px-6 lg:px-16 ">
      <div className="">
        {/* <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
          Why Publish With IJSREAT?
        </h2> */}
        <Title2>
          Why Publish With IJSREAT?
        </Title2>
        <p className="text-gray-600 mb-10">
          We combine academic excellence with efficient processes to maximize your research impact beyond academia
        </p>

        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="flex gap-4 bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="w-28 h-28 min-w-28 relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-center"
                />
              </div>
              <div className="flex flex-col justify-start">
                <h3 className="text-lg 2xl:text-2xl font-semibold text-black">{item.title}</h3>
                <p className="text-sm 2xl:text-xl text-gray-700 mb-2">{item.desc}</p>
                {item.points && (
                  <ul className="list-disc pl-5 text-sm 2xl:text-xl text-gray-600">
                    {item.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:hidden">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="flex gap-4">

                <div className="w-28 min-w-28 relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-center"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                  <p className="text-sm xl:text-base 2xl:text-2xl text-gray-700 mb-2">{item.desc}</p>
                </div>
              </div>
              {item.points && (
                <ul className="list-disc pl-5 text-sm 2xl:text-xl text-gray-600">
                  {item.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
