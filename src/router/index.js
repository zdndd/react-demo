import Portal from "../page/Portal/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portal />,
  },
  {
    path: "/portal",
    element: <Portal />,
  },
]);

export default router;
