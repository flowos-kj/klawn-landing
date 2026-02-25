"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Buildings,
  Bank,
  Heartbeat,
  Factory,
  Storefront,
  X,
  FunnelSimple,
  ArrowRight,
  Play,
} from "@phosphor-icons/react";

type Industry =
  | "construction"
  | "finance"
  | "healthcare"
  | "manufacturing"
  | "retail";

interface UseCase {
  id: string;
  industry: Industry;
  department: string;
  description: string;
  detail: string;
  pipeline: string[];
  svgPath: string;
  staticPath: string;
}

const INDUSTRIES: {
  key: Industry;
  label: string;
  icon: React.ReactNode;
}[] = [
  { key: "construction", label: "건설", icon: <Buildings weight="duotone" className="h-4 w-4" /> },
  { key: "finance", label: "금융", icon: <Bank weight="duotone" className="h-4 w-4" /> },
  { key: "healthcare", label: "헬스케어", icon: <Heartbeat weight="duotone" className="h-4 w-4" /> },
  { key: "manufacturing", label: "제조", icon: <Factory weight="duotone" className="h-4 w-4" /> },
  { key: "retail", label: "리테일", icon: <Storefront weight="duotone" className="h-4 w-4" /> },
];

const USE_CASES: UseCase[] = [
  // 건설
  {
    id: "con-1", industry: "construction", department: "구매조달팀",
    description: "ERP 기반 대량 자재 발주서 자동 생성",
    detail: "철근 1,500톤(13.2억 원) 발주 요청 시 ERP 단가 조회 후 발주서를 자동 작성합니다. 고액 거래 감지 시 복수 결재를 요청하고, 전 과정이 감사 로그에 기록됩니다.",
    pipeline: ["ERP 단가 조회", "발주서 생성", "고액 감지", "위하고 결재"],
    svgPath: "/industries/construction/1-구매조달팀.svg",
    staticPath: "/industries/static/construction/1-구매조달팀.svg",
  },
  {
    id: "con-2", industry: "construction", department: "품질안전팀",
    description: "현장 점검 PDF를 시정조치 엑셀로 변환",
    detail: "송도 현장 안전점검 보고서 PDF에서 4건의 하자를 추출해 시정조치 계획 엑셀을 생성합니다. Google Drive에 업로드 후 담당자에게 이메일로 자동 통보합니다.",
    pipeline: ["PDF 파싱", "엑셀 생성", "드라이브 업로드", "이메일 발송"],
    svgPath: "/industries/construction/2-품질안전팀.svg",
    staticPath: "/industries/static/construction/2-품질안전팀.svg",
  },
  {
    id: "con-3", industry: "construction", department: "기획팀",
    description: "협력사 20개사 신용등급 일괄 평가",
    detail: "ERP 거래처 원장에서 20개 협력사를 조회하고 신용평가 API로 등급을 확인합니다. C등급 이하 업체는 하도급 제한 처리되며, 주민등록번호 등 민감정보는 자동 마스킹됩니다.",
    pipeline: ["ERP 조회", "신용 API 체크", "PII 마스킹", "거래처 업데이트"],
    svgPath: "/industries/construction/3-기획팀.svg",
    staticPath: "/industries/static/construction/3-기획팀.svg",
  },
  {
    id: "con-4", industry: "construction", department: "법무팀",
    description: "산재 합의서 AI 검토와 임원 회의 설정",
    detail: "평택 현장 산재 합의서(8천만 원)를 분석해 사내 기준(3,500~4,500만 원)과 비교합니다. AI 신뢰도 60%로 경고를 표시하고, 규정 엔진 검증 후 임원 회의를 자동 예약합니다.",
    pipeline: ["한글 문서 파싱", "규정 엔진 검증", "AI 신뢰도 체크", "캘린더 일정 생성"],
    svgPath: "/industries/construction/4-법무팀.svg",
    staticPath: "/industries/static/construction/4-법무팀.svg",
  },
  {
    id: "con-5", industry: "construction", department: "현장인사팀",
    description: "일용직 급여 대장 교차검증과 정산",
    detail: "ERP 급여 대장과 출입 게이트 기록을 교차 대조해 3건의 불일치를 감지합니다. 외국인등록번호·계좌번호는 자동 마스킹되며, 수정 후 결재를 요청합니다.",
    pipeline: ["ERP 급여 조회", "출입기록 교차검증", "PII 마스킹", "위하고 결재"],
    svgPath: "/industries/construction/5-현장인사팀.svg",
    staticPath: "/industries/static/construction/5-현장인사팀.svg",
  },
  // 금융
  {
    id: "fin-1", industry: "finance", department: "고객지원팀",
    description: "보험 VOC 데이터 추출과 독촉 알림 발송",
    detail: "세일즈포스에서 자동차보험 보상 지연 VOC를 추출하고 주민번호 5건, 차량번호 42건, 휴대폰번호 45건을 자동 마스킹합니다. 진행중인 12건에 대해 관할 센터장 4명에게 위하고 독촉 메시지를 발송합니다.",
    pipeline: ["CRM 조회", "PII 마스킹", "데이터 무결성 검증", "위하고 메시지 발송"],
    svgPath: "/industries/finance/1-고객지원팀.svg",
    staticPath: "/industries/static/finance/1-고객지원팀.svg",
  },
  {
    id: "fin-2", industry: "finance", department: "법무팀",
    description: "실손보험 약관 신·구 비교와 법률 자문 의뢰",
    detail: "실손보험 약관 제3.2조의 신·구 조항을 비교 분석합니다. 비급여 주사제 한도 변경(연 50회→30회)과 '의학적 필요성' 정의 모호성을 감지하고, AI 신뢰도 78%로 경고 후 외부 법률사무소에 자문 메일을 발송합니다.",
    pipeline: ["PDF 파싱", "AI 신뢰도 평가", "위험 조항 감지", "Gmail 초안 생성"],
    svgPath: "/industries/finance/2-법무팀.svg",
    staticPath: "/industries/static/finance/2-법무팀.svg",
  },
  {
    id: "fin-3", industry: "finance", department: "상품기획팀",
    description: "경쟁사 펫보험 비교 분석과 PT 자료 생성",
    detail: "K손해보험의 펫보험 상품을 웹에서 검색·분석하고 자사 상품(펫사랑)과 비교합니다. 출산 보장 시기와 MRI 보장에서 열위를 파악하고, 임원 보고용 PowerPoint를 자동 생성합니다.",
    pipeline: ["웹 검색", "ERP 상품 조회", "비교 분석", "PPT 생성"],
    svgPath: "/industries/finance/3-상품기획팀.svg",
    staticPath: "/industries/static/finance/3-상품기획팀.svg",
  },
  {
    id: "fin-4", industry: "finance", department: "법인영업팀",
    description: "300억 단체보험 수주 등록과 고액 결재",
    detail: "H유통 그룹 단체상해보험 300억 원 계약 체결을 사내 게시판에 공지하고 ERP에 매출 등록합니다. 고액 계약 감지 시 이사회 결재를 자동 요청하며, 1분기 KPI 115% 달성을 기록합니다.",
    pipeline: ["위하고 게시판 등록", "ERP 매출 등록", "고액 감지", "위하고 결재"],
    svgPath: "/industries/finance/4-법인영업팀.svg",
    staticPath: "/industries/static/finance/4-법인영업팀.svg",
  },
  {
    id: "fin-5", industry: "finance", department: "IT보안팀",
    description: "주말 네트워크 비인가 접속 탐지와 차단",
    detail: "방화벽 VPN 로그에서 주말 망분리 예외 접속 8건을 추출하고, 인사팀 예외 목록과 교차 확인합니다. 새벽 2시 비인가 접속 1건을 탐지해 CISO 결재 후 차단 조치합니다. IP·사번은 자동 마스킹됩니다.",
    pipeline: ["방화벽 로그 조회", "인사 예외 교차검증", "PII 마스킹", "CISO 결재"],
    svgPath: "/industries/finance/5-IT보안팀.svg",
    staticPath: "/industries/static/finance/5-IT보안팀.svg",
  },
  // 헬스케어
  {
    id: "hc-1", industry: "healthcare", department: "연구개발본부",
    description: "임상 3상 데이터 분석과 HWPX 리포트 생성",
    detail: "Google Drive에서 당뇨 신약 임상 3상 데이터를 다운로드해 분석합니다. 치료군(N=150) HbA1c -1.2% 감소(p<0.01), 중대 이상반응 0건을 확인하고 한글 리포트를 생성합니다.",
    pipeline: ["드라이브 다운로드", "데이터 분석", "한글 리포트 생성", "위하고 메시지"],
    svgPath: "/industries/healthcare/1-연구개발본부.svg",
    staticPath: "/industries/static/healthcare/1-연구개발본부.svg",
  },
  {
    id: "hc-2", industry: "healthcare", department: "영업기획팀",
    description: "병원 30곳 CP 서약서 일괄 생성과 발송",
    detail: "재계약 병원 30곳의 ERP 거래처 정보를 조회해 청렴계약(CP) 서약서 PDF를 일괄 생성합니다. 원장님 30명에게 이메일 초안을 작성하고, 대량 발송 전 결재를 요청합니다.",
    pipeline: ["ERP 거래처 조회", "PDF 일괄 생성", "Gmail 일괄 초안", "위하고 결재"],
    svgPath: "/industries/healthcare/2-영업기획팀.svg",
    staticPath: "/industries/static/healthcare/2-영업기획팀.svg",
  },
  {
    id: "hc-3", industry: "healthcare", department: "마케팅팀",
    description: "심포지엄 식대 정산과 김영란법 검증",
    detail: "심포지엄 참석 의사 45명의 엑셀 명단에서 면허번호·전화번호를 마스킹합니다. 총 식대 450만 원(1인 10만 원)이 김영란법 한도 이내임을 확인하고 ERP 비용 전표를 작성합니다.",
    pipeline: ["엑셀 파싱", "PII 마스킹", "김영란법 검증", "ERP 비용 전표"],
    svgPath: "/industries/healthcare/3-마케팅팀.svg",
    staticPath: "/industries/static/healthcare/3-마케팅팀.svg",
  },
  {
    id: "hc-4", industry: "healthcare", department: "재무팀",
    description: "국가 R&D 연구비 부적합 항목 자동 탐지",
    detail: "1분기 연구비 집행내역 PDF를 분석해 부적합 항목을 탐지합니다. AI 신뢰도 55%로 경고를 표시하고, 가구 구입비(250만 원)가 직접비가 아닌 간접비로 분류되어야 함을 발견합니다.",
    pipeline: ["PDF 파싱", "AI 신뢰도 체크", "컴플라이언스 검증", "ERP 전표 수정"],
    svgPath: "/industries/healthcare/4-재무팀.svg",
    staticPath: "/industries/static/healthcare/4-재무팀.svg",
  },
  {
    id: "hc-5", industry: "healthcare", department: "품질관리팀",
    description: "FDA 감사 대비 GMP 제조기록 일괄 검증",
    detail: "오송 공장 페니실린 라인 6개월치 제조기록을 ERP/MES에서 교차 검증합니다. OOS(규격 이탈) 0건을 확인하고, 작업자 사번·서명을 익명화한 PDF를 생성해 임원 결재를 요청합니다.",
    pipeline: ["ERP/MES 조회", "LIMS 교차검증", "PDF 일괄 생성", "위하고 결재"],
    svgPath: "/industries/healthcare/5-품질관리팀.svg",
    staticPath: "/industries/static/healthcare/5-품질관리팀.svg",
  },
  // 제조
  {
    id: "mfg-1", industry: "manufacturing", department: "생산관리팀",
    description: "화성공장 주간 생산실적 리포트 자동 생성",
    detail: "ERP MES에서 A라인(수율 99%, 14,850/15,000)과 B라인(수율 100.8%, 12,100/12,000) 실적을 조회합니다. 불량률 0.8~1.2% 포함 주간 리포트를 한글 문서로 생성해 Google Drive에 업로드합니다.",
    pipeline: ["ERP MES 조회", "한글 리포트 생성", "드라이브 업로드"],
    svgPath: "/industries/manufacturing/1-생산관리팀.svg",
    staticPath: "/industries/static/manufacturing/1-생산관리팀.svg",
  },
  {
    id: "mfg-2", industry: "manufacturing", department: "영업팀",
    description: "현대향 드라이브샤프트 5% 단가 인상 제안",
    detail: "현대향 드라이브샤프트 부품 단가를 ERP에서 조회(₩45,000)하고 5% 인상(₩47,250) 제안서를 작성합니다. 단가 변경 감지 시 영업본부장 결재를 자동 요청합니다.",
    pipeline: ["ERP 단가 조회", "제안서 생성", "단가변경 감지", "위하고 결재"],
    svgPath: "/industries/manufacturing/2-영업팀.svg",
    staticPath: "/industries/static/manufacturing/2-영업팀.svg",
  },
  {
    id: "mfg-3", industry: "manufacturing", department: "품질관리팀",
    description: "B2B 고객 불만 추출과 개선 태스크 생성",
    detail: "CRM에서 1개월간 B2B 고객 불만을 추출하고 고객명·연락처 14건을 마스킹합니다. 규격 불량 4건을 분류해 품질팀 위하고 태스크로 자동 생성합니다.",
    pipeline: ["CRM 조회", "PII 마스킹", "데이터 검증", "위하고 태스크 생성"],
    svgPath: "/industries/manufacturing/3-품질관리팀.svg",
    staticPath: "/industries/static/manufacturing/3-품질관리팀.svg",
  },
  {
    id: "mfg-4", industry: "manufacturing", department: "재무팀",
    description: "접대비 영수증 OCR 인식과 전표 생성",
    detail: "삼원가든 접대비 영수증을 OCR로 인식하나, 금액이 불확실(₩145,000 vs ₩195,000)하여 AI 신뢰도 72%로 경고합니다. 사용자 확인 후 정확한 금액으로 ERP 전표를 생성합니다.",
    pipeline: ["OCR 이미지 파싱", "AI 신뢰도 체크", "사용자 확인", "ERP 전표 생성"],
    svgPath: "/industries/manufacturing/4-재무팀.svg",
    staticPath: "/industries/static/manufacturing/4-재무팀.svg",
  },
  {
    id: "mfg-5", industry: "manufacturing", department: "인사팀",
    description: "3월 신규입사자 12명 근로계약서 일괄 생성",
    detail: "ERP에서 신규입사자 12명의 인사정보를 조회하고 주민번호를 암호화 처리합니다. 워터마크가 적용된 근로계약서 PDF를 일괄 생성해 인사팀장에게 위하고 메시지로 전달합니다.",
    pipeline: ["ERP 인사 조회", "데이터 검증", "PDF 일괄 생성", "위하고 메시지"],
    svgPath: "/industries/manufacturing/5-인사팀.svg",
    staticPath: "/industries/static/manufacturing/5-인사팀.svg",
  },
  // 리테일
  {
    id: "ret-1", industry: "retail", department: "물류센터운영팀",
    description: "안전재고 미달 상품 자동 발주 CSV 생성",
    detail: "용인 1센터 WMS/ERP에서 생활필수품 재고를 조회하고, 안전재고 미달 3건(크리넥스 380개, 다우니 155개, 햇반 690개)을 감지합니다. 발주용 CSV를 자동 생성합니다.",
    pipeline: ["WMS/ERP 재고 조회", "안전재고 비교", "발주 CSV 생성"],
    svgPath: "/industries/retail/1-물류센터운영팀.svg",
    staticPath: "/industries/static/retail/1-물류센터운영팀.svg",
  },
  {
    id: "ret-2", industry: "retail", department: "마케팅팀",
    description: "VIP 고객 98,540명 대상 봄 캠페인 쿠폰 설정",
    detail: "CRM에서 VIP 고객 98,540명을 세그먼트하고 20% 할인 쿠폰 1만 장을 설정합니다. 예상 할인액 4.5억 원 고액 프로모션 감지 시 마케팅 본부장 결재를 요청합니다.",
    pipeline: ["CRM 세그먼트 조회", "ERP 쿠폰 설정", "고액 감지", "위하고 결재"],
    svgPath: "/industries/retail/2-마케팅팀.svg",
    staticPath: "/industries/static/retail/2-마케팅팀.svg",
  },
  {
    id: "ret-3", industry: "retail", department: "재무팀",
    description: "법인카드 심야·유흥 사용 내역 자동 스크리닝",
    detail: "법인카드 사용 내역에서 심야·유흥업소 이용 건을 자동 스크리닝합니다. 퀸즈라운지(85만 원, 심야)를 의심 건으로 분류하고, 카드번호·성명은 마스킹 처리합니다.",
    pipeline: ["ERP 카드 조회", "규정 엔진 검증", "PII 마스킹", "감사 로그"],
    svgPath: "/industries/retail/3-재무팀.svg",
    staticPath: "/industries/static/retail/3-재무팀.svg",
  },
  {
    id: "ret-4", industry: "retail", department: "총무팀",
    description: "사무용품 영수증 7건 일괄 OCR과 비용 전표",
    detail: "2월 사무용품 영수증 7건을 PDF/OCR로 일괄 처리합니다. 3번 영수증 부가세 계산 오류(₩5,500→₩5,000)를 AI 신뢰도 65%로 감지하고, 사용자 확인 후 ERP 비용 전표를 생성합니다.",
    pipeline: ["PDF/OCR 파싱", "AI 신뢰도 체크", "사용자 확인", "ERP 비용 전표"],
    svgPath: "/industries/retail/4-총무팀.svg",
    staticPath: "/industries/static/retail/4-총무팀.svg",
  },
  {
    id: "ret-5", industry: "retail", department: "고객지원팀",
    description: "반품률 90% 이상 블랙컨슈머 탐지와 차단",
    detail: "CRM과 물류 반품 데이터를 교차 분석해 3개월간 반품률 90% 이상인 블랙컨슈머 5명을 탐지합니다. 성명·주소를 마스킹한 뒤 구매 제한 조치를 결재 요청합니다.",
    pipeline: ["CRM 조회", "물류 반품 교차분석", "PII 마스킹", "위하고 결재"],
    svgPath: "/industries/retail/5-고객지원팀.svg",
    staticPath: "/industries/static/retail/5-고객지원팀.svg",
  },
];

