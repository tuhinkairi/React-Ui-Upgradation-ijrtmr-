import React from 'react'

function PrimaryBtn({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <button className={`inline-flex items-center gap-3 bg-[#fae0d0] text-primary-text text-sm font-medium px-6 py-2 rounded-md hover:bg-[#f6d5c3] transition-colors ${className}`}>
            {children}
        </button>
    )
}

export default PrimaryBtn
