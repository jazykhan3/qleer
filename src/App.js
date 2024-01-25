import "./App.css";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Solutions from "./Components/Solutions";
import Vision from "./Components/Vision";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <Solutions />
      <Services />
      <Vision />
      <Footer />
    </div>
  );
}

export default App;
