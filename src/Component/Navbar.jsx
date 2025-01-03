import Dropdown from "react-bootstrap/Dropdown";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { search, setLang } from "../Feature/UserSlice";

const Navbar = () => {
  const { lang } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  return (
    <>
      <nav className="nab bg-light d-flex flex-wrap justify-content-around align-items-center">
        {/* text */}
        <div className="nab3 nav-text text-center bg-light p-2 px-3 rounded">
          <a
            href=""
            style={{ width: "100%" }}
            className="text-decoration-none fw-5"
          >
            😎 Vusic
          </a>
        </div>
        {/* search */}
        <form className=" w-50">
          <div className="input-group">
            <span className="input-group-text">
              <FaSearch />
            </span>
            <input
              onChange={(e) => {
                dispatch(search(e.target.value));
              }}
              type="text"
              className="form-control text-center"
              placeholder="Search"
            />
          </div>
        </form>
        {/* drodown 1 */}
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            {lang}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <h1 className="dropdown-header">Select Your Language</h1>
            <hr className="dropdown-divider" />
            <div className="d-flex">
              <a
                className="dropdown-item car"
                onClick={() => {
                  dispatch(setLang("hindi"));
                }}
              >
                Hindi
              </a>
              <a
                className="dropdown-item car"
                onClick={() => {
                  dispatch(setLang("eng"));
                }}
              >
                English
              </a>
              <a
                className="dropdown-item car"
                onClick={() => {
                  dispatch(setLang("any"));
                }}
              >
                Any
              </a>
            </div>
          </Dropdown.Menu>
        </Dropdown>
        {/* dropdown2 */}
        <Dropdown>
          <Dropdown.Toggle
            style={{ backgroundColor: "#7080906e" }}
            className="text-white rounded-pill"
            id="dropdown-basic"
          >
            VS
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <li>
              <a className="dropdown-item text-center" href="#">
                <CgProfile style={{ fontSize: "25px", color: "red" }} /> Profile
              </a>
            </li>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </>
  );
};
export default Navbar;
