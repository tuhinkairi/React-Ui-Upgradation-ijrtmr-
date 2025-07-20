const Citations = ({ content }: { content: string }) => {
  return (
    <div className=" ">
      <h2 className="text-base xl:text-xl 2xl:text-3xl font-semibold text-gray-700 mb-2">Citations</h2>
      <p className="text-sm xl:text-base 2xl:text-lg text-gray-700 mb-4 leading-relaxed">
        {content}
      </p>
      <button className="primaryBtn">
        <span className="text-sm xl:text-base 2xl:text-lg">Subscribe for Citation Update</span>
      </button>
    </div>
  );
};

export default Citations;
