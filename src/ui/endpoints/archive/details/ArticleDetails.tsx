import { FileDown, Share2 } from "lucide-react";
import ArchiveBtn from "../../../components/Btns/ArchiveBtn";
import { FaQuoteLeft } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import RelatedArticles from "../components/RelatedArticals";

const ArticleDetails = () => {
  return (
    <div className="mx-auto  bg-white space-y-6 p-5">
      {/* Header + PDF Button */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-semibold leading-snug max-w-5/6">
            AI-Driven Conversational Models for Supporting Migrant Career
            Guidance and Labour Market Integration: A Scoping Review
          </h2>
        </div>
        <ArchiveBtn className="max-w-fit gap-1" >
          View PDF
          <FileDown size={16} className="ml-4"/> 
        </ArchiveBtn>
      </div>

      {/* Meta Information */}
      <div className="space-y-1 text-primary-text leading-7 text-base">
        <div>
          <span className="font-medium">Author:</span>{" "}
          <span className="text-primary font-medium">Bisaso Samuel</span>,{" "}
          <span className="text-primary font-medium">Muhumuza Gilbert</span>
        </div>
        <div>Published Online: 13 May 2025</div>
        <div>Pages: 01–09</div>
      </div>

      {/* DOI and Utilities */}
      <div className="flex items-center gap-4 w-full justify-between text-base">
        <h3 className="text-primary flex gap-2 items-center font-medium mr-10">
          <FaQuoteLeft className="text-primary" /> Cite this article
        </h3>
        <a
          href="https://doi.org/10.1080/00051144.2025.2476806"
          className="text-orange-500 flex items-center gap-1 hover:underline"
        >
          ↗ https://doi.org/10.1080/00051144.2025.2476806
        </a>
        <button className="bg-[#995428] text-white px-3 py-2 rounded-md font-semibold flex items-center justify-center space-x-3">
          <span>
            Check for Updates</span> <IoReload height={20} />
        </button>
        <button className="text-primary bg-peach-100 hover:bg-peach-200 flex items-center justify-center gap-1 h-11 w-11" style={{borderRadius:9999}}>
          <Share2 size={16} />
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-6 text-lg border-b border-gray-200">
        {["Full Article", "References", "Citations", "Metrics", "Licensing"].map(
          (tab, idx) => (
            <button
              key={idx}
              className={`pb-2 ${tab === "Full Article"
                  ? "text-primary font-semibold border-b-2 border-primary rounded-none"
                  : "text-primary-text"
                }`}
                style={{borderRadius:0}}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Abstract */}
      <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
        <h3 className="font-medium text-base">Abstract</h3>
        <p>
          Antibiotic resistance is one of the most severe public health crises
          that we face in current medical practice. Every year, at least 2.8
          million people get an antibiotic-resistant infection, and more than
          35,000 people die. In addition to the potential for serious morbidity
          and mortality, antibiotic-resistant infections add unnecessary and
          substantial costs to the healthcare system.
        </p>
        <p>
          The impetus for finding solutions in what has been established as a
          dire situation is overwhelmingly twofold: the necessity with which it
          must be addressed gives doctors, patients, researchers, policymakers,
          and caregivers the means to thoroughly address the subject, and the
          consequences of inaction catapult researchers into a world of
          microbial and evolutionary surveillance of unparalleled depth.
        </p>
        <p>
          This review article discusses the historical, technical, and
          futurological aspects of antibiotic resistance, presenting an
          evidence-based collection of findings on resistance and the various
          mechanisms of resistance that have evolved as a result of our use and
          misuse of antibiotics.
        </p>
        <p>
          The social, commercial, and economic implications of antibiotic use
          and resistance must likewise be addressed through public health policy
          and the motivation of those in the fields of medicine, epidemiology,
          and microbiology. Alternative techniques to the use of antibiotics,
          including vaccine development and phage therapy, are thoroughly
          discussed as potential solutions to the current impasse.
        </p>
      </div>
      <RelatedArticles/>
    </div>
  );
};

export default ArticleDetails;
