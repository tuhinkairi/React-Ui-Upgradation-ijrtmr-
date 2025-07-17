import { Outlet, useLocation } from "react-router-dom";
import CommonLayout from "../../components/layout/CommonLayout";
import { useAppSelector } from "../../../lib/store/store";

export default function Conference() {
  const path = useLocation().pathname
  const name = useAppSelector((state) => state.conference.active?.name);
  
  return (
    <CommonLayout title={path.includes("/conference/") && name?<>CONFERENCE /<span className="font-normal"> {name}</span></>:"CONFERENCE"} className="py-3 px-3 sm:px-6 bg-white">
      <Outlet/>
    </CommonLayout>
  )
}
