import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import NotFound from "../../Pages/NotFound/NotFound";
import Products from "../../Pages/Products/Products";
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
        element: <LogIn></LogIn>,
      },
      {
        path: `/signup`,
        element: <SignUp></SignUp>,
      },
      {
        path: `/blogs`,
        element: <Blogs></Blogs>,
      },
      {
        path: `/category/:id`,
        element: <Products></Products>,
        loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
      }
    ],
  },
  {
    path: `*`,
    element: <NotFound></NotFound>
  }
]);

export default Routes;
