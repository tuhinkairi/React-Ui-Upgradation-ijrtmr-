import { useState, useEffect } from "react";
import CompodiumCard from "./cards/CompodiumCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const journals = [
  { code: 'IJIRE', title: 'International Journal of Innovative Research in Engineering', eIssn: '2582-8746', publicationMonths: 'Bimonthly(Feb,Apr,Jun,Aug,Oct,Dec)', url: '/journals/ijire' },
  { code: 'IJRTMR', title: 'International Journal of Recent Trends in Multidisciplinary Research', eIssn: '2583-0368', publicationMonths: 'Bimonthly(Feb,Apr,Jun,Aug,Oct,Dec)', url: '/journals/ijrtmr' },
  { code: 'INDJEEE', title: 'Indian Journal of Electrical and Electronics Engineering', eIssn: 'Applied', publicationMonths: '3 Issues Per Year (Apr,Aug,Dec)', url: '/journals/indjeee' },
  { code: 'INDJECE', title: 'Indian Journal of Electronics and Communication Engineering', eIssn: '3048-6408', publicationMonths: '3 Issues Per Year (Apr,Aug,Dec)', url: '/journals/indjece' },
  { code: 'INDJCST', title: 'Indian Journal of Computer Science and Technology', eIssn: '2583-5300', publicationMonths: '3 Issues Per Year (Apr,Aug,Dec)', url: '/journals/indjcst' },
];

const JournalsCompendium = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextClick();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + journals.length) % journals.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % journals.length);
  };

  const getVisibleJournals = () => {
    const visibleJournals = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % journals.length;
      visibleJournals.push(journals[index]);
    }
    return visibleJournals;
  };

  return (
    <section className="px-6 md:px-24 py-12 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-2">
        Our Compendium of Journals
      </h2>
      <p className="text-secondary-text mb-10 mt-6">
        Fifth Dimension Research Publication
      </p>

      <div className="relative max-w-5xl mx-auto">
        <button
          onClick={handlePrevClick}
          className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full"
        >
          <ChevronLeft />
        </button>

        <div className="flex gap-6 justify-center items-center transition-all duration-700 ease-in-out">
          {getVisibleJournals().map((journal, idx) => (
            <CompodiumCard key={`${journal.code}-${idx}`} {...journal} />
          ))}
        </div>

        <button
          onClick={handleNextClick}
          className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default JournalsCompendium;
