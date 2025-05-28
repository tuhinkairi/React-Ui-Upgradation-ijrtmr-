import React from 'react'

function ArchiveBtn({children, className}:{children:React.ReactNode,className?:string}) {
  return (
    <button className={`w-full flex items-center justify-between bg-gradient-to-b from-[#FF8C42] to-[#995428] hover:from-[#995428] hover:to-[#FF8C42] text-white font-medium px-6 py-3 rounded-md shadow hover:brightness-110 transition ${className}`}>
      {children}
    </button>
  )
}

export default ArchiveBtn
