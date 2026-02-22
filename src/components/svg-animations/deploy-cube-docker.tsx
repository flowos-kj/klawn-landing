export function DeployCubeDocker(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <style dangerouslySetInnerHTML={{__html: `
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-3px); }
    }
    @keyframes shadowScale {
      0%, 100% { transform: scale(1); opacity: 0.3; }
      50% { transform: scale(0.85); opacity: 0.15; }
    }
    .dcd_cube {
      animation: float 3s ease-in-out infinite;
      transform-origin: 60px 60px;
    }
    .dcd_shadow {
      animation: shadowScale 3s ease-in-out infinite;
      transform-origin: 60px 95px;
    }
  `}} />

  <ellipse className="dcd_shadow" cx="60" cy="95" rx="22" ry="7" fill="#1E2249" />

  <g className="dcd_cube">
    <polygon points="60,25 90,40 60,55 30,40" fill="#D49B72" stroke="#1E2249" strokeWidth="1.5" strokeLinejoin="round"/>
    
    <polygon points="60,29.5 81,40 60,50.5 39,40" fill="#C4875B" stroke="#A87049" strokeWidth="1" strokeLinejoin="round"/>

    <polygon points="30,40 60,55 60,85 30,70" fill="#2D3561" stroke="#1E2249" strokeWidth="1.5" strokeLinejoin="round"/>

    <polygon points="60,55 90,40 90,70 60,85" fill="#3D4578" stroke="#1E2249" strokeWidth="1.5" strokeLinejoin="round"/>

    <path d="M65,54.5 L65,80.5 M70,52 L70,78 M75,49.5 L75,75.5 M80,47 L80,73 M85,44.5 L85,70.5" stroke="#1E2249" strokeWidth="1" strokeLinecap="round"/>

    <polygon points="45,53 52,56.5 52,64.5 45,68 38,64.5 38,56.5" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="45" cy="60.5" r="1.5" fill="#FFFFFF"/>
    <path d="M45,68 L45,60.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
  </g>
</svg>
  );
}
