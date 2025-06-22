import React from 'react';
import './comstyle/Footer.css';
import {  Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>강원창업ON</h2>
          <p>지역과 함께 성장하는 창업 플랫폼</p>
        </div>

        <div className="footer-links">
          <h4>바로가기</h4>
          <ul>
            <li><a href="/board">창업 아이템</a></li>
            <li><a href="/policy">지원 정책</a></li>
            <li><a href="/startupcase">성공 사례</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>문의하기</h4>
          <p><Phone size={16} /> 010-9249-6760</p>
          <p><Mail size={16} /> nokyuwan02@gmail.com</p>
          <div className="footer-socials">
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Gangwon Startup. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
