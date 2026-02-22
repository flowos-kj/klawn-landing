export function FeatureShellGuard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <style dangerouslySetInnerHTML={{__html: `
    .fshg_bg { fill: #F0F1F5; }
    .fshg_inner-border { fill: none; stroke: #FFFFFF; stroke-width: 2; }
    .fshg_term-bg { fill: #1A1D3A; rx: 6; }
    .fshg_term-bar { fill: #2D3561; }
    .fshg_dot-r { fill: #C4875B; }
    .fshg_dot-y { fill: #D49B72; }
    .fshg_dot-g { fill: #3D4578; }
    .fshg_text {
      font-family: 'Geist Mono', monospace;
      font-size: 5px;
      fill: #5A5E7A;
    }
    .fshg_text-danger {
      font-family: 'Geist Mono', monospace;
      font-size: 5px;
      fill: #C4875B;
    }
    .fshg_strike {
      stroke: #C4875B;
      stroke-width: 1;
      stroke-linecap: round;
      animation: fshg_strikeAnim 4s ease-in-out infinite;
    }
    .fshg_s1 { animation-delay: 0s; }
    .fshg_s2 { animation-delay: -1.3s; }
    .fshg_s3 { animation-delay: -2.6s; }
    @keyframes fshg_strikeAnim {
      0%, 15% { opacity: 0; }
      20%, 80% { opacity: 1; }
      85%, 100% { opacity: 0; }
    }
    .fshg_cursor {
      fill: #C4875B;
      animation: fshg_blink 1s step-end infinite;
    }
    @keyframes fshg_blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
    .fshg_sweep {
      fill: #C4875B;
      opacity: 0.1;
      animation: fshg_sweepAnim 4s ease-in-out infinite;
    }
    @keyframes fshg_sweepAnim {
      0% { transform: translateY(-20px); opacity: 0; }
      20% { opacity: 0.15; }
      80% { opacity: 0.15; }
      100% { transform: translateY(20px); opacity: 0; }
    }
    .fshg_check {
      fill: none;
      stroke: #3D4578;
      stroke-width: 1.5;
      stroke-linecap: round;
      stroke-linejoin: round;
      animation: fshg_checkIn 4s ease-out infinite;
    }
    @keyframes fshg_checkIn {
      0%, 70% { opacity: 0; stroke-dashoffset: 10; }
      85%, 100% { opacity: 1; stroke-dashoffset: 0; }
    }
  `}} />

  {/* Background */}
  <rect x="6" y="6" width="108" height="108" rx="28" className="fshg_bg" />
  <rect x="6" y="6" width="108" height="108" rx="28" className="fshg_inner-border" />

  {/* Terminal window */}
  <rect x="20" y="28" width="80" height="64" rx="6" className="fshg_term-bg" />
  <rect x="20" y="28" width="80" height="12" rx="6" className="fshg_term-bar" />
  <rect x="20" y="34" width="80" height="6" className="fshg_term-bar" />

  {/* Title bar dots */}
  <circle cx="28" cy="34" r="2" className="fshg_dot-r" />
  <circle cx="34" cy="34" r="2" className="fshg_dot-y" />
  <circle cx="40" cy="34" r="2" className="fshg_dot-g" />

  {/* Sweep highlight */}
  <rect x="22" y="44" width="76" height="8" className="fshg_sweep" />

  {/* Env var lines with strikethroughs */}
  <text x="26" y="50" className="fshg_text-danger">BASH_ENV</text>
  <line x1="25" y1="48.5" x2="56" y2="48.5" className="fshg_strike fshg_s1" />

  <text x="26" y="58" className="fshg_text-danger">LD_PRELOAD</text>
  <line x1="25" y1="56.5" x2="60" y2="56.5" className="fshg_strike fshg_s2" />

  <text x="26" y="66" className="fshg_text-danger">NODE_OPTIONS</text>
  <line x1="25" y1="64.5" x2="65" y2="64.5" className="fshg_strike fshg_s3" />

  {/* Safe prompt */}
  <text x="26" y="78" className="fshg_text">$ safe_exec</text>
  <rect x="56" y="74" width="4" height="6" className="fshg_cursor" />

  {/* Check mark */}
  <path d="M85 78 L88 81 L93 74" className="fshg_check" strokeDasharray="10" />
</svg>
  );
}
