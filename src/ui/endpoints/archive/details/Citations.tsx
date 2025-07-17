const Citations = ({ content }: { content: string }) => {
  return (
    <div className=" ">
      <h2 className="text-base font-semibold text-gray-700 mb-2">Citations</h2>
      <p className="text-sm xl:text-base 2xl:text-2xl text-gray-700 mb-4">
        {content}
      </p>
      <button className="primaryBtn">
        <span className="text-sm xl:text-base 2xl:text-2xl">Subscribe for Citation Update</span>
      </button>
    </div>
  );
};

export default Citations;
