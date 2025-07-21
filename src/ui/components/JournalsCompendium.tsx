import { useState, useEffect } from "react";
import CompodiumCard from "./cards/CompodiumCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Title2 from "../other/Title2";

const journals = [
  { code: 'IJIRE', title: 'International Journal of Innovative Research in Engineering', eIssn: '2582-8746', publicationMonths: 'Bimonthly (Feb, Apr, Jun, Aug, Oct, Dec)', url: 'https://www.theijire.com/', className:"bg-cyan-50" },
  { code: 'IJRTMR', title: 'International Journal of Recent Trends in Multidisciplinary Research', eIssn: '2583-0368', publicationMonths: 'Bimonthly (Feb, Apr, Jun, Aug, Oct, Dec)', url: 'https://www.ijrtmr.com/',  className:"bg-purple-50" },
  { code: 'INDJEEE', title: 'Indian Journal of Electrical and Electronics Engineering', eIssn: 'Applied', publicationMonths: '3 Issues Per Year (Apr, Aug, Dec)', url: 'https://fdrpjournals.org/indjeee', className:"bg-green-50" },
  { code: 'INDJECE', title: 'Indian Journal of Electronics and Communication Engineering', eIssn: '3048-6408', publicationMonths: '3 Issues Per Year (Apr, Aug, Dec)', url: 'https://fdrpjournals.org/indjece', className:"bg-amber-50" },
  { code: 'INDJCST', title: 'Indian Journal of Computer Science and Technology', eIssn: '2583-5300', publicationMonths: '3 Issues Per Year (Apr, Aug, Dec)', url: 'https://www.indjcst.com/', className:"bg-blue-50" },
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
    const width = window.innerWidth<768?window.innerWidth<628?1:2:3

    const visibleJournals = [];
    for (let i = 0; i < width; i++) {
      const index = (currentIndex + i) % journals.length;
      visibleJournals.push(journals[index]);
    }
    return visibleJournals;
  };

  return (
    <section className="px-6 lg:px-24  bg-white text-center">
      <Title2 className="-mb-2 sm:mb-0">
        Our Compendium of Other Journals
      </Title2>
      {/* <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-2">
        Our Compendium of Journals
      </h2> */}
      <p className="text-secondary-text mb-10 mt-6 text-lg 2xl:text-xl">
        Fifth Dimension Research Publication
      </p>

      <div className="relative  mx-auto">
        <button
          onClick={handlePrevClick}
          className="absolute -left-3.5 sm:-left-5 lg:-left-10 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full"
        >
          <ChevronLeft />
        </button>

        <div className="grid px-10 lg:px-0 md:grid-cols-3 gap-6 justify-center items-center transition-all duration-700 ease-in-out">
          {getVisibleJournals().map((journal, idx) => (
            idx%2==1 ? <span key={`${journal.code}-${idx}`} className="md:scale-110 transition-all"><CompodiumCard  {...journal} /></span>:<span key={`${journal.code}-${idx}`} className="md:scale-75 lg:scale-95 transition-all"><CompodiumCard  {...journal} /></span>
          ))}
        </div>

        <button
          onClick={handleNextClick}
          className="absolute -right-3.5 sm:-right-5 lg:-right-10 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default JournalsCompendium;
