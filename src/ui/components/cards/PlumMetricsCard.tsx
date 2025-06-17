
export default function PlumMetricsCard() {
  return (
    <div className="w-full rounded-2xl border borderPrimary bg-white shadowSprade px-6 py-3">
      <div className="flex items-center justify-between gap-4 py-2">
        <span className="text-base font-medium text-primary-text">PlumX Metrics</span>
        <img
          src="/plummatrix/plum.png"
          alt="PlumX Metrics"
          className="w-22 h-22 object-contain"
        />
      </div>
      <hr className="my-2 border-gray-200" />
      <div className="flex items-center justify-between gap-4 py-2">
        <span className="text-base font-medium text-primary-text">Dimension</span>
        <img
          src="/plummatrix/dynamics.png" // Replace with actual path
          alt="Dimension"
          className="w-22 h-22 object-contain"
        />
      </div>
    </div>
  );
}
