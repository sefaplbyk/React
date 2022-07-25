import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        {/* outlet layoutun içindeki nesnelerin nerede gösterileceğini belirler */}
        <Outlet></Outlet>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "red" : "pink" })}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              style={({ isActive }) => ({ color: isActive ? "red" : "pink" })}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="blog"
              style={({ isActive }) => ({ color: isActive ? "red" : "pink" })}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Layout;
