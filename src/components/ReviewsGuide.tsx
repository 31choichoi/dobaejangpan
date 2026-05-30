import React, { useState } from "react";
import { Star, MessageSquare, Check, CheckCircle2, User, Calendar, MapPin, Sparkles, ThumbsUp, Layers, HelpCircle } from "lucide-react";

interface Review {
  id: number;
  name: string;
  location: string;
  spaceType: string;
  size: number;
  date: string;
  rating: number;
  wallpaperType: string;
  flooringType: string;
  price: string;
  title: string;
  before: string;
  after: string;
  content: string;
  engineer: string;
  managerReply: string;
  likes: number;
}

export default function ReviewsGuide() {
  const [filterType, setFilterType] = useState<string>("all");
  const [likedReviews, setLikedReviews] = useState<number[]>([]);

  const reviewsData: Review[] = [
    {
      id: 1,
      name: "정*윤 고객님",
      location: "서울시 마포구 신촌 그랑자이",
      spaceType: "아파트",
      size: 34,
      date: "2026-05-28",
      rating: 5,
      wallpaperType: "프리미엄 실크벽지 (전체 친환경 에코백)",
      flooringType: "LG자연애 2.2mm 친환경 장판",
      price: "1,450,000원",
      title: "잔기스 보양부터 마지막 잔여 먼지 정리까지 완벽했습니다!",
      before: "기존 실크벽지에 곰팡이가 피어 있고 벽면 부직포 가공이 무너져 축 처져 있는 상태",
      after: "벽면 샌딩 작업을 통해 평평하게 다듬고 에코백 밀착 틈새 초배공법으로 면을 반듯하게 편 후 신한 실크벽지 완성! 장판도 들뜸없이 깔끔히 부착되었습니다.",
      content: "아파트 첫 입주하면서 도배장판만 새로 바꿨는데, 가구 들어오기 전날 하루만에 정말 먼지 날림 하나 없이 반듯하게 마감해 주셨습니다. 마진 수수료가 빠져서 그런지 동네 인테리어 가게 견적보다 40만원 이상 아꼈어요. 직영 3팀장님께서 벽면 구석 몰딩 틈새 실리콘 처리까지 정교하게 발라주셔서 최고로 만족합니다.",
      engineer: "한국인 직영 책임 3팀장 박동찬",
      managerReply: "믿고 맡겨주셔서 감사드립니다, 고객님! 도배장판닷컴은 직영 시공팀 단독 배치를 준수하여 불필요한 알선료 없이 정직한 자재 가격으로만 시공합니다. 3년간 약속드린 무상 하자보증 서비스는 언제든 연락 주시면 30분 내로 처리해 올리겠습니다. 이 행복한 공간에서 늘 좋은 가득하시길 소망합니다!",
      likes: 24
    },
    {
      id: 2,
      name: "이*헌 고객님",
      location: "경기도 성남시 분당 무지개마을",
      spaceType: "아파트",
      size: 24,
      date: "2026-05-25",
      rating: 5,
      wallpaperType: "내추럴 광폭 합지벽지 (전체 실속형)",
      flooringType: "현대 L&C 1.8mm 실속 내추럴 우드",
      price: "980,000원",
      title: "전세 주는 집이라 가성비로 했는데 기대 대만족입니다.",
      before: "세입자가 퇴거하면서 거실 벽지에 낙서 자국이 가득하고, 장판 모서리 틈새가 벌려져 검게 오염된 상태",
      after: "낙서 자국 및 얼룩면을 완전 차단 전용 약품 처리 후, 친환경 광폭 합지와 1.8mm 실속 장판 공사로 아주 새집처럼 환해짐.",
      content: "임대용이라 너무 무리하지 않는 선에서 깔끔하게 정돈하고 싶었는데 상담실장님께서 한도 내에서 가장 가성비 훌륭한 브랜드 합지벽지와 현대 실속형 장판을 설계해주셨습니다. 가격도 100만원이 안 되는 가격인데 품질은 동네에서 하던 130만원짜리 실크 공정에 버금갈 정도로 정교합니다. 다음 달에 제 본가 안방 도배도 여기서 진행할 예정입니다.",
      engineer: "수도권 남부 책임 1팀장 최귀호",
      managerReply: "소중한 후기와 더불어 본가 도배 약속까지 감사드립니다! 임대용 시공이라 하더라도 유해 물질 방출이 기준치 미만인 한국 친환경 제조 규격 합지벽지만을 엄선하여 시공하기 때문에 들어오는 세입자분께서도 건강 걱정 없이 쾌적하게 거주하실 수 있습니다. 늘 합리적인 최고의 가치로 성답하겠습니다.",
      likes: 18
    },
    {
      id: 3,
      name: "박*우 고객님",
      location: "서울시 강남구 역삼 리치빌",
      spaceType: "오피스텔/원룸",
      size: 11,
      date: "2026-05-22",
      rating: 5,
      wallpaperType: "프리미엄 실크벽지 (천장+벽 전체)",
      flooringType: "프리미엄 상업용 데코타일 (사각 패턴)",
      price: "720,000원",
      title: "좁은 원룸 오피스텔인데 미술실처럼 감각적으로 변신했네요.",
      before: "어두컴컴하고 칙칙한 갈색 꽃무늬 실크 벽지와 군데군데 닳은 갈색 바닥재",
      after: "밝고 트렌디한 무드 화이트 실크 도배와 대리석 사각 타일 느낌의 그레이 고급 데코타일 시공으로 공간이 2배 넓어보이는 화이트 모던 인테리어 완성.",
      content: "저희 집이 11평 정도 작은 오피스텔인데, 바닥을 일반 장판 말고 요즘 유행하는 대리석 타일 느낌의 상업용 고급 데코타일로 가고 싶었어요. AI 스타일 진단을 먼저 받아보고 실크도배와 연계해서 진행헸는데, 좁은 방이 완전 강남 갤러리 샵처럼 모던하게 바뀌었습니다! 코너 절단면마다 씰링 틈새가 예술입니다.",
      engineer: "한국인 직영 책임 4팀장 임진성",
      managerReply: "안녕하세요, 박*우 고객님! 작은 원룸 공간일수록 걸레받이 마감선과 바닥 모서리 절개 선의 세밀함이 전체적인 퀄리티를 지배합니다. 직영 4팀장은 15년 경력의 모서리 절개 전속 실력을 자랑하는 베테랑입니다. 데코타일 접착 부위 관리 잘 어우러지시길 바라며 늘 만족을 드리겠습니다.",
      likes: 31
    },
    {
      id: 4,
      name: "최*서 고객님",
      location: "인천시 송도 더샵 퍼스트파크",
      spaceType: "아파트",
      size: 42,
      date: "2026-05-19",
      rating: 5,
      wallpaperType: "프리미엄 실크벽지 (친환경 부직포 가공)",
      flooringType: "동화자연마하 3.2mm 층간소음 프리미엄 장판",
      price: "1,980,000원",
      title: "대형 평수 42평 하루 시공이 가능할지 조마조마했는데 대만족입니다.",
      before: "확장형 리모델링 후 이음새 면의 골조 부분이 약간 노출되고 오래되어 우글거리는 상태",
      after: "현장에 베테랑 전담 인력 5명을 집중 배치하여 기본 조배(부직포 네바리)를 새로 정 위치 조율 후 실크 시공하고, 거실과 부엌에 3.2mm 스펙 장판을 정밀 용접 봉합하여 시공 완료.",
      content: "규모가 제법 있는 아파트고 이사 일정이 급해서 무조건 하루만에 끝내야 하는 빡빡한 공기였는데, 도배장판닷컴에서 직영 소속 경력자 5분을 풀배치해주셨습니다. 중간에 쉴 틈 없이 유기적으로 착착 분담해서 공사해주시는데 아주 믿음직스러웠고, 자재 선정도 직접 집으로 가져와주신 샘플 책자를 눈으로 보며 꼼꼼하게 골라 후회가 없습니다. 층간소음 전용 장판이라 집이 아주 조용하네요.",
      engineer: "직영 책임 5팀장 최원호",
      managerReply: "고객님의 이사 기간을 맞추기 위해 수도권 본부 직영팀을 기동 배치해 일정을 안전하게 끝마쳤습니다! 도배장판닷컴의 3.2mm 고밀도 압축 프리미엄 장판은 소형 발걸음 소음 유발 계수를 확연히 억제해 아카데미 소음 기준 테스트를 정식 통과한 최고급 라인입니다. 이웃 세대 간의 마찰 걱정 없이 행복한 이주 되십시오!",
      likes: 15
    }
  ];

  const handleLike = (id: number) => {
    if (likedReviews.includes(id)) {
      setLikedReviews(likedReviews.filter(item => item !== id));
    } else {
      setLikedReviews([...likedReviews, id]);
    }
  };

  const filteredReviews = filterType === "all" 
    ? reviewsData 
    : reviewsData.filter(r => {
        if (filterType === "apt") return r.spaceType === "아파트";
        if (filterType === "one") return r.spaceType === "오피스텔/원룸";
        if (filterType === "silk") return r.wallpaperType.includes("실크");
        if (filterType === "paper") return r.wallpaperType.includes("합지");
        return true;
      });

  return (
    <div className="py-12 sm:py-20 bg-slate-50 text-left font-sans" id="reviews-guide-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14" id="reviews-header-block">
          <div className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>100% 리얼 신뢰 시공 갤러리</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-sans font-black text-slate-900 tracking-tight leading-tight">
            도배장판닷컴 <span className="text-indigo-650">명품 시공 후기</span>
          </h1>
          <p className="mt-4 text-xs sm:text-base text-slate-500 font-sans leading-relaxed">
            중간 마진과 대리점 브로커 수수료를 완벽히 뺀 혁신 가격!<br/>
            실제 우리 동네 아파트, 오피스텔, 원룸 현장에서 진행된 100% 정직한 만족의 기록을 확인해보세요.
          </p>
        </div>

        {/* Aggregate Customer Feedback Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" id="reviews-stats-board">
          
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between items-center text-center">
            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">누적 평균 고객 만족도</h4>
            <div className="my-4">
              <span className="text-4xl sm:text-5xl font-black text-slate-900">4.9 / 5</span>
              <div className="flex justify-center gap-1 text-amber-400 mt-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
            </div>
            <p className="text-[11px] text-slate-500">2026년 5월 기준 최근 1년 자체 조사 결과</p>
          </div>

          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-sm flex flex-col justify-between text-left">
            <div>
              <div className="text-[10px] font-bold text-amber-305 uppercase tracking-wider mb-1.5">도배장판닷컴 약속</div>
              <h4 className="text-base font-black text-white leading-tight">알선수수료 0% 직영 정가 시공제</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mt-3">
              개인 직영 시공팀들이 하청 관계 없이 직접 책임을 다해 시공하므로, 무단 돌발 노무비나 불필요한 이음새 추가금을 절대로 유구하지 않습니다.
            </p>
            <div className="border-t border-slate-800 pt-3 mt-4 text-[10px] text-slate-400 flex justify-between">
              <span>투명 단가 가격 고안</span>
              <span className="text-emerald-400 font-bold">100% 한국인 노무진</span>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between text-left">
            <div>
              <span className="bg-indigo-50 text-indigo-700 text-[10px] font-extrabold px-2 py-0.5 rounded-md uppercase">WARRANTY</span>
              <h4 className="text-base font-black text-slate-900 mt-2">안심 무상 하자 보증 3년 보증서</h4>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mt-2.5">
              도배 후 미세 들뜸 현상이나 문 풀림 현상이 발견될 시, 접수 24시간 내에 관할 담당 지부 팀장님이 즉각 출동하여 책임 무상 무한 리사이클 무상 교정을 시행합니다.
            </p>
            <div className="border-t border-slate-100 pt-3 mt-4 text-[11px] text-slate-400 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>무상 에프터 보증 증서 정식 발급</span>
            </div>
          </div>

        </div>

        {/* Filter Navigation Menu */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" id="reviews-filters-container">
          {[
            { id: "all", label: "전체 시공 사례" },
            { id: "apt", label: "아파트" },
            { id: "one", label: "오피스텔 / 원룸" },
            { id: "silk", label: "실크벽지 후기" },
            { id: "paper", label: "합지벽지 후기" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilterType(btn.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                filterType === btn.id
                  ? "bg-indigo-600 text-white shadow-md scale-102"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Live Active Case Studies List */}
        <div className="space-y-10" id="reviews-items-stack">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((item) => {
              const isLiked = likedReviews.includes(item.id);
              return (
                <div key={item.id} className="bg-white rounded-3xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden text-left" id={`review-card-${item.id}`}>
                  
                  {/* Card Main Info Bar */}
                  <div className="bg-slate-900 text-white p-5 sm:px-8 flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-800">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-extrabold text-white text-sm sm:text-base">{item.name}</span>
                        <span className="bg-indigo-600 text-white text-[9px] px-2 py-0.5 rounded-sm font-bold uppercase tracking-wider">{item.spaceType} ({item.size}평)</span>
                        <div className="flex text-amber-400">
                          {[...Array(item.rating)].map((_, idx1) => (
                            <Star key={idx1} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-indigo-400" /> {item.location}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-amber-500" /> {item.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center sm:self-center gap-2">
                      <span className="text-[11px] text-slate-400">실공임 원가 견적:</span>
                      <strong className="text-amber-400 text-sm sm:text-base">{item.price}</strong>
                    </div>
                  </div>

                  {/* Body Contents */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mb-2 flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-indigo-500 shrink-0" />
                        "{item.title}"
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans whitespace-pre-line p-1 bg-slate-50/20">
                        {item.content}
                      </p>
                    </div>

                    {/* Before & After Analysis Box */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-red-50/50 p-4 rounded-2xl border border-red-100/50">
                        <span className="text-[10px] font-black text-red-600 bg-red-105 px-1.5 py-0.5 rounded-sm uppercase tracking-wider">🛠️ 시공 전 상태</span>
                        <p className="text-xs text-slate-700 leading-relaxed mt-2.5 font-medium">
                          {item.before}
                        </p>
                      </div>

                      <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/50">
                        <span className="text-[10px] font-black text-emerald-600 bg-emerald-105 px-1.5 py-0.5 rounded-sm uppercase tracking-wider">✨ 시공 완료 상태 (결과)</span>
                        <p className="text-xs text-slate-700 leading-relaxed mt-2.5 font-medium">
                          {item.after}
                        </p>
                      </div>
                    </div>

                    {/* Used materials details badges */}
                    <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-500 flex items-center mr-1">시공 자재 정보:</span>
                      <span className="bg-slate-100 text-slate-700 text-[11px] px-2.5 py-1 rounded-lg font-bold border border-slate-200">
                        {item.wallpaperType}
                      </span>
                      <span className="bg-slate-100 text-slate-700 text-[11px] px-2.5 py-1 rounded-lg font-bold border border-slate-200">
                        {item.flooringType}
                      </span>
                      <span className="bg-indigo-50 text-indigo-800 text-[11px] px-2.5 py-1 rounded-lg font-bold border border-indigo-100">
                        담당 배정: {item.engineer}
                      </span>
                    </div>

                    {/* Official Branch Manager Reply Block */}
                    <div className="bg-slate-900 text-slate-300 p-5 rounded-2xl border border-slate-800/80 mt-4 text-left">
                      <div className="flex items-center gap-2 mb-2 text-yellow-300">
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-black uppercase tracking-wider">[도배장판닷컴 대표 책임 팀장 안심 답글]</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-line font-medium">
                        {item.managerReply}
                      </p>
                    </div>

                    {/* Social Like and Support Interaction */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="text-[11px] text-slate-400">도움이 되었나요? 실제 고객님의 리얼 성실 자필 후기입니다.</span>
                      
                      <button
                        onClick={() => handleLike(item.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                          isLiked 
                            ? "bg-indigo-650 text-white shadow-xs" 
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? "fill-current" : ""}`} />
                        <span>추천 {item.likes + (isLiked ? 1 : 0)}</span>
                      </button>
                    </div>

                  </div>

                </div>
              );
            })
          ) : (
            <div className="bg-white p-12 text-center rounded-3xl border border-slate-200 text-slate-400 font-semibold" id="no-reviews-fallback">
              <HelpCircle className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              해당 분류군의 시공 사례가 준비 중입니다. 다른 필터 단추를 눌러주십시오.
            </div>
          )}
        </div>

        {/* Dynamic Consultation Link Banner */}
        <div className="mt-16 bg-amber-400 p-8 rounded-3xl border-2 border-amber-500 shadow-md text-slate-950 flex flex-col md:flex-row justify-between items-center gap-6" id="reviews-promo-bar">
          <div className="text-left space-y-1 max-w-2xl">
            <span className="bg-slate-950 text-white text-[10px] font-black tracking-wider px-2 py-0.5 rounded-sm uppercase inline-block">1시간 특급 무상 실측</span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">이 시공 후기 속 주인공 하우스처럼 바꾸고 싶으신가요?</h3>
            <p className="text-xs sm:text-sm font-bold text-slate-800 leading-normal">
              평수와 주소만 말씀 주시면, 저희가 직접 원단 샘플북 6종을 댁으로 가져가 무료 매칭 상담해 드립니다. 어떠한 출장 가산금도 부과되지 않습니다.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a 
              href="#section-contact-inquiries"
              className="bg-slate-950 hover:bg-slate-900 text-white text-xs sm:text-sm font-black px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all inline-block"
            >
              지금 리얼 무료 상담/견적 신청하기 &rarr;
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
