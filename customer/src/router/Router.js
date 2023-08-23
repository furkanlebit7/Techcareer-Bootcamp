//Packages
import { createBrowserRouter } from "react-router-dom";

//Pages
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import AddCustomer from "../pages/AddCustomer";
import Customers from "../pages/Customers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Customers />,
      },
      {
        path: "add",
        element: <AddCustomer />,
      },
    ],
  },
]);
