
export default function PlumMetricsCard() {
  return (
    <div className="w-full rounded-2xl border borderPrimary bg-white shadowSprade px-6 py-3">
      <div className="flex flex-wrap xl:flex-nowrap items-center justify-center lg:justify-between gap-4 py-2">
        <h3 className="text-base xl:text-2xl font-medium text-primary-text">PlumX Metrics</h3>
        <a href="https://plu.mx/plum/a/?doi=10.1371/journal.pone.0056506" data-size="medium" className="plumx-plum-print-popup"></a>
        <script type="text/javascript" src="//cdn.plu.mx/widget-popup.js"></script>
      </div>
      <hr className="my-2 border-gray-200" />
      <div className="flex flex-wrap xl:flex-nowrap items-center justify-center lg:justify-between gap-4 py-2">
        <h3 className="text-base xl:text-2xl font-medium text-primary-text">Dimension</h3>
        <span className="__dimensions_badge_embed__" data-doi="10.1001/jama.2016.9797" data-style="small_circle"></span>
      </div>
    </div>
  );
}
