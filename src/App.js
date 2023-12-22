import "./App.css";
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Contact from './pages/ContactUs'
import SignUp from './components/SignUp'
import About from "./pages/About"
import SignIn from "./pages/SignIn";


function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>


    </div>
  );
}

export default App;
