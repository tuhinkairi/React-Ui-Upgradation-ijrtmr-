import { Outlet } from "react-router-dom";
import ArchiveLayout from "../../components/layout/ArchiveLayout";

export default function Thesis() {
  return (
    <ArchiveLayout>
      <Outlet/>
    </ArchiveLayout>
  )
}
