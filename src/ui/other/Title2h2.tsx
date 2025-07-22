import React from 'react'

export default function Title2h2({children,className}:{children:React.ReactNode,className?:string}) {
  return (
    <h2 className={"text-2xl sm:text-3xl 2xl:text-2xl:text-[2.20rem] my-2 " + className}>{children}</h2>
  )
}
