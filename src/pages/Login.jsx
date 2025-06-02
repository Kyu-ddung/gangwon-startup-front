import React from 'react'
import "../styles/Login.css";
import { Link } from 'react-router-dom';
import Google from "../assets/images/google.png";
import Kakao from "../assets/images/kakao.png";
import Naver from "../assets/images/naver.png";

const Login = () => {
  return (
    <div className='Login_body'>
        <div className="background-animation">
        <div className="floating-shapes shape1"></div>
        <div className="floating-shapes shape2"></div>
        <div className="floating-shapes shape3"></div>
        </div>
        <div className='login_containor'>
            <Link to='/'>
            <div className='login_head'><strong>강원창업ON</strong>
            </div>
            </Link>
            <p className='head_sub'>창업, 저희 강원창업ON이 함께합니다.</p>
            
            <form>
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
            <p className='other'><span>또는</span></p>
            <div className='log_menu'>
  <button>
    <img src={Google} alt="Google" className='login_icon' />
    Google
  </button>
  <button>
    <img src={Kakao} alt="Kakao" className='login_icon' />
    Kakao
  </button>
  <button>
    <img src={Naver} alt="Naver" className='login_icon' />
    Naver
  </button>
</div>

        </div>
    </div>
  )
}

export default Login