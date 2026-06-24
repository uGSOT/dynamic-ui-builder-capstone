import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import BuilderPage from "./pages/BuilderPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "gallery", element: <GalleryPage /> },
      { path: "builder", element: <BuilderPage /> },
     
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
