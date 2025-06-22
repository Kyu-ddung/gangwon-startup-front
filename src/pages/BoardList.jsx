import React, { useState, useEffect } from 'react';
import "../styles/BoardList.css";
import Header from "../components/Header";
import { Upload, FileText, Save, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BoardList = () => {
  const navigate = useNavigate();

  // ✅ 로그인 여부 확인
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8081/Gangwon/sessionInfo.jsp", {
      method: "GET",
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => {
        if (data && data.name) {
          setIsAuthenticated(true);
        } else {
          navigate("/login"); // 로그인 안 되어 있으면 이동
        }
      })
      .catch(() => navigate("/login"));
  }, [navigate]);

  const [formData, setFormData] = useState({
    region: '',
    title: '',
    description: '',
    category: '',
    targetMarket: '',
    budget: '',
    timeline: ''
  });

  const [images, setImages] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const regions = [
    '춘천시', '원주시', '강릉시', '동해시', '태백시', '속초시', '삼척시',
    '홍천군', '횡성군', '영월군', '평창군', '정선군', '철원군', '화천군',
    '양구군', '인제군', '고성군', '양양군'
  ];

  const categories = [
    'IT/테크', '교육', '헬스케어', '음식/외식', '리테일/커머스', '금융/핀테크',
    '여행/관광', '부동산', '농업/환경', '문화/엔터테인먼트', '기타'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = [...e.dataTransfer.files];
    handleFiles(files);
  };

  const handleFileSelect = (e) => {
    const files = [...e.target.files];
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    imageFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages(prev => [...prev, {
          id: Date.now() + Math.random(),
          file: file,
          preview: e.target.result,
          name: file.name
        }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (id) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const payload = {
      ...formData,
      images: images.map(img => img.name).join(',') 
    };

    try {
      const response = await fetch("http://localhost:8081/Gangwon/saveItem.jsp", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(payload),
        credentials: "include"
      });

      const result = await response.text();
      if (result.includes("success")) {
        alert("저장 성공!");
        navigate("/board");
      } else {
        alert("저장 실패!");
      }
    } catch (error) {
      console.error("서버 오류:", error);
      alert("서버 오류 발생");
    }

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        region: '', title: '', description: '', category: '',
        targetMarket: '', budget: '', timeline: ''
      });
      setImages([]);
    }, 2000);
  };

  const isFormValid = formData.title && formData.description && formData.region && formData.category;

  if (submitted) {
    return (
      <div className="submit-success">
        <div className="submit-card">
          <div className="submit-icon"><Save size={32} /></div>
          <h2>제출 완료!</h2>
          <p>창업 아이템이 성공적으로 등록되었습니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="form-wrapper">
        <div className="form-container">
          <div className="form-header">
            <h1><FileText size={28} /> 창업 아이템 등록</h1>
            <p>새로운 비즈니스 아이디어를 공유해보세요</p>
          </div>

          <form className="form-body" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div>
                <label>지역 *</label>
                <select name="region" className="form_city_option" value={formData.region} onChange={handleInputChange} required>
                  <option value="">지역 선택</option>
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
              <div>
                <label>카테고리 *</label>
                <select name="category" value={formData.category} onChange={handleInputChange} required>
                  <option value="">카테고리 선택</option>
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            <label>제목 *</label>
            <input name="title" type="text" value={formData.title} onChange={handleInputChange} required />

            <label>세부 내용 *</label>
            <textarea name="description" rows="6" value={formData.description} onChange={handleInputChange} required />

            <div className="form-grid-3">
              <input name="targetMarket" placeholder="타겟 시장" value={formData.targetMarket} onChange={handleInputChange} />
              <input name="budget" placeholder="예상 투자비용" value={formData.budget} onChange={handleInputChange} />
              <input name="timeline" placeholder="준비 기간" value={formData.timeline} onChange={handleInputChange} />
            </div>

            <div className={`dropzone ${dragActive ? 'active' : ''}`}
              onDragEnter={handleDrag} onDragLeave={handleDrag}
              onDragOver={handleDrag} onDrop={handleDrop}>
              <input type="file" accept="image/*" multiple onChange={handleFileSelect} />
              <Upload size={48} />
              <p>이미지를 드래그하거나 클릭하여 선택</p>
            </div>

            {images.length > 0 &&
              <div className="image-preview">
                {images.map(img => (
                  <div key={img.id} className="preview-wrapper">
                    <img src={img.preview} alt={img.name} />
                    <button type="button" onClick={() => removeImage(img.id)}><X size={16} /></button>
                    <span>{img.name}</span>
                  </div>
                ))}
              </div>}

            <button type="submit" disabled={!isFormValid} className={`submit-button ${!isFormValid ? 'disabled' : ''}`}>
              <Save size={20} /> 등록하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BoardList;
