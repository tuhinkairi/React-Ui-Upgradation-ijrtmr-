import AboutSection from "../../components/AboutSection";
import FeaturesSection1 from "../../components/FeatureSection1";
import Hero from "../../components/Hero";
import Navbar from "../../components/NavBar";
import TickerBar from "../../components/TickerBar";

export default function Home() {
  return (
    <section className="">
      <Navbar />
      <Hero />
      <TickerBar/>
      <FeaturesSection1/>
      <AboutSection/>
    </section>
  )
}
