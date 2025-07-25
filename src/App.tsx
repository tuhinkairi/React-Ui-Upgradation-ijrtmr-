import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./ui/components/NavBar";
import RouteControl from "./RouteControl";
import Footer from "./ui/components/Footer";
import ScrollToTopBtn from "./ui/components/Btns/ScrollToTopBtn";
import { useDispatch } from "react-redux";
import { resetPagination } from "./lib/store/Features/paginationSlice";

const ScrollToTop = React.lazy(() => import("./ui/other/ScrollToTop"));

export default function App() {
  const path = useLocation();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(resetPagination());
  },[path.pathname,dispatch]);
  return (
    <section id="container-main" className={`main_body ${path.pathname == "/" && "bg-gradient-to-b from-0% from-[#E9EFFE] to-13%  to-white"}`}>
      <ScrollToTop />
      <Navbar />
      <RouteControl />

      <Footer />
      <ScrollToTopBtn />
    </section>
  )
}
