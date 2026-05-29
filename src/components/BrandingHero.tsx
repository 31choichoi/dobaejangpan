import React from "react";
import { Sparkles, ArrowRight, ShieldCheck, Ruler, Users, Award, CornerDownRight } from "lucide-react";

interface BrandingHeroProps {
  onStartEstimate: () => void;
  onStartAiConsult: () => void;
}

export default function BrandingHero({ onStartEstimate, onStartAiConsult }: BrandingHeroProps) {
  return (
    <section className="bg-gradient-to-br from-indigo-50/70 via-white to-slate-105 py-12 sm:py-20 border-b border-indigo-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100/60 text-indigo-700 text-xs sm:text-sm font-semibold animate-pulse">
              <Sparkles className="w-4 h-4" />
              <span>네이버/구글 검색 1위 도배장판 전문점 도배장판닷컴</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl font-sans font-extrabold text-slate-900 tracking-tight leading-none sm:leading-tight">
                <span className="block text-indigo-600 font-sans font-black">도배</span>와 
                <span className="block text-indigo-700 font-sans font-black">장판</span>의 정답, 
                <span className="block text-slate-900 text-2xl sm:text-4xl mt-2 font-sans font-bold">도배장판닷컴에서 동시 해결</span>
              </h1>
              
              <p className="text-sm sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                아파트, 빌라, 원룸 어디든 평당 정확하고 투명한 가격 산출 시스템으로 바가지 없는 합리적인 견적을 약속드립니다. 프리미엄 실크벽지부터 광폭합지 도배, 소음과 충격을 흡수하는 두툼한 친환경 장판 공사까지 최고의 전문 직영팀이 함께합니다.
              </p>
            </div>

            {/* Core Service Cards (SEO rich grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
              <div className="flex gap-2 items-start bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                  <Ruler className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">투명한 평수별 단가제</h3>
                  <p className="text-xs text-slate-500 mt-0.5">자격증 소유자가 정밀 측정하여 자재 로스를 최소화한 거품 없는 단가 계산</p>
                </div>
              </div>

              <div className="flex gap-2 items-start bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">100% 한국인 직영팀</h3>
                  <p className="text-xs text-slate-500 mt-0.5">수십 년 경력의 배테랑 팀원들이 초배지부터 실크 이음새까지 꼼꼼히 책임시공</p>
                </div>
              </div>

              <div className="flex gap-2 items-start bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">하자 무상 A/S 2년</h3>
                  <p className="text-xs text-slate-500 mt-0.5">시공 직후 만에 하나 기포가 차거나 들뜸 현상 발생 시 즉각 책임 사후 피드백</p>
                </div>
              </div>

              <div className="flex gap-2 items-start bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">친환경 자재 사용 보증</h3>
                  <p className="text-xs text-slate-500 mt-0.5">포름알데히드 및 아토피 걱정이 없는 식물성 친환경 풀과 친환경 HB인증 장판 사용</p>
                </div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                id="hero-btn-calc" 
                onClick={onStartEstimate}
                className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all duration-250 text-sm sm:text-base cursor-pointer"
              >
                <span>실시간 즉시 견적 가기</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button 
                id="hero-btn-ai"
                onClick={onStartAiConsult}
                className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-xl hover:shadow-md transition-all duration-250 text-sm sm:text-base cursor-pointer"
              >
                <span>AI 공간 스타일링 추천받기</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>

          {/* Hero Right Visual Column - Premium Mockup Style */}
          <div className="mt-12 lg:mt-0 lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xl">
              
              {/* Wallpaper samples simulated visual */}
              <div className="overflow-hidden rounded-2xl bg-indigo-50/50 aspect-video mb-4 relative flex flex-col justify-end p-4 border border-indigo-100">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent z-10"></div>
                
                {/* Visual Simulation representation */}
                <div className="absolute inset-0 flex">
                  {/* Left part wallpaper silk texture simulation */}
                  <div className="w-1/2 bg-slate-50 border-r border-indigo-200 flex flex-col items-center justify-center relative p-2">
                    <div className="absolute right-1 top-1 bg-indigo-600 text-white text-[8px] font-bold px-1 rounded">실크 벽지</div>
                    <div className="w-12 h-12 rounded-full bg-indigo-100/70 border-2 border-indigo-300 border-dashed animate-spin flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[10px] font-black">실크</div>
                    </div>
                  </div>
                  {/* Right part wooden flooring linoleum texture simulation */}
                  <div className="w-1/2 bg-amber-50/20 flex flex-col items-center justify-center relative p-2">
                    <div className="absolute right-1 top-1 bg-amber-700 text-white text-[8px] font-bold px-1 rounded font-sans">친환경 장판</div>
                    <div className="w-full h-full flex flex-col justify-center items-center gap-1 opacity-70">
                      <div className="h-2 w-10/12 bg-amber-800/20 rounded"></div>
                      <div className="h-2 w-8/12 bg-amber-800/20 rounded"></div>
                      <div className="h-2 w-9/12 bg-amber-800/20 rounded"></div>
                    </div>
                  </div>
                </div>

                <div className="z-20 text-white text-left">
                  <span className="bg-amber-500 text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-md font-bold text-black">BEST MATCH STYLE</span>
                  <h4 className="text-sm sm:text-base font-bold mt-1">도배 [실크 화이트] + 장판 [2.2mm 오크 단풍]</h4>
                </div>
              </div>

              {/* Direct Info list representation */}
              <div className="space-y-3.5 text-left">
                <h4 className="text-slate-800 text-xs font-bold uppercase tracking-wider text-indigo-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 도배장판닷컴 핵심 직영 공정 안내
                </h4>
                
                <div className="space-y-2.5">
                  <div className="flex items-start text-xs text-slate-600 gap-1">
                    <CornerDownRight className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                    <span><strong>1단계 철거:</strong> 기존 벽지 들뜸 철거 및 오래된 노후 바닥장판 깔끔 수거(무상 지원)</span>
                  </div>
                  <div className="flex items-start text-xs text-slate-600 gap-1">
                    <CornerDownRight className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                    <span><strong>2단계 면 가공:</strong> 벽면 퍼티 작업 및 울퉁불퉁한 바닥 몰탈 샌딩 보정 작업 실시</span>
                  </div>
                  <div className="flex items-start text-xs text-slate-600 gap-1">
                    <CornerDownRight className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                    <span><strong>3단계 정밀 도배:</strong> 삼중초배공법 적용 후 들뜸 없는 고급 실크/합지 무이음새 접착</span>
                  </div>
                  <div className="flex items-start text-xs text-slate-605 gap-1">
                    <CornerDownRight className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                    <span><strong>4단계 건강 장판:</strong> 수평 확인 후 웰빙 전용 접착제를 활용해 흔들림 없는 밀착 마감</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl flex items-center justify-between border border-slate-100">
                  <div>
                    <span className="block text-[10px] text-slate-500 font-bold uppercase">누적 총공사 건수</span>
                    <span className="text-lg font-black font-mono text-indigo-600">12,480+ <span className="text-xs text-slate-600 font-normal">세대 완료</span></span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] text-slate-500 font-bold uppercase">사용자 평점</span>
                    <span className="text-lg font-black font-mono text-amber-500">4.92 / 5.0</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
  );
}
