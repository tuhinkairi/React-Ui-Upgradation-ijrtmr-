import { Outlet } from "react-router-dom"
import GlobalLayout from "./GlobalLayout.tsx"

function GlobalWrapper() {
  return (
    <GlobalLayout>
      <Outlet/> 
    </GlobalLayout>
  )
}

export default GlobalWrapper
