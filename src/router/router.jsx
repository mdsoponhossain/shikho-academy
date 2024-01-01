import {createBrowserRouter,} from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../Layout/Layout";
import ErrorPage from "../components/ErrorPage/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[{
        path: '/',
        element:<Home></Home>
      }]
    },
  ]);

export default router;