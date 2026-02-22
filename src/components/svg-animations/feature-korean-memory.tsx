export function FeatureKoreanMemory(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <style dangerouslySetInnerHTML={{__html: `
    .fkm_bg { fill: #F0F1F5; }
    .fkm_inner-border { fill: none; stroke: #FFFFFF; stroke-width: 2; }
    .fkm_lens-ring {
      fill: none;
      stroke: #2D3561;
      stroke-width: 2.5;
    }
    .fkm_lens-glass {
      fill: #FFFFFF;
      fill-opacity: 0.6;
    }
    .fkm_lens-handle {
      stroke: #2D3561;
      stroke-width: 3;
      stroke-linecap: round;
    }
    .fkm_text-line {
      font-family: 'Noto Sans KR', sans-serif;
      font-size: 6px;
      fill: #5A5E7A;
    }
    .fkm_text-match {
      font-family: 'Noto Sans KR', sans-serif;
      font-size: 6px;
      fill: #C4875B;
      font-weight: bold;
    }
    .fkm_highlight {
      fill: #C4875B;
      opacity: 0.15;
      animation: fkm_hlPulse 2s ease-in-out infinite;
    }
    @keyframes fkm_hlPulse {
      0%, 100% { opacity: 0.1; }
      50% { opacity: 0.25; }
    }
    .fkm_particle {
      fill: #C4875B;
      animation: fkm_particleFloat 3s ease-in-out infinite;
    }
    .fkm_pt1 { animation-delay: 0s; }
    .fkm_pt2 { animation-delay: -0.5s; }
    .fkm_pt3 { animation-delay: -1s; }
    .fkm_pt4 { animation-delay: -1.5s; }
    .fkm_pt5 { animation-delay: -2s; }
    @keyframes fkm_particleFloat {
      0%, 100% { transform: translateY(0); opacity: 0.3; }
      50% { transform: translateY(-4px); opacity: 1; }
    }
    .fkm_josa {
      font-family: 'Geist Mono', monospace;
      font-size: 5px;
      fill: #D49B72;
      animation: fkm_josaFade 2.5s ease-in-out infinite;
    }
    .fkm_j1 { animation-delay: 0s; }
    .fkm_j2 { animation-delay: -0.8s; }
    .fkm_j3 { animation-delay: -1.6s; }
    @keyframes fkm_josaFade {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.9; }
    }
    .fkm_vector-line {
      fill: none;
      stroke: #3D4578;
      stroke-width: 0.8;
      stroke-dasharray: 2 2;
      opacity: 0.3;
    }
    .fkm_vector-dot {
      fill: #2D3561;
      animation: fkm_vdPulse 2s ease-in-out infinite;
    }
    .fkm_vd1 { animation-delay: 0s; }
    .fkm_vd2 { animation-delay: -0.7s; }
    .fkm_vd3 { animation-delay: -1.4s; }
    @keyframes fkm_vdPulse {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.8; }
    }
    .fkm_score {
      font-family: 'Geist Mono', monospace;
      font-size: 5px;
      fill: #C4875B;
    }
    .fkm_bm-label {
      font-family: 'Geist Mono', monospace;
      font-size: 5px;
      fill: #5A5E7A;
    }
  `}} />

  {/* Background */}
  <rect x="6" y="6" width="108" height="108" rx="28" className="fkm_bg" />
  <rect x="6" y="6" width="108" height="108" rx="28" className="fkm_inner-border" />

  {/* Text document lines */}
  <rect x="18" y="30" width="50" height="7" rx="1" className="fkm_highlight" />
  <text x="20" y="36" className="fkm_text-line">프로젝트</text>
  <text x="44" y="36" className="fkm_text-match">회의록</text>

  <text x="20" y="48" className="fkm_text-line">결과 보고서를 작성</text>
  <text x="20" y="58" className="fkm_text-line">예산 검토 및 승인</text>

  <rect x="18" y="62" width="55" height="7" rx="1" className="fkm_highlight" />
  <text x="20" y="68" className="fkm_text-line">일정</text>
  <text x="32" y="68" className="fkm_text-match">관리</text>
  <text x="44" y="68" className="fkm_text-line">시스템</text>

  {/* Josa particles being stripped */}
  <text x="58" y="48" className="fkm_josa fkm_j1">~를</text>
  <text x="58" y="58" className="fkm_josa fkm_j2">~의</text>
  <text x="62" y="36" className="fkm_josa fkm_j3">~은</text>

  {/* Magnifying glass */}
  <circle cx="82" cy="44" r="12" className="fkm_lens-glass" />
  <circle cx="82" cy="44" r="12" className="fkm_lens-ring" />
  <line x1="90" y1="52" x2="97" y2="59" className="fkm_lens-handle" />

  {/* Search particles inside lens */}
  <circle cx="78" cy="40" r="1.5" className="fkm_particle fkm_pt1" />
  <circle cx="84" cy="38" r="1" className="fkm_particle fkm_pt2" />
  <circle cx="86" cy="44" r="1.5" className="fkm_particle fkm_pt3" />
  <circle cx="80" cy="48" r="1" className="fkm_particle fkm_pt4" />
  <circle cx="76" cy="45" r="1" className="fkm_particle fkm_pt5" />

  {/* Vector store (bottom right) */}
  <line x1="75" y1="72" x2="100" y2="72" className="fkm_vector-line" />
  <line x1="75" y1="78" x2="100" y2="78" className="fkm_vector-line" />
  <line x1="75" y1="84" x2="100" y2="84" className="fkm_vector-line" />
  <line x1="75" y1="90" x2="100" y2="90" className="fkm_vector-line" />

  <circle cx="80" cy="72" r="2" className="fkm_vector-dot fkm_vd1" />
  <circle cx="90" cy="78" r="2" className="fkm_vector-dot fkm_vd2" />
  <circle cx="85" cy="84" r="2" className="fkm_vector-dot fkm_vd3" />

  {/* BM25 score labels */}
  <text x="76" y="98" className="fkm_bm-label">BM25</text>
  <text x="92" y="98" className="fkm_score">0.87</text>

  {/* LanceDB label */}
  <text x="20" y="82" className="fkm_bm-label">LanceDB</text>
  <rect x="20" y="85" width="40" height="3" rx="1" fill="#E8E9EF" />
  <rect x="20" y="85" width="32" height="3" rx="1" fill="#C4875B" opacity="0.5" />
</svg>
  );
}
