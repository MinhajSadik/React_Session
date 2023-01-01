import React, { useContext } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { SwitchThemeContext, UserContext } from "../../../App";
import Logo from "../../../assets/proxy.jpg";
import headerModule from "./Header.module.css";

export default function Header() {
  const user = useContext(UserContext);
  const theme = useContext(SwitchThemeContext);
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
        <a href="/">
          <img src={Logo} alt="" />
        </a>
      </div>
      <ul>
        <li className={headerModule.navItem}>
          <a href="/about">About</a>
        </li>
        <li className={headerModule.navItem}>
          <a href="/service">Services</a>
        </li>
        <li className={headerModule.navItem}>
          <a href="/blog">Blog</a>
        </li>
        <li className={headerModule.navItem}>Contact</li>

        {userInfo?.token && (
          <li className={headerModule.navItem}>
            <a href="/dashboard">Dashboard</a>
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

        {theme.theme === "light" ? (
          <button onClick={() => swtichColor("dark")} type="button">
            <BsFillMoonFill size={"24px"} />
          </button>
        ) : (
          <button onClick={() => swtichColor("light")}>
            <BsSunFill size={"24px"} />
          </button>
        )}

        <span>{userInfo?.result?.name}</span>
      </div>
    </nav>
  );
}
