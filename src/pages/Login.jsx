// src/pages/Login.jsx
import React from 'react';
import "../styles/Login.css";
import { Link } from 'react-router-dom';
import { login } from "../apis/auth"; // 로그인 API 함수

const handleLogin = async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const result = await login(email, password);
  if (result.includes("success")) {
    alert("로그인 성공!");
    window.location.href = "/";
  } else {
    alert("로그인 실패!");
  }
};

const Login = () => {
  return (
    <div className='Login_body'>
      <div className="background-animation">
        <div className="floating-shapes shape1"></div>
        <div className="floating-shapes shape2"></div>
        <div className="floating-shapes shape3"></div>
      </div>
      <div className='login_containor'>
        <div className='login_head'>
          <Link to='/'><strong>강원창업ON</strong></Link>
        </div>

        <p className='head_sub'>창업, 저희 강원창업ON이 함께합니다.</p>

        <form onSubmit={handleLogin}>
          <div className="form_group">
            <label htmlFor="email" className="form_name">이메일</label>
            <input type="text" id="email" name="email" placeholder="이메일을 입력하세요." />
          </div>

          <div className="form_group">
            <label htmlFor="password" className="form_name">비밀번호</label>
            <input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요." />
          </div>

          <Link to="/register">
            <div className='pwlost'>아직 아이디가 없으신가요?</div>
          </Link>

          <div>
            <button className='log_btn' type='submit'>로그인</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
