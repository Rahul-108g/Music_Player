import { useState } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const [data, setData] = useState("Home");

  return (
    <>
      <div
        className="sd1 pl3  d-flex flex-column flex-shrink-0 p-3 text-dark bg-light"
        style={{ width: "270px", height: "100vh" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4 ">Liberary</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li
            className="nav-item"
            onClick={() => {
              setData("Home");
            }}
          >
            <Link
              to="/secmain"
              className={`nav-link text-dark kon mb-2 ${
                data === "Home" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              Home
            </Link>
          </li>
          <li
            onClick={() => {
              setData("About");
            }}
          >
            <Link
              to="/secmain/about"
              className={`nav-link text-dark kon mb-2 ${
                data === "About" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              About
            </Link>
          </li>
          <li
            onClick={() => {
              setData("Search");
            }}
          >
            <Link
              to="/secmain/search"
              className={`nav-link text-dark kon mb-2 ${
                data === "Search" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#table"></use>
              </svg>
              Search
            </Link>
          </li>
          <hr />
          <li>
            <a className="nav-link text-dark disabled fw-bold">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#grid"></use>
              </svg>
              My PlayList
            </a>
          </li>
          <hr />
          <li
            onClick={() => {
              setData("instrument");
            }}
          >
            <Link
              to="/secmain/instrument"
              className={`nav-link text-dark kon mb-2 ${
                data === "instrument" && "instrument"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#people-circle"></use>
              </svg>
              Instrument
            </Link>
          </li>
          <li
            onClick={() => {
              setData("electronic");
            }}
          >
            <Link
              to="/secmain/electronic"
              className={`nav-link text-dark kon mb-2 ${
                data === "electronic" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#people-circle"></use>
              </svg>
              Electronic
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidenav;
