import React from 'react'

function PrimaryBtn({ children, className, event }: { children: React.ReactNode, className?: string, event?: () => void }) {
    return (
        <button onClick={event} className={`inline-flex items-center gap-3 bg-[#d6d0fa] text-primary-text text-sm 2xl:text-base font-medium px-6 py-2 hover:bg-[#c5bbff] transition-colors ${className?.includes("rounded-full")? className:"rounded-md"}`}>
            {children}
        </button>
    )
}

export default PrimaryBtn
