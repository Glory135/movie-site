import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { Home } from "./pages/Home";

function App() {
  return (
    <main>
      <div className='main-container'>
        <Header />
        <SearchBar />
        <Home />
        <Footer />
      </div>
    </main>
  );
}

export default App;
