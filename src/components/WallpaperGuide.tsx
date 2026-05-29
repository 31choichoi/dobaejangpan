import React from "react";
import { Check, Info, FileText, Settings, Award } from "lucide-react";

export default function WallpaperGuide() {
  const comparisons = [
    {
      feature: "자재 기본 특성",
      silk: "종이 전면에 PVC 코팅막을 입혀 가공한 고급 벽지",
      paper: "100% 천연 펄프 종이 위에 수성 잉크로 무늬를 입힌 벽지"
    },
    {
      feature: "내구성 & 수명",
      silk: "오염 발생 시 물걸레질 가능, 긁힘에 강함 (수명 약 7~10년)",
      paper: "습기에 약하고 때 탈 시 청소 제한 (수명 약 3~5년)"
    },
    {
      feature: "시공 작업 방식",
      silk: "벽면에서 띄우는 이중 부직포 초배 공법 (이음새 맞댐 시공)",
      paper: "벽면에 바로 안착시키는 밀착 공법 (이음새 일정량 겹침 시공)"
    },
    {
      feature: "장점",
      silk: "벽면 엠보싱이나 굴곡 은폐력 우수, 미려하고 이음새가 은폐됨",
      paper: "가장 저렴한 가격, 자연 친환경적 성분으로 피부 저자극 환영"
    },
    {
      feature: "단점",
      silk: "시공 시 정밀 기술 요함, 비용이 합지 대비 상대적으로 높음",
      paper: "벽면 시멘트 등 요철이 비쳐 보일 수 있음, 시간이 지나며 탈색 가능"
    },
    {
      feature: "추천 추천 대상",
      silk: "실거주용 아파트, 신혼집 인테리어, 내구성이 엄격히 필요한 곳",
      paper: "원룸 전세/월세방 임대, 주기적인 패턴 변형 선호 가정, 실속 리폼"
    }
  ];

  return (
    <section className="bg-white py-12 sm:py-16 text-left" id="section-wallpaper-guide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Target Keywords */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-sans font-black text-slate-900 tracking-tight leading-normal">
            도배장판닷컴 가이드: 고급 <span className="text-indigo-600 font-sans">실크벽지</span> vs 친환경 <span className="text-indigo-600 font-sans">합지도배</span> 완벽 비교
          </h2>
          <p className="mt-4 text-xs sm:text-base text-slate-500 font-sans font-medium">
            인터넷 및 부동산 카페에서 화제가 되는 '실 실크 방 합지' 절약형 복합 구성부터 가성비 최고 아파트 단가까지 전문가가 성실히 답변해드립니다.
          </p>
        </div>

        {/* Comparison Table / Responsive Cards */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xs mb-10">
          <div className="p-4 sm:p-6 bg-slate-900 text-white flex justify-between items-center sm:grid sm:grid-cols-12 sm:gap-4 md:text-center font-bold">
            <div className="col-span-3 text-left">핵심 비교 항목</div>
            <div className="col-span-4.5 text-indigo-300">프리미엄 실크벽지 (PVC)</div>
            <div className="col-span-4.5 text-amber-300">내추럴 소형/광폭 합지벽지</div>
          </div>

          <div className="divide-y divide-slate-200">
            {comparisons.map((item, idx) => (
              <div key={idx} className="p-4 sm:p-6 sm:grid sm:grid-cols-12 sm:gap-4 text-slate-700 hover:bg-slate-100/50 transition-colors">
                <div className="col-span-3 font-bold text-slate-900 mb-2 sm:mb-0 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  {item.feature}
                </div>
                <div className="col-span-4.5 text-xs sm:text-sm bg-indigo-50/30 p-3 sm:p-0 rounded-lg sm:rounded-none mb-2 sm:mb-0 border border-indigo-100/40 sm:border-0">
                  <strong className="sm:hidden block text-indigo-700 text-[10px] mb-1 font-bold">실크벽지:</strong>
                  {item.silk}
                </div>
                <div className="col-span-4.5 text-xs sm:text-sm bg-amber-50/20 p-3 sm:p-0 rounded-lg sm:rounded-none border border-amber-100/30 sm:border-0">
                  <strong className="sm:hidden block text-amber-700 text-[10px] mb-1 font-bold">합지벽지:</strong>
                  {item.paper}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hot Tip Combinations (Highly searchable copy block) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/30 p-6 rounded-2xl border border-indigo-100 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">실속 복합형</span>
              <h3 className="text-lg font-extrabold text-slate-900">거실 실크 + 방 합지 시공</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                손님이 수시로 방문하고 눈에 먼저 띄는 거실 및 주방 구역은 이음새가 안 보여 세련된 실크 도배를 선택하고, 사적인 침실들은 가성비 높은 친환경 광폭 합지로 타협하여 전체 비용을 최대 30% 절감하는 똑똑한 매칭입니다.
              </p>
            </div>
            <div className="border-t border-indigo-200/50 pt-4 mt-4 flex items-center gap-1.5 text-xs font-semibold text-indigo-700">
              <Info className="w-3.5 h-3.5" />
              <span>단독 올실크 대비 합리적 추천</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100/20 p-6 rounded-2xl border border-amber-100/60 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">전세용 실속형</span>
              <h3 className="text-lg font-extrabold text-slate-900">전체 소형/광폭 광택 합지</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                다가구, 원룸 임대업자분들이나 전월세 단임 차용자분들에게 적합합니다. 자재 단가가 낮고 수성 친환경 성분 마감으로, 새 전세입자가 들어서기 직전 즉시 정비하여 눈이 편안한 리프레시를 저렴한 비용으로 달성할 수 있습니다.
              </p>
            </div>
            <div className="border-t border-amber-200/40 pt-4 mt-4 flex items-center gap-1.5 text-xs font-semibold text-amber-700">
              <Info className="w-3.5 h-3.5" />
              <span>최단 기간 저비용 최상 효과</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 p-6 rounded-2xl text-white flex flex-col justify-between shadow-md">
            <div className="space-y-3">
              <span className="bg-purple-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">하이엔드 웰빙</span>
              <h3 className="text-lg font-extrabold text-amber-300">천연 백토 에코 실크 도배</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                가까운 아이나 아토피가 심한 영유아가 거주하는 가정에 대단히 효과적인 친환경 백토 및 천연 피톤치드 오일 혼합 공정입니다. 습도 조절과 공기 청정 효과가 함유된 최고급 기능성 자재 전담 가공을 제공합니다.
              </p>
            </div>
            <div className="border-t border-slate-700 pt-4 mt-4 flex items-center gap-1.5 text-xs font-semibold text-amber-400">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>최고 등급 HB마크 자재 사용</span>
            </div>
          </div>

        </div>

        {/* Wall paper care guide Checklist */}
        <div className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-8">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5 text-indigo-600" />
            현장 작업 마스터의 조언: 도배 시공 직후 관리 상식
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="flex gap-2.5 items-start">
              <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span><strong>자연 마름 유치 권장:</strong> 도배 시공 후 약 3~4일 동안은 보일러를 세게 틀거나 창문을 활짝 문을 열어두지 말고, 실내 온도 18-22℃ 내에서 서서히 굳게 닫아 자연스럽게 말려야 팽팽하게 펴집니다. (인위적 마름은 터짐 원인!)</span>
            </div>
            <div className="flex gap-2.5 items-start">
              <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span><strong>초반 쭈글거림 안심:</strong> 도배한 당일은 풀과 수분을 무겁게 머금어 심하게 우는 기포가 발생하나, 평균 일주일 뒤 물기가 날아감에 따라 수평 드럼통처럼 매끄럽게 흡착되니 놀라지 마십시오.</span>
            </div>
            <div className="flex gap-2.5 items-start">
              <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span><strong>물걸레 활용 실크 장점:</strong> 실크는 생활 먼지나 지문이 묻었을 시 즉시 물을 꽉 짠 중성세제 타월로 가볍게 밀어서 새것과 유사하게 케어할 수 있습니다. 단, 이음새에 강력한 마찰은 피하십시오.</span>
            </div>
            <div className="flex gap-2.5 items-start">
              <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span><strong>기존 벽지 제거 필수:</strong> 벽지가 이미 여러 번 점착된 오래된 아파트라면 시공 전 전체 수지 철거를 권장합니다. 도배장판닷컴은 초배지 속까지 싹 제거하여 단차 현상을 방지합니다.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
