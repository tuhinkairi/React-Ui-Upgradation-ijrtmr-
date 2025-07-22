export default function TickerBar() {
  return (
    <div className="relative w-full overflow-hidden bg-[#0E4B82] text-white">
      <div className="flex items-center overflow-hidden">
        {/* Label Section */}
        <div className="relative bg-primary pl-6 pr-6 py-4 text-white font-semibold whitespace-nowrap">
          <span className="relative z-10">
            Latest Updates
            </span>
          {/* Wedge arrow */}
          {/* <div className="absolute right-0 top-0 h-full w-6 bg-white " />
          <div className="absolute right-2 top-0 h-full w-6 bg-primary " /> */}
          <div className="absolute -right-2 rotate-45 w-20 h-20 bg-primary z-9  -top-3.5 2xl:-top-2.5"></div>
          <div className="absolute -right-3 rotate-45 w-20 h-20 bg-white z-8  -top-3.5 2xl:-top-2.5"></div>
        </div>

        {/* Marquee Text */}
        <div className="overflow-hidden whitespace-nowrap py-2 w-full">
          <div className="animate-marquee inline-block min-w-full">
            {/* <span className="px-4">
              We do not provide a DOI (Digital Object Identifier).
            </span>
            <span className="px-4">
              Calling all experts: With high demand for submissions, IPN invites you to join as a reviewer and contribute to advancing research.
            </span>
            <span className="px-4">
              Calling all experts: With high demand for submissions, IPN invites you to join as a reviewer and contribute to advancing research.
            </span> */}
            <span className="px-4">
              Call for paper volume 5 issue 4 2025 , UGC-CARE Discontinue form Feb'25
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
