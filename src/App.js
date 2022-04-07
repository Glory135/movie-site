import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Movies } from "./pages/Movies";
import { Series } from "./pages/Series";
import { useState } from "react";
import { LoginModal } from "./components/LoginModal";
import { SignUpModal } from "./components/SignUpModal";
import { Contact } from "./pages/Contact";
import { Profile } from "./pages/Profile";
import { SingleMovie } from "./pages/SingleMovie";

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
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </main>
  );
}

export default App;
