import AboutSection from "../../components/AboutSection";
import AuthorFeaturesGrid from "../../components/AutherFeatureGrid";
// import EditorialFeatures from "../../components/EditorialFeatures";
import EditorialManagement from "../../components/EditorialManagement";
import FAQAccordion from "../../components/FAQAccordion";
// import FeaturesSection1 from "../../components/FeatureSection1";
import Hero from "../../components/Hero";
import IJSREATFeaturesSection from "../../components/IJSREATFeaturesSection";
import IndexingPartners from "../../components/IndexingPartner";
// import JournalParticulars from "../../components/JournalParticulars";
import JournalsCompendium from "../../components/JournalsCompendium";
import WrapperLayout from "../../components/layout/WrapperLayout";
import OpenAccessBenefitsGrid from "../../components/OpenAccessBenefitsGrid";
import SubmitPaperSection from "../../components/SubmitPaperSection";
import TickerBar from "../../components/TickerBar";
// import WhyChooseIJSREAT from "../../components/WhyChooseIJSREAT";
import WhyPublishWithUs from "../../components/WhyPublishWithUs";
import PublishProcess from "./PublishProcess";


// todo home titles make more flexible
export default function Home() {
  return (
    <section className="space-y-8 sm:space-y-10 md:space-y-6 2xl:space-y-10">
      <div>

        <Hero />
        <TickerBar />
      </ div>
      {/* <FeaturesSection1 /> */}
      <AboutSection />
      <WrapperLayout>
        {/* <JournalParticulars /> */}
        <OpenAccessBenefitsGrid />
        <WhyPublishWithUs />
        <AuthorFeaturesGrid />
        <PublishProcess />
      {/* <EditorialFeatures /> */}
      </WrapperLayout>
      <IJSREATFeaturesSection />
      {/* <WhyChooseIJSREAT /> */}
      <EditorialManagement />
      <IndexingPartners />
      <SubmitPaperSection />
      <JournalsCompendium />
      <FAQAccordion />
    </section>
  )
}
