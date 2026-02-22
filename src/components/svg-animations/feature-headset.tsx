export function FeatureHeadset(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <style dangerouslySetInnerHTML={{__html: `
    @keyframes bob {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(2px); }
    }
    @keyframes dot-pulse {
      0% { transform: translateX(-4px) scale(0.5); opacity: 0; }
      20% { transform: translateX(0px) scale(1); opacity: 1; }
      70% { transform: translateX(6px) scale(1.5); opacity: 0; }
      100% { transform: translateX(6px) scale(1.5); opacity: 0; }
    }
    .fh_headset {
      animation: bob 4s ease-in-out infinite;
    }
    .fh_dot {
      animation: dot-pulse 2.5s infinite cubic-bezier(0.3, 0.5, 0.4, 1);
      opacity: 0;
    }
    .fh_dot1 { transform-origin: 50px 85px; animation-delay: 0s; }
    .fh_dot2 { transform-origin: 55px 85px; animation-delay: 0.2s; }
    .fh_dot3 { transform-origin: 60px 85px; animation-delay: 0.4s; }
  `}} />

  <rect width="120" height="120" fill="#FFFFFF" />
  <circle cx="60" cy="60" r="46" fill="#F0F1F5" />

  <g className="fh_headset">
    <path d="M 32 60 A 28 28 0 0 1 88 60" fill="none" stroke="#2D3561" strokeWidth="2" strokeLinecap="round" />
    <path d="M 44 34 A 28 28 0 0 1 76 34" fill="none" stroke="#3D4578" strokeWidth="4" strokeLinecap="round" />
    
    <rect x="28" y="52" width="8" height="20" rx="4" fill="#FFFFFF" stroke="#2D3561" strokeWidth="2" />
    <line x1="32" y1="56" x2="32" y2="68" stroke="#1E2249" strokeWidth="1" strokeLinecap="round" />
    
    <rect x="84" y="52" width="8" height="20" rx="4" fill="#FFFFFF" stroke="#2D3561" strokeWidth="2" />
    <line x1="88" y1="56" x2="88" y2="68" stroke="#1E2249" strokeWidth="1" strokeLinecap="round" />

    <path d="M 32 66 Q 32 85 43 85" fill="none" stroke="#C4875B" strokeWidth="2" strokeLinecap="round" />
    
    <circle cx="44" cy="85" r="2.5" fill="#A87049" />

    <circle className="fh_dot fh_dot1" cx="50" cy="85" r="1.5" fill="#C4875B" />
    <circle className="fh_dot fh_dot2" cx="55" cy="85" r="1.5" fill="#D49B72" />
    <circle className="fh_dot fh_dot3" cx="60" cy="85" r="1.5" fill="#D49B72" />
  </g>
</svg>
  );
}
