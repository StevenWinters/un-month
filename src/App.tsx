import Hero from "./components/Hero";
import Info from "./components/Info";
import NavBar from "./components/NavBar";
import Poster from "./components/Poster";
import Video from "./components/Video";
import UNPoster1 from "./assets/un-poster-1.jpg";
import UNPoster2 from "./assets/un-poster-2.jpg";
import UNPoster3 from "./assets/un-poster-3.jpg";
import UNPoster4 from "./assets/un-poster-4.jpg";
import UNPoster5 from "./assets/un-poster-5.jpg";
import UNPoster6 from "./assets/un-poster-6.jpg";
import UNPoster7 from "./assets/un-poster-7.jpg";

const posterImages = [UNPoster1, UNPoster2, UNPoster3, UNPoster4, UNPoster5, UNPoster6, UNPoster7];

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Video />
      <Info />
      <Poster posterImages={posterImages} />
    </>
  );
}

export default App;
