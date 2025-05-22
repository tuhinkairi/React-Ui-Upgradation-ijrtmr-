import { CheckCircle } from "lucide-react";

const journals = [
  {
    title: "IJIRE",
    subtitle: "International Journal of Innovative Research in Engineering",
    issn: "2582-8746",
    type: "Journals",
    publisher: "Fifth Dimension Research Publication",
    months: "Bimonthly (Feb, Apr, Jun, Aug, Oct, Dec)",
    mode: "Online",
  },
  {
    title: "IJRTMR",
    subtitle: "International Journal of Innovative Research in Engineering",
    issn: "2582-8746",
    type: "Journals",
    publisher: "Fifth Dimension Research Publication",
    months: "Bimonthly (Feb, Apr, Jun, Aug, Oct, Dec)",
    mode: "Online",
  },
  {
    title: "INDJEEE",
    subtitle: "International Journal of Innovative Research in Engineering",
    issn: "2582-8746",
    type: "Journals",
    publisher: "Fifth Dimension Research Publication",
    months: "Bimonthly (Feb, Apr, Jun, Aug, Oct, Dec)",
    mode: "Online",
  },
];

const JournalsCompendium = () => {
  return (
    <section className="px-6 md:px-24 py-12 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-2">
        Our Compendium of Journals
      </h2>
      <p className="text-secondary-text mb-10 mt-6">
        Fifth Dimension Research Publication
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {journals.map((journal, idx) => (
          <div
            key={idx}
            className="border border-orange-300 rounded-lg p-6 text-left shadow-sm hover:shadow-md transition duration-300 px-8"
          >
            <h3 className="text-2xl font-semibold mb-1 text-dark">
              {journal.title}
            </h3>
            <p className="text-gray-700 mb-4">{journal.subtitle}</p>
            <hr className="border-t border-gray-400 mb-4" />

            <ul className="space-y-2 text-sm text-gray-800">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-secondary-text w-4 h-4 mt-1" />
                <span>e-ISSN: {journal.issn}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-secondary-text w-4 h-4 mt-1" />
                <span>Product type: {journal.type}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-secondary-text min-w-4 h-4 mt-1" />
                <span>Published By: {journal.publisher}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-secondary-text min-w-4 h-4 mt-1" />
                <span>
                  Publication Month: {journal.months}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-secondary-text w-4 h-4 mt-1" />
                <span>Mode: {journal.mode}</span>
              </li>
            </ul>

            <div className="mt-6">
              <button className="w-full bg-[#071A34] text-white py-2 rounded-md hover:invert transition duration-200">
                Visit Journal
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JournalsCompendium;
