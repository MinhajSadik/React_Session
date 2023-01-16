import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/proxy.jpg";
import { ThemeContext, UserContext } from "../../../contexts/contexts";
import headerModule from "./Header.module.css";

export default function Header() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  const { user: userInfo } = user;

  function swtichColor(color) {
    theme.setTheme(color);
  }

  function handleLogout() {
    sessionStorage.removeItem("user");
  }

  return (
    <nav className={headerModule.headerWrapper}>
      <div>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <ul>
        <li className={headerModule.navItem}>
          <Link to="/about">About</Link>
        </li>
        <li className={headerModule.navItem}>
          <Link to="/service">Services</Link>
        </li>
        <li className={headerModule.navItem}>
          <Link to="/blog">Blog</Link>
        </li>
        <Link to="/contact/sdaf">
          <li className={headerModule.navItem}>Contact</li>
        </Link>

        {userInfo?.token && (
          <li className={headerModule.navItem}>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        )}
      </ul>
      <div className={headerModule.navForm}>
        <input type="text" />
        {userInfo?.token ? (
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button type="button">Login</button>
        )}

        {/* {theme.theme === "light" ? (
          <button onClick={() => swtichColor("dark")} type="button">
            <BsFillMoonFill size={"24px"} />
          </button>
        ) : (
          <button onClick={() => swtichColor("light")}>
            <BsSunFill size={"24px"} />
          </button>
        )} */}
        <select name="" id="" onChange={(e) => swtichColor(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="red">Red</option>
        </select>

        <span>{userInfo?.result?.name}</span>

        <span className="bg-danger">User</span>
      </div>
    </nav>
  );
}
