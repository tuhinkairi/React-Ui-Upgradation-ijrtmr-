import AboutSection from "../../components/AboutSection";
import AuthorFeaturesGrid from "../../components/AutherFeatureGrid";
import EditorialFeatures from "../../components/EditorialFeatures";
import FeaturesSection1 from "../../components/FeatureSection1";
import Hero from "../../components/Hero";
import IJSREATFeaturesSection from "../../components/IJSREATFeaturesSection";
import IndexingPartners from "../../components/IndexingPartner";
import JournalLayout from "../../components/layout/JournalLayout";
import Navbar from "../../components/NavBar";
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
    </section>
  )
}
