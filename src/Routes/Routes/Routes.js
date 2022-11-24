import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import SignUp from "../../Pages/SignUp/SignUp";

const Routes = createBrowserRouter([
  {
    path: `/`,
    element: <Main></Main>,
    children: [
      {
        path: `/`,
        element: <Home></Home>,
      },
      {
        path: `/login`,
        element: <LogIn></LogIn>
      },
      {
        path: `/signup`,
        element: <SignUp></SignUp>
      },
      {
        path: `/blogs`,
        element: <Blogs></Blogs>
      },
    ],
  },
]);

export default Routes;
