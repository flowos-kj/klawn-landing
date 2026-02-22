export function FeatureCredentialRotation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <style dangerouslySetInnerHTML={{__html: `
    .fcr_bg { fill: #F0F1F5; }
    .fcr_inner-border { fill: none; stroke: #FFFFFF; stroke-width: 2; }
    .fcr_orbit {
      fill: none;
      stroke: #2D3561;
      stroke-width: 1;
      stroke-dasharray: 4 4;
      opacity: 0.4;
    }
    .fcr_key-group {
      transform-origin: 60px 58px;
      animation: fcr_rotate 8s linear infinite;
    }
    @keyframes fcr_rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .fcr_key-body {
      fill: #2D3561;
      stroke: #1E2249;
      stroke-width: 0.5;
    }
    .fcr_key-active {
      fill: #C4875B;
      stroke: #A87049;
      stroke-width: 0.5;
    }
    .fcr_glow {
      fill: #C4875B;
      opacity: 0;
      animation: fcr_glowPulse 8s ease-in-out infinite;
    }
    @keyframes fcr_glowPulse {
      0%, 20% { opacity: 0.4; }
      25%, 100% { opacity: 0; }
    }
    .fcr_center-hub {
      fill: #FFFFFF;
      stroke: #2D3561;
      stroke-width: 2;
    }
    .fcr_hub-ring {
      fill: none;
      stroke: #C4875B;
      stroke-width: 1.5;
      transform-origin: 60px 58px;
      animation: fcr_hubPulse 3s ease-out infinite;
    }
    .fcr_hr1 { animation-delay: 0s; }
    .fcr_hr2 { animation-delay: -1.5s; }
    @keyframes fcr_hubPulse {
      0% { transform: scale(1); opacity: 0.6; }
      100% { transform: scale(2.2); opacity: 0; }
    }
    .fcr_cooldown {
      fill: none;
      stroke: #D49B72;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-dasharray: 16 84;
      transform-origin: 60px 58px;
      animation: fcr_coolSpin 4s linear infinite;
    }
    @keyframes fcr_coolSpin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .fcr_label {
      font-family: 'Geist Mono', monospace;
      font-size: 5.5px;
      fill: #5A5E7A;
    }
    .fcr_label-accent {
      font-family: 'Geist Mono', monospace;
      font-size: 5px;
      fill: #C4875B;
    }
    .fcr_arrow {
      fill: none;
      stroke: #3D4578;
      stroke-width: 1;
      stroke-linecap: round;
      opacity: 0.5;
    }
  `}} />

  {/* Background */}
  <rect x="6" y="6" width="108" height="108" rx="28" className="fcr_bg" />
  <rect x="6" y="6" width="108" height="108" rx="28" className="fcr_inner-border" />

  {/* Orbit circle */}
  <circle cx="60" cy="58" r="28" className="fcr_orbit" />

  {/* Hub pulse rings */}
  <circle cx="60" cy="58" r="10" className="fcr_hub-ring fcr_hr1" />
  <circle cx="60" cy="58" r="10" className="fcr_hub-ring fcr_hr2" />

  {/* Cooldown arc around orbit */}
  <circle cx="60" cy="58" r="28" className="fcr_cooldown" />

  {/* Rotating key group */}
  <g className="fcr_key-group">
    {/* Key 1 (active - top) */}
    <g>
      <circle cx="60" cy="30" r="5" className="fcr_glow" />
      <rect x="57" y="27" width="6" height="10" rx="2" className="fcr_key-active" />
      <circle cx="60" cy="31" r="1.5" fill="#FFFFFF" />
      <rect x="59" y="33" width="2" height="4" rx="0.5" fill="#A87049" />
    </g>
    {/* Key 2 (inactive - right) */}
    <g>
      <rect x="85" y="55" width="6" height="10" rx="2" className="fcr_key-body" />
      <circle cx="88" cy="59" r="1.5" fill="#3D4578" />
      <rect x="87" y="61" width="2" height="4" rx="0.5" fill="#1E2249" />
    </g>
    {/* Key 3 (inactive - bottom-left) */}
    <g>
      <rect x="29" y="73" width="6" height="10" rx="2" className="fcr_key-body" />
      <circle cx="32" cy="77" r="1.5" fill="#3D4578" />
      <rect x="31" y="79" width="2" height="4" rx="0.5" fill="#1E2249" />
    </g>
  </g>

  {/* Center hub */}
  <circle cx="60" cy="58" r="8" className="fcr_center-hub" />
  {/* LRU arrows inside hub */}
  <path d="M56 56 A5 5 0 0 1 64 56" className="fcr_arrow" />
  <path d="M64 60 A5 5 0 0 1 56 60" className="fcr_arrow" />

  {/* Labels */}
  <text x="42" y="98" className="fcr_label">round-robin</text>
  <text x="78" y="42" className="fcr_label-accent">429</text>
</svg>
  );
}
