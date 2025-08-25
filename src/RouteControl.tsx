import React from "react";
import { Route, Routes} from "react-router-dom";
import Page404 from "./ui/components/layout/Page404";
import MetaDataWrapper from "./ui/components/layout/MetaDataWrapper";
import ArchiveVolumes2 from "./ui/endpoints/archive/ArchiveVolumes2";
import ConferenceVolumes from "./ui/endpoints/conference/ConferenceVolumes";
import CurrentIssueVolumes from "./ui/endpoints/current-issue/CurrentIssueVolumes";
import ThesisVolumes from "./ui/endpoints/Thesis/ThesisVolumes";
import Policy from "./ui/endpoints/footer/Policy";
import RefundPolicy from "./ui/endpoints/footer/RefundPolicy";
import ConferenceProcedings from "./ui/endpoints/conference/conference-procedings/ConferenceProcedings";
import JournalParticularsContainer from "./ui/endpoints/about/journal-particulers/JournalParticularsContainer";
import TermsAndConditions from "./ui/endpoints/footer/T&C copy";
const ThesisDetails= React.lazy(()=>import("./ui/endpoints/Thesis/ThesisDetails"));
const Home = React.lazy(() => import("./ui/endpoints/home/Home"));
const Archives = React.lazy(() => import("./ui/endpoints/archive/Archives"));
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
// const ArchiveVolumes = React.lazy(() => import("./ui/endpoints/archive/ArchiveVolumes"));
const ConferenceDetails = React.lazy(() => import("./ui/endpoints/conference/ConferenceDetails"));
const GuideForAuther = React.lazy(() => import("./ui/endpoints/for-authors/guide-for-auther/GuideForAuther"));
const ArticleStatus = React.lazy(() => import("./ui/endpoints/for-authors/artical-status/ArticleStatus"));
const ArticleProcessingCharges = React.lazy(() => import("./ui/endpoints/for-authors/article-processing-charges/ArticleProcessingCharges"));
const EMS = React.lazy(() => import("./ui/endpoints/for-authors/editorial-management/EMS"));
const EditorBoard = React.lazy(() => import("./ui/endpoints/Editorial/EditorialBoard"));

export default function RouteControl() {

    return (
        <Routes>
            <Route path="/" loader={true} element={<MetaDataWrapper><Home /></MetaDataWrapper>} />
            {/* <Route path="/for-authors" element={<>comming soon</>} /> */}
            <Route path="/blogs" loader={true} element={<MetaDataWrapper><Blog /></MetaDataWrapper>} />
            <Route path="/blogs/:slug" element={<BlogShow />} />
            <Route path="/tag/:slug" element={<BlogShow />} />
            <Route path="/contact-us" element={<MetaDataWrapper><ContactUs /></MetaDataWrapper>} />

            <Route path="/publications" element={<MetaDataWrapper><ThesisIndex /></MetaDataWrapper>} />
            <Route path="/thesis" element={<MetaDataWrapper><Thesis /></MetaDataWrapper>}>
                <Route index element={<ArchiveFirst />} />
                <Route path="paperlist" element={<ThesisVolumes/>} />
                <Route path="paper-details" element={<ThesisDetails />} />
            </Route>

            {/* current issue */}
            <Route path="/current-issue" element={<MetaDataWrapper><Archives /></MetaDataWrapper>}>
                <Route index element={<ArchiveFirst />} />
                <Route path="paperlist" element={<CurrentIssueVolumes/>} />
                <Route path="paper-details" element={<ArticleDetails />} />
            </Route>
            {/* archives */}
            <Route path="/archives" element={<MetaDataWrapper><Archives /></MetaDataWrapper>}>
                <Route index element={<ArchiveFirst />} />
                <Route path="paperlist" element={<ArchiveVolumes2 />} />
                <Route path="paper-details" element={<ArticleDetails />} />
            </Route>

            {/* about section */}
            <Route path="/aim-and-scope" element={<MetaDataWrapper><About /></MetaDataWrapper>} />
            {/* editorial start */}
            <Route path="/editorial-board" element={<MetaDataWrapper><EditorBoard /></MetaDataWrapper>} />
            <Route path="/editorial-board/:slug" element={<EditoralSingle />} />
            {/* editorial end*/}
            <Route path="/indexing-and-abstracting" element={<MetaDataWrapper><IndexAbstract /></MetaDataWrapper>} />
            <Route path="/publication-ethics-policy" element={<MetaDataWrapper><PublicationPolicy /></MetaDataWrapper>} />
            <Route path="/peer-review-policy" element={<MetaDataWrapper><PeerReviewPolicy /></MetaDataWrapper>} />
            <Route path="/ethics" element={<MetaDataWrapper><EthicsAndPolicy /></MetaDataWrapper>} />
            <Route path="/cross-mark-policy" element={<MetaDataWrapper><CrossMarkPolicy /></MetaDataWrapper>} />
            <Route path="/impact-Factor" element={<MetaDataWrapper><ImactFactor /></MetaDataWrapper>} />
            <Route path="/FAQs" element={<MetaDataWrapper><FAQ /></MetaDataWrapper>} />
            <Route path="/journal-particulars" element={<MetaDataWrapper><JournalParticularsContainer /></MetaDataWrapper>} />
            
            {/* about end */}

            {/* for authors */}
            <Route path="/downloads" element={<MetaDataWrapper><Download /></MetaDataWrapper>} />
            <Route path="/journal-publishing-process" element={<MetaDataWrapper><JournalPublishingProcess /></MetaDataWrapper>} />
            <Route path="/call-for-papers" element={<MetaDataWrapper><CallForPapers /></MetaDataWrapper>} />
            <Route path="/topics" element={<MetaDataWrapper><Topics /></MetaDataWrapper>} />
            <Route path="/paper-status" element={<MetaDataWrapper><ArticleStatus /></MetaDataWrapper>} />
            <Route path="/instruction-for-author" element={<MetaDataWrapper><GuideForAuther /></MetaDataWrapper>} />
            <Route path="/article-processing-charges" element={<MetaDataWrapper><ArticleProcessingCharges /></MetaDataWrapper>} />
            <Route path="/guidance-for-ems" element={<MetaDataWrapper><EMS /></MetaDataWrapper>} />


            {/* conference */}
            <Route path="/conference-procedings" element={<MetaDataWrapper><ConferenceProcedings /></MetaDataWrapper>}/>
            
            <Route path="/conference" element={<MetaDataWrapper><Conference /></MetaDataWrapper>}>
                <Route index element={<ConferenceIndex />} />
                <Route path="paperlist" element={<ConferenceVolumes/>} />
                <Route path="paper-details" element={<ConferenceDetails />} />
            </Route>

            <Route path="/privacy-policy" element={<MetaDataWrapper><Policy /></MetaDataWrapper>} />
            <Route path="/terms-and-conditions" element={<MetaDataWrapper ><TermsAndConditions/></MetaDataWrapper>} />
            <Route path="/refund-policy" element={<MetaDataWrapper><RefundPolicy/></MetaDataWrapper>} />
            {/* error */}
            <Route path="*" element={<Page404 />} />
        </Routes>
    )
}
