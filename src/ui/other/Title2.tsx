import React from 'react'

export default function Title2({children,className}:{children:React.ReactNode,className?:string}) {
  return (
    <h1 className={"text-2xl sm:text-3xl xl:text-4xl my-2 " + className}>{children}</h1>
  )
}
