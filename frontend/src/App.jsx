import Home from './home/Home';
import {Navigate, Route, Routes } from "react-router-dom";
import Courses from './courses/Courses';
import Contact from './components/Contact';
import About from './components/About';
import Signup from './components/Signup';
import {Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser,setAuthUser]=useAuth();
  return (
     <>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster/>
      </div>
    </>
  );
}

export default App;
