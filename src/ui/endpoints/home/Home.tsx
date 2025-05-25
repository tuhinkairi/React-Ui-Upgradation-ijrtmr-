import AboutSection from "../../components/AboutSection";
import AuthorFeaturesGrid from "../../components/AutherFeatureGrid";
import EditorialFeatures from "../../components/EditorialFeatures";
import FAQAccordion from "../../components/FAQAccordion";
import FeaturesSection1 from "../../components/FeatureSection1";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import IJSREATFeaturesSection from "../../components/IJSREATFeaturesSection";
import IndexingPartners from "../../components/IndexingPartner";
import JournalsCompendium from "../../components/JournalsCompendium";
import JournalLayout from "../../components/layout/JournalLayout";
import SubmitPaperSection from "../../components/SubmitPaperSection";
import TickerBar from "../../components/TickerBar";
import WhyChooseIJSREAT from "../../components/WhyChooseIJSREAT";

export default function Home() {
  return (
    <section className="">
      <Hero />
      <TickerBar/>
      <FeaturesSection1/>
      <AboutSection/>
      <JournalLayout/>
      <AuthorFeaturesGrid/>
      <IJSREATFeaturesSection/>
      <WhyChooseIJSREAT/>
      <EditorialFeatures/>
      <IndexingPartners/>
      <SubmitPaperSection/>
      <JournalsCompendium/>
      <FAQAccordion/>
      <Footer/>
    </section>
  )
}
