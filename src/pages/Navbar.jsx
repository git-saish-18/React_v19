import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand ms-5" to={"/"}>
          ST
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <NavLink className="nav-link" to={"/"}>
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to={"/About"}>
                About
              </NavLink>
            </li>{" "}
            <li class="nav-item">
              <NavLink className="nav-link" to={"/user"}>
                User
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to={"/todo"}>
                Todo
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
