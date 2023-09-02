//Packages
import { createBrowserRouter } from "react-router-dom";

//Pages
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import Events from "../Pages/Events";
import Event from "../Pages/Event";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/event/:eventUrl",
        element: <Event />,
      },
      {
        path: "/events",
        element: <Events />,
      },
    ],
  },
]);
