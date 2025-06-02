import React from 'react'
import "./comstyle/Header.css";
import { Link } from 'react-router-dom';
const header = () => {
  return (
    <div>
        <div className='header_box'>
          <div className='header_name'>강원창업ON</div>
          <div className='header_menu'>
            <ul className='menu_list'>
              <li>지역별 창업 아이템</li>
              <li>창업 지원 정책</li>
              <li>게시판</li>
              <li>창업사례</li>
              
            </ul>
          </div>
          
          <div className='log'>
            <Link to="/Login">
              로그인
            </Link>
          </div>
        </div>
    </div>
  )
}

export default header