import AboutSection from "../../components/AboutSection";
import AuthorFeaturesGrid from "../../components/AutherFeatureGrid";
import EditorialFeatures from "../../components/EditorialFeatures";
import FAQAccordion from "../../components/FAQAccordion";
// import FeaturesSection1 from "../../components/FeatureSection1";
import Hero from "../../components/Hero";
import IJSREATFeaturesSection from "../../components/IJSREATFeaturesSection";
import IndexingPartners from "../../components/IndexingPartner";
import JournalParticulars from "../../components/JournalParticulars";
import JournalsCompendium from "../../components/JournalsCompendium";
import WrapperLayout from "../../components/layout/WrapperLayout";
import SubmitPaperSection from "../../components/SubmitPaperSection";
import TickerBar from "../../components/TickerBar";
import WhyChooseIJSREAT from "../../components/WhyChooseIJSREAT";
import PublishProcess from "../../PublishProcess";

export default function Home() {
  return (
    <section className="">
      <Hero />
      <TickerBar />
      {/* <FeaturesSection1 /> */}
      <AboutSection />
      <WrapperLayout>
        <JournalParticulars />
        <PublishProcess />
        <AuthorFeaturesGrid />
      </WrapperLayout>
      <IJSREATFeaturesSection />
      <WhyChooseIJSREAT />
      <EditorialFeatures />
      <IndexingPartners />
      <SubmitPaperSection />
      <JournalsCompendium />
      <FAQAccordion />
    </section>
  )
}
