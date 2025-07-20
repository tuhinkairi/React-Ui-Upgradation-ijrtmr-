
const JournalCriteria = ({ title, sections }: { title: string, sections: { heading: string, paragraph?: string, points?: string[] }[] }) => {
  return (
    <div className="bg-white py-3 pb-6 p-6 shadow shadowSprade rounded-xl space-y-6">
      <h2 className="text-primary font-semibold text-xl">{title}</h2>
      {sections.map((section, index) => (
        <div key={index}>
          <h3 className="font-semibold text-base">{section.heading}</h3>
          {section.paragraph && (
            <p className="text-paragraph text-sm xl:text-base 2xl:text-lg mt-1">{section.paragraph}</p>
          )}
          {section.points && (
            <ul className="list-disc list-inside text-sm xl:text-base 2xl:text-lg text-paragraph mt-2 space-y-1">
              {section.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default JournalCriteria;
