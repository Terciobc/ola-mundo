import { NavLink } from "react-router-dom";
import styles from "./MenuLink.module.css";

// O Link do react-router-dom previne o comportamento padrão da tag <a>,
// que é de recarregar a página.

export default function MenuLink({ children, to }) {
  return (
    <NavLink
      className={({ isActive }) => `
        ${styles.link}
        ${isActive ? styles.linkDestacado : ""}`}
      to={to}
    >
      {children}
    </NavLink>
  );
}
