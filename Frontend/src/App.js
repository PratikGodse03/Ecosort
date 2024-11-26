import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Contact from './pages/ContactUs'
import SignUp from './components/SignUp'
import About from "./pages/About"
import SignIn from "./pages/SignIn";
import Register from './pages/Register'
import PrivateRoute from "./components/PrivateRoute";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="overflow-x-hidden" >
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />

        <Route path='' element={<PrivateRoute />}>
          <Route path="/predict" />
        </Route>

      </Routes>


    </div>
  );
}

export default App;
