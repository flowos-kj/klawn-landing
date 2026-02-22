export function FeatureFetchLimit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <style dangerouslySetInnerHTML={{__html: `
    .ffl_bg { fill: #F0F1F5; }
    .ffl_inner-border { fill: none; stroke: #FFFFFF; stroke-width: 2; }
    .ffl_pipe {
      fill: none;
      stroke: #2D3561;
      stroke-width: 2;
      stroke-linecap: round;
    }
    .ffl_pipe-inner {
      fill: none;
      stroke: #3D4578;
      stroke-width: 8;
      stroke-linecap: round;
      opacity: 0.15;
    }
    .ffl_flow {
      fill: none;
      stroke: #C4875B;
      stroke-width: 3;
      stroke-linecap: round;
      stroke-dasharray: 8 12;
      animation: ffl_flowAnim 2s linear infinite;
    }
    @keyframes ffl_flowAnim {
      0% { stroke-dashoffset: 0; }
      100% { stroke-dashoffset: -20; }
    }
    .ffl_meter-bg {
      fill: #E8E9EF;
    }
    .ffl_meter-fill {
      fill: #C4875B;
      animation: ffl_meterGrow 3s ease-in-out infinite;
    }
    @keyframes ffl_meterGrow {
      0%, 100% { height: 5px; y: 80px; }
      40% { height: 30px; y: 55px; }
      60% { height: 35px; y: 50px; fill: #C4875B; }
      75% { height: 38px; y: 47px; fill: #A87049; }
      80% { height: 35px; y: 50px; }
    }
    .ffl_limit-line {
      stroke: #C4875B;
      stroke-width: 1.5;
      stroke-dasharray: 3 2;
      opacity: 0.8;
    }
    .ffl_label {
      font-family: 'Geist Mono', monospace;
      font-size: 6px;
      fill: #5A5E7A;
    }
    .ffl_label-accent {
      font-family: 'Geist Mono', monospace;
      font-size: 7px;
      font-weight: bold;
      fill: #C4875B;
    }
    .ffl_byte-dot {
      fill: #C4875B;
      animation: ffl_bytePulse 1.5s ease-in-out infinite;
    }
    .ffl_bd1 { animation-delay: 0s; }
    .ffl_bd2 { animation-delay: -0.3s; }
    .ffl_bd3 { animation-delay: -0.6s; }
    .ffl_bd4 { animation-delay: -0.9s; }
    @keyframes ffl_bytePulse {
      0%, 100% { opacity: 0.3; r: 1.5; }
      50% { opacity: 1; r: 2.5; }
    }
    .ffl_gate {
      fill: #2D3561;
      animation: ffl_gateClose 3s ease-in-out infinite;
    }
    @keyframes ffl_gateClose {
      0%, 60% { transform: scaleY(0); }
      75%, 90% { transform: scaleY(1); }
      100% { transform: scaleY(0); }
    }
  `}} />

  {/* Background */}
  <rect x="6" y="6" width="108" height="108" rx="28" className="ffl_bg" />
  <rect x="6" y="6" width="108" height="108" rx="28" className="ffl_inner-border" />

  {/* Data pipe */}
  <line x1="25" y1="55" x2="95" y2="55" className="ffl_pipe-inner" />
  <line x1="25" y1="50" x2="95" y2="50" className="ffl_pipe" />
  <line x1="25" y1="60" x2="95" y2="60" className="ffl_pipe" />

  {/* Flow animation along pipe */}
  <line x1="25" y1="55" x2="65" y2="55" className="ffl_flow" />

  {/* Byte counting dots */}
  <circle cx="30" cy="55" r="2" className="ffl_byte-dot ffl_bd1" />
  <circle cx="40" cy="55" r="2" className="ffl_byte-dot ffl_bd2" />
  <circle cx="50" cy="55" r="2" className="ffl_byte-dot ffl_bd3" />
  <circle cx="60" cy="55" r="2" className="ffl_byte-dot ffl_bd4" />

  {/* Gate at limit point */}
  <g style={{transformOrigin: '68px 60px'}}>
    <rect x="66" y="48" width="4" height="14" rx="1" className="ffl_gate" />
  </g>

  {/* Meter */}
  <rect x="82" y="42" width="14" height="44" rx="3" className="ffl_meter-bg" />
  <rect x="84" y="80" width="10" height="5" rx="2" className="ffl_meter-fill" />

  {/* Limit line on meter */}
  <line x1="80" y1="50" x2="98" y2="50" className="ffl_limit-line" />

  {/* Labels */}
  <text x="82" y="39" className="ffl_label-accent">10MB</text>
  <text x="26" y="45" className="ffl_label">stream</text>
</svg>
  );
}
