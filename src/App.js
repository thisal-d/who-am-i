import './App.css';
import Footer  from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ClassifiedPage from './pages/ClassifiedPage';

function App() {
  return (
    <div className="App">

      <Router>
          <Header />
          <Routes>
              <Route path="/classified" element={<ClassifiedPage />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
      </Router>
      <Footer/>

    </div>
  );
}

export default App;
