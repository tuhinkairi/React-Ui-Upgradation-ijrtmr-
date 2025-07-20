import { Outlet, useLocation } from "react-router-dom"
import ArchiveLayout from "../../components/layout/ArchiveLayout"

function Archives() {
  const url = useLocation().pathname.includes("/current-issue")
  return (
    <ArchiveLayout title={!url?"":"Current - Issue"}>
      <Outlet/> 
    </ArchiveLayout>
  )
}

export default Archives
