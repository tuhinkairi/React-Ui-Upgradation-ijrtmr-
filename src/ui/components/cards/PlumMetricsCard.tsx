import { useAppSelector } from "../../../lib/store/store";

import useDimensionsBadge from "./plumx/useDimensionsBadge";
// import useDimensionsBadge from "./plumx/useDimensionsBadge";

export default function PlumMetricsCard() {
  const ActiveArticle = useAppSelector((state) => state.archiveSection.activePaper)
  useDimensionsBadge()
  const doi = ActiveArticle?.paper_doi !== "." && ActiveArticle?.paper_doi !==undefined ? ActiveArticle?.paper_doi.split("https://www.doi.org/")[1] : null
  
  if (!doi) {
    return <div className="w-full rounded-2xl border borderPrimary bg-white shadowSprade px-6 py-3">

            <div className="flex flex-wrap xl:flex-nowrap items-center justify-center lg:justify-between gap-4 py-2">
                <h3 className="text-base 2xl:text-xl font-medium text-primary-text">PlumX Metrics</h3>
                <img
                    src="/plummatrix/plum.webp"
                    alt="PlumX Metrics"
                    className="w-22 h-22 object-contain"
                />
            </div>
            <div className="flex flex-wrap xl:flex-nowrap items-center justify-center lg:justify-between gap-4 py-2">
                <h3 className="text-base 2xl:text-xl font-medium text-primary-text">Dimension</h3>
                <img
                    src="/plummatrix/dynamics.webp" // Replace with actual path
                    alt="Dimension"
                    className="w-22 h-22 object-contain"
                />
            </div>
        </div>; // Return PlumDemo component if doi is not available
  }
  // Move script tag outside of the component to prevent multiple script loads
  console.log(doi)
  return (
    <>
      {/* <script type="text/javascript" src="//cdn.plu.mx/widget-popup.js"></script> */}
      <div className="w-full rounded-2xl border borderPrimary bg-white shadowSprade px-6 py-3">
        <div className="flex flex-wrap xl:flex-nowrap items-center justify-center lg:justify-between gap-4 py-2">
          <h3 className="text-base 2xl:text-2xl font-medium text-primary-text">PlumX Metrics</h3>
          <a href={`https://plu.mx/plum/a/?doi=${doi}`} data-size="large" className="plumx-plum-print-popup"></a>
        </div>
        <hr className="my-2 border-gray-200" />
        <div className="flex flex-wrap xl:flex-nowrap items-center justify-center lg:justify-between gap-4 py-2">
          <h3 className="text-base 2xl:text-2xl font-medium text-primary-text">Dimension</h3>
          <span className="__dimensions_badge_embed__" data-doi={doi} data-style="small_circle"></span>
        </div>
      </div>
    </>
  );
}
