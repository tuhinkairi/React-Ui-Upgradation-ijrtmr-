import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./ui/components/NavBar";
import RouteControl from "./RouteControl";
import Footer from "./ui/components/Footer";
import ScrollToTopBtn from "./ui/components/Btns/ScrollToTopBtn";
const ServeChat = React.lazy(()=> import("./ui/components/layout/ServeChat") )

const ScrollToTop = React.lazy(() => import("./ui/other/ScrollToTop"));

export default function App() {
  const path = useLocation();

  return (
    <section id="container-main" className={`main_body ${path.pathname == "/" && "bg-gradient-to-b from-0% from-[#E9EFFE] to-13%  to-white"}`}>
      <ScrollToTop />
      <Navbar />
      <RouteControl />

      <Footer />
      <ScrollToTopBtn />
      <ServeChat/>
    </section>
  )
}
