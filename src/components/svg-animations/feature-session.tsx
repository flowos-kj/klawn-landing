export function FeatureSession(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <style dangerouslySetInnerHTML={{__html: `
    .fse_bg { fill: #F0F1F5; }
    .fse_inner-border { fill: none; stroke: #FFFFFF; stroke-width: 2; }
    .fse_page {
      fill: #FFFFFF;
      stroke: #2D3561;
      stroke-width: 1.5;
      stroke-linejoin: round;
    }
    .fse_page-shadow {
      fill: #E8E9EF;
      stroke: #D0D2DC;
      stroke-width: 1;
      stroke-linejoin: round;
    }
    .fse_line {
      stroke: #D0D2DC;
      stroke-width: 1.5;
      stroke-linecap: round;
    }
    .fse_line-active {
      stroke: #C4875B;
      stroke-width: 1.5;
      stroke-linecap: round;
      animation: fse_lineGlow 3s ease-in-out infinite;
    }
    .fse_la1 { animation-delay: 0s; }
    .fse_la2 { animation-delay: -1s; }
    .fse_la3 { animation-delay: -2s; }
    @keyframes fse_lineGlow {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 1; }
    }
    .fse_checkpoint {
      fill: #C4875B;
      transform-box: fill-box;
      transform-origin: center;
      animation: fse_cpPulse 2.5s ease-in-out infinite;
    }
    .fse_cp1 { animation-delay: 0s; }
    .fse_cp2 { animation-delay: -0.8s; }
    .fse_cp3 { animation-delay: -1.6s; }
    @keyframes fse_cpPulse {
      0%, 100% { transform: scale(1); opacity: 0.6; }
      50% { transform: scale(1.4); opacity: 1; }
    }
    .fse_arrow {
      fill: none;
      stroke: #2D3561;
      stroke-width: 1.5;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .fse_restore-arc {
      fill: none;
      stroke: #C4875B;
      stroke-width: 1.5;
      stroke-linecap: round;
      stroke-dasharray: 12 88;
      transform-origin: 85px 55px;
      animation: fse_arcSpin 3s linear infinite;
    }
    @keyframes fse_arcSpin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .fse_jsonl {
      font-family: 'Geist Mono', monospace;
      font-size: 5px;
      fill: #5A5E7A;
    }
    .fse_badge {
      fill: #2D3561;
      rx: 3;
    }
    .fse_badge-text {
      font-family: 'Geist Mono', monospace;
      font-size: 5px;
      fill: #FFFFFF;
    }
    .fse_write-dot {
      fill: #C4875B;
      animation: fse_writePulse 1.5s ease-in-out infinite;
    }
    .fse_wd1 { animation-delay: 0s; }
    .fse_wd2 { animation-delay: -0.5s; }
    .fse_wd3 { animation-delay: -1s; }
    @keyframes fse_writePulse {
      0%, 100% { opacity: 0.2; }
      50% { opacity: 1; }
    }
  `}} />

  {/* Background */}
  <rect x="6" y="6" width="108" height="108" rx="28" className="fse_bg" />
  <rect x="6" y="6" width="108" height="108" rx="28" className="fse_inner-border" />

  {/* Stacked pages (back to front) */}
  <rect x="30" y="30" width="40" height="52" rx="3" className="fse_page-shadow" />
  <rect x="26" y="27" width="40" height="52" rx="3" className="fse_page-shadow" />
  <rect x="22" y="24" width="40" height="52" rx="3" className="fse_page" />

  {/* Content lines on front page */}
  <line x1="28" y1="34" x2="50" y2="34" className="fse_line-active fse_la1" />
  <line x1="28" y1="40" x2="46" y2="40" className="fse_line" />
  <line x1="28" y1="46" x2="52" y2="46" className="fse_line-active fse_la2" />
  <line x1="28" y1="52" x2="44" y2="52" className="fse_line" />
  <line x1="28" y1="58" x2="48" y2="58" className="fse_line-active fse_la3" />
  <line x1="28" y1="64" x2="42" y2="64" className="fse_line" />

  {/* Checkpoint markers */}
  <circle cx="55" cy="34" r="2.5" className="fse_checkpoint fse_cp1" />
  <circle cx="55" cy="46" r="2.5" className="fse_checkpoint fse_cp2" />
  <circle cx="55" cy="58" r="2.5" className="fse_checkpoint fse_cp3" />

  {/* Restore arc (right side) */}
  <circle cx="85" cy="55" r="14" className="fse_restore-arc" />
  <path d="M85 41 L88 44 L82 44 Z" fill="#C4875B" />

  {/* Arrow from checkpoint to restore */}
  <path d="M58 46 C65 46, 68 50, 71 55" className="fse_arrow" />

  {/* Writing dots */}
  <circle cx="70" cy="80" r="1.5" className="fse_write-dot fse_wd1" />
  <circle cx="76" cy="80" r="1.5" className="fse_write-dot fse_wd2" />
  <circle cx="82" cy="80" r="1.5" className="fse_write-dot fse_wd3" />

  {/* JSONL badge */}
  <rect x="20" y="82" width="28" height="10" className="fse_badge" />
  <text x="24" y="89.5" className="fse_badge-text">.jsonl</text>
</svg>
  );
}
