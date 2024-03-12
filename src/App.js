import "./App.css";
import About from "./pages/About";
import {Route } from "react-router-dom";
import Home from "./pages/Home";
import "./server";
import Vans ,{loader as vansLoader} from "./pages/Vans/Vans";
import VanDetails from "./pages/Vans/VanDetails";
import Layout from "./components/Layout";
import Dashborad from "./pages/Host/Dashborad";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import VansHost from "./pages/Host/HostVans";
import HostVanDetails from "./pages/Host/HostVanDetails";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import ErrorPage from "./pages/ErrorPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import ErrorEl from "./ErrorEl";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<ErrorEl/>}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="Vans" element={<Vans />} loader={vansLoader}  />
      <Route path="vans/:id" element={<VanDetails />} />

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashborad />} />
        <Route path="vans" element={<VansHost />} />
        <Route path="vans/:id" element={<HostVanDetails />}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={route} />;
}

export default App;
