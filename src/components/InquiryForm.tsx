import React, { useState, useEffect } from "react";
import { Phone, CheckCircle, Clock, User, UserCheck, MessageSquare, ListCollapse } from "lucide-react";
import { Inquiry } from "../types.ts";

interface InquiryFormProps {
  inquiries: Inquiry[];
  onInquiryAdded: (inq: Inquiry) => void;
}

export default function InquiryForm({ inquiries, onInquiryAdded }: InquiryFormProps) {
  // Submit states
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [spaceType, setSpaceType] = useState<string>("아파트");
  const [size, setSize] = useState<number>(24);
  const [wallpaper, setWallpaper] = useState<string>("silk");
  const [flooring, setFlooring] = useState<string>("thick");
  const [message, setMessage] = useState<string>("");
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setFeedback({ type: 'error', text: '상담 요청을 위해 고객명을 입력해 주세요.' });
      return;
    }
    if (!phone.trim() || phone.length < 9) {
      setFeedback({ type: 'error', text: '연락 가능한 올바른 휴대폰 연락처를 입력해 주세요.' });
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          spaceType,
          size,
          wallpaper,
          flooring,
          message: message.trim() || "전체 도배 장판 평수 가격 단가 무료 실측 및 견적 문의드립니다."
        })
      });

      if (!response.ok) {
        throw new Error("서버 접수 실패");
      }

      const freshInquiry = await response.json();
      onInquiryAdded(freshInquiry);

      setFeedback({
        type: 'success',
        text: '🎉 실시간 간편 도배장판 상담 신청이 완료되었습니다! 30분 이내에 한국인 직영 베테랑 상담 실장이 전화를 가견적 지원드리겠습니다.'
      });

      // Clear values
      setName("");
      setPhone("");
      setMessage("");
    } catch (err: any) {
      setFeedback({ type: 'error', text: '상담 요청 등록 중 오류발생. 잠시 후 1588-0000 번으로 직통 전화해 주십시오.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-12 sm:py-16 text-left" id="section-contact-inquiries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title container */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14" id="section-contact-header">
          <span className="text-indigo-600 text-xs sm:text-sm font-extrabold tracking-widest uppercase">
            전국 직통 최저가 무료 소통 광장
          </span>
          <h2 className="text-2xl sm:text-4xl font-sans font-black text-slate-900 tracking-tight leading-normal">
            도배장판닷컴 <span className="text-indigo-600 font-sans">실시간 간편 상담 신청</span>
          </h2>
          <p className="mt-4 text-xs sm:text-base text-slate-500 font-sans font-medium">
            인라인 견적 외에 구조가 복잡하거나 즉시 빠른 출장 측정이 필요한 경우, 간략한 연락처와 평수를 남겨주시면 대표 기술 이사가 가장 합리적인 금액을 맞춤 설계해 전달 드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200">
            <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-1.5 border-b border-slate-200 pb-3">
              <Phone className="w-5 h-5 text-indigo-600" />
              1분 간편 빠른 무료 접수 대장
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                    고객명 (실명) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="예: 최진욱"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                    id="form-input-name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                    휴대폰 연락 연락처 *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="예: 010-1234-5678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                    id="form-input-phone"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-extrabold text-slate-500 mb-1">공간 선택</label>
                  <select
                    value={spaceType}
                    onChange={(e) => setSpaceType(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-bold focus:outline-hidden"
                    id="form-select-space"
                  >
                    <option>아파트</option>
                    <option>빌라/원룸</option>
                    <option>상가/사무실</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-500 mb-1">실 평수 대략</label>
                  <input
                    type="number"
                    min="5"
                    max="150"
                    value={size}
                    onChange={(e) => setSize(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-mono font-bold focus:outline-hidden"
                    id="form-input-size"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-500 mb-1">매칭 자재 구성</label>
                  <select
                    value={`${wallpaper}-${flooring}`}
                    onChange={(e) => {
                      const [wall, floor] = e.target.value.split("-");
                      setWallpaper(wall);
                      setFlooring(floor);
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-bold focus:outline-hidden"
                    id="form-select-materials"
                  >
                    <option value="silk-thick">실크도배 + 프리미엄장판</option>
                    <option value="silk-basic">실크도배 + 실속장판</option>
                    <option value="paper-basic">합지도배 + 실속장판</option>
                    <option value="silk-decotile">실크도배 + 데코타일</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                  문의 혹은 시공 희망일자 기재 (선택)
                </label>
                <textarea
                  placeholder="예: 6월 중순 입주 예정이며 기존 오래된 벽지 완벽 철거 후 깨끗하게 시공 희망합니다. 도배장판닷컴 믿고 연락 남깁니다!"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:outline-hidden resize-none"
                  id="form-textarea-msg"
                ></textarea>
              </div>

              {feedback && (
                <div className={`p-4 rounded-xl text-xs sm:text-sm font-semibold text-left ${
                  feedback.type === 'success' 
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-250' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {feedback.text}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg shadow-indigo-100 hover:shadow-indigo-200 transition-all flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm"
                id="form-btn-submit"
              >
                {isSubmitting ? (
                  <span>실시간 데이터베이스 전송 승인 중...</span>
                ) : (
                  <>
                    <span>무료 견적 + 안심 실측 전화 받기</span>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </>
                )}
              </button>

            </form>
          </div>

          {/* Social Proof Realtime CRM Feed */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col h-full justify-between">
            <div>
              <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-4">
                <h4 className="text-xs sm:text-sm font-black text-slate-900 tracking-tight flex items-center gap-1.5 uppercase">
                  <Clock className="w-4.5 h-4.5 text-indigo-500 animate-pulse" />
                  실시간 도배장판 접수 피드 (Social Proof)
                </h4>
                <span className="bg-emerald-100 text-emerald-800 text-[9px] font-black uppercase px-2 py-0.5 rounded-full tracking-wide">
                  LIVE ACTIVE
                </span>
              </div>

              <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1" id="crm-feed-list">
                {inquiries.length > 0 ? (
                  inquiries.map((inq) => (
                    <div 
                      key={inq.id} 
                      className="p-3 bg-slate-50 hover:bg-indigo-50/20 rounded-2xl border border-slate-100 transition-colors flex flex-col gap-1.5 text-[11px] sm:text-xs text-slate-600 text-left"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-extrabold text-slate-900 flex items-center gap-1">
                          <User className="w-3 h-3 text-slate-400" />
                          {inq.name.substring(0, 1) + " * " + (inq.name.length > 2 ? inq.name.substring(inq.name.length - 1) : "")} 고객님
                        </span>
                        
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-black ${
                          inq.status === "견적 대기" 
                            ? "bg-amber-100 text-amber-800" 
                            : inq.status === "전화상담완료" 
                            ? "bg-slate-200 text-slate-800" 
                            : "bg-emerald-100 text-emerald-800"
                        }`}>
                          {inq.status}
                        </span>
                      </div>

                      <div className="text-slate-500 grid grid-cols-2 gap-1 text-[10px]">
                        <span>공간: <strong className="text-slate-800 font-bold">{inq.spaceType} ({inq.size}평)</strong></span>
                        <span>자재: <strong className="text-slate-800 font-bold">{inq.wallpaper === "silk" ? "실크벽지" : "합지"} / {inq.flooring === "thick" ? "프리미엄장판" : inq.flooring === "decotile" ? "데코타일" : "실속장판"}</strong></span>
                      </div>

                      <p className="border-t border-slate-200/50 pt-1 text-[10px] text-slate-500 leading-normal truncate">
                        {inq.message}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-400 text-center py-10">상담 등록 내역이 아직 잡히지 않았습니다.</p>
                )}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
              🔒 도배장판닷컴 (dobaejangpan.com) 은 고객님의 소중한 유선번호를 유출하지 않고 완벽하게 암호화 관리하며 오직 전산 가견적 안내 통화 목적으로만 사용합니다.
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
