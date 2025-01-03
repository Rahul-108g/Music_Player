import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

const Secondmain = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <Sidenav />

        <Outlet />
      </div>
    </>
  );
};
export default Secondmain;
