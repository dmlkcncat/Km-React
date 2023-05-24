import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <>
      <div
        className="d-flex flex-column min-vh-100"
      >
        <Navbar />
          <div
            className="flex-1"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <Outlet />
          </div>

        <Footer />
      </div>
    </>
  );
};
export default MainLayout;