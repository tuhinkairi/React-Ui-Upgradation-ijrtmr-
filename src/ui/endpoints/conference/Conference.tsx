import { Outlet } from "react-router-dom";
import CommonLayout from "../../components/layout/CommonLayout";

export default function Conference() {
  return (
    <CommonLayout title="CONFERENCE">
      <Outlet/>
    </CommonLayout>
  )
}
