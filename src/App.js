import "./App.css";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import "./server";
import Vans from "./pages/Vans/Vans";
import VanDetails from "./pages/Vans/VanDetails";
import Layout from "./components/Layout";
import Host from "./pages/Host/Host";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/host" element={<Host />} />
          <Route path="/Vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
