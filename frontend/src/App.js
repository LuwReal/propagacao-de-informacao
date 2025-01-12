import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import './App.css';
import Youtube from "./components/Youtube";
import Kwai from "./components/Kwai";
import Instagram from "./components/Instagram";
import TikTok from "./components/TikTok";
import Calculadora from "./components/Calculadora";

function App() {

  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/kwai" element={<Kwai />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/tiktok" element={<TikTok />} />
        <Route path="/calculadora" element={<Calculadora />} />
      </Routes>
   </Router>
    
  );
}

export default App;
