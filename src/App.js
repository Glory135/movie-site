import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
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
import { Routes, Route } from "react-router-dom";

// validator
import { validate } from "./Utilities";

// admin
import { AdminDashboard } from "./admin/AdminPages/AdminDashboard";
import { PostMovie } from "./admin/AdminPages/PostMovie";
import { PostSeries } from "./admin/AdminPages/PostSeries";
import { PostSeason } from "./admin/AdminPages/PostSeason";
import { PostEpisode } from "./admin/AdminPages/PostEpisode";
import { Users } from "./admin/AdminPages/Users";
import { AdminSettings } from "./admin/AdminPages/AdminSettings";

// Toast notification
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./pages/NotFound";

export const Context = React.createContext();

toast.configure();
function App() {
  const [logOpen, setLogOpen] = useState(false);
  const [signOpen, setSignOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    validate(setLoggedIn, setUser);
  }, []);
  return (
    <main>
      <Context.Provider
        value={{ loggedIn, setLoggedIn, user, setUser, editMode, setEditMode }}
      >
        <div className='main-container'>
          <LoginModal logOpen={logOpen} setLogOpen={setLogOpen} />
          <SignUpModal
            signOpen={signOpen}
            setSignOpen={setSignOpen}
            setLogOpen={setLogOpen}
          />
          <Header setLogOpen={setLogOpen} setSignOpen={setSignOpen} />

          <Routes>
            {/* normal pages start */}
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
            {/* normal pages end */}

            {/* Admin pages start */}
            <Route element={<AdminDashboard />} path='/admin' />
            <Route element={<PostMovie />} path='/admin/movies/create' />
            <Route element={<PostSeries />} path='/admin/series/create' />
            <Route
              element={<PostSeason />}
              path='/admin/series/season/create'
            />
            <Route
              element={<PostEpisode />}
              path='/admin/series/season/episode/create'
            />
            <Route element={<Users />} path='/admin/users' />
            <Route element={<AdminSettings />} path='/admin/settings' />
            {/* Admin pages end */}

            {/* 404 */}
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Context.Provider>
    </main>
  );
}

export default App;
