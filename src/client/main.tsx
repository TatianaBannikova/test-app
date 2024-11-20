import { FC } from "react";
import { Link } from "react-router-dom";
import './main.css';
export const HomePage: FC = () => {
    return (
        <section className="home">
          <div className="home__container container">
            <h1 className="home__title">
              Место для получения медицинской помощи
            </h1>
            <div className="home__group">
              <button className="home__btn">Войти</button>
              <Link to="/contacts" className="home__link-contacts">
              Контакты
              </Link>
            </div>
            <ul className="home__list list-reset flex">
              <li className="home__item">
                <h4 className="home__item-title">Онлайн-прием</h4>
                <div className="home__item-decor"></div>
                <p className="home__item-text">Текст, текст текст</p>
                <Link to="/"></Link>
              </li>
              <li className="home__item">
                <h4 className="home__item-title">Экстренный Случай</h4>
                <div className="home__item-decor"></div>
                <p className="home__item-text">Текст, текст текст</p>
                <Link to="/"></Link>
              </li>
              <li className="home__item">
                <h4 className="home__item-title">Лечение рака</h4>
                <div className="home__item-decor"></div>
                <p className="home__item-text">Текст, текст текст</p>
                <Link to="/"></Link>
              </li>
            </ul>
          </div>
        </section>
    );
}
