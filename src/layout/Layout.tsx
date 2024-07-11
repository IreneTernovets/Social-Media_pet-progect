import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const Layout = () => {
  return (
    <div className="main-layout-wrapper">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
