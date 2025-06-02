import React from 'react'
import "../styles/Register.css";
const Register = () => {
  return (
    <div className='Register_body'>
        <div className="background-animation">
        <div className="floating-shapes shape1"></div>
        <div className="floating-shapes shape2"></div>
        <div className="floating-shapes shape3"></div>
        </div>
        <div className='register_containor'>
            <div className='register_head'><strong>회원가입</strong></div>
            <p className='head_sub'>창업 하기 위한 첫걸음</p>
            <form>
                <div className="form_group">
                <label className="form_name">이름</label>
                <input type='text' placeholder='실명을 입력하세요'/>
                </div>
                <div className="form_group">
                <label className="form_name">이메일</label>
                <input type='text' placeholder='이메일을 입력하세요'/>
                </div>
                <div className="form_group">
                <label className="form_name">비밀번호</label>
                <input type='password' placeholder='8자 이상 입력하세요'/>
                </div>
                <div className="form_group">
                <label className="form_name">비밀번호 확인</label>
                <input type='password' placeholder='비밀번호를 다시 입력하세요'/>
                </div>
                <input type='checkbox'/>이용약관 및 개인정보 처리방침에 동의합니다<p/>
                <input type='checkbox'/>마케팅 정보 수신에 동의합니다. (선택) <p/>
                <button type='submit' className='register_btn'>회원가입</button>
            </form>
        </div>
    </div>
  )
}

export default Register