import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Page404 from "./ui/components/layout/Page404";
const Home = React.lazy(() => import("./ui/endpoints/home/Home"));
const Archives = React.lazy(() => import("./ui/endpoints/archive/Archives"));
const Navbar = React.lazy(() => import("./ui/components/NavBar"));
const Footer = React.lazy(() => import("./ui/components/Footer"));
const ArchiveFirst = React.lazy(() => import("./ui/endpoints/archive/sections/ArchiveFirst"));
const ArticleDetails = React.lazy(() => import("./ui/endpoints/archive/details/ArticleDetails"));
const About = React.lazy(() => import("./ui/endpoints/about/About"));
const IndexAbstract = React.lazy(() => import("./ui/endpoints/indexing&abstract/IndexAbstract"));
const PeerReviewPolicy = React.lazy(() => import("./ui/endpoints/about/PeerReview/PeerReviewPolicy"));
const CrossMarkPolicy = React.lazy(() => import("./ui/endpoints/about/crossmark/CrossMarkPolicy"));
const PublicationPolicy = React.lazy(() => import("./ui/endpoints/about/publication-policy/PublicationPolicy"));
const ImactFactor = React.lazy(() => import("./ui/endpoints/about/Impact/ImactFactor"));
const FAQ = React.lazy(() => import("./ui/endpoints/about/FAQ/FAQ"));
const EthicsAndPolicy = React.lazy(() => import("./ui/endpoints/about/ethics/EthicsAndPolicy"));
const EditoralSingle = React.lazy(() => import("./ui/endpoints/Editorial/EditorialPage/EditoralSingle"));
const Blog = React.lazy(() => import("./ui/endpoints/blog/Blog"));
const BlogShow = React.lazy(() => import("./ui/endpoints/blog/show/BlogShow"));
const ContactUs = React.lazy(() => import("./ui/endpoints/contact-us/ContactUs"));
const Download = React.lazy(() => import("./ui/endpoints/for-authors/download-section/Download"));
const JournalPublishingProcess = React.lazy(() => import("./ui/endpoints/for-authors/journal-publishing-process/JournalPublishingProcess"));
const CallForPapers = React.lazy(() => import("./ui/endpoints/for-authors/call-for-paper/CallForPaper"));
const Conference = React.lazy(() => import("./ui/endpoints/conference/Conference"));
const ConferenceIndex = React.lazy(() => import("./ui/endpoints/conference/ConferenceIndex"));
const Topics = React.lazy(() => import("./ui/endpoints/for-authors/topics/Topics"));
const ThesisIndex = React.lazy(() => import("./ui/endpoints/Thesis/ThesisIndex"));
const Thesis = React.lazy(() => import("./ui/endpoints/Thesis/Thesis"));
const ArchiveVolumes = React.lazy(() => import("./ui/endpoints/archive/ArchiveVolumes"));
const ConferenceDetails = React.lazy(() => import("./ui/endpoints/conference/ConferenceDetails"));
const GuideForAuther = React.lazy(() => import("./ui/endpoints/for-authors/guide-for-auther/GuideForAuther"));
const ArticleStatus = React.lazy(() => import("./ui/endpoints/for-authors/artical-status/ArticleStatus"));
const ArticleProcessingCharges = React.lazy(() => import("./ui/endpoints/for-authors/article-processing-charges/ArticleProcessingCharges"));
const EMS = React.lazy(() => import("./ui/endpoints/for-authors/editorial-management/EMS"));
const ScrollToTop = React.lazy(() => import("./ui/other/ScrollToTop"));
const EditorBoard = React.lazy(() => import("./ui/endpoints/Editorial/EditorialBoard"));

export default function App() {
  const path = useLocation();

  return (
    <section id="container-main" className={`main_body ${path.pathname == "/" && "bg-gradient-to-b from-0% from-[#E9EFFE] to-13%  to-white"}`}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" loader={true} element={<Home />} />
        {/* <Route path="/for-authors" element={<>comming soon</>} /> */}
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogShow />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/publications" element={<ThesisIndex />} />
        <Route path="/thesis" element={<Thesis />}>
          <Route index element={<ArchiveFirst />} />
          <Route path=":paperlist" element={<ArchiveVolumes active="thesis" />} />
          <Route path="paper-details" element={<ArticleDetails />} />
        </Route>

        {/* current issue */}
        <Route path="/current-issue" element={<Archives />}>
          <Route index element={<ArchiveFirst />} />
          <Route path="paperlist" element={<ArchiveVolumes active="issue" />} />
          <Route path="paper-details" element={<ArticleDetails />} />
        </Route>
        {/* archives */}
        <Route path="/archives" element={<Archives />}>
          <Route index element={<ArchiveFirst />} />
          <Route path="paperlist" element={<ArchiveVolumes active="archive" />} />
          <Route path="paper-details" element={<ArticleDetails />} />
        </Route>

        {/* about section */}
        <Route path="/aim-and-scope" element={<About />} />
        {/* editorial start */}
        <Route path="/editorial-board" element={<EditorBoard />} />
        <Route path="/editorial-board/:data" element={<EditoralSingle />} />
        {/* editorial end*/}
        <Route path="/indexing&abstraction" element={<IndexAbstract />} />
        <Route path="/publication-ethics-policy" element={<PublicationPolicy />} />
        <Route path="/peer-review-policy" element={<PeerReviewPolicy />} />
        <Route path="/ethics" element={<EthicsAndPolicy />} />
        <Route path="/cross-mark-policy" element={<CrossMarkPolicy />} />
        <Route path="/impact-Factor" element={<ImactFactor />} />
        <Route path="/FAQs" element={<FAQ />} />
        {/* about end */}

        {/* for authors */}
        <Route path="/downloads" element={<Download />} />
        <Route path="/journal-publishing-process" element={<JournalPublishingProcess />} />
        <Route path="/call-for-papers" element={<CallForPapers />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/paper-status" element={<ArticleStatus />} />
        <Route path="/instruction-for-author" element={<GuideForAuther />} />
        <Route path="/article-processing-charges" element={<ArticleProcessingCharges />} />
        <Route path="/guidance-for-ems" element={<EMS />} />


        {/* conference */}
        <Route path="/conference" element={<Conference />}>
          <Route index element={<ConferenceIndex />} />
          <Route path="paperlist" element={<ArchiveVolumes active="conference" />} />
          <Route path="paper-details" element={<ConferenceDetails />} />
        </Route>


        {/* error */}
        <Route path="*" element={<Page404 />} />

      </Routes>
      <Footer />

    </section>
  )
}
