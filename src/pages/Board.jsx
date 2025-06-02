import React from 'react'
import Header from "../components/Header";
import "../styles/Board.css";
const Board = () => {
  return (
    <div className='board_page'>
        <Header/>
        <div className='board_name'>창업 아이템</div>
        <div className='board_menu'>
            <select className='city_option'>
                <option>삼척</option>
                <option>철원</option>
                <option>정선</option>
                <option>양구</option>
                <option>춘천</option>
            </select>
            <button className='write_btn'>글쓰기</button>
        </div>
        <div className='board_containor'>
            <div className='board_card'>
                <div className='card_name'>철원 - 귀농 창업</div>
                <p className='card_sub'>친환경 농산물 수요 증가</p>
                <div className='comment'>댓글 0<span>👍 추천</span></div>
            </div>
             <div className='board_card'>
                <div className='card_name'>철원 - 귀농 창업</div>
                <p className='card_sub'>친환경 농산물 수요 증가</p>
                <div className='comment'>댓글 0<span>👍 추천</span></div>
            </div> <div className='board_card'>
                <div className='card_name'>철원 - 귀농 창업</div>
                <p className='card_sub'>친환경 농산물 수요 증가</p>
                <div className='comment'>댓글 0<span>👍 추천</span></div>
            </div>
             <div className='board_card'>
                <div className='card_name'>철원 - 귀농 창업</div>
                <p className='card_sub'>친환경 농산물 수요 증가</p>
                <div className='comment'>댓글 0<span>👍 추천</span></div>
            </div>
            
        </div>
    </div>
  )
}

export default Board