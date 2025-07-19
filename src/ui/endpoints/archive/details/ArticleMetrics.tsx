const ArticleMetrics = () => {
  const metrics = [
    { label: "Views", value: "216", to: "to-cyan-700", from: "from-cyan-500" },
    { label: "Citations", value: "0", to: "to-red-700", from: "from-red-500" },
  ];

  return (
    <div className="min-h-72">
      <h2 className="text-base xl:text-xl 2xl:text-3xl font-semibold text-gray-700 mb-6">Article Metrics</h2>
      <div className="flex flex-wrap justify-start gap-16">
        {metrics.map((metric, index) => (
          <div key={index} className="grid items-center text-center">
            <div
              className={`bg-gradient-to-b ${metric.from} ${metric.to} text-white  font-semibold w-42 h-24 flex items-center justify-center rounded-md shadow py-2`}
            >
              {metric.value}
            </div>
            {/* <span className="mt-2 text-sm xl:text-base 2xl:text-2xl text-gray-800"></span> */}
            <span className="text-base font-medium text-primary-text mt-4">{metric.label}</span>

          </div>
        ))}
        <div className="flex flex-col items-center justify-between gap-4 py-2">
          <a href="https://plu.mx/plum/a/?doi=10.1371/journal.pone.0056506" target="_blank" className="plumx-plum-print-popup">

            <img
              src="/plummatrix/plum.webp"
              alt="PlumX Metrics"
              className="max-h-28 object-contain"
            />
          </a>
          <span className="text-base font-medium text-primary-text">PlumX Metrics</span>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 py-2">
          <a href="https://plu.mx/plum/a/?doi=10.1371/journal.pone.0056506" target="_blank" className="plumx-plum-print-popup">
          <img
            src="/plummatrix/dynamics.webp" // Replace with actual path
            alt="Dimension"
            className="max-h-28 object-contain"
          />
          </a>
          <span className="text-base font-medium text-primary-text">Dimension</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleMetrics;
