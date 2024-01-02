import {createBrowserRouter,} from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../Layout/Layout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[{
        path: '/',
        element:<Home></Home>
      },
    {
      path:'/about-us',
      element:<AboutUs></AboutUs>
    },
    {
      path:'/sign-up',
      element:<SignUp></SignUp>
    },
    {
      path:'/sign-in',
      element:<SignIn></SignIn>
    }
  ]
    },
  ]);

export default router;