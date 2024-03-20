import "./App.css";
import About from "./pages/About";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import "./server";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetails, { loader as vanDetalLoader } from "./pages/Vans/VanDetails";
import Layout from "./components/Layout";
import Dashborad from "./pages/Host/Dashborad";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import VansHost, { loader as hostVanLoader } from "./pages/Host/HostVans";
import HostVanDetails, {
  loader as hostVansDetailLoader,
} from "./pages/Host/HostVanDetails";
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
import Login , {loader as loginLoader} from "./pages/Login";
import { requireAuth } from "./utils";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<ErrorEl />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} loader={loginLoader} />

      <Route path="Vans" element={<Vans />} loader={vansLoader} />
      <Route path="vans/:id" element={<VanDetails />} loader={vanDetalLoader} />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashborad />}
          loader={async () => {
           await requireAuth();
          }}
        />
        <Route path="vans" element={<VansHost />} loader={hostVanLoader} />
        <Route
          path="vans/:id"
          element={<HostVanDetails />}
          loader={hostVansDetailLoader}
        >
          <Route
            index
            element={
              <HostVanInfo
              loader={async () => {
                await requireAuth();
               }}
              />
            }
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async () => {
              await requireAuth();
             }}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async () => {
              await requireAuth();
             }}
          />
        </Route>
        <Route
          path="income"
          element={<Income />}
          loader={async () => {
            await requireAuth();
           }}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => {
            await requireAuth();
           }}
        />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={route} />;
}

export default App;
