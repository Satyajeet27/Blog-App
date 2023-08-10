import { NavLink } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="d-flex align-items-center ">
        <img
          src="/Images/blogIcon.png"
          className="image-fluid"
          alt="..."
          style={{ width: "3rem", height: "100%" }}
        />
        <h4 className="navbar-brand p-0 m-0 ms-2" style={{color:"#007bff"}}>Satya's Blog</h4>
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
            <li className="nav-item">
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
            </li>
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
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
