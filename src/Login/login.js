import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ useNavigate 추가
import "./Login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      alert("⚠️ 아이디와 비밀번호를 입력해주세요!");
      return;
    }
    alert("로그인 성공!");
    navigate("/"); // 
  };

  return (
    <div className="login-container">
      <h2>🔐 로그인</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
