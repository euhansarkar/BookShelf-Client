import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layouts/DashBoardLayout";
import Main from "../../Layouts/Main";
import About from "../../Pages/About/About";
import Blogs from "../../Pages/Blogs/Blogs";
import AddProduct from "../../Pages/DashBoard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/DashBoard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/DashBoard/AllSellers/AllSellers";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import MyProducts from "../../Pages/DashBoard/MyProducts/MyProducts";
import Payment from "../../Pages/DashBoard/Payment/Payment";
import ReportedProducts from "../../Pages/DashBoard/ReportedProducts/ReportedProducts";
import WishLists from "../../Pages/DashBoard/WishList/WishLists";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import NotFound from "../../Pages/NotFound/NotFound";
import Products from "../../Pages/Products/Products";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import SellerRoutes from "../SellerRoutes/SellerRoutes";
import { Helmet } from "react-helmet";
import ShowDetails from "../../Pages/Products/ShowDetails/ShowDetails";
import Contact from "../../Pages/Home/Contact/Contact/Contact";
import Freatured from "../../Pages/Featured/Featured/Freatured";

const Routes = createBrowserRouter([
  {
    path: `/`,
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
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
        path: `/about`,
        element: <About></About>,
      },
      {
        path: `/contact`,
        element: <Contact />,
      },
      {
        path: `/featured`,
        element: <Freatured />,
      },
      {
        path: `/category/:id`,
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(
            `https://products-resale-server.vercel.app/category/${params.id}`
          ),
      },
      {
        path: `/products/:id`,
        element: <ShowDetails></ShowDetails>,
        loader: ({ params }) =>
          fetch(
            `https://products-resale-server.vercel.app/products/${params.id}`
          ),
      },
    ],
  },
  {
    path: `/dashboard`,
    element: (
      <PrivateRoutes>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        path: `/dashboard`,
        element: <MyOrders></MyOrders>,
      },
      {
        path: `/dashboard/allusers`,
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
      {
        path: `/dashboard/allbuyers`,
        element: (
          <AdminRoutes>
            <AllBuyers></AllBuyers>
          </AdminRoutes>
        ),
      },
      {
        path: `/dashboard/allsellers`,
        element: (
          <AdminRoutes>
            <AllSellers></AllSellers>
          </AdminRoutes>
        ),
      },
      {
        path: `/dashboard/reportedproducts`,
        element: (
          <AdminRoutes>
            <ReportedProducts></ReportedProducts>
          </AdminRoutes>
        ),
      },
      {
        path: `/dashboard/addaproduct`,
        element: (
          <SellerRoutes>
            <AddProduct></AddProduct>
          </SellerRoutes>
        ),
      },
      {
        path: `/dashboard/myproducts`,
        element: (
          <SellerRoutes>
            <MyProducts></MyProducts>
          </SellerRoutes>
        ),
      },
      {
        path: `/dashboard/payment/:id`,
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://products-resale-server.vercel.app/payorder/${params.id}`
          ),
      },
      {
        path: `/dashboard/wishlists`,
        element: <WishLists></WishLists>,
      },
    ],
  },
  {
    path: `/*`,
    element: <NotFound></NotFound>,
  },
]);

export default Routes;
