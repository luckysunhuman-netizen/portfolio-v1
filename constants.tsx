
import { Project, Experience, Skill, Book, Certification, Award } from './types';

export const PROFILE = {
  name: "전해인",
  title: "KEPCO ICT Specialist",
  introduction: "전력 데이터의 정밀함에 AI의 지능을 더하는 하드웨어-소프트웨어 융합형 ICT 인재입니다. 메카트로닉스 공학 기반의 임베디드 제어, 데이터 신뢰성 확보, 지능형 감시 시스템 구현 경험을 바탕으로 전력 계통의 안정성과 효율을 높하고자 합니다. KS 표준과 절차 준수를 설계의 출발점으로 삼으며, 문제를 데이터와 논리로 해결하는 엔지니어링 근성을 갖추고 있습니다. 디지털 변전소와 스마트 그리드 환경에서 현장과 시스템을 연결하는 ICT 전문가로 성장하는 것이 목표입니다.",
  phone: "010-1234-1234",
  email: "hae.in@example.com",
  education: {
    school: "○○대학교",
    major: "메카트로닉스공학",
    degree: "학사",
    gradYear: "2026"
  },
  keywords: ["#AI_Vision", "#Embedded_Firmware", "#Data_Driven_Calibration", "#KEPCO_DX", "#KS_Standard"]
};

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    company: "메카트로닉스 공학과 실험·연구 프로젝트",
    position: "임베디드·제어 시스템 설계",
    period: "2023/03/01 ~ 2024/12/31",
    role: "센서 계측, 제어 로직 설계, 트러블슈팅",
    outcome: "센서 오차 0.4°C 이내 보정, 시스템 안정성 확보"
  },
  {
    id: "exp2",
    company: "비평면 3D 프린팅 기술 연구 동아리",
    position: "펌웨어 담당",
    period: "2024/03/01 ~ 2025/06/30",
    role: "Klipper 펌웨어 구축, 5축 기구학 제어",
    outcome: "실시간 제어 성능 개선, 고속·정밀 출력 구현"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj1",
    name: "Smart Spot-Clean Pro",
    period: "2024/03/01 ~ 2024/06/30",
    role: "비전 알고리즘 설계, 기구 제어",
    technologies: ["Python", "OpenCV", "Arduino", "Stepper Motor"],
    metrics: ["탐지 정확도 향상: 30%", "제어 오차 감소: 0.1mm", "475% 마진율 비즈니스 모델"],
    background: [
      "기존 의류 관리기의 비효율적인 얼룩 제거 방식을 혁신할 필요성을 인지했습니다.",
      "CCTV 비전 분석을 통한 지능형 감시 시스템으로의 확장이 필요했습니다.",
      "KS 표준 역추적을 통해 설계의 절차적 정당성을 확보하고자 했습니다."
    ],
    purpose: "AI 비전 기반 자동 감시·제어 구현",
    goal: "정밀 탐지 및 자동 제어 안정화",
    roleDescription: "Python/OpenCV를 활용한 HSI 색공간 분석 및 윤곽선 검출 기법을 적용했습니다. 픽셀 단위 좌표 추출 알고리즘을 설계하고 Arduino 스테퍼 모터와 연동하여 0.1mm 오차 범위 내 자동화 매커니즘을 완성했습니다.",
    keywords: ["AI Vision", "무인화", "정밀제어", "KS_Standard"],
    problems: ["조명 변화로 인한 인식 오류", "제어 오차", "기준 부재", "시스템 동기화 문제"],
    solutions: ["색공간 분석 적용", "좌표 보정 로직 추가", "제어 파라미터 튜닝", "KS 표준 기반 기준 수립"],
    learnings: "비전 기술은 전력 설비 무인 감시에 직접 확장 가능함을 체감했습니다.",
    kepcoVision: "해당 AI 오염 탐지 로직을 디지털 변전소 내 주요 설비의 부식/과열 부위를 CCTV로 실시간 감지하는 무인 감시 시스템으로 확장하여, 설비 안전성 및 유지보수 효율을 극대화할 수 있습니다.",
    imagePrompt: "A high-tech robotic cleaning head operating in a futuristic room overlooking a city at night, starry sky and bright moon visible through large glass windows, indigo neon lighting, highly detailed tech components."
  },
  {
    id: "proj2",
    name: "5축 3D 프린터 Klipper 펌웨어 최적화",
    period: "2024/09/01 ~ 2025/03/31",
    role: "펌웨어 설계, 기구학 처리",
    technologies: ["Klipper", "Raspberry Pi", "Linux", "Mainsail OS"],
    metrics: ["응답 속도 개선: 40%", "출력 안정성 향상: 35%"],
    background: [
      "기존 8비트 MCU의 연산 지연 및 실시간 제어 한계가 발생했습니다.",
      "복잡한 5축 기구학 계산을 위한 고성능 인프라 구축이 요구되었습니다.",
      "대규모 전력 인프라 관리에 필수적인 실시간 데이터 처리 능력을 증명하고자 했습니다."
    ],
    purpose: "실시간 제어 성능 개선",
    goal: "고속·정밀 제어 환경 구축",
    roleDescription: "라즈베리파이를 메인 제어기로 활용하는 Klipper 펌웨어를 도입하여 MCU와 연산 역할을 분리했습니다. CoreXY 구조의 미세 엔드스탑 값을 최적화하고 Mainsail OS를 통해 자원 점유율을 실시간 모니터링했습니다.",
    keywords: ["임베디드", "실시간제어", "인프라", "RTOS급"],
    problems: ["연산 지연", "제어 불안정", "자원 병목", "설정 오류"],
    solutions: ["고성능 제어 구조 전환", "파라미터 최적화", "실시간 모니터링", "로그 분석"],
    learnings: "복잡한 기구학 제어에도 전력 인프라 제어와 동일한 구조적 사고가 적용됨을 이해했습니다.",
    kepcoVision: "대규모 전력 인프라 관리에 필수적인 '실시간 데이터 처리' 및 '복잡한 다중 변수 제어 알고리즘 최적화' 능력을 보여주며, 지능형 전력망 시스템의 운용 안정성에 기여합니다.",
    imagePrompt: "Close-up of a 5-axis mechanical nozzle moving fast, illuminated by silver moonlight from a nearby window, dark navy room, glowing indigo circuit board traces, city lights bokeh in the far background."
  },
  {
    id: "proj3",
    name: "TTL 로직 기반 디지털 시계 설계",
    period: "2023/03/01 ~ 2023/06/30",
    role: "회로 설계, 주파수 동기화",
    technologies: ["74LS90", "74LS48", "Crystal Oscillator"],
    metrics: ["1MHz to 1Hz 정밀 분주", "12시간제 논리 리셋 구현"],
    background: [
      "MCU 없이 순수 논리 회로만으로 시간 동기화를 구현하는 정통 엔지니어링에 도전했습니다.",
      "전력 계통의 생명인 '주파수 유지(60Hz)'에 대한 본질적 이해를 목표로 했습니다."
    ],
    purpose: "정밀 타이밍 제어 역량 확보",
    goal: "MCU-less 디지털 시계 완성",
    roleDescription: "1MHz 수정을 1Hz로 정밀 분주하는 과정에서의 신호 왜곡을 필터링 회로로 해결했습니다. 조합 논리 회로를 직접 설계하여 12:00:00 리셋 로직을 구현했습니다.",
    keywords: ["하드웨어적 근간", "주파수제어", "정밀타이밍"],
    problems: ["신호 왜곡", "불안정한 리셋", "전압 노이즈"],
    solutions: ["커패시터 필터링", "진리표 기반 조합 논리 설계", "데이터 시트 심층 분석"],
    learnings: "디지털 신호가 실제 물리적 환경에서 어떻게 오차를 일으키는지 분석한 경험은 ICT 운영 직무의 핵심 자산임을 깨달았습니다.",
    kepcoVision: "전력 계통의 기본인 '주파수 제어 및 동기화'에 대한 본질적인 이해를 증명합니다. 물리적 환경의 오차를 분석하고 해결한 경험은 전력 계통 운영의 신뢰성을 보장하는 밑바탕이 됩니다.",
    imagePrompt: "A glowing green digital clock circuit on a desk at night, stars visible through the window, silhouette of a person studying, cinematic lighting, indigo and silver tones."
  },
  {
    id: "proj4",
    name: "Digital Twin 기반 기구학 시뮬레이션",
    period: "2023/09/01 ~ 2023/12/31",
    role: "물리 모델링, 데이터 분석",
    technologies: ["Working Model 2D", "MS Excel", "Data Mining"],
    metrics: ["수천 개의 로우 데이터 분석", "운용 파라미터 최적화"],
    background: [
      "복잡한 기구학적 시스템을 가상 환경에서 구현하고 최적 구동 조건을 도출하고자 했습니다.",
      "전력 설비의 디지털 트윈 운영(AMS) 역량을 키우고자 했습니다."
    ],
    purpose: "물리 데이터 예측 역량 강화",
    goal: "가상 시뮬레이션 및 데이터 정합성 검증",
    roleDescription: "벨트 구동 캠, 제네바 기구 등을 2D 가상 환경에서 재현하고 동역학적 변수를 모델링했습니다. 시뮬레이션 데이터를 추출하여 이론값과 정량적으로 비교 분석했습니다.",
    keywords: ["디지털트윈", "물리예측", "데이터마이닝"],
    problems: ["데이터 불일치", "시스템 충격 발생", "변수 제어 한계"],
    solutions: ["빅데이터 핸들링", "정합성 검증 로직", "파라미터 반복 튜닝"],
    learnings: "실제 설비에 무리를 주지 않고 가상 세계에서 최적의 효율을 찾아내는 역량을 길렀습니다.",
    kepcoVision: "한전이 미래 전략으로 삼고 있는 '디지털 변전소'나 '가상 발전소(VPP)' 운영 시, 실제 설비에 무리를 주지 않고 가상 세계에서 최적의 운용 효율을 찾아내는 의사결정 역량을 제공합니다.",
    imagePrompt: "Futuristic digital twin UI floating over a dark night landscape of a city, constellation-like data connections, glowing mechanical diagrams, midnight blue atmosphere."
  },
  {
    id: "proj5",
    name: "데이터 기반 소프트웨어 캘리브레이션",
    period: "2023/09/01 ~ 2023/12/31",
    role: "센서 분석, 알고리즘 구현",
    technologies: ["C++", "Arduino", "회귀분석", "ADC"],
    metrics: ["측정 오차 감소: 0.4°C", "데이터 신뢰도 향상: 50%", "10,000배 증폭 성공"],
    background: [
      "저가 K-type 열전쌍 센서의 물리적 한계를 수학적 모델링으로 극복하고자 했습니다.",
      "단일 소자의 물리적 한계를 인정하고 다단 증폭 회로를 설계하는 집요함을 발휘했습니다."
    ],
    purpose: "센서 데이터 정밀도 향상",
    goal: "소프트웨어 기반 오차 보정",
    roleDescription: "5차 다항식 추세선을 수학적으로 도출하여 아두이노 코드에 이식했습니다. ADC 포화 현상을 진단하고 다단 증폭 방식으로 개선하여 0.4°C 이내의 정밀도를 확보했습니다.",
    keywords: ["데이터신뢰성", "캘리브레이션", "엔지니어링근성"],
    problems: ["비선형 오차", "ADC 포화(Saturation)", "노이즈 간섭"],
    solutions: ["5차 다항식 회귀분석", "다단 증폭 회로 설계", "Filtering & Smoothing"],
    learnings: "전력 계측에서 데이터 신뢰성이 핵심임을 명확히 인식했습니다.",
    kepcoVision: "'완벽한 하드웨어는 없다'는 전제 하에, 센서의 물리적 한계를 소프트웨어적 지능으로 극복하여 데이터 신뢰성을 확보하는 역량은 한전의 고정밀 계측 인프라에 직결됩니다.",
    imagePrompt: "Glowing data curves forming a path through a starry night sky, reflecting on a dark water surface of a city harbor, tech nodes as stars, elegant mathematical visualization."
  },
  {
    id: "proj6",
    name: "다단 전압 증폭기(BJT) 회로 해석",
    period: "2023/03/01 ~ 2023/06/30",
    role: "회로 시뮬레이션, 임베디드 설계",
    technologies: ["NPN BJT", "Circuit Simulation Tools", "Signal Integrity"],
    metrics: ["AC/DC 성분 분리", "이론-실제 Gap 분석"],
    background: [
      "미세 제어 신호를 증폭하기 위한 NPN BJT 회로를 시뮬레이션하고 신호 무결성을 분석했습니다.",
      "한전의 통신 선로나 제어 회로에서 발생할 수 있는 노이즈 문제를 이해하고자 했습니다."
    ],
    purpose: "신호 무결성 분석 역량 확보",
    goal: "이득(Gain)과 안정성 사이의 트레이드오프 조율",
    roleDescription: "커플링/바이패스 커패시터를 활용하여 DC 바이어스를 차단하고 필요한 AC 신호만을 전달하는 회로를 구성했습니다. 위상 변화 과정을 파형으로 검증했습니다.",
    keywords: ["회로해석", "신호무결성", "하드웨어적근간"],
    problems: ["이득 감소", "신호 감쇄", "노이즈 혼입"],
    solutions: ["바이패스 커패시터 적용", "임베디드 하드웨어 최적화", "실제 소자 테스트 반영"],
    learnings: "실제 소자의 오차 범위를 이해하고 이를 설계에 반영하는 '완벽주의적 집요함'을 배웠습니다.",
    kepcoVision: "한전의 통신 선로나 제어 회로에서 발생할 수 있는 노이즈 문제와 신호 감쇄 문제를 이해하고 하드웨어적 근간에서 해결할 수 있는 무결성 분석 역량을 보여줍니다.",
    imagePrompt: "Electrical signals visualized as shooting stars over a dark silhouette of a city skyline, technical blueprint overlays on the night sky, luminous indigo pulses."
  }
];

