import React, { useEffect, useState } from 'react';
import './comstyle/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8081/Gangwon/sessionInfo.jsp", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("받은 세션 이름:", data.name); // 디버깅용
        if (data.name) setUserName(data.name);
      })
      .catch((err) => console.error("세션 요청 실패:", err));
  }, []);

  const handleLogout = async () => {
    await fetch("http://localhost:8081/Gangwon/Logout.jsp", {
      method: "GET",
      credentials: "include",
    });
    setUserName(null);
    window.location.href = "/";
  };

  return (
    <header className="header_box">
      <Link to="/" className="header_name">강원창업ON</Link>

      <nav className="header_menu">
        <ul className="menu_list">
          <li><Link to="/board">지역별 창업 아이템</Link></li>
          <li><Link to="/policy">창업 지원 정책</Link></li>
          <li><Link to="/startupcase">창업사례</Link></li>
        </ul>
      </nav>

      <div className="log">
        {userName ? (
          <>
            <span className="user_name">{userName}님</span>
            <button onClick={handleLogout} className="logout_btn">로그아웃</button>
          </>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
