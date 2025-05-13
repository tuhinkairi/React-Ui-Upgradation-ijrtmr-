import Hero from "../../components/Hero";
import Navbar from "../../components/NavBar";
import TickerBar from "../../components/TickerBar";

export default function Home() {
  return (
    <section className="">
      <Navbar />
      <Hero />
      <TickerBar/>
    </section>
  )
}
