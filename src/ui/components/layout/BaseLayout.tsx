import type React from "react"

function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="_body w-screen h-screen overflow-x-hidden bg-gradient-to-b from-[#f9f9f9] to-white">
            {children}
        </div>
    )
}

export default BaseLayout
