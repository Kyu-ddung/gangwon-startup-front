import React, { useState } from 'react';
import "../styles/Policy.css";
import Header from '../components/Header';
import {
  MapPin, Building2, Users, Calendar, Phone, ExternalLink,
  DollarSign, BookOpen, Award, Search, Filter, ChevronRight,
  Mountain, TreePine, Waves, Factory, Lightbulb, Globe
} from 'lucide-react';

const regions = [
  { id: 'all', name: '전체 지역' },
  { id: 'chuncheon', name: '춘천시' },
  { id: 'wonju', name: '원주시' },
  { id: 'gangneung', name: '강릉시' },
  { id: 'donghae', name: '동해시' },
  { id: 'taebaek', name: '태백시' },
  { id: 'sokcho', name: '속초시' },
  { id: 'samcheok', name: '삼척시' },
  { id: 'counties', name: '11개 군지역' }
];

const categories = [
  { id: 'all', name: '전체 분야', icon: Globe },
  { id: 'funding', name: '자금지원', icon: DollarSign },
  { id: 'education', name: '교육/인큐베이팅', icon: BookOpen },
  { id: 'space', name: '공간지원', icon: Building2 },
  { id: 'tech', name: '기술개발', icon: Lightbulb },
  { id: 'industry', name: '산업특화', icon: Factory },
  { id: 'tourism', name: '관광/문화', icon: Mountain },
  { id: 'agriculture', name: '농업/1차산업', icon: TreePine },
  { id: 'energy', name: '에너지', icon: Waves }
];

const supportPrograms = [
  {
    id: 1,
    title: '강원창조경제혁신센터 창업지원',
    organization: '강원창조경제혁신센터',
    region: ['chuncheon', 'all'],
    category: 'funding',
    amount: '최대 1억원',
    period: '12개월',
    target: '예비창업자, 초기창업기업',
    description: '강원도 대표 창업지원기관으로 예비창업자부터 스케일업까지 전 단계 지원',
    features: ['사업화자금 지원', '멘토링', '네트워킹', '사무공간 제공'],
    contact: '033-248-7900',
    website: 'ccei.creativekorea.or.kr/gangwon',
    status: '상시모집'
  },
  {
    id: 2,
    title: '강원대학교 창업혁신원',
    organization: 'KNU창업혁신원',
    region: ['chuncheon', 'all'],
    category: 'education',
    amount: '최대 5천만원',
    period: '6개월',
    target: '대학생, 청년창업자',
    description: '창업선도대학 사업으로 대학생 및 청년 창업지원 전문기관',
    features: ['창업교육', '사업화자금', '공간지원', '전문멘토링'],
    contact: '033-250-6371',
    website: 'ksef.kangwon.ac.kr',
    status: '2025년 3월 모집예정'
  }
];

const Policy = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPrograms = supportPrograms.filter(program => {
    const matchesRegion = selectedRegion === 'all' || program.region.includes(selectedRegion);
    const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory;
    const matchesSearch = searchTerm === '' ||
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRegion && matchesCategory && matchesSearch;
  });

  const getCategoryInfo = (categoryId) => {
    return categories.find(cat => cat.id === categoryId) || categories[0];
  };

  const getRegionName = (regionId) => {
    return regions.find(region => region.id === regionId)?.name || '전체';
  };

  return (
    <div className="policy_page">
        <Header/>
      <header className="policy_header">
        <h1> 강원도 창업지원정책</h1>
        <p>지역별 맞춤형 창업지원 정책을 한눈에 확인하세요</p>
      </header>

      <div className="policy_filters">
        <input
          type="text"
          placeholder="지원사업 검색..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="policy_search"
        />
        <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
          {regions.map(region => (
            <option key={region.id} value={region.id}>{region.name}</option>
          ))}
        </select>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>

      <div className="policy_category_buttons">
        {categories.map(category => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`policy_chip ${selectedCategory === category.id ? 'active' : ''}`}
            >
              <Icon className="chip_icon" />
              {category.name}
            </button>
          );
        })}
      </div>

      <div className="policy_results">
        <p>{filteredPrograms.length}개의 지원사업이 있습니다</p>
      </div>

      <div className="policy_cards">
        {filteredPrograms.map(program => {
          const categoryInfo = getCategoryInfo(program.category);
          const CategoryIcon = categoryInfo.icon;
          return (
            <div key={program.id} className="policy_card">
              <div className="card_header">
                <span className="card_tag">{categoryInfo.name}</span>
                <span className="card_status">{program.status}</span>
              </div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <div className="card_features">
                {program.features.map((feature, index) => (
                  <span key={index} className="feature">{feature}</span>
                ))}
              </div>
              <div className="card_details">
                <p>💰 {program.amount} / 🕒 {program.period}</p>
                <p>📌 대상: {program.target}</p>
                <p>🏢 {program.organization} | ☎ {program.contact}</p>
                {program.website && (
                  <a href={`https://${program.website}`} target="_blank" rel="noopener noreferrer" className="visit_btn">
                    <ExternalLink className="icon_inline" /> 웹사이트 방문
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredPrograms.length === 0 && (
        <div className="policy_empty">
          <p>🔍 검색 결과가 없습니다</p>
        </div>
      )}
    </div>
  );
};

export default Policy;
