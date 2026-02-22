export function FeatureScheduler(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <style dangerouslySetInnerHTML={{__html: `
    .fsch_bg { fill: #F0F1F5; }
    .fsch_inner-border { fill: none; stroke: #FFFFFF; stroke-width: 2; }
    .fsch_clock-face {
      fill: #FFFFFF;
      stroke: #2D3561;
      stroke-width: 2;
    }
    .fsch_tick {
      stroke: #2D3561;
      stroke-width: 1.5;
      stroke-linecap: round;
    }
    .fsch_hand-h {
      stroke: #2D3561;
      stroke-width: 2.5;
      stroke-linecap: round;
      transform-origin: 45px 55px;
      animation: fsch_hourSpin 12s linear infinite;
    }
    @keyframes fsch_hourSpin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .fsch_hand-m {
      stroke: #C4875B;
      stroke-width: 2;
      stroke-linecap: round;
      transform-origin: 45px 55px;
      animation: fsch_minSpin 4s linear infinite;
    }
    @keyframes fsch_minSpin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .fsch_task-bar {
      rx: 2;
      animation: fsch_taskSlide 3s ease-in-out infinite;
    }
    .fsch_tb1 { fill: #C4875B; animation-delay: 0s; }
    .fsch_tb2 { fill: #D49B72; animation-delay: -0.5s; }
    .fsch_tb3 { fill: #2D3561; animation-delay: -1s; }
    .fsch_tb4 { fill: #3D4578; animation-delay: -1.5s; }
    @keyframes fsch_taskSlide {
      0%, 100% { opacity: 0.5; transform: scaleX(0.7); }
      50% { opacity: 1; transform: scaleX(1); }
    }
    .fsch_cron {
      font-family: 'Geist Mono', monospace;
      font-size: 5.5px;
      fill: #5A5E7A;
    }
    .fsch_retry-arrow {
      fill: none;
      stroke: #C4875B;
      stroke-width: 1.5;
      stroke-linecap: round;
      animation: fsch_retryPulse 2s ease-in-out infinite;
    }
    @keyframes fsch_retryPulse {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 1; }
    }
    .fsch_dot {
      fill: #C4875B;
      animation: fsch_dotPulse 1.5s ease-in-out infinite;
    }
    .fsch_d1 { animation-delay: 0s; }
    .fsch_d2 { animation-delay: -0.5s; }
    .fsch_d3 { animation-delay: -1s; }
    @keyframes fsch_dotPulse {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 1; }
    }
  `}} />

  {/* Background */}
  <rect x="6" y="6" width="108" height="108" rx="28" className="fsch_bg" />
  <rect x="6" y="6" width="108" height="108" rx="28" className="fsch_inner-border" />

  {/* Clock face */}
  <circle cx="45" cy="55" r="22" className="fsch_clock-face" />

  {/* Clock ticks */}
  <line x1="45" y1="35" x2="45" y2="38" className="fsch_tick" />
  <line x1="45" y1="72" x2="45" y2="75" className="fsch_tick" />
  <line x1="25" y1="55" x2="28" y2="55" className="fsch_tick" />
  <line x1="62" y1="55" x2="65" y2="55" className="fsch_tick" />

  {/* Clock hands */}
  <line x1="45" y1="55" x2="45" y2="42" className="fsch_hand-h" />
  <line x1="45" y1="55" x2="45" y2="39" className="fsch_hand-m" />

  {/* Center dot */}
  <circle cx="45" cy="55" r="2" fill="#C4875B" />

  {/* Task timeline bars (right side) */}
  <rect x="74" y="38" width="24" height="5" className="fsch_task-bar fsch_tb1" style={{transformOrigin: '74px 40px'}} />
  <rect x="74" y="48" width="18" height="5" className="fsch_task-bar fsch_tb2" style={{transformOrigin: '74px 50px'}} />
  <rect x="74" y="58" width="22" height="5" className="fsch_task-bar fsch_tb3" style={{transformOrigin: '74px 60px'}} />
  <rect x="74" y="68" width="16" height="5" className="fsch_task-bar fsch_tb4" style={{transformOrigin: '74px 70px'}} />

  {/* Connecting dots between clock and tasks */}
  <circle cx="68" cy="45" r="1.5" className="fsch_dot fsch_d1" />
  <circle cx="70" cy="55" r="1.5" className="fsch_dot fsch_d2" />
  <circle cx="68" cy="65" r="1.5" className="fsch_dot fsch_d3" />

  {/* Retry arrow */}
  <path d="M80 80 A8 8 0 1 1 92 82" className="fsch_retry-arrow" />
  <polygon points="92,79 95,82 91,84" fill="#C4875B" opacity="0.8" />

  {/* Cron label */}
  <text x="24" y="90" className="fsch_cron">0 * * * *</text>
</svg>
  );
}
