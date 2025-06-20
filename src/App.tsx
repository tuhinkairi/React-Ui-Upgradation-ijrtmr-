import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./ui/endpoints/home/Home";
import Archives from "./ui/endpoints/archive/Archives";
import Navbar from "./ui/components/NavBar";
import Footer from "./ui/components/Footer";
import ArchiveVolumes from "./ui/endpoints/archive/ArchiveVolumes";
import ArchiveFirst from "./ui/endpoints/archive/sections/ArchiveFirst";
import ArticleDetails from "./ui/endpoints/archive/details/ArticleDetails";
import About from "./ui/endpoints/about/About";
import IndexAbstract from "./ui/endpoints/indexing&abstract/IndexAbstract";
import PeerReviewPolicy from "./ui/endpoints/about/PeerReview/PeerReviewPolicy";
import CrossMarkPolicy from "./ui/endpoints/about/crossmark/CrossMarkPolicy";
import PublicationPolicy from "./ui/endpoints/about/publication-policy/PublicationPolicy";
import ImactFactor from "./ui/endpoints/about/Impact/ImactFactor";
import FAQ from "./ui/endpoints/about/FAQ/FAQ";


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
        {/* non showing */}
        <Route path="/indexing&abstraction" element={<IndexAbstract />} />
        <Route path="/peer-review-policy" element={<PeerReviewPolicy />} />
        <Route path="/cross-mark-policy" element={<CrossMarkPolicy />} />
        <Route path="/publication-policy" element={<PublicationPolicy />} />
        <Route path="/impactfactor" element={<ImactFactor />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer/>

    </section>
  )
}
