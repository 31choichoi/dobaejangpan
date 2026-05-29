import React, { useState, useEffect } from "react";
import { 
  Building, 
  Sparkles, 
  Phone, 
  HelpCircle, 
  Hammer, 
  CheckCircle, 
  Check, 
  Info,
  Layers,
  Search,
  CheckCircle2,
  PhoneCall
} from "lucide-react";
import Navigation from "./components/Navigation.tsx";
import BrandingHero from "./components/BrandingHero.tsx";
import WallpaperGuide from "./components/WallpaperGuide.tsx";
import FlooringGuide from "./components/FlooringGuide.tsx";
import EstimateCalculator from "./components/EstimateCalculator.tsx";
import AiConsultant from "./components/AiConsultant.tsx";
import InquiryForm from "./components/InquiryForm.tsx";
import { Inquiry } from "./types.ts";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  // Smooth scroll helper when switching tab or navigation item
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Fetch inquiries on mount to hydrate the UI from our server.ts CRM database
  useEffect(() => {
    async function loadInquiries() {
      try {
        const res = await fetch("/api/inquiries");
        if (res.ok) {
          const data = await res.json();
          setInquiries(data);
        }
      } catch (err) {
        console.error("실시간 CRM 연락 데이터 로드에 실패했습니다:", err);
      }
    }
    loadInquiries();
  }, []);

  const handleInquiryAdded = (newInq: Inquiry) => {
    setInquiries((prev) => [newInq, ...prev]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans" id="dobaejangpan-master-container">
      
      {/* 1. Dynamic Header Navigation */}
      <Navigation activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* 2. Main content router */}
      <main className="flex-grow">
        {activeTab === "home" && (
          <div className="space-y-1 sm:space-y-1">
            
            {/* Branding Hero with integrated navigation CTAs */}
            <BrandingHero 
              onStartEstimate={() => handleTabChange("calculator")}
              onStartAiConsult={() => handleTabChange("ai-consult")}
            />

            {/* Keyword Hub Section for SEO Target Exposure (도배 & 장판) */}
            <section className="py-12 sm:py-16 bg-white text-left" id="section-home-highlights">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center mb-12">
                  <div className="lg:col-span-6 space-y-4">
                    <span className="text-xs font-bold text-indigo-600 block tracking-widest uppercase">
                      네이버 & 구글 최다 매칭 브랜드
                    </span>
                    <h2 className="text-2xl sm:text-3.5xl font-sans font-black text-slate-900 tracking-tight leading-snug">
                      왜 대다수의 고객님들이 <span className="text-indigo-600">도배장판닷컴</span>을 지목하셨을까요?
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      인터넷에서 도배와 장판 단가를 검색할 때 많은 소비자께서 불투명한 자재 수수료와 돌발 인건비 과소 책정으로 마음을 졸이십니다. <strong>도배장판닷컴 (dobaejangpan.com)</strong>은 대한민국 대표 최저가 직영 시공 연계 허브로서, 불필요한 마진과 브로커 수수료를 0%로 선언하고 모든 이익을 소비자님께 실용 복원으로 전해드립니다.
                    </p>
                  </div>

                  <div className="lg:col-span-6 mt-8 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold font-mono">01</div>
                        <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">도배 단가 정밀 사출</h4>
                        <p className="text-xs text-slate-500 leading-normal">
                          실크벽지(PVC 코팅막) 및 합지벽지 천장 부품의 손실 마진을 원가 수준으로 묶어 경제성 극대화.
                        </p>
                      </div>
                      <button 
                        onClick={() => handleTabChange("wallpaper")}
                        className="text-indigo-600 text-xs font-bold mt-4 flex items-center gap-1 hover:underline"
                      >
                        자세히 보기 &gt;
                      </button>
                    </div>

                    <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold font-mono">02</div>
                        <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">친환경 장판 최적 매칭</h4>
                        <p className="text-xs text-slate-500 leading-normal">
                          1.8mm 실속 타일 교체방부터 3.2mm 아파트 층간 소음 완충재까지 친환경 기준 적합 안전 설계.
                        </p>
                      </div>
                      <button 
                        onClick={() => handleTabChange("flooring")}
                        className="text-indigo-600 text-xs font-bold mt-4 flex items-center gap-1 hover:underline"
                      >
                        자세히 보기 &gt;
                      </button>
                    </div>

                  </div>
                </div>

                {/* Inline Quick Flow Banner */}
                <div className="bg-indigo-50 border border-indigo-200/50 p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-center sm:text-left">
                    <span className="bg-indigo-600 text-white text-[10px] font-black tracking-wider px-2 py-0.5 rounded-md uppercase">PROMOTION</span>
                    <h3 className="text-lg font-bold text-slate-900 mt-1.5">도배+장판 동시 시공 시 15% 일괄 인하 이벤트</h3>
                    <p className="text-xs text-slate-500 mt-0.5">인건비 중복 절감 혜택으로 더욱 똑똑하고 안전하게 입주 준비를 마치세요.</p>
                  </div>
                  <button
                    onClick={() => handleTabChange("calculator")}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all cursor-pointer inline-flex items-center gap-1"
                  >
                    <span>즉석 견적 시뮬레이션 가기</span>
                    <span>&rarr;</span>
                  </button>
                </div>

              </div>
            </section>

            {/* Static Portfolio Showcases */}
            <section className="py-12 sm:py-16 bg-slate-50 text-left border-t border-slate-200/50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block">실제 현장 포토리포트</span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">도배장판닷컴 하우스 체인지 갤러리</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "의왕 포일 트라이엄프 34평형",
                      desc: "실크 친환경 미인 화이트 벽지와 2.2mm 자연 우드 세라믹 장판",
                      result: "기포 들뜸 현상 없이 완벽 건조 마감. 안방 및 천장 구석 몰딩 틈새 실크 초배 공단 마감 적용."
                    },
                    {
                      title: "역삼 힐사이드 원룸 8평형 리폼",
                      desc: "소형 전세 가성비 합지도배와 1.8mm 실속 내추럴 매트 그레이",
                      result: "임대용 최고 효율 최단 반나절 공사 완수. 잔여 폐기 및 수거를 원스톱 당일 처리 지원 완료."
                    },
                    {
                      title: "수지 자이 2차 45평형 하이엔드",
                      desc: "에코 바이오 흙벽지 고급 도배와 4.5mm 층간소음 제로 매직 장판",
                      result: "거실 전체 무이음새 실크 대폭 가공 및 층간 소음 테스트 적합 인증 완료. 무상 2년 보증서 수여."
                    }
                  ].map((port, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="h-40 bg-slate-100 rounded-xl relative overflow-hidden flex items-center justify-center border border-slate-200">
                          <div className="absolute inset-0 bg-slate-950/5 flex items-center justify-center">
                            <span className="text-slate-400 text-xs font-semibold">시공 전속 데이터 보존</span>
                          </div>
                          <span className="absolute top-2 left-2 bg-indigo-600 text-white text-[9px] font-black px-2 py-0.5 rounded-md">책임 완수</span>
                        </div>
                        <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">{port.title}</h4>
                        <span className="block text-[11px] text-indigo-600 font-bold -mt-1">{port.desc}</span>
                        <p className="text-xs text-slate-500 leading-relaxed">{port.result}</p>
                      </div>
                      <div className="border-t border-slate-100 pt-3 mt-4 flex items-center justify-between text-[11px] text-slate-400">
                        <span>직영 배테랑 3팀장 배치</span>
                        <span>평점 5.0 만족</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>
        )}

        {activeTab === "wallpaper" && <WallpaperGuide />}
        {activeTab === "flooring" && <FlooringGuide />}
        
        {activeTab === "calculator" && (
          <EstimateCalculator onInquirySubmitted={handleInquiryAdded} />
        )}

        {activeTab === "ai-consult" && <AiConsultant />}
        
        {activeTab === "contact" && (
          <InquiryForm inquiries={inquiries} onInquiryAdded={handleInquiryAdded} />
        )}
      </main>

      {/* 3. Global Static Sticky 상담 Call banner at the very bottom edge for SEO conversion rate */}
      <div className="sticky bottom-0 z-40 bg-zinc-900/95 backdrop-blur-md text-white py-3.5 px-4 sm:px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="text-center sm:text-left">
            <span className="text-[10px] sm:text-xs text-amber-400 font-bold tracking-wider uppercase block">도배장판닷컴 (dobaejangpan.com) 전국 24시간 실시간 예약 대기</span>
            <span className="text-xs text-slate-300">지금 신청하면 <strong>인근 전담 지부장 출장 견적 & 샘플 배달 책자가 전액 무상!</strong></span>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
            <button 
              onClick={() => handleTabChange("calculator")}
              className="bg-indigo-600 hover:bg-indigo-700 font-sans font-extrabold text-xs px-4 py-2 rounded-lg cursor-pointer transition-colors"
            >
              실시간 자동 견적기
            </button>
            <button 
              onClick={() => handleTabChange("contact")}
              className="bg-emerald-600 hover:bg-emerald-700 font-sans font-extrabold text-xs px-4 py-2 rounded-lg cursor-pointer transition-colors flex items-center gap-1"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>간편 상담 요청</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4. Highly informational premium footer targeting Naver and Google search crawlers */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-12 sm:py-16 text-left border-t border-slate-800 font-sans" id="dobaejangpan-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Hammer className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg text-white font-sans tracking-tight">도배장판닷컴</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              도배장판닷컴은 평수별 정직하고 투명한 가격 단가 산출 시스템을 바탕으로 전국 아파트, 빌라, 오피스텔, 원룸, 상가용 프리미엄 책임시공을 약속합니다. 실크벽지 도배부터 친환경 고성능 건강 장판까지 완벽하게 밀착 접착하여 평생 편안한 보행의 즐거움을 전합니다.
            </p>
            <div className="text-[10px] text-indigo-400 font-mono">
              Official URL: <a href="https://dobaejangpan.com" className="hover:underline">dobaejangpan.com</a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">포털 인기 최다 검색 키워드 바인더</h4>
            <div className="flex flex-wrap gap-1.5 text-[10px]">
              {["도배", "장판", "도배비용", "장판가격", "실크벽지", "합지도배", "아파트도배", "원룸장판", "장판단가", "도배장판닷컴"].map((keyword, kIdx) => (
                <span 
                  key={kIdx} 
                  onClick={() => {
                    if (["도배", "실크벽지", "합지도배"].includes(keyword)) handleTabChange("wallpaper");
                    else if (["장판", "원룸장판", "장판단가"].includes(keyword)) handleTabChange("flooring");
                    else handleTabChange("calculator");
                  }}
                  className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded-sm hover:text-white cursor-pointer transition-colors border border-slate-700/50"
                >
                  #{keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">법적 한글 고지 정보 및 대표 문의처</h4>
            <div className="space-y-1.5 text-[11px] leading-relaxed">
              <p>상호명: 도배장판닷컴 직영 서비스 | 대표자: 최진욱 원장 | 도메인: <strong className="text-indigo-400">dobaejangpan.com</strong></p>
              <p>본사 주소: 서울특별시 강남구 테헤란로 152 7층 직영 시공 종합팀</p>
              <p>전국 통합 고객 지원부 유선 직통: <strong className="text-white">1588-0000</strong> (전 지역 가견정 무료 상담 가능)</p>
              <p>사업자등록 정보: 104-86-12480 | 통신판매신고번호: 제 2026-서울강남-1204호</p>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-800 text-[10px] text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; 2026 도배장판닷컴 All Rights Reserved. Designed for premium home modifications securely inside Korea.</p>
          <div className="flex gap-4">
            <a href="#section-contact-inquiries" onClick={() => handleTabChange("contact")} className="hover:underline">이용약관</a>
            <a href="#section-contact-inquiries" onClick={() => handleTabChange("contact")} className="hover:underline">개인정보처리방침</a>
            <a href="#section-contact-inquiries" onClick={() => handleTabChange("contact")} className="hover:underline text-indigo-400">무료 실측 실적</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
