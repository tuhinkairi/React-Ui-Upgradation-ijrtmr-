import React from 'react'

function ArchiveBtn({children}:{children:React.ReactNode}) {
  return (
    <button className='w-full flex items-center justify-between bg-gradient-to-r from-orange-500 to-orange-400 text-white font-medium py-2 px-4 rounded-md shadow hover:brightness-110 transition'>
      {children}
    </button>
  )
}

export default ArchiveBtn
