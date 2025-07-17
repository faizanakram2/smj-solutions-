import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Technologies from "./components/Technologies";
import Offers from "./components/Offers"
import Services from "./components/Services";
import Clients from "./components/Clients";
import Priority from "./components/Priority"
import Footer from "./components/Footer";
import Snippets from "./components/Snippets"
import Projects from "./components/Projects"
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Technologies />
      <Offers />
      <Snippets />
      <Services />
      <Projects />
      <Clients />
      <Priority />
      <Footer />
    </>
  );
}

export default App;
