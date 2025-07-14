import { Outlet, useLocation } from "react-router-dom"
import ArchiveLayout from "../../components/layout/ArchiveLayout"

function Archives() {
  const url = useLocation().pathname 
  return (
    <ArchiveLayout title={url.includes("archives")?"":"Current - Issue"}>
      <Outlet/> 
    </ArchiveLayout>
  )
}

export default Archives
