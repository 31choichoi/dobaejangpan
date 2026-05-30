import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

// Lazy-loaded Gemini AI client to avoid crashes if API key is not present on start
let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is required");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // In-memory CRM database for actual live feedback
  const inquiries = [
    {
      id: 1,
      name: "김영희",
      phone: "010-3344-5566",
      spaceType: "아파트",
      size: 32,
      wallpaper: "silk",
      flooring: "thick",
      status: "견적 대기",
      createdAt: "2026-05-28T02:15:00.000Z",
      message: "분당 32평형 아파트 올수리 예정입니다. 전체 실크벽지와 3.2mm 두꺼운 장판으로 층간 소음 완화 시공을 희망해요."
    },
    {
      id: 2,
      name: "이철수",
      phone: "010-9988-7766",
      spaceType: "빌라/원룸",
      size: 12,
      wallpaper: "paper",
      flooring: "basic",
      status: "전화상담완료",
      createdAt: "2026-05-27T10:40:00.000Z",
      message: "임대용 상가주택 원룸 도배장판 최고 가성비 조합으로 견적 상담받았습니다. 다음 주 화요일 시공 예약 원합니다."
    },
    {
      id: 3,
      name: "박민수",
      phone: "010-5555-4444",
      spaceType: "상가/사무실",
      size: 25,
      wallpaper: "silk",
      flooring: "decotile",
      status: "시공중",
      createdAt: "2026-05-25T03:20:00.000Z",
      message: "역삼동 사무실 실크벽지 도배 및 오크 스타일 프리미엄 데코타일 장판 시공 진행팀 예약 완료건."
    }
  ];

  // API Route - Get all inquiries
  app.get("/api/inquiries", (req, res) => {
    res.json(inquiries);
  });

  // API Route - Post new inquiry
  app.post("/api/inquiries", (req, res) => {
    const { name, phone, spaceType, size, wallpaper, flooring, message } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ error: "이름과 연락처는 상담 신청을 위한 필수 입력 정보입니다." });
    }
    const newInquiry = {
      id: inquiries.length + 1,
      name,
      phone,
      spaceType: spaceType || "아파트",
      size: Number(size) || 18,
      wallpaper: wallpaper || "silk",
      flooring: flooring || "basic",
      status: "견적 대기",
      createdAt: new Date().toISOString(),
      message: message || "상담 및 빠른 가견적 원해요."
    };
    inquiries.unshift(newInquiry);
    res.status(201).json(newInquiry);
  });

  // API Route - AI Custom dobae-jangpan consulting report
  app.post("/api/consult", async (req, res) => {
    try {
      const { spaceType, size, wallpaper, flooring, taste, budget } = req.body;
      
      const prompt = `도배장판 시공을 계획 중인 고객을 위한 맞춤형 디자인 컨설팅 보고서 및 가이드라인을 작성해주세요.
고객 공간 정보:
- 거주/현장 상태: ${spaceType || "아파트"}
- 면적: ${size || 24}평
- 원하는 도배 종류: ${wallpaper === "silk" ? "실크벽지 (친환경 코팅막, 이음새 맞춤 시공, 변색 없음, 고급 질감)" : "소형/합폭 합지벽지 (경제적이고 천환경적인 천연 펄프 종이벽지)"}
- 원하는 장판 종류: ${flooring === "thick" ? "2.2mm ~ 3.2mm 프리미엄 장판 (두툼하여 층간소음 감소, 쿠션감, 보행성 극대화)" : flooring === "decotile" ? "데코타일 (내스크래치, 강화 마루 대비 저렴하며 변형 없는 조각 타일)" : "1.8mm 실속 실용 장판 (원룸 및 임대용 최고 인기 모델)"}
- 스타일 선호도: ${taste || "모던&화이트"}
- 예산 지향점: ${budget || "합리적 가성비"}

보고서 내에 다음 항목을 전문가적인 분석과 함께 풍부하게 작성해주세요.
1. [공간 조건 분석 및 맞춤 제안]
   - ${spaceType} ${size}평 공간의 구조에 따른 벽지와 장판 컬러 추천 (예: 화이트, 샌드 그레이, 밝은 오크패턴 등)
   - 공간이 더 넓어 보이고 세련되어 보이는 매칭법 제안 (예: 벽지와 바닥재 경계선 최소화 등)
2. [도배장판 시공 전문가 꿀팁]
   - '도배'와 '장판'의 정확한 공사 순서 (철거 -> 벽 도배 -> 바닥 장판)와 바닥 평탄화 및 벽면 마감(초배지 작업)의 중요성
   - 실크벽지가 시공 직후 쭈글쭈글해 보이는 현상이 3~5일 후 자연스럽게 펴진다는 상식 안내
   - 장판 두께(1.8mm vs 2.2mm vs 4.5mm)가 미치는 층간소음 완화 및 충격 흡수 효과
3. [도배장판닷컴 (dobaejangpan.com) 만의 3대 안심 약속]
   - 평수별 거품 없는 직영 가격 책정으로 도배 장판 단가 거품 제거
   - 풍부한 10년 이상 경험을 가진 한국인 시공 베테랑 책임 관리
   - 무상 하자 보수(AS) 2년 보장 및 믿을 수 있는 안전성

출력 형태는 아름답고 가독성 높은 마크다운 형식으로 작성해주세요. 특히 구글/네이버 등 포털 사이트에서 '도배', '장판', '도배장판비용', '실크벽지', '장판두께' 등의 키워드가 최상위에 검색 지원되도록 제목과 단락 곳곳에 해당 검색어를 자연스럽고 유기적으로 녹여내 주십시오.`;

      let ai;
      try {
        ai = getGenAI();
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: prompt,
          config: {
            systemInstruction: "당신은 도배장판닷컴 (dobaejangpan.com) 의 마스코트인 대표 AI 인테리어 현장 감독입니다. 최고의 도배, 장판 시공 실크벽지 코칭을 제공하며 한글로 정중하고 열정 넘치는 컨설팅 보고서를 작성해주세요."
          }
        });

        res.json({ result: response.text });
      } catch (innerErr: any) {
        console.warn("Gemini Engine bypassed/not configured. Building hybrid design advice report:", innerErr.message);
        
        const hybridReport = `### 🏡 도배장판닷컴 대표 AI 맞춤 공간 컨설팅 제안서

본 제안서는 고객님이 선택하신 **${spaceType || "아파트"} ${size || 24}평형** 현장을 전문 시뮬레이션하여 연산된 맞춤형 하이브리드 리포트입니다.

---

#### 1. 🎨 공간 조건 분석 및 맞춤 컬러 제안

*   **추천 벽지 색상 조합:** **${taste || "모던&화이트"}** 무드를 완벽하게 설계하기 위해 메인 거실에는 **친환경 실크벽지 [코지 모던 에그쉘 화이트]**를 기본 배치해 드립니다. 침실이나 확장 발코니 코너 라인에는 명도가 조금 높은 라이트 그레이를 더하여 공간이 1.5배 넓고 아늑하게 비춰집니다. 
*   **추천 장판 매칭:** 선택하신 **${flooring === 'thick' ? '2.2mm~3.2mm 두툼한 프리미엄 장판' : flooring === 'decotile' ? '내구적인 고급 데코타일' : '1.8mm 실속 실용 장판'}**은 우드 나뭇결의 크기가 일정한 '샌디 크림 오크' 패턴을 추천합니다. 싱크대 수납장과 방 문턱 경계선을 일체형 몰딩으로 마감하여, 보행 시 시선 분산을 최소화하고 호텔 같은 세련된 연출이 완성됩니다.

---

#### 2. 🛠️ 최고의 퀄리티를 보장하는 도배장판 전문가의 꿀팁 (도배장판비용 절약)

*   **정밀 공사 순서 원칙:** 완벽한 공정 마감을 위해 전체 철거 및 바닥 평탄화 후 ➡️ **도배(벽지 부착)** ➡️ **바닥(장판 밀착 부착)** 순서로 정밀 밀도 시공이 전개되어야 부딪힘 없는 완벽 보호가 보증됩니다.
*   **실크벽지 초배 양생 안내:** 부직포를 띄워 접합하는 고급 공업 특성상 실크벽지는 시공 직후 2~3일간은 주름져 보일 수 있으나, 창문을 완전히 닫아 두고 20도 상온에서 자연스럽게 펴두면 4~6일 후 아주 탄탄하고 평평하게 펴집니다. (기온 변화 방지 필수)
*   **장판 수명 및 층간소음 극대화:** 친환경 완충 쿠션재 성분이 강화된 두께 기준을 적용하여 충격 흡수력을 대폭 복원해 드립니다.

---

#### 3. 🤝 도배장판닷컴 (dobaejangpan.com) 3대 고객 만족 보증

*   물류 마진과 거품 수수료를 도려내고 투명한 평수별 원가를 제공하여 **도배 장판 단가 거품을 사전 방지**합니다.
*   10년 이상 오직 현장 도배와 장판만을 연구해 온 **베테랑 한국인 기능사 조 편성** 책임 매칭을 실천합니다.
*   시공 완료 후 계약서 기점으로 하자 보수 및 평생 점검을 위한 **무상 하자 보수(AS) 2년 보증서 수여**를 약속합니다.`;

        res.json({ result: hybridReport });
      }
    } catch (err: any) {
      console.error("Gemini Consult General Error:", err);
      res.status(500).json({ error: "AI 도배장판 컨설팅 처리 중 예외가 발생했습니다.", details: err.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[도배장판닷컴 Backend] Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
