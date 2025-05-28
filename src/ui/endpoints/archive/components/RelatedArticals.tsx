import { ArrowUpRight } from "lucide-react";

const relatedArticles = [
  {
    year: 2025,
    title:
      "AI-Driven Conversational Models for Supporting Migrant Career Guidance and Labour Market Integration: A Scoping Review",
  },
  {
    year: 2025,
    title:
      "AI-Powered Career Advisor (A Personalized Career Guidance System)",
  },
  {
    year: 2025,
    title:
      "AI-Powered Career Advisor (A Personalized Career Guidance System)",
  },
];

const RelatedArticles = () => {
  return (
    <div className=" mx-auto mt-12">
      <h2 className="text-2xl font-semibold mb-4">Related Articles</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedArticles.map((article, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 p-5 shadow-sm bg-white flex flex-col justify-between h-full"
          >
            <div>
              <p className="text-sm text-gray-400 font-medium mb-1">{article.year}</p>
              <p className="text-base font-semibold text-gray-900 leading-snug">
                {article.title}
              </p>
            </div>
            <div className="mt-4">
              <button className="primaryBtn ">
                <span className="text-sm">View More</span><ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
