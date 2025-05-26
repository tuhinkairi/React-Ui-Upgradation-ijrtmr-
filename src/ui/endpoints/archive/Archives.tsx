import { Outlet } from "react-router-dom"
import ArchiveLayout from "../../components/layout/ArchiveLayout"

function Archives() {
  return (
    <ArchiveLayout>
      <Outlet/> 
    </ArchiveLayout>
  )
}

export default Archives
