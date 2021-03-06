import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Episodes from "./components/Episodes";
import Latest from "./components/Latest";
import NavListen from "./components/NavListen";
import Banner from "./components/Banner";
import SznOneBanner from "./components/SeasonOne/SznOneBanner";
import EpisodeOne from "./components/SeasonOne/EpisodeOne";
import NavSeason from "./components/NavSeason";

export function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Latest />
      <Contact />
    </div>
  );
}

export function Listen() {
  return (
    <div>
      <NavListen />
      <Banner />
      <Episodes />
    </div>
  );
} 

export function SznOneEpOne() {
  return (
    <div>
      <NavSeason />
      <SznOneBanner />
      <EpisodeOne />
    </div>
  );
} 


