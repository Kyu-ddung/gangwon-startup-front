import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    // 유효성 검사
    if (!name || !email || !password || !passwordCheck) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("유효한 이메일 형식이 아닙니다.");
      return;
    }

    if (password.length < 8) {
      alert("비밀번호는 8자 이상이어야 합니다.");
      return;
    }

    if (password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (!agreeTerms) {
      alert("약관에 동의해야 가입할 수 있습니다.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8081/Gangwon/register.jsp", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name,
          email,
          password,
        }),
      });

      const result = await response.text();
      if (result.includes("success")) {
        alert("회원가입 성공!");
        window.location.href = "/login";
      } else {
        alert("회원가입 실패! 이메일 중복 또는 오류.");
      }
    } catch (error) {
      alert("서버 오류가 발생했습니다.");
      console.error(error);
    }
  };

  return (
    <div className='Register_body'>
      <div className="background-animation">
        <div className="floating-shapes shape1"></div>
        <div className="floating-shapes shape2"></div>
        <div className="floating-shapes shape3"></div>
      </div>

      <div className='register_containor'>
        <div className='register_head'>
          <strong>회원가입</strong>
        </div>
        <p className='head_sub'>창업 하기 위한 첫걸음</p>

        <form onSubmit={handleRegister}>
          <div className="form_group">
            <label className="form_name">이름</label>
            <input
              type='text'
              placeholder='실명을 입력하세요'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form_group">
            <label className="form_name">이메일</label>
            <input
              type='text'
              placeholder='이메일을 입력하세요'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form_group">
            <label className="form_name">비밀번호</label>
            <input
              type='password'
              placeholder='8자 이상 입력하세요'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form_group">
            <label className="form_name">비밀번호 확인</label>
            <input
              type='password'
              placeholder='비밀번호를 다시 입력하세요'
              value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
            />
          </div>

          <div className="checkbox_group">
            <input
              type='checkbox'
              id="terms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />
            <label htmlFor="terms">이용약관 및 개인정보 처리방침에 동의합니다</label>
          </div>

          <div className="checkbox_group">
            <input type='checkbox' id="marketing" />
            <label htmlFor="marketing">마케팅 정보 수신에 동의합니다 (선택)</label>
          </div>

          <button type='submit' className='register_btn'>회원가입</button>
          <Link to="/login" className='cancel_btn'>취소</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
