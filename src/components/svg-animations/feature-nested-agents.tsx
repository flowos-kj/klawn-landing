export function FeatureNestedAgents(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <style dangerouslySetInnerHTML={{__html: `
    .fna_bg { fill: #F0F1F5; }
    .fna_inner-border { fill: none; stroke: #FFFFFF; stroke-width: 2; }
    .fna_branch {
      fill: none;
      stroke: #2D3561;
      stroke-width: 1.5;
      stroke-linecap: round;
    }
    .fna_node-root {
      fill: #C4875B;
      stroke: #A87049;
      stroke-width: 1.5;
    }
    .fna_node-l1 {
      fill: #2D3561;
      stroke: #1E2249;
      stroke-width: 1;
    }
    .fna_node-l2 {
      fill: #3D4578;
      stroke: #2D3561;
      stroke-width: 1;
    }
    .fna_node-l3 {
      fill: #5A5E7A;
      stroke: #3D4578;
      stroke-width: 0.5;
    }
    .fna_signal {
      fill: none;
      stroke: #C4875B;
      stroke-width: 2;
      stroke-dasharray: 4 80;
      stroke-linecap: round;
    }
    .fna_sig1 {
      animation: fna_flow1 2.5s linear infinite;
    }
    .fna_sig2 {
      animation: fna_flow2 3s linear infinite;
      animation-delay: -0.5s;
    }
    .fna_sig3 {
      animation: fna_flow3 2.8s linear infinite;
      animation-delay: -1s;
    }
    @keyframes fna_flow1 {
      0% { stroke-dashoffset: 4; }
      100% { stroke-dashoffset: -80; }
    }
    @keyframes fna_flow2 {
      0% { stroke-dashoffset: 4; }
      100% { stroke-dashoffset: -80; }
    }
    @keyframes fna_flow3 {
      0% { stroke-dashoffset: 4; }
      100% { stroke-dashoffset: -80; }
    }
    .fna_pulse {
      transform-box: fill-box;
      transform-origin: center;
      animation: fna_nodePulse 2.5s ease-in-out infinite;
    }
    .fna_p1 { animation-delay: 0s; }
    .fna_p2 { animation-delay: -0.6s; }
    .fna_p3 { animation-delay: -1.2s; }
    .fna_p4 { animation-delay: -1.8s; }
    @keyframes fna_nodePulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.25); }
    }
    .fna_depth-label {
      font-family: 'Geist Mono', monospace;
      font-size: 5px;
      fill: #5A5E7A;
    }
    .fna_depth-accent {
      font-family: 'Geist Mono', monospace;
      font-size: 5px;
      fill: #C4875B;
    }
    .fna_tool-dot {
      fill: #D49B72;
      animation: fna_toolPass 3s ease-in-out infinite;
    }
    .fna_td1 { animation-delay: 0s; }
    .fna_td2 { animation-delay: -1s; }
    .fna_td3 { animation-delay: -2s; }
    @keyframes fna_toolPass {
      0%, 100% { opacity: 0.2; r: 1; }
      50% { opacity: 0.8; r: 2; }
    }
  `}} />

  {/* Background */}
  <rect x="6" y="6" width="108" height="108" rx="28" className="fna_bg" />
  <rect x="6" y="6" width="108" height="108" rx="28" className="fna_inner-border" />

  {/* Branch lines */}
  <line x1="60" y1="35" x2="36" y2="55" className="fna_branch" />
  <line x1="60" y1="35" x2="84" y2="55" className="fna_branch" />
  <line x1="36" y1="55" x2="24" y2="75" className="fna_branch" />
  <line x1="36" y1="55" x2="48" y2="75" className="fna_branch" />
  <line x1="84" y1="55" x2="72" y2="75" className="fna_branch" />
  <line x1="84" y1="55" x2="96" y2="75" className="fna_branch" />
  <line x1="24" y1="75" x2="18" y2="90" className="fna_branch" />
  <line x1="24" y1="75" x2="30" y2="90" className="fna_branch" />
  <line x1="48" y1="75" x2="44" y2="90" className="fna_branch" />

  {/* Signal flow along branches */}
  <path d="M60 35 L36 55 L24 75 L18 90" pathLength="80" className="fna_signal fna_sig1" />
  <path d="M60 35 L84 55 L72 75" pathLength="80" className="fna_signal fna_sig2" />
  <path d="M60 35 L36 55 L48 75 L44 90" pathLength="80" className="fna_signal fna_sig3" />

  {/* Tool passing dots */}
  <circle cx="48" cy="45" r="1.5" className="fna_tool-dot fna_td1" />
  <circle cx="72" cy="45" r="1.5" className="fna_tool-dot fna_td2" />
  <circle cx="30" cy="65" r="1.5" className="fna_tool-dot fna_td3" />

  {/* Root node (depth 0) */}
  <circle cx="60" cy="35" r="6" className="fna_node-root fna_pulse fna_p1" />

  {/* Level 1 nodes */}
  <circle cx="36" cy="55" r="5" className="fna_node-l1 fna_pulse fna_p2" />
  <circle cx="84" cy="55" r="5" className="fna_node-l1 fna_pulse fna_p3" />

  {/* Level 2 nodes */}
  <circle cx="24" cy="75" r="4" className="fna_node-l2 fna_pulse fna_p4" />
  <circle cx="48" cy="75" r="4" className="fna_node-l2 fna_pulse fna_p1" />
  <circle cx="72" cy="75" r="4" className="fna_node-l2 fna_pulse fna_p2" />
  <circle cx="96" cy="75" r="4" className="fna_node-l2 fna_pulse fna_p3" />

  {/* Level 3 nodes (leaf) */}
  <circle cx="18" cy="90" r="3" className="fna_node-l3 fna_pulse fna_p4" />
  <circle cx="30" cy="90" r="3" className="fna_node-l3 fna_pulse fna_p1" />
  <circle cx="44" cy="90" r="3" className="fna_node-l3 fna_pulse fna_p2" />

  {/* Depth labels */}
  <text x="98" y="38" className="fna_depth-accent">d:0</text>
  <text x="98" y="58" className="fna_depth-label">d:1</text>
  <text x="98" y="78" className="fna_depth-label">d:2</text>
  <text x="98" y="93" className="fna_depth-label">d:3</text>
</svg>
  );
}
