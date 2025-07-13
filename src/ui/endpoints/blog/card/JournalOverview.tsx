const JournalOverview = ({ title, category, date, description, points, other }: { title: string, category: string, date: string, description: string, points: string[] ,other?:string}) => {
  return (
    <div className="bg-white py-3 pb-6 p-6 rounded-xl shadow shadowSprade space-y-6">
      <h2 className="text-2xl sm:text-3xl font-serif">{title}</h2>
      <div className="space-y-2 ">
      <p className="font-semibold text-base">Category By: {category}</p>
      <p className="font-semibold text-base mb-2">Date: {date}</p>
      </div>
      {points.length!==0&&<div>
      <p className="text-paragraph">{description}</p>
        <h3 className="font-semibold text-base mt-4 mb-2">Why Choosing the Right Journal Matters</h3>
        <ul className="list-disc list-inside text-paragraph space-y-2">
          {points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>}
      <div dangerouslySetInnerHTML={{__html:other??""}} className="space-y-6"></div> 
      
    </div>
  );
};

export default JournalOverview;
