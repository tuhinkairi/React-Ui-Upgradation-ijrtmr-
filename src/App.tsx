import { Route, Routes } from "react-router-dom";
import Home from "./ui/endpoints/home/Home";
import Archives from "./ui/endpoints/archive/Archives";
import Navbar from "./ui/components/NavBar";
import Footer from "./ui/components/Footer";


export default function App() {
  return (
    <section className="main_body">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archives" element={<Archives />} />
      </Routes>
      <Footer/>

    </section>
  )
}
