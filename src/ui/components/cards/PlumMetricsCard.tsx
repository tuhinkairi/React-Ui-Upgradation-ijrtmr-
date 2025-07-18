
export default function PlumMetricsCard() {
  return (
    <div className="w-full rounded-2xl border borderPrimary bg-white shadowSprade px-6 py-3">
      <div className="flex flex-wrap xl:flex-nowrap items-center justify-center lg:justify-between gap-4 py-2">
        <h3 className="text-base xl:text-2xl font-medium text-primary-text">PlumX Metrics</h3>
        <a href="https://plu.mx/plum/a/?doi=10.1371/journal.pone.0056506" className="plumx-plum-print-popup"><img
          src="/plummatrix/plum.png"
          alt="PlumX Metrics"
          className="w-22 h-22 object-contain"
        /></a>

      </div>
      <hr className="my-2 border-gray-200" />
      <div className="flex flex-wrap xl:flex-nowrap items-center justify-center lg:justify-between gap-4 py-2">
        <h3 className="text-base xl:text-2xl font-medium text-primary-text">Dimension</h3>
        <img
          src="/plummatrix/dynamics.png" // Replace with actual path
          alt="Dimension"
          className="w-22 h-22 object-contain"
        />
      </div>
    </div>
  );
}
