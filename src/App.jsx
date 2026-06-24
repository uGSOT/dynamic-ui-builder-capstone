import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import GalleryPlaygroundPage from "./pages/GalleryPage/GalleryPlaygroundPage";
import BuilderPage from "./pages/BuilderPage";
import Centered from "./catalog/hero/Centered";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "gallery", element: <GalleryPage /> },
      { path: "gallery/:type/:variant", element: <GalleryPlaygroundPage /> },
      { path: "builder", element: <BuilderPage /> },
      { path: "centered", element: <Centered /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
