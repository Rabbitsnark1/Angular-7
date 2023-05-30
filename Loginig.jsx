import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "example@example.com" && password === "password123") {
        alert("Вошли!");
        navigate("/Posts");
    } else {
      alert("Ошибка");
    }
  };

  return (
    <div>
      <p>Авторизация</p>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          Введите вашу почту:
          <input
            type="email"
            placeholder="Введите почту"
            required
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label>
          Введите Ваш пароль:
          <input
            type="password"
            placeholder="Введите пароль"
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;