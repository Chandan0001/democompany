import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/inc/Navbar';
import About from './components/pages/About'
import Contact from './components/pages/Contact';
import { Routes, Route, Link } from "react-router-dom";
import Alert from './components/pages/Alert';
import Footer from './components/inc/Footer';




function App() {

  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type)
  return (
    <>
      
      <Navbar />
      <Alert />
      
      <Routes>
         <Route exact path="/" element={<Home />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
          
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
