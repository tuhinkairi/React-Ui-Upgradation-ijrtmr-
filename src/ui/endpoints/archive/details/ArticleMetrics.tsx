const ArticleMetrics = () => {
  const metrics = [
    { label: "Views", value: "216", to: "to-blue-600", from:"from-blue-300" },
    { label: "Citations", value: "0", to: "to-red-600", from:"from-red-300" },
    { label: "Altmetric", value: "?", to: "to-yellow-600", from:"from-yellow-300" },
  ];

  return (
    <div className="min-h-72">
      <h2 className="text-base font-semibold text-gray-700 mb-6">Article Metrics</h2>
      <div className="flex flex-wrap justify-start gap-8">
        {metrics.map((metric, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`bg-gradient-to-b ${metric.from} ${metric.to} text-white  font-semibold w-28 h-12 flex items-center justify-center rounded-md shadow`}
            >
              {metric.value}
            </div>
            <span className="mt-2 text-sm text-gray-800">{metric.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleMetrics;
