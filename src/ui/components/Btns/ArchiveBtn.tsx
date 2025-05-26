import React from 'react'

function ArchiveBtn({children, className}:{children:React.ReactNode,className?:string}) {
  return (
    <button className={`w-full flex items-center justify-between bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-600 text-white font-medium py-2 px-4 rounded-md shadow hover:brightness-110 transition ${className}`}>
      {children}
    </button>
  )
}

export default ArchiveBtn
