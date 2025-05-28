import { Route, Routes } from "react-router-dom";
import Home from "./ui/endpoints/home/Home";
import Archives from "./ui/endpoints/archive/Archives";
import Navbar from "./ui/components/NavBar";
import Footer from "./ui/components/Footer";
import ArchiveVolumes from "./ui/endpoints/archive/ArchiveVolumes";
import ArchiveFirst from "./ui/endpoints/sections/ArchiveFirst";
import ArticleDetails from "./ui/endpoints/archive/details/ArticleDetails";


export default function App() {
  return (
    <section className="main_body">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
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
