import { useMemo } from "react";
import { parseReference } from "../../../../lib/utils/other/stringParser";

const references = [
  {
    id: 1,
    citation:
      "Chen JIZ, Smys S. Social multimedia security and suspicious activity detection in SDN using hybrid deep learning technique. J Inf Technol. 2020;2(02):108–115.",
    links: ["Google Scholar"],
  },
  {
    id: 2,
    citation:
      "Raja NM, Vegad S. An empirical study for the traffic flow rate prediction–based anomaly detection in software-defined networking: a challenging overview. Soc Netw Anal Min. 2023;13(1):1–14.",
    links: ["Google Scholar", "PubMed", "Web of Science"],
  },
  {
    id: 3,
    citation:
      "Wang L, Chen Q, Song C. Anomaly detection model of network dataflow based on an improved grey wolf algorithm and CNN. Electronics (Basel). 2023;12(18):3787. doi:10.3390/electronics12183787",
    links: ["Google Scholar", "Web of Science"],
  },
];



const References = ({ content }: { content: string }) => {
  const refContent = useMemo(() => {
    return parseReference(content)
  }, [content])
  return (
    <div className=" space-y-3 text-gray-700">
      <h2 className="text-base xl:text-xl 2xl:text-3xl font-semibold">References</h2>
      <ul className="space-y-6 text-sm xl:text-base 2xl:text-lg text-gray-800">
        <>
          {refContent.length !== 0 ? (
            refContent.map((item, index) => (
              <li key={index}>
                <p className="leading-relaxed">{item}</p>
              </li>
            ))
          ) : (
            references.map((ref) => (
              <li key={ref.id}>
                <p className="mb-1">{ref.id}. {ref.citation}</p>
                <div className="flex gap-x-4 gap-y-2 mt-1">
                  {ref.links.map((link, i) => (
                    <button
                      key={i}
                      className={`text-sm xl:text-base 2xl:text-lg hover:underline font-medium text-primary mt-2 ${i !== 0 && references.length > i ? "border-l border-l-primary pl-4" : ""}`} style={{ borderRadius: 0 }}
                    >
                      {link}
                    </button>
                  ))}
                </div>
              </li>
            ))
          )}
        </>
      </ul>
    </div>
  );
};

export default References;