export const SKILLS: Skill[] = [
  { name: "Embedded C/C++", level: 4 },
  { name: "Python / OpenCV", level: 4 },
  { name: "Firmware Optimization", level: 4 },
  { name: "Control & Measurement", level: 4 },
  { name: "Data Driven Calibration", level: 4 },
  { name: "Signal Integrity Analysis", level: 3 }
];

export const BOOKS: Book[] = [
  { title: "임베디드 시스템 설계", author: "한빛미디어", description: "임베디드 제어와 펌웨어 구조 이해" },
  { title: "데이터 분석을 위한 수학", author: "김민형", description: "회귀분석과 데이터 모델링 기초" },
  { title: "스마트 그리드 개론", author: "박정훈", description: "전력 ICT와 디지털 변전소 이해" }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "정보처리기사", date: "2024/06", issuer: "한국산업인력공단" },
  { name: "Autodesk Inventor Certified User", date: "2023/11", issuer: "Autodesk" },
  { name: "Google AI Essentials", date: "2024/08", issuer: "Google" }
];

export const AWARDS: Award[] = [
  { name: "캡스톤디자인 우수상", date: "2024/12", issuer: "○○대학교" },
  { name: "공학설계 경진대회 장려상", date: "2024/10", issuer: "○○학회" }
];

