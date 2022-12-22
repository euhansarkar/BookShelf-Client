import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";
import useBuyer from "../hooks/useBuyer";
import Footer from "../Pages/Shared/Footer/Footer";
const DashBoardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-sky-800">
            {isAdmin && (
              <>
                <li>
                  <strong>
                    <Link to={`/dashboard/allusers`}>All Users</Link>
                  </strong>
                </li>
                <li>
                  <strong>
                    <Link to={`/dashboard/allbuyers`}>All Buyers</Link>
                  </strong>
                </li>
                <li>
                  <strong>
                    <Link to={`/dashboard/allsellers`}>All Sellers</Link>
                  </strong>
                </li>
                <li>
                  <strong>
                    <Link to={`/dashboard/reportedproducts`}>
                      Reported Products
                    </Link>
                  </strong>
                </li>
              </>
            )}
            {isSeller && (
              <>
                <strong>
                  <li>
                    <Link to={`/dashboard/myproducts`}>My Products</Link>
                  </li>
                </strong>
                <li>
                  <strong>
                    <Link to={`/dashboard/addaproduct`}>add a product</Link>
                  </strong>
                </li>
              </>
            )}

            {isBuyer && (
              <>
                <li>
                  <Link to={`/dashboard`}>my orders</Link>
                </li>
                <li>
                  <Link to={`/dashboard/wishlists`}>my wishlists</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashBoardLayout;
