import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import API from "../services/API";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../reducer/features/auth/authAction";
const Navbar = () => {
  // const [user, setUser]= useState("")
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // console.log(token)
  const getUser = async () => {
    try {
      const { data } = await API.get("/auth/get-current-user");
      console.log(data);
      dispatch(currentUser(data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div className="container-fluid">
        <div className="d-flex align-items-center ">
          <img
            src="/Images/blogIcon.png"
            className="image-fluid"
            alt="..."
            style={{ width: "3rem", height: "100%" }}
          />
          <h4
            className="navbar-brand p-0 m-0 ms-2"
            style={{ color: "#007bff" }}
          >
            Satya's Blog
          </h4>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/myblogs">
                    MyBlogs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Add">
                    Add Articles
                  </NavLink>
                </li>
                <li className="nav-item">
                  <hr />
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link fw-bold text-light bg-info rounded"
                  >
                    {user ? user.userName : "User"}
                  </span>
                </li>
                <li className="nav-item">
                  <button className=" btn btn-danger bg-gradient ms-2" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
              </>
            )}
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/tech">
                Technology
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/food">
                Food
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/travel">
                Travel
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
