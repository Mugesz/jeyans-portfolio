import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home/Home";
import Aboutus from "./Components/Aboutus/Aboutus";
import Capstones from "./Components/Capstones/Capstones";
import Contact from "./Components/Contact/Contact";
import Ico from "./Components/capstone projects/Ico"
import Peertopeer from "./Components/capstone projects/Peertopeer"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/capstones" element={<Capstones />} />
        <Route path="/Contactus" element={<Contact />} />
        <Route path="/capstone/ico" element={<Ico />} />
        <Route path="/capstone/peer-to-peer" element={<Peertopeer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