export function IndustryShowcase() {
  const [activeIndustry, setActiveIndustry] = useState<Industry>("finance");
  const [selectedCase, setSelectedCase] = useState<UseCase | null>(null);

  const filtered = USE_CASES.filter((uc) => uc.industry === activeIndustry);

  const closeModal = useCallback(() => setSelectedCase(null), []);

  useEffect(() => {
    if (!selectedCase) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [selectedCase, closeModal]);

  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCase]);

  return (
    <section id="use-cases" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-14"
        >
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-copper/20 bg-copper/5 px-3 py-1 text-xs font-medium text-copper-dark">
            <FunnelSimple weight="bold" className="h-3.5 w-3.5" />
            산업별 활용 사례
          </span>
          <h2 className="mt-4 mb-3 text-2xl font-bold text-navy-dark sm:text-3xl">
            우리 부서에 맞는 Klawn 활용법
          </h2>
          <p className="mx-auto max-w-lg text-sm text-muted sm:text-base">
            산업과 부서별로 Klawn이 실제 업무에 어떻게 적용되는지 확인하세요
          </p>
        </motion.div>

        {/* Industry Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 flex flex-wrap justify-center gap-2 sm:mb-12"
        >
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.key}
              type="button"
              onClick={() => setActiveIndustry(ind.key)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeIndustry === ind.key
                  ? "bg-navy text-white shadow-md"
                  : "bg-white text-muted border border-border hover:border-copper/30 hover:text-navy-dark"
              }`}
            >
              {ind.icon}
              {ind.label}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
          >
            {filtered.map((uc, i) => (
              <motion.button
                key={uc.id}
                type="button"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                onClick={() => setSelectedCase(uc)}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-white text-left shadow-sm transition-all duration-200 hover:border-copper/30 hover:shadow-lg"
              >
                {/* Static SVG thumbnail — fills entire preview */}
                <div className="relative aspect-[520/593] w-full overflow-hidden bg-white">
                  <object
                    data={uc.staticPath}
                    type="image/svg+xml"
                    className="absolute inset-0 h-full w-full pointer-events-none"
                    aria-label={`${uc.department} 활용 사례 미리보기`}
                  />
                  {/* Gradient fade at bottom */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
                  {/* Play indicator */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/80 shadow-lg backdrop-blur-sm">
                      <Play weight="fill" className="h-4 w-4 text-white ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4">
                  <span className="mb-1.5 text-base font-bold text-navy-dark">
                    {uc.department}
                  </span>
                  <span className="mb-3 text-xs leading-relaxed text-muted line-clamp-2">
                    {uc.description}
                  </span>
                  {/* Pipeline preview */}
                  <div className="mt-auto flex flex-wrap items-center gap-1">
                    {uc.pipeline.slice(0, 3).map((step, idx) => (
                      <span key={step} className="inline-flex items-center gap-0.5">
                        <span className="rounded bg-surface px-1.5 py-0.5 text-[10px] font-medium text-muted">
                          {step}
                        </span>
                        {idx < Math.min(uc.pipeline.length, 3) - 1 && (
                          <ArrowRight className="h-2.5 w-2.5 text-border" />
                        )}
                      </span>
                    ))}
                    {uc.pipeline.length > 3 && (
                      <span className="text-[10px] text-muted">+{uc.pipeline.length - 3}</span>
                    )}
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-navy-dark/60 backdrop-blur-sm" />

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-2xl max-h-[90vh]"
            >
              {/* Modal header */}
              <div className="flex items-start justify-between border-b border-border px-5 py-4 sm:px-6 shrink-0">
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-block rounded-full bg-copper/10 px-2.5 py-0.5 text-xs font-medium text-copper-dark">
                      {INDUSTRIES.find((i) => i.key === selectedCase.industry)?.label}
                    </span>
                    <span className="text-xs text-border">/</span>
                    <span className="text-xs font-medium text-navy-dark">
                      {selectedCase.department}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-navy-dark">
                    {selectedCase.description}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {selectedCase.detail}
                  </p>
                  {/* Pipeline */}
                  <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    {selectedCase.pipeline.map((step, idx) => (
                      <span key={step} className="inline-flex items-center gap-1">
                        <span className="rounded-md bg-surface px-2 py-0.5 text-xs font-medium text-navy-dark">
                          {step}
                        </span>
                        {idx < selectedCase.pipeline.length - 1 && (
                          <ArrowRight weight="bold" className="h-3 w-3 text-copper/50" />
                        )}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="ml-4 shrink-0 rounded-lg p-1.5 text-muted transition-colors hover:bg-surface hover:text-navy-dark"
                >
                  <X weight="bold" className="h-5 w-5" />
                </button>
              </div>

              {/* Animated SVG display */}
              <div className="overflow-y-auto bg-white p-4 sm:p-6">
                <div className="overflow-hidden rounded-xl border border-border bg-white">
                  <object
                    key={selectedCase.id}
                    data={selectedCase.svgPath}
                    type="image/svg+xml"
                    className="h-auto w-full"
                    aria-label={`${selectedCase.department} 활용 사례 애니메이션`}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
