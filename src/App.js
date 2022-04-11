import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Movies } from "./pages/movies/Movies";
import { Series } from "./pages/series/Series";
import { LoginModal } from "./components/LoginModal";
import { SignUpModal } from "./components/SignUpModal";
import { Contact } from "./pages/Contact";
import { Profile } from "./pages/Profile";
import { Favourites } from "./pages/Favourites";
import { SingleSeries } from "./pages/series/SingleSeries";
import { SingleMovie } from "./pages/movies/SingleMovie";
import { SeriesSeason } from "./pages/series/SeriesSeason";
import { SeriesEpisode } from "./pages/series/SeriesEpisode";

function App() {
  const [logOpen, setLogOpen] = useState(false);
  const [signOpen, setSignOpen] = useState(false);
  return (
    <main>
      <div className='main-container'>
        <LoginModal logOpen={logOpen} setLogOpen={setLogOpen} />
        <SignUpModal signOpen={signOpen} setSignOpen={setSignOpen} />
        <Header setLogOpen={setLogOpen} setSignOpen={setSignOpen} />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/series' element={<Series />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/movies/movie' element={<SingleMovie />} />
          <Route path='/series/seriesSingle' element={<SingleSeries />} />
          <Route
            path='/series/seriesSingle/season'
            element={<SeriesSeason />}
          />
          <Route
            path='/series/seriesSingle/season/episode'
            element={<SeriesEpisode />}
          />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/favourites' element={<Favourites />} />
        </Routes>
        <Footer />
      </div>
    </main>
  );
}

export default App;
