import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "How many days will it take for my paper to be published?",
    answer: "It typically takes between 5 to 7 working days post-acceptance for publication.",
  },
  {
    question:
      "I would like to receive a hard copy of the journal materials. Are there any additional charges?",
    answer: "Yes, shipping and printing charges apply. Please contact the support desk for exact pricing based on your region.",
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 bg-white">
      <h2 className="text-3xl font-semibold text-center text-dark mb-8">
        Frequently Asked Questions
      </h2>
      <div className="divide-y divide-gray-200 space-y-5">
        {faqData.map((item, idx) => (
          <div key={idx} className="py-4 px-5 cursor-pointer border-b border-gray-300 text-lg">
            <div
              onClick={() => toggleIndex(idx)}
              className="flex justify-between items-center "
            >
              <span className="text-primary-text font-medium">
                {item.question}
              </span>
              {activeIndex === idx ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </div>
            {activeIndex === idx && (
              <div className="mt-3 text-gray-600 text-sm">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQAccordion;
