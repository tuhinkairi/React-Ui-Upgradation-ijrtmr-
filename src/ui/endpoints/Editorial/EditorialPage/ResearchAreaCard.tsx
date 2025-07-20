
const ResearchAreaCard = ({ des }: { des: string[] }) => {
  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white p-4 shadow shadowSprade rounded-2xl min-w-full">
        <h3 className="text-primary font-semibold text-lg xl:text-2xl mb-4">Research Area</h3>
        <ul className="text-sm xl:text-base 2xl:text-base text-gray-800 leading-relaxed list-disc list-inside space-y-2">
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
