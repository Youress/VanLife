import "./App.css";
import About from "./pages/About";
import { Routes , Route } from "react-router-dom";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import "./server"
import Vans from "./pages/Vans";
import VanDetails from "./pages/VanDetails";
function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
      <Route path="/Vans" element={<Vans/>}/>
      <Route path="/vans/:id" element={<VanDetails />} />
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
