export default function PlumDemo() {
    return (
        <div className="w-full rounded-2xl border borderPrimary bg-white shadowSprade px-6 py-3">

            <div className="flex flex-wrap xl:flex-nowrap items-center justify-center lg:justify-between gap-4 py-2">
                <h3 className="text-base xl:text-2xl font-medium text-primary-text">PlumX Metrics</h3>
                <img
                    src="/plummatrix/plum.webp"
                    alt="PlumX Metrics"
                    className="w-22 h-22 object-contain"
                />
            </div>
            <div className="flex flex-wrap xl:flex-nowrap items-center justify-center lg:justify-between gap-4 py-2">
                <h3 className="text-base xl:text-2xl font-medium text-primary-text">Dimension</h3>
                <img
                    src="/plummatrix/dynamics.webp" // Replace with actual path
                    alt="Dimension"
                    className="w-22 h-22 object-contain"
                />
            </div>
        </div>
    )
}
