import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import AllApps from "../pages/AllApps";
import InstalledApps from "../pages/InstalledApps";
import AppDetails from "../pages/AppDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    hydrateFallbackElement: <p>Loading....</p>,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('/Apps.json'),
      },
      {
        path: '/apps',
        element: <AllApps />,
        loader: () => fetch('/Apps.json'),
      },
      {
        path: '/installed',
        element: <InstalledApps />,
        loader: () => fetch('/Apps.json'),
      },
      {
        path: '/apps/:id',
        element: <AppDetails />,
        loader: () => fetch('/Apps.json'),
      }
    ]
  },
]);

export default router;
