import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../features";
import { useLogin } from "../../hooks";

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useLogin();

  const handleLogout = () => {
    if (confirm("¿Do you want to logout?")) {
      localStorage.clear();
      dispatch(logout());
      navigate("/auth/login");
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          {user?.name}'s Tasks list app
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                aria-current="page"
                to="/"
              >
                Task's list
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                aria-current="page"
                to="/tasks/create"
              >
                Create task
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <button
            type="button"
            className="btn btn-outline-light"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
