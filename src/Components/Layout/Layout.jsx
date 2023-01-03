import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/contexts";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

export default function Layout({ children }) {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={
        theme.theme === "light"
          ? "lightTheme"
          : theme.theme === "red"
          ? "redTheme"
          : "darkTheme"
      }
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
