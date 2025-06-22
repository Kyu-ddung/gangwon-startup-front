import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import "../styles/Board.css";
import { Link } from 'react-router-dom';

const regions = [
  '춘천시', '원주시', '강릉시', '동해시', '태백시', '속초시', '삼척시',
  '홍천군', '횡성군', '영월군', '평창군', '정선군', '철원군', '화천군',
  '양구군', '인제군', '고성군', '양양군'
];

const Board = () => {
  const [cards, setCards] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    fetch("http://localhost:8081/Gangwon/getItems.jsp", {
      method: "GET",
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => setCards(data))
      .catch(err => console.error("불러오기 실패", err));
  }, []);

  // ✅ 지역 선택 변경 핸들러 추가
  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const filteredCards = selectedRegion
    ? cards.filter(card => card.region === selectedRegion)
    : cards;

  return (
    <div className='board_page'>
      <Header />
      <div className='board_name'>지역별 창업 아이템</div>

      <div className='board_menu'>
        <select className='board_city_option' onChange={handleRegionChange}>
          <option value="">전체 보기</option>
          {regions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>

        <Link to="/boardlist">
          <button className='write_btn'>글쓰기</button>
        </Link>
      </div>

      <div className='board_containor'>
        {filteredCards.length === 0 ? (
          <p style={{ width: '100%', textAlign: 'center', marginTop: '2rem' }}>
            해당 지역의 창업 아이템이 없습니다.
          </p>
        ) : (
          filteredCards.map((card, i) => (
            <div className='board_card' key={i}>
              <div className='card_header'>
                <span className='region_tag'>{card.region}</span>
                <span className='category_tag'>{card.category}</span>
              </div>
              <h3 className='card_title'>{card.title}</h3>
              <p className='card_desc'>{card.description}</p>
              <div className='card_meta'>
                <span>🎯 타겟: {card.targetMarket}<br /></span>
                <span>💰 예산: {card.budget}<br /></span>
                <span>⏱ 준비기간: {card.timeline}</span>
              </div>
              <div className='card_footer'>
                <span>💬 댓글 {card.comments || 0}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Board;
