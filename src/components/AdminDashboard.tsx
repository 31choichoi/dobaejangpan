import React, { useState } from "react";
import { Inquiry } from "../types.ts";
import { Shield, Eye, Download, Mail, RefreshCw, Layers, CheckCircle, Trash2 } from "lucide-react";

interface AdminDashboardProps {
  inquiries: Inquiry[];
  onUpdateStatus: (id: number, newStatus: string) => void;
  onDeleteInquiry: (id: number) => void;
  onRefresh: () => void;
  onClose: () => void;
}

export default function AdminDashboard({ 
  inquiries, 
  onUpdateStatus, 
  onDeleteInquiry, 
  onRefresh,
  onClose 
}: AdminDashboardProps) {
  const [passcode, setPasscode] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string>("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Use part of registration number "1204" as default demo passcode
    if (passcode === "1204" || passcode === "admin") {
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("올바른 관리자 패스코드를 입력해 주십시오. (기본 패스코드: 1204)");
    }
  };

  const exportToCSV = () => {
    try {
      const headers = ["ID", "이름", "연락처", "공간유형", "평수", "도배유형", "장판유형", "접수일자", "상태", "메시지"];
      const rows = inquiries.map(inq => [
        inq.id,
        inq.name,
        `"${inq.phone}"`,
        inq.spaceType,
        inq.size,
        inq.wallpaper,
        inq.flooring,
        inq.createdAt,
        inq.status,
        `"${inq.message.replace(/"/g, '""')}"`
      ]);

      const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `도배장판닷컴_접수현황_${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      alert("CSV 다운로드 처리 중 오류가 발생했습니다.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-xs p-4">
        <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-slate-200 shadow-2xl text-left">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-slate-900 leading-tight">전산 전송 및 접수 관리자 전산</h3>
              <p className="text-xs text-slate-400">도배장판닷컴 실시간 CRM 연동 모듈</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">관리자 엑세스 비밀번호</label>
              <input
                type="password"
                placeholder="비밀번호를 입력해주십시오. (초기값: 1204)"
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  setLoginError("");
                }}
                className="w-full px-3.5 py-2.5 text-sm font-bold bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 text-slate-950"
              />
              {loginError && <p className="text-red-600 text-[11px] font-bold mt-1.5">{loginError}</p>}
            </div>

            <div className="flex gap-2.5 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 rounded-xl font-bold text-xs sm:text-sm cursor-pointer"
              >
                닫기
              </button>
              <button
                type="submit"
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl font-bold text-xs sm:text-sm cursor-pointer"
              >
                관리자 인증하기
              </button>
            </div>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-100 text-[10px] text-slate-400 leading-normal">
            💡 <strong>도배장판닷컴 안내:</strong> 포털 사이트를 경유해 들어온 무료 견적 신청자들의 연락처와 인입 시기, 가산출 내역이 이 브라우저 전산 및 인메모리 세션에 실시간 암호화 저장되어 백엔드로 자동 동기화됩니다.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 backdrop-blur-xs p-2 sm:p-4">
      <div className="bg-white rounded-3xl max-w-5xl w-full h-[90vh] flex flex-col justify-between border border-slate-200 shadow-2xl overflow-hidden text-left animate-in fade-in-50">
        
        {/* Header Section */}
        <div className="bg-slate-900 text-white p-5 sm:px-8 flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight">도배장판닷컴 실시간 CRM 연동 전산</span>
                <span className="bg-emerald-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider">LIVE REALTIME</span>
              </div>
              <p className="text-xs text-slate-400">접수된 모든 무료 실시간 견적과 1분 빠른 무료 간편 신청자 현황대장</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onRefresh}
              className="p-2 sm:px-3 sm:py-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1.5 cursor-pointer font-bold"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">전산 새로고침</span>
            </button>
            <button
              onClick={exportToCSV}
              className="p-2 sm:px-3 sm:py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-all text-xs flex items-center gap-1.5 cursor-pointer font-bold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>엑셀 다운로드 (CSV)</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 px-3 text-xs bg-slate-750 hover:bg-slate-700 text-white rounded-lg cursor-pointer font-bold"
            >
              닫기
            </button>
          </div>
        </div>

        {/* Content Section Split */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50">
          
          {/* Left Table / Data List */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="p-4 bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-700">
                실시간 접수 목록 ({inquiries.length}건)
              </div>
              
              <div className="divide-y divide-slate-100 max-h-[55vh] overflow-y-auto">
                {inquiries.length > 0 ? (
                  inquiries.map((inq) => (
                    <div key={inq.id} className="p-4 hover:bg-slate-50/50 transition-colors text-xs text-slate-600 flex flex-col md:flex-row md:items-center justify-between gap-3 text-left">
                      <div className="space-y-1 md:max-w-md">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-slate-900 text-sm">{inq.name}</span>
                          <span className="font-mono bg-indigo-50 text-indigo-800 px-1.5 py-0.5 rounded-sm text-[10px] font-bold">{inq.phone}</span>
                          <span className="text-[10px] text-slate-400">{new Date(inq.createdAt).toLocaleString("ko-KR")}</span>
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium">
                          시공공간: <strong className="text-slate-700">{inq.spaceType} ({inq.size}평)</strong> | 
                          벽지: <strong className="text-slate-700">{inq.wallpaper === 'silk' ? '실크벽지' : '합지'}</strong> | 
                          장판: <strong className="text-slate-700">{inq.flooring === 'thick' ? '프리미엄 장판' : inq.flooring === 'decotile' ? '데코타일' : '실속장판'}</strong>
                        </div>
                        <p className="text-[11px] bg-slate-50 p-2 rounded-lg border border-slate-100 font-medium text-slate-600">
                          {inq.message}
                        </p>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center gap-2 self-end md:self-center">
                        <select
                          value={inq.status}
                          onChange={(e) => onUpdateStatus(inq.id, e.target.value)}
                          className={`px-2 py-1 rounded-md text-[11px] font-bold border focus:outline-hidden ${
                            inq.status === '견적 대기' 
                              ? 'bg-amber-50 text-amber-800 border-amber-300' 
                              : inq.status === '전화상담완료' 
                              ? 'bg-slate-100 text-slate-700 border-slate-300' 
                              : 'bg-emerald-50 text-emerald-800 border-emerald-300'
                          }`}
                        >
                          <option value="견적 대기">견적 대기</option>
                          <option value="전화상담완료">전화상담완료</option>
                          <option value="시공 대기 / 완료">시공 예약/완료</option>
                        </select>

                        <button
                          onClick={() => {
                            if (confirm("정말 이 전산 정보를 삭제하시겠습니까? (로컬 브라우저 상태에서도 영구 제거)")) {
                              onDeleteInquiry(inq.id);
                            }
                          }}
                          className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                          title="삭제"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-12 text-center text-slate-400 font-semibold">
                    접수된 내역이 존재하지 않습니다.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Instruction Panel */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="bg-slate-900 text-slate-300 rounded-2xl p-5 border border-slate-800 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <h4 className="font-extrabold text-sm text-yellow-400 flex items-center gap-1.5 uppercase">
                  <Mail className="w-4.5 h-4.5" />
                  📬 접수내용 아웃바운드 알림 연동법
                </h4>
                
                <div className="space-y-3.5 text-xs">
                  <div>
                    <h5 className="font-bold text-white mb-1">1. 대표 이메일 실시간 알람 설정 (Nodemailer)</h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      사용자가 접수할 때마다 지정한 메일(Gmail, 네이버 등)로 상세정보를 보내는 가장 표준적인 기법입니다. <br/>
                      <code className="text-[10px] bg-slate-850 px-1 py-0.5 text-indigo-300 font-mono">server.ts</code>에 <code className="text-[10px] bg-slate-850 px-1 py-0.5 text-indigo-300 font-mono">nodemailer</code> 패키지를 연동하여 간편하게 완료할 수 있습니다.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-white mb-1">2. 구글 스프레드시트 or 카카오 알림톡 (Webhook)</h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      <strong>Make.com</strong>, <strong>Zapier</strong> 같은 타사 자동화 툴이나, <strong>솔라피(Solapi)</strong>를 사용해 접수 즉시 휴대폰으로 카카오톡 전산 카드가 오도록 Webhook trigger 주소로 중계 데이터 패킷을 전달할 수도 있습니다.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-white mb-1">3. 영구 저장 데이타베이스 (Firebase Firestore)</h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      서버를 유지하지 않고도 언제 어디서나 안전하게 누적시키려면, 이 플랫폼과 완전 연계되는 <strong>Firestore</strong>를 클릭 한 번으로 구축하여 무제한 백업이 보장됩니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-4 mt-4 text-[11px] text-slate-500 leading-normal">
                🔒 본 관리자 대장은 임시 저장 전산 시스템으로, 사용자 브라우저 캐시 및 인메모리 세션을 결합 공유하는 하이브리드 CRM 대장 역할을 겸하고 있습니다.
              </div>
            </div>
          </div>

        </div>

        {/* Footer Area */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 text-center text-slate-400 text-[11px]">
          도배장판닷컴 (dobaejangpan.com) 직영 CRM 전산 시스템 &copy; 2026 책임 전산 완료본
        </div>

      </div>
    </div>
  );
}
