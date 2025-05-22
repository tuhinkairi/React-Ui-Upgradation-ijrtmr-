import AboutSection from "../../components/AboutSection";
import AuthorFeaturesGrid from "../../components/AutherFeatureGrid";
import EditorialFeatures from "../../components/EditorialFeatures";
import FeaturesSection1 from "../../components/FeatureSection1";
import Hero from "../../components/Hero";
import IJSREATFeaturesSection from "../../components/IJSREATFeaturesSection";
import IndexingPartners from "../../components/IndexingPartner";
import JournalsCompendium from "../../components/JournalsCompendium";
import JournalLayout from "../../components/layout/JournalLayout";
import Navbar from "../../components/NavBar";
import SubmitPaperSection from "../../components/SubmitPaperSection";
import TickerBar from "../../components/TickerBar";
import WhyChooseIJSREAT from "../../components/WhyChooseIJSREAT";

export default function Home() {
  return (
    <section className="">
      <Navbar />
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
    </section>
  )
}
