/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from "react";
import { useAuth } from "./api/user";
import './authForm.css';
import { useNavigate } from "react-router";



export const AuthForm: FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  // const handleLogin = () => {
  //   const users: User [] = JSON.parse(localStorage.getItem('users') || '[]');
  //   const user = users.find(
  //     (u) => u.username === username && u.password === password
  //   );
  //   if (user) {
  //     login(user.username);
  //   } else {
  //     setError('Неверный логин или пароль');
  //   }
  // };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
    const response = await fetch('/users.json');
    if (!response.ok) {
      throw new Error('Ошибка загрузки данных пользователя');
    }
    const users = await response.json();
    const user = users.find(
      (u: {login: string; password: string}) => u.login === username && u.password === password
    );
    if (user) {
      login(user.name); // Сохраняем имя пользователя
      navigate('/user');
    } else {
      setError('Неверный логин или пароль');
    }
    } catch (error) {
      setError('Ошибка авторизации');
    }
  }
  return (
    <section className="modal">
      <div className="modal__container container">
        <form className="modal__form form">
          <h3 className="form__title">Авторизация</h3>
          <label htmlFor="login" className="form__label">
            {/* login */}
            <input type="text"
            placeholder="Логин"
            value={username}
            onChange={(e) => setUsername(e.target.value)}/>
          </label>
          <label htmlFor="password" className="form__label">
            {/* password */}
            <input type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          </label>
          {error && <p>{error}</p>}
          <button className="form__btn" onClick={handleSubmit}>Войти</button>
        </form>
      </div>
    </section>
  )
}
