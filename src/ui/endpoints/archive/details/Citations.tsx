const Citations = ({ content }: { content: string }) => {
  return (
    <div className="min-h-72">
      <h2 className="text-base font-semibold text-gray-700 mb-2">Citations</h2>
      <p className="text-sm text-gray-700 mb-4">
        {content}
      </p>
      <button className="primaryBtn">
        <span className="text-sm">Subscribe for Citation Update</span>
      </button>
    </div>
  );
};

export default Citations;
