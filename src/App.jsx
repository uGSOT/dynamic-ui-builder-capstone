import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import GalleryPlaygroundPage from "./pages/GalleryPlaygroundPage";
import BuilderPage from "./pages/BuilderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "gallery", element: <GalleryPage /> },
      { path: "gallery/:type/:variant", element: <GalleryPlaygroundPage /> },
      { path: "builder", element: <BuilderPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
