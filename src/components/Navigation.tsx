import React from "react";
import { Hammer, PhoneCall, CheckCircle2 } from "lucide-react";

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const menuItems = [
    { id: "calculator", label: "도배장판견적" },
    { id: "wallpaper", label: "도배정보" },
    { id: "flooring", label: "장판정보" },
    { id: "reviews", label: "시공후기" },
    { id: "ai-consult", label: "AI 스타일" },
    { id: "home", label: "이용안내" },
    { id: "contact", label: "상담신청" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top micro banner for search keywords indexation */}
      <div style={{ display: "none" }} className="bg-slate-900 text-white text-[11px] py-1 px-4 text-center sm:flex sm:justify-between items-center text-xs font-mono">
        <div className="truncate">
          <span className="bg-red-500 text-white px-1.5 py-0.5 rounded-sm text-[10px] uppercase font-bold mr-2">SEO KEYWORD</span>
          #도배 #장판 #실크벽지 #장판단가 #아파트도배장판 추천 시공 1위 도배장판닷컴
        </div>
        <div className="hidden sm:flex items-center gap-4 text-slate-300">
          <span>도메인: <strong className="text-amber-400">dobaejangpan.com</strong></span>
          <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-400" /> 한국직영시공팀</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Brand */}
          <div 
            onClick={() => setActiveTab("home")} 
            className="flex items-center gap-2 cursor-pointer group"
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-md group-hover:bg-indigo-700 transition-colors">
              <Hammer className="w-5 h-5" />
            </div>
            <div>
              <span className="font-sans font-black text-xl tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                도배장판<span className="text-indigo-600">닷컴</span>
              </span>
              <span className="block text-[9px] text-slate-500 font-bold tracking-widest uppercase -mt-1 group-hover:text-indigo-500 transition-colors">
                dobaejangpan.com
              </span>
            </div>
          </div>

          {/* Navigation Links for Desk */}
          <nav className="hidden lg:flex items-center space-x-1.5" id="desktop-nav-menu">
            {menuItems.map((item) => {
              const isContactBtn = item.id === "contact";
              return (
                <button
                  key={item.id}
                  id={`btn-nav-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-base font-extrabold cursor-pointer transform transition-all duration-300 hover:scale-135 origin-center ${
                    isContactBtn
                      ? "bg-orange-500 hover:bg-orange-600 text-white font-black shadow-md px-5 py-2 border border-orange-600/30 ml-2 hover:shadow-lg"
                      : activeTab === item.id 
                        ? "text-indigo-600 bg-indigo-50/80" 
                        : "text-slate-700 bg-transparent hover:text-indigo-600 hover:bg-slate-100/90"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Quick Call Action Button */}
          <div className="flex items-center gap-2">
            <a 
              href="tel:1844-1814" 
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-3 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
              id="btn-quick-call"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">주문/상담</span> <span className="font-mono">1844-1814</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile navigation scroll area */}
      <div className="lg:hidden border-t border-slate-100 bg-slate-50/80 overflow-x-auto whitespace-nowrap scrollbar-none scroll-smooth">
        <div className="flex px-4 py-2 gap-2" id="mobile-nav-menu">
          {menuItems.map((item) => {
            const isContactBtn = item.id === "contact";
            return (
              <button
                key={item.id}
                id={`mob-nav-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-1.5 rounded-full text-[13px] sm:text-sm font-extrabold inline-block shrink-0 transform transition-all duration-200 cursor-pointer ${
                  isContactBtn
                    ? "bg-orange-500 hover:bg-orange-600 text-white font-black border border-orange-600/30 shadow-sm px-5 hover:scale-110 active:scale-95"
                    : activeTab === item.id 
                      ? "bg-indigo-600 text-white shadow-sm" 
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
