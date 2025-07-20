export default function FeaturesSection1() {
  const features = [
    {
      title: "Why Choose Us",
      items: [
        "High Visibility & Indexing",
        "Strict Plagiarism policy",
        "Open Access Journal",
      ],
    },
    {
      title: "Author Notification",
      items: [
        "Status Notification: with in 24Hrs",
        "Every Process: Email & SMS",
        "24*7 authors query",
      ],
    },
    {
      title: "Editorial Management",
      items: [
        "Unique Account for Author",
        "Review Status (Peer review report)",
        "FAQ's & Knowledgebase for Article process",
      ],
    },
  ];

  return (
    <section className="bg-dark px-4 text-white max-w-5xl mx-auto mt-16 rounded-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature, idx) => (
          <div key={idx} className="rounded-2xl bg-dark p-6">
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <ul className="space-y-2 text-divider text-sm xl:text-base 2xl:text-lg">
              {feature.items.map((item, i) => (
                <li key={i} className="list-disc ml-4">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
