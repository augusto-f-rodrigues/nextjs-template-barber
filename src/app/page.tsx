import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Contact/Contact";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <main>
      <Banner />
      <About/>
      <Services/>
      <Contact/>
    </main>
  );
}
