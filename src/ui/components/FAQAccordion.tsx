import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Title2h2 from "../other/Title2h2";

const faqData = [
  {
    question: "When it was started? | when first issue of the journal was published?",
    answer: "It was started in year 2021. IJRTMR is being published by 5th Dimension Research Publication. First Issue: January-February 2021.",
  },
  {
    question: "What is the plagiarism policy",
    answer: "We do not accept papers that are having plagiarized contents. Good quality plagiarism software/tool will be used to check similarity that would not be more than 30% including reference section. In the case of exclusion of references, it should be less than 5%.",
  },
  {
    question: "How to submit my Article?",
    answer: "By Editorial Management System (EMS) Online submission System. For more details see Guidance for Editorial management System.",
  },
  {
    question:
      "My paper has been published. Can make any changes now in the paper?",
    answer: "Author(s) can make rectification in the final paper but after the final submission to the journal, rectification is not possible.",
  },
  {
    question:"What are the Terms & Conditions of the journal?",

    answer: "Please visit journal website. It is available in the “Ethics & Policy” page.",
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="max-w-6xl 2xl:max-w-4/5 mx-auto px-4 py-12 bg-white">
      {/* <h2 className="text-2xl sm:text-3xl font-semibold text-center text-dark mb-8">
        Frequently Asked Questions
      </h2> */}
      <Title2h2 className="text-center">
        Frequently Asked Questions
      </Title2h2>
      <div className="divide-y divide-gray-200 space-y-5 mt-4 sm:mt-8">
        {faqData.map((item, idx) => (
          <div key={idx} className="py-4 px-5 cursor-pointer border-b border-gray-300 text-base sm:text-lg">
            <div
              onClick={() => toggleIndex(idx)}
              className="flex justify-between items-center "
            >
              <h2 className="text-primary-text font-medium w-[90%] text-lg 2xl:text-xl">
                {item.question}
              </h2>
              {activeIndex === idx ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </div>
            {activeIndex === idx && (
              <div className="mt-3 text-gray-600 text-sm sm:text-base">
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
