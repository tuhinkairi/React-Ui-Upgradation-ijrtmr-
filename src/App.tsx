import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./ui/endpoints/home/Home";
import Archives from "./ui/endpoints/archive/Archives";
import Navbar from "./ui/components/NavBar";
import Footer from "./ui/components/Footer";
import ArchiveVolumes from "./ui/endpoints/archive/ArchiveVolumes";
import ArchiveFirst from "./ui/endpoints/archive/sections/ArchiveFirst";
import ArticleDetails from "./ui/endpoints/archive/details/ArticleDetails";
import About from "./ui/endpoints/about/About";


export default function App() {
  const path = useLocation();
  return (
    <section className={`main_body ${path.pathname == "/" && "bg-gradient-to-b from-0% from-[#E9EFFE] to-13%  to-white"}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />}/>
        <Route path="/for-authors" element={<Archives />}/>
        <Route path="/current-issue" element={<Archives />}/>
        <Route path="/conference" element={<Archives />}/>
        <Route path="/blog" element={<Archives />}/>
        <Route path="/Thesis" element={<Archives />}/>
        <Route path="/contact-us" element={<Archives />}/>
        <Route path="/archives" element={<Archives />}>
          <Route index element={<ArchiveFirst />} />
          <Route path=":volumes" element={<ArchiveVolumes />} />
          <Route path="artical-details" element={<ArticleDetails />} />
        </Route>
      </Routes>
      <Footer/>

    </section>
  )
}
