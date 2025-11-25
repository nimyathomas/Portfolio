import Navbar from "./components/Navbar/Navbar"
import Intro from "./components/Intro/Intro"
import Skills from "./components/Skills/Skills"
import About from "./components/About/About"
import Portfolio from "./components/Portfolio/Portfolio"
import Clients from "./components/Clients/Clients"
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Intro/>
      <Skills/>
      <About/>
      <Portfolio/>
      {/* <Clients/> */}
      <Contact/>
    </div>
  );
}

export default App;
