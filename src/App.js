import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home  from './pages/Home';
import Projects from './pages/Projects';
import Contact  from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./styles/Navbar.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path= "/projects" element={<Projects />} />
          <Route path= "/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;