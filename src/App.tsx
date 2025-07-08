import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./ui/endpoints/home/Home";
import Archives from "./ui/endpoints/archive/Archives";
import Navbar from "./ui/components/NavBar";
import Footer from "./ui/components/Footer";
import ArchiveFirst from "./ui/endpoints/archive/sections/ArchiveFirst";
import ArticleDetails from "./ui/endpoints/archive/details/ArticleDetails";
import About from "./ui/endpoints/about/About";
import IndexAbstract from "./ui/endpoints/indexing&abstract/IndexAbstract";
import PeerReviewPolicy from "./ui/endpoints/about/PeerReview/PeerReviewPolicy";
import CrossMarkPolicy from "./ui/endpoints/about/crossmark/CrossMarkPolicy";
import PublicationPolicy from "./ui/endpoints/about/publication-policy/PublicationPolicy";
import ImactFactor from "./ui/endpoints/about/Impact/ImactFactor";
import FAQ from "./ui/endpoints/about/FAQ/FAQ";
import EthicsAndPolicy from "./ui/endpoints/about/ethics&policy/EthicsAndPolicy";
import { EditorBoard } from "./ui/endpoints/Editorial/EditorialBoard";
import EditoralSingle from "./ui/endpoints/Editorial/EditorialPage/EditoralSingle";
import Blog from "./ui/endpoints/blog/Blog";
import BlogShow from "./ui/endpoints/blog/show/BlogShow";
import ContactUs from "./ui/endpoints/contact-us/ContactUs";
import Download from "./ui/endpoints/for-authors/download-section/Download";
import JournalPublishingProcess from "./ui/endpoints/for-authors/journal-publishing-process/JournalPublishingProcess";
import CallForPapers from "./ui/endpoints/for-authors/call-for-paper/CallForPaper";
import Conference from "./ui/endpoints/conference/Conference";
import ConferenceIndex from "./ui/endpoints/conference/ConferenceIndex";
import Topics from "./ui/endpoints/for-authors/topics/Topics";
import ThesisIndex from "./ui/endpoints/Thesis/ThesisIndex";
import Thesis from "./ui/endpoints/Thesis/Thesis";
import ArchiveVolumes from "./ui/endpoints/archive/ArchiveVolumes";
import ConferenceDetails from "./ui/endpoints/conference/ConferenceDetails";
import GuideForAuther from "./ui/endpoints/for-authors/guide-for-auther/GuideForAuther";
import ArticleStatus from "./ui/endpoints/for-authors/artical-status/ArticleStatus";
import ArticleProcessingCharges from "./ui/endpoints/for-authors/article-processing-charges/ArticleProcessingCharges";
import EMS from "./ui/endpoints/for-authors/editorial-management/EMS";


export default function App() {
  const path = useLocation();
  return (
    <section className={`main_body ${path.pathname == "/" && "bg-gradient-to-b from-0% from-[#E9EFFE] to-13%  to-white"}`}>
      <Navbar />
      <Routes>
        <Route path="/" loader={true} element={<Home />} />
        {/* <Route path="/for-authors" element={<>comming soon</>} /> */}
        <Route path="/current-issue" element={<>comming soon</>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogShow />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/thesis" element={<ThesisIndex />} />
        <Route path="/thesis/:volumes" element={<Thesis />}>
          <Route index element={<ArchiveVolumes active="thesis" />} />
          <Route path="paper-details" element={<ArticleDetails />} />
        </Route>

        <Route path="/archives" element={<Archives />}>
          <Route index element={<ArchiveFirst />} />
          <Route path=":volumes" element={<ArchiveVolumes active="archive" />} />
          <Route path="paper-details" element={<ArticleDetails />} />
        </Route>

        {/* about section */}
        <Route path="/aim&scope" element={<About />} />
        {/* editorial start */}
        <Route path="/editorial-board" element={<EditorBoard />} />
        <Route path="/editorial-board/:data" element={<EditoralSingle />} />
        {/* editorial end*/}
        <Route path="/indexing&abstraction" element={<IndexAbstract />} />
        <Route path="/publication-ethics-policy" element={<PublicationPolicy />} />
        <Route path="/peer-review-policy" element={<PeerReviewPolicy />} />
        <Route path="/ethics&policy" element={<EthicsAndPolicy />} />
        <Route path="/cross-mark-policy" element={<CrossMarkPolicy />} />
        <Route path="/impactfactor" element={<ImactFactor />} />
        <Route path="/faq" element={<FAQ />} />
        {/* about end */}

        {/* for authors */}
        <Route path="/downloads" element={<Download />} />
        <Route path="/journal-publishing-process" element={<JournalPublishingProcess />} />
        <Route path="/call-for-paper" element={<CallForPapers />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/article-status" element={<ArticleStatus />} />
        <Route path="/guide-for-author" element={<GuideForAuther />} />
        <Route path="/article-processing-charge" element={<ArticleProcessingCharges />} />
        <Route path="/editorial-management-system" element={<EMS />} />


        {/* conference */}
        <Route path="/conference" element={<Conference />}>
          <Route index element={<ConferenceIndex />} />
          <Route path=":volumes" element={<ArchiveVolumes active="conference" />} />
          <Route path="paper-details" element={<ConferenceDetails />} />
        </Route>
      </Routes>
      <Footer />

    </section>
  )
}
