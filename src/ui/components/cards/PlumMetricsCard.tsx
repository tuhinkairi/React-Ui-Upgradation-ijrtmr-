import { useAppSelector } from "../../../lib/store/store";
import PlumDemo from "./plumx/plumDemo";
// import useDimensionsBadge from "./plumx/useDimensionsBadge";

export default function PlumMetricsCard() {
  // useDimensionsBadge()
  const ActiveArticle = useAppSelector((state) => state.archiveSection.activePaper)
  const doi = ActiveArticle?.paper_doi !== undefined ? ActiveArticle?.paper_doi.split("https://www.doi.org/")[1] : ""
  if (ActiveArticle?.paper_doi !== undefined) {
    return <PlumDemo />; // Return PlumDemo component if doi is not available
  }
  // Move script tag outside of the component to prevent multiple script loads
  return (
    <>
      {/* <script type="text/javascript" src="//cdn.plu.mx/widget-popup.js"></script> */}
      <div className="w-full rounded-2xl border borderPrimary bg-white shadowSprade px-6 py-3">
        <div className="flex flex-wrap xl:flex-nowrap items-center justify-center lg:justify-between gap-4 py-2">
          <h3 className="text-base xl:text-2xl font-medium text-primary-text">PlumX Metrics</h3>
          <a href={`https://plu.mx/plum/a/?doi=${doi}`} data-size="medium" className="plumx-plum-print-popup"></a>
        </div>
        <hr className="my-2 border-gray-200" />
        <div className="flex flex-wrap xl:flex-nowrap items-center justify-center lg:justify-between gap-4 py-2">
          <h3 className="text-base xl:text-2xl font-medium text-primary-text">Dimension</h3>
          <span className="__dimensions_badge_embed__" data-doi={doi} data-style="small_circle"></span>
        </div>
      </div>
    </>
  );
}
