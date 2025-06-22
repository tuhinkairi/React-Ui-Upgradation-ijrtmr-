import type React from "react";

export default function TitleSecondary({className, Title}:{className: string, Title: React.ReactNode}) {
  return (
    <h2 className={`text-3xl font-semibold mb-2 ${className ? className : ''}`}>
        {Title}
    </h2>
  )
}
