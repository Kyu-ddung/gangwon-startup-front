import React, { useState } from "react";
import "../styles/StartupCase.css";
import { Flame,  MapPin, Star } from "lucide-react";
import Header from "../components/Header";
const startupCases = [
  {
    id: 1,
    title: "강릉 청년 베이커리",
    region: "강릉",
    story:
      "지역 밀가루로 만든 빵으로 강릉에서 큰 사랑을 받은 청년 창업 사례입니다.",
    stats: { revenue: "5억 원", employees: "8명" },
    achievements: ["강릉 대표 빵집 선정", "지자체 지원사업 수혜"],
    mapLink: "https://map.kakao.com/link/map/강릉 청년 베이커리,37.7520,128.8760",
    tags: ["식품", "지역특화", "청년"],
    category: "식품 창업",
  },
  {
    id: 2,
    title: "춘천 반려동물 용품",
    region: "춘천",
    story:
      "반려동물 증가에 맞춰 수제 용품을 제작, 온라인 판매로 성공한 케이스입니다.",
    stats: { revenue: "2억 원", employees: "3명" },
    achievements: ["2024 반려산업 공모전 대상", "지역 창업 육성 대상"],
    mapLink: "https://map.kakao.com/link/map/춘천 반려동물 용품,37.8813,127.7298",
    tags: ["반려동물", "온라인", "핸드메이드"],
    category: "생활용품",
  },
  {
    id: 3,
    title: "속초 감성 숙소 플랫폼",
    region: "속초",
    story:
      "청년들이 운영하는 소규모 숙소를 연결하는 감성 숙소 예약 플랫폼.",
    stats: { revenue: "3억 원", employees: "4명" },
    achievements: ["2023 속초 창업대전 입상", "앱 다운로드 3만 건"],
    mapLink: "https://map.kakao.com/link/map/속초 감성숙소,38.2044,128.5912",
    tags: ["숙박", "앱개발", "여행"],
    category: "IT 서비스",
  },
];

const filters = ["전체", "강릉", "춘천", "속초"];

const StartupCase = () => {
  const [selectedFilter, setSelectedFilter] = useState("전체");
  const [activeSlide, setActiveSlide] = useState(0);

  const filteredCases =
    selectedFilter === "전체"
      ? startupCases
      : startupCases.filter((c) => c.region === selectedFilter);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % filteredCases.length);
  };

  const handlePrev = () => {
    setActiveSlide(
      (prev) => (prev - 1 + filteredCases.length) % filteredCases.length
    );
  };

  return (
    <div className="startup-page">
      <Header/>
      <header className="startup-header">
        <h1>
          <Flame size={32} /> 강원도 대표 창업 사례
        </h1>
        <p>성공한 창업가들의 이야기를 만나보세요.</p>
        <div className="startup-stats">
          <div>
            <strong>250+</strong> 총 창업사례
          </div>
          <div>
            <strong>30개</strong> 분야
          </div>
          <div>
            <strong>10개</strong> 시군 지역
          </div>
        </div>
      </header>

      <section className="startup-featured">
        <h2>🔥 대표 성공 사례</h2>
        <div className="slide-wrapper">
          <button className="slide-arrow" onClick={handlePrev}>
            ◀
          </button>
          <div className="slide-viewport">
            {filteredCases.map((item, index) => (
              <div
                key={item.id}
                className={`slide ${index === activeSlide ? "active" : ""}`}
              >
                <div className="slide-card">
                  <div className="slide-header">
                    <h3>{item.title}</h3>
                    <div className="region">
                      <MapPin size={16} /> {item.region}
                    </div>
                  </div>
                  <p className="story">{item.story}</p>
                  <div className="slide-stats">
                    <div>
                      <div className="label">연 매출</div>
                      <div className="value">{item.stats.revenue}</div>
                    </div>
                    <div>
                      <div className="label">직원 수</div>
                      <div className="value">{item.stats.employees}</div>
                    </div>
                  </div>
                  <div className="slide-achievements">
                    <h4>주요 성과</h4>
                    <ul>
                      {item.achievements.map((ach, idx) => (
                        <li key={idx}>
                          <Star size={16} className="star-icon" />
                          {ach}
                        </li>
                      ))}
                    </ul>
                    {item.mapLink && (
                      <a
                        href={item.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="map-button"
                      >
                        📍 위치 보기
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="slide-arrow" onClick={handleNext}>
            ▶
          </button>
        </div>

        <div className="filter-buttons">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setSelectedFilter(filter);
                setActiveSlide(0);
              }}
              className={selectedFilter === filter ? "selected" : ""}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StartupCase;
