export default function TickerBar() {
  return (
    <div className="relative w-full overflow-hidden bg-dark text-white">
      <div className="flex items-center">
        {/* Label Section */}
        <div className="relative bg-dark pl-6 pr-12 py-4 text-white font-semibold whitespace-nowrap">
          Latest Updates
          {/* Wedge arrow */}
          <div className="absolute right-0 top-0 h-full w-6 bg-white clip-arrow" />
          <div className="absolute right-2 top-0 h-full w-6 bg-dark clip-arrow" />
        </div>

        {/* Marquee Text */}
        <div className="overflow-hidden whitespace-nowrap py-2 w-full">
          <div className="animate-marquee inline-block min-w-full">
            <span className="px-4">
              We do not provide a DOI (Digital Object Identifier).
            </span>
            <span className="px-4">
              Calling all experts: With high demand for submissions, IPN invites you to join as a reviewer and contribute to advancing research.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
