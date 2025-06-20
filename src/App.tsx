import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./ui/endpoints/home/Home";
import Navbar from "./ui/components/NavBar";
import Footer from "./ui/components/Footer";
import ArchiveVolumes from "./ui/endpoints/archive/ArchiveVolumes";
import ArchiveFirst from "./ui/endpoints/sections/ArchiveFirst";
import ArticleDetails from "./ui/endpoints/archive/details/ArticleDetails";
import About from "./ui/endpoints/about/About";
import GlobalWrapper from "./ui/components/layout/GlobalWrapper";


export default function App() {
  const path = useLocation();
  return (
    <section className={`main_body ${path.pathname == "/" && "bg-gradient-to-b from-0% from-[#E9EFFE] to-13%  to-white"}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />}/>
        <Route path="/for-authors" element={<GlobalWrapper />}/>
        <Route path="/current-issue" element={<GlobalWrapper />}/>
        <Route path="/conference" element={<GlobalWrapper />}/>
        <Route path="/blog" element={<GlobalWrapper />}/>
        <Route path="/Thesis" element={<GlobalWrapper />}/>
        <Route path="/contact-us" element={<GlobalWrapper />}/>
        <Route path="/archives" element={<GlobalWrapper />}>
          <Route index element={<ArchiveFirst />} />
          <Route path=":volumes" element={<ArchiveVolumes />} />
          <Route path="artical-details" element={<ArticleDetails />} />
        </Route>
      </Routes>
      <Footer/>

    </section>
  )
}
