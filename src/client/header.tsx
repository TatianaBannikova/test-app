import { FC } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "./api/user";
import "./header.css";

const Header: FC = () => {
  const {user, logout } =useAuth();
  return (
    <header className="header">
      <div className="header__container container flex">
        <Link to="/" className="header__link-logo">
          <img src={logo} alt="Лого" />
        </Link>
        <div>
          <Link to="/contacts" className="header__link-contacts">
            Контакты
          </Link>
          {user ? (
            <button onClick={logout} className="header__link-login">Выйти</button>
          ) : (
            <Link to="/login" className="header__link-login">Войти</Link>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