export const HUMANISM_ESG = [
  {
    title: "QR코드 엠보싱 (Embossing)",
    desc: "시각장애인이 스스로 약 복용이 어려운 문제 해결을 위해 QR코드 엠보싱 처리를 통한 음성 안내 서비스 기획. (디자인씽킹 적용)",
    tag: "Social Value & UX"
  },
  {
    title: "유니버셜 퍼스널 모빌리티",
    desc: "노약자도 안전하게 이용할 수 있도록 기존 전동 킥보드의 주차 문제 및 안전 제어 시스템 기구적 개선안 제안.",
    tag: "Universal Design"
  },
  {
    title: "MECE 기반 논리적 문제 해결",
    desc: "비판적 사고를 통해 복잡한 사회적·윤리적 이슈를 중복 없이 누락 없이(MECE) 분석하는 습관 형성.",
    tag: "Critical Thinking"
  }
];

export const COMMUNICATION = [
  {
    title: "기술적 정직함 (Technical Integrity)",
    desc: "실패 경험을 통해 모르는 것을 솔직하게 묻고 공유하는 것이 팀의 성과와 성장에 직결됨을 깨달았습니다.",
    icon: "🤝"
  },
  {
    title: "아두이노 마스터 노트",
    desc: "복잡한 개념을 동료들에게 쉽게 전달하기 위해 자체 마스터 노트를 제작하여 지식 공유 문화를 주도했습니다.",
    icon: "📝"
  }
];
