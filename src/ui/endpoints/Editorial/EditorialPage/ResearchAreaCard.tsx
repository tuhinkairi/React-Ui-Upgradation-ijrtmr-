
const ResearchAreaCard = ({ des }: { des: string[] }) => {
  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white p-4 w-96 shadow shadowSprade rounded-2xl">
        <h3 className="text-primary font-semibold text-lg mb-4">Research Area</h3>
        <ul className="text-sm text-gray-800 leading-relaxed list-disc list-inside space-y-2">
          <>
            {des.length > 0 && des.map((e) => {
              return <li>{ e}</li>
            })}
          </>
        </ul>
      </div>
    </div>
  );
};

export default ResearchAreaCard;
