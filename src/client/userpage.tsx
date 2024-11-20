import { FC } from "react";
import { useAuth } from "./api/user";
import { Link } from "react-router-dom";
import './userpage.css';


export const UserPage: FC = () => {
  const { user, logout } = useAuth();
  return (
    <section className="page">
      <div className="page__container container">
        <h2 className="page__title">Привет, {user?.username}</h2>
        <div className="page__group flex">
          <button onClick={logout} className="page__logout">Выйти из аккаунта</button>
          <Link to="/contacts" className="page__contacts">Перейти в контакты</Link>
        </div>
      </div>
    </section>
  );
}
