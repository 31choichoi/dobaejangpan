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
      } catch (keyError: any) {
        return res.status(400).json({
          error: "API_KEY_MISSING",
          message: "Gemini API 키가 준비되지 않았습니다. 인공지능 스타일 컨설턴트를 가동하려면 우측 상단의 Settings > Secrets에 GEMINI_API_KEY를 설정해주세요. (데모 모드로 임시 시뮬레이션 결과가 하단에 활성화됩니다.)"
        });
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: "당신은 도배장판닷컴 (dobaejangpan.com) 의 마스코트인 대표 AI 인테리어 현장 감독입니다. 최고의 도배, 장판 시공 실크벽지 코칭을 제공하며 한글로 정중하고 열정 넘치는 컨설팅 보고서를 작성해주세요."
        }
      });

      res.json({ result: response.text });
    } catch (err: any) {
      console.error("Gemini Consult Error:", err);
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
