import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import coffee from "../assets/images/coffee.png";
import water from "../assets/images/water.png";
import interviewImage from "../assets/images/lee.png";
import Footer from '../components/Footer';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [userName, setUserName] = useState(null); // 사용자 이름 상태

  // 스크롤 효과
  const [showScrollTop, setShowScrollTop] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
    setShowScrollTop(window.scrollY > 300); // 300px 이상 스크롤 시 버튼 보이기
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  // 세션 정보 불러오기
  useEffect(() => {
    fetch("http://localhost:8081/Gangwon/sessionInfo.jsp", {
      method: "GET",
      credentials: "include",
    })
      .then(res => res.json())
      .then(data => {
        if (data.name) {
          setUserName(data.name);
        }
      })
      .catch(err => console.error("세션 로딩 실패", err));
  }, []);

  // 로그아웃 처리
  const handleLogout = async () => {
    await fetch("http://localhost:8081/Gangwon/Logout.jsp", {
      method: "GET",
      credentials: "include",
    });
    setUserName(null);
    window.location.href = "/";
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="overlay"></div>

        <header className={`mainpage-header ${scrolled ? 'mainpage-header--scrolled' : 'mainpage-header--transparent'}`}>
          <Link to="/" className="mainpage-header__name">강원창업ON</Link>
          <nav className="mainpage-header__menu">
            <ul className="mainpage-header__menu-list">
              <li><Link to="/board">지역별 창업 아이템</Link></li>
              <li><Link to="/policy">창업 지원 정책</Link></li>
              <li><Link to="/startupcase">창업사례</Link></li>
            </ul>
          </nav>
          <div className="mainpage-header__log">
            {userName ? (
              <>
                <span style={{ color: 'white', marginRight: '10px' }}>{userName}님</span>
                <button onClick={handleLogout} className="logout_btn">로그아웃</button>
              </>
            ) : (
              <Link to="/login">로그인</Link>
            )}
          </div>
        </header>

        <div className="hero-content">
          <h1>
            <span className="highlight">강원도</span>에서 시작하는 창업의 여정
          </h1>
          <p>지역 자원 기반 창업 기회, 지금 당신의 도전을 기다립니다.</p>
          <Link to="/policy" className="cta-button">정책 살펴보기</Link>
        </div>
      </section>

      <section className="policy-section">
        <h2>📌 강원도 창업 지원 정책</h2>
        <div className="card-grid">
          <div className="policy-card">
            <div className="policy-icon">🚀</div>
            <h3>G-스타트업 청년창업</h3>
            <p>예비~도약 창업자 대상, 최대 4,500만원 + 교육·멘토링·IR</p>
          </div>
          <div className="policy-card">
            <div className="policy-icon">💸</div>
            <h3>무이자 청년 창업자금</h3>
            <p>5천만원 한도, 5년간 이자 전액 지원 (청년 대상)</p>
          </div>
          <div className="policy-card">
            <div className="policy-icon">🏢</div>
            <h3>창업공간 지원</h3>
            <p>창업보육센터, 창업중심대학과 연계된 공간 인프라 제공</p>
          </div>
          <div className="policy-card">
            <div className="policy-icon">📖</div>
            <h3>IP 디딤돌 프로그램</h3>
            <p>아이디어 특허화, 지식재산 기반 창업 권리화 지원</p>
          </div>
          <div className="policy-card">
            <div className="policy-icon">📊</div>
            <h3>로컬벤처 육성</h3>
            <p>도내 벤처기업 대상 맞춤형 사업화 자금 지원</p>
          </div>
          <div className="policy-card">
            <div className="policy-icon">🧠</div>
            <h3>빅데이터·AI 스타트업</h3>
            <p>데이터 기반 기술창업 전략 컨설팅 및 마케팅 지원</p>
          </div>
        </div>
      </section>

      <section className="item-section">
        <h2>🌱 지역별 유망 창업 아이템</h2>
        <div className="card-grid">
          <div className="policy-card">
            <div className="policy-icon">⛰️</div>
            <h3>춘천</h3>
            <p>레저 스포츠, 수상 관광, 도시농업, 애견산업</p>
          </div>
          <div className="policy-card">
            <div className="policy-icon">🌊</div>
            <h3>강릉</h3>
            <p>커피 산업, 해양 레저, 문화 콘텐츠, 로컬푸드</p>
          </div>
          <div className="policy-card">
            <div className="policy-icon">🧬</div>
            <h3>원주</h3>
            <p>의료기기, 바이오헬스, IT 소프트웨어, 헬스케어</p>
          </div>
          <div className="policy-card">
            <div className="policy-icon">🐟</div>
            <h3>속초</h3>
            <p>수산 가공, 해양관광, 체험형 숙박, 지역특산물</p>
          </div>
          <div className="policy-card">
            <div className="policy-icon">🌾</div>
            <h3>홍천</h3>
            <p>농촌 체험, 전통 식품, 귀농귀촌 지원사업 연계</p>
          </div>
          <div className="policy-card">
            <div className="policy-icon">🏔️</div>
            <h3>정선</h3>
            <p>산악 관광, 미네랄 자원, 친환경 에너지 연계 창업</p>
          </div>
        </div>
      </section>

      <section className="case-section">
        <h2>🏆 성공 창업 사례</h2>
        <div className="news-grid">
          <article className="news-card">
            <img src={coffee} alt="강릉 커피 성공" className="news-thumb" />
            <div className="news-content">
              <h4>강릉 커피 거리의 성공 신화</h4>
              <p>강릉의 로컬 브랜드가 전국 프랜차이즈로 도약한 이야기</p>
              <Link to="https://www.joongang.co.kr/article/25106340">자세히 보기 →</Link>
            </div>
          </article>
          <article className="news-card">
            <img src={water} alt="수중 모빌리티 기반 ‘스노클링/수중 탐험’" className="news-thumb" />
            <div className="news-content">
              <h4>돌핀IT - 수중 모빌리티 기반 스노클링/수중 탐험</h4>
              <p>기술 기반 수중 레저라는 강원도 해양관광의 새로운 분야를 개척</p>
              <Link to ="https://www.fntoday.co.kr/news/articleView.html?idxno=308694">자세히 보기 →</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="testimonial-section">
        <h2>📰 지역 창업 관련 소식</h2>
        <div className="interview-container">
          <div className="interview-video">
            <img src={interviewImage} alt="창업자 인터뷰" className="interview-thumbnail" />
          </div>
          <div className="interview-summary">
            <h3>강원창조경제혁신센터 10주년 성과</h3>
            <p>
              이해정 대표는 지난 10년간 강원도에서 약 3천 개의 창업 기업을 지원했으며,<br />
              “강원도는 스타트업이 성장할 수 있는 실험장이며, 창업자 중심 생태계를 꾸준히 조성하고 있다”고 밝혔습니다.<br />
              예비창업자 5만여 명 교육, 2,800여 팀 사업화 지원 등 지역 기반 스타트업 생태계 조성에 기여하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="statistics-section">
        <h2>📊 지역 창업 통계</h2>
        <div className="card-container">
          <div className="info-card">🔹 춘천: 120개 스타트업</div>
          <div className="info-card">🔹 강릉: 95개 스타트업</div>
          <div className="info-card">🔹 원주: 130개 스타트업</div>
        </div>
      </section>

      <section className="cta-banner">
        <h2>🚀 지금 바로 도전해보세요!</h2>
        <p>창업 아이디어가 있다면 지금이 기회입니다.</p>
        <Link to="/startupcase" className="cta-button cta-large">창업 사례 보기</Link>
      </section>
{showScrollTop && (
  <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    ⬆ 맨 위로
  </button>
)}

      <Footer/>
    </div>
  );
};

export default Home;
