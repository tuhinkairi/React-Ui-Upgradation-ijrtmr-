import React from 'react';

type Section = {
  title: string;
  content: string | string[];
};

type JournalSelectionProps = {
  mainTitle: string;
  sections: Section[];
  conclusion: string;
  finalThoughts: string;
};

const JournalSelection: React.FC<JournalSelectionProps> = ({
  mainTitle,
  sections,
  conclusion,
  finalThoughts,
}) => {
  return (
    <div className="bg-white py-3 pb-6 p-6 shadow shadowSprade rounded-xl space-y-6">
      <h2 className="text-xl font-semibold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent mb-6 leading-snug">{mainTitle}</h2>

      {sections.map((section, index) => (
        <div key={index}>
          <h3 className="text-base font-semibold mb-1">{section.title}</h3>
          {Array.isArray(section.content) ? (
            <ul className="list-disc ml-5 space-y-2">
              {section.content.map((item, idx) => (
                <li className='text-paragraph mt-2' key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className='text-paragraph mt-2'>{section.content}</p>
          )}
        </div>
      ))}

      <div>
        <h3 className="text-base font-semibold mb-2">Conclusion: Making the Right Choice</h3>
        <p className='text-paragraph'>{conclusion}</p>
      </div>

      <div>
        <h3 className="text-base font-semibold mb-2">Final Thoughts</h3>
        <p className='text-paragraph'>{finalThoughts}</p>
      </div>
    </div>
  );
};

export default JournalSelection;
