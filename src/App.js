import "./App.css";
import About from "./pages/About";
import { Routes , Route } from "react-router-dom";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
