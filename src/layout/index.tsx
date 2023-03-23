import { NavLink, Outlet } from "react-router-dom";

type LinkActive = { isActive: boolean; isPending: boolean };

const isActiveLink = ({ isActive }: LinkActive) =>
  `link ${isActive ? "active" : ""}`;

export const Layout = () => {
  return (
    <>
      <nav>
        <NavLink className={isActiveLink} to="/">Home</NavLink>
        <NavLink className={isActiveLink} to="/create">Create</NavLink>
      </nav>

      <hr />

      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
