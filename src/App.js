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
import Crypto from "./Components/capstone projects/Crypto";
import Voltrix from "./Components/capstone projects/Voltrix";
import Digi from "./Components/capstone projects/digi"
import Ph from "./Components/capstone projects/Ph";
import Beleaf from "./Components/capstone projects/Beleaf";
import Beleafe from "./Components/capstone projects/Beleafe";
import Rifaworld from "./Components/capstone projects/Rifaworld";
import Rifaworld2 from "./Components/capstone projects/Rifaworld2";


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
        <Route path="/capstone/Crypto-hub" element={<Crypto />} />
        <Route path="/capstone/voltrix" element={<Voltrix />} />
        <Route path="/capstone/digi" element={<Digi />} />
        <Route path="/capstone/ph-online" element={<Ph />} />
        <Route path="/capstone/beleaf-trading-bot" element={<Beleaf />} />
        <Route path="/capstone/Beleaf-Arbitrage-Bot" element={<Beleafe />} />
        <Route path="/capstone/Rifa-World-Company" element={<Rifaworld />} />
        <Route path="/capstone/Rifa-World-Company-2" element={<Rifaworld2 />} />
        <Route path="/capstone/Crypto-hub" element={<Crypto />} />


        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
