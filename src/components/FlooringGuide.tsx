import React from "react";
import { Check, Info, ShieldCheck, Home, Eye } from "lucide-react";

export default function FlooringGuide() {
  const flooringTypes = [
    {
      name: "1.8mm 실속 실용 장판",
      tag: "최고의 가성비",
      desc: "임대용 상가, 소형 원룸, 오피스텔 및 세입자 맞춤형 회전율 높은 최고 인기 바닥재",
      thickness: "1.8 mm",
      durability: "보통 (생활 스크래치 조심)",
      soundProof: "기본 흡음",
      priceLevel: "단가 최저 (실속 비용 절감형)",
      materials: "친환경 PVC 리놀륨 플로어링",
      pros: ["초저렴한 평당 시공가", "깔끔한 우드/오크 비주얼 즉시 연출", "교체 주기가 빠른 전월세 최적화"]
    },
    {
      name: "2.2mm ~ 3.2mm 프리미엄 장판",
      tag: "도배장판닷컴 대표 추천",
      desc: "내 집 마련 실거주 아파트 및 빌라 인테리어의 주역. 두툼한 쿠션감으로 피로 경감",
      thickness: "2.2 mm ~ 3.2 mm",
      durability: "우수 (중량 가구 배치 가능)",
      soundProof: "우수 (경량 층간소음 대폭 완화)",
      priceLevel: "중 합리적 (성능 대비 최상의 만족도)",
      materials: "고탄성 하이컴포트 친환경 장판 (CO2 저감)",
      pros: ["보행감이 폭신하여 무릎 관절 보호", "생활 소음 저감 및 긁힘 복원력 우수", "HB 최우수 친환경 친정부 공인 자재"]
    },
    {
      name: "4.5mm ~ 6.0mm 하이엔드 무소음 장판",
      tag: "명품 최고급형",
      desc: "지방자치단체 층간소음 복합 규격 충족. 아이들 뛰는 집 및 대형 반려견 거주 필수",
      thickness: "4.5 mm ~ 6.0 mm",
      durability: "최상 (찍힘 및 패임 자동 복원)",
      soundProof: "최상 (층간소음 차단 극대화)",
      priceLevel: "고급 프리미엄 (타일 공사 대비 뛰어난 경제성)",
      materials: "고충격 흡수 다층 구조 안전 특허 바닥재",
      pros: ["완벽에 가까운 소음 저감 성능", "아이들이 넘어져도 충격 흡수 안전 보증", "원목 마루 대비 썩지 않고 뒤틀림 없음"]
    }
  ];

  return (
    <section className="bg-slate-50 py-12 sm:py-16 text-left" id="section-flooring-guide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Target Keywords */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-indigo-600 text-xs sm:text-sm font-extrabold tracking-widest uppercase">
            친환경 안심 바닥재 초이스
          </span>
          <h2 className="text-2xl sm:text-4xl font-sans font-black text-slate-900 tracking-tight leading-normal mt-2">
            도배장판닷컴 가이드: 두께별 <span className="text-indigo-600 font-sans">장판시공</span> 특징 및 현명한 선택법
          </h2>
          <p className="mt-4 text-xs sm:text-base text-slate-500 font-sans font-medium">
            '장판단가' 및 '장판종류'에 따라 우리 집 예산에 맞는 고품격 시공 플랜을 제공합니다. 마루나 타일 대비 뒤틀림이 없고 열전도율이 우수하여 한국식 바닥 난방에 가장 추천됩니다.
          </p>
        </div>

        {/* Flooring Type Grid Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {flooringTypes.map((floor, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-3xl border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-lg ${
                index === 1 
                  ? "border-indigo-500 ring-2 ring-indigo-500/10 relative scale-100 lg:scale-[1.03] z-10" 
                  : "border-slate-200"
              }`}
            >
              {index === 1 && (
                <span className="absolute top-0 right-8 -translate-y-1/2 bg-indigo-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  BEST CHOICE
                </span>
              )}
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-indigo-600 tracking-wide block uppercase">
                    {floor.tag}
                  </span>
                  <span className="bg-slate-100 text-slate-800 text-[11px] font-mono px-2.5 py-0.5 rounded-md font-bold">
                    두께: {floor.thickness}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                  {floor.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {floor.desc}
                </p>

                <div className="border-t border-b border-slate-100 py-3.5 my-4 space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">내구성 기준</span>
                    <strong className="text-slate-800">{floor.durability}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">소음 방치율</span>
                    <strong className="text-slate-800">{floor.soundProof}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">예산 경제성</span>
                    <strong className="text-indigo-600 font-extrabold">{floor.priceLevel}</strong>
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <span className="block text-slate-800 font-extrabold text-xs uppercase tracking-wider mb-1">핵심 특색:</span>
                  {floor.pros.map((pro, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-normal">
                      <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>환경부 유해물질 불검출 검증 완료</span>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Grid for Flooring Care & Common Q&A */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 text-slate-700">
          <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
            <Info className="w-5 h-5 text-indigo-600" />
            자주 묻는 바닥재 시공 질문 (도배 및 장판 통합 가이드)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm leading-relaxed">
            <div className="space-y-2">
              <h4 className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <span className="text-indigo-600 font-mono font-black">Q.</span>
                도배장판 시공 시, 오래된 장판 위에 새 장판을 덧방해도 괜찮나요?
              </h4>
              <p className="text-slate-600">
                <strong>A.</strong> 기존 장판이 눌 지 않거나 곰팡이가 없다면 아주 얇은 덧방은 단열 효과를 내기도 합니다. 하지만 위생적이고 완벽한 수평 밀착 시공을 위해서는 도배장판닷컴팀의 <strong>무료 폐장판 즉각 수거 서비스</strong>를 통해 기존 장판을 깨끗이 탈거하고 바닥 샌딩 처리 후 새 장판을 올바르게 깔아 가공하는 것을 강력히 추천합니다.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <span className="text-indigo-600 font-mono font-black">Q.</span>
                장판과 데코타일의 마감 및 용도적 차이는 무엇인가요?
              </h4>
              <p className="text-slate-600">
                <strong>A.</strong> 장판(리놀륨 롤 바닥재)은 이음새가 거의 없이 한 장 또는 웰딩 작업으로 부착하므로 틈새에 먼지나 물기가 쉽게 스며들지 않아 주거용에 최적이며 부드러운 쿠션감이 장점입니다. 한편 데코타일은 단단한 사각 플라스틱 타일 조각을 퍼즐처럼 바닥용 본드로 고정하는 형태로 긁힘에 대단히 강해 사무실, 학원 등 유동인구가 많은 고사용 상가 공간에 최적입니다.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <span className="text-indigo-600 font-mono font-black">Q.</span>
                장판을 깐 뒤 가구 발자국이나 바퀴 패임이 생기면 어떻게 하나요?
              </h4>
              <p className="text-slate-600">
                <strong>A.</strong> 1.8mm 실속 실용 장판은 표면 복원 탄성이 얇기 때문에 패임 현상이 일정 부분 유지될 수 있습니다. 이를 방지하고 싶다면 가구 발 받침에 전용 완충 패드를 받치거나, 복원 고탄성 보강재가 엠보싱 처리된 <strong>도배장판닷컴의 2.2mm 이상 고기능성 프리미엄 장판 라인업</strong>을 시공하시는 것을 권장합니다.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <span className="text-indigo-600 font-mono font-black">Q.</span>
                도배장판 세트 계약 시 특별 할인 등 특전 혜택이 있습니까?
              </h4>
              <p className="text-slate-600">
                <strong>A.</strong> 예, 아주 강력한 동시 할인 시공 프로모션을 제공합니다! 도배와 장판을 다른 업체에 따로 맡길 경우 두 대의 별도 인건비팀과 일정 맞추기 등 스케줄 차질 및 책임 소지 불분명이 생깁니다. 도배장판닷컴에서 <strong>원스톱 일체형 도배+장판 패키지</strong>를 체결하시면 인건비 및 철거비 대폭 보전을 통해 총 견적의 최저 15-20% 세이브를 경험하실 수 있습니다.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
