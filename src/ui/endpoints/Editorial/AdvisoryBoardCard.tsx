interface AdvisoryBoardCardProps {
  image: string;
  boardTitle: string;
  name: string;
  designation: string;
  address: string;
  onViewMore?: () => void;
}

export const AdvisoryBoardCard = ({
  image,
  boardTitle,
  name,
  designation,
  address,
  onViewMore,
}: AdvisoryBoardCardProps) => {
  return (
    <div className="grid grid-cols-3 items-center justify-center bg-white shadow shadowSprade rounded-2xl overflow-hidden max-w-3xl w-full">
      <div className="col-span-1 h-full flex items-center justify-center">
        <img src={image} alt={name} className="w-full h-full object-cover" style={{ aspectRatio: "1/1"}} />
      </div>
      <div className="col-span-2 justify-between px-4 py-3 w-full">
        <div className="space-y-1">
          <p className="text-primary font-medium text-[15px]">{boardTitle}</p>
          <h3 className="text-[17px] font-bold ">{name}</h3>
          <p className="text-paragraph text-[15px]">{designation}</p>
          <p className="text-paragraph text-[15px]">
            <strong>Address:</strong> {address}
          </p>
        </div>
        <div className="flex justify-end mt-3">
          <button
            onClick={onViewMore}
            className="bg-[#fbe9df] hover:bg-[#f9dfd1] transition px-6 py-2 rounded-lg text-[16px] font-medium text-black"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};
