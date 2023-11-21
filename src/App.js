import "./App.css";
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Contact from './components/ContactUs'
import SignUp from './components/SignUp'
import About from "./components/About"

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
