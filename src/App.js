import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home/Home";
import Aboutus from "./Components/Aboutus/Aboutus";
import Capstones from "./Components/Capstones/Capstones";
import Contact from "./Components/Contact/Contact";
import Ico from "./Components/capstone projects/Ico"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/capstones" element={<Capstones />} />
        <Route path="/Contactus" element={<Contact />} />
        <Route path="/capstone/ico" element={<Ico />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
