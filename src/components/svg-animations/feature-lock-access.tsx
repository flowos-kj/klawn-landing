export function FeatureLockAccess(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <style dangerouslySetInnerHTML={{__html: `
    .fla_bg-surface {
      fill: #F0F1F5;
    }
    .fla_shield {
      fill: #FFFFFF;
      stroke: #2D3561;
      stroke-width: 2px;
      stroke-linejoin: round;
    }
    .fla_ripple {
      fill: none;
      stroke: #C4875B;
      stroke-width: 1px;
      transform-origin: 60px 60px;
      animation: pulse 4s linear infinite;
    }
    .fla_r1 { animation-delay: 0s; }
    .fla_r2 { animation-delay: 1.33s; }
    .fla_r3 { animation-delay: 2.66s; }
    
    .fla_lock-shackle {
      fill: none;
      stroke: #C4875B;
      stroke-width: 2px;
      stroke-linecap: round;
      animation: shackleMove 4s ease-in-out infinite;
    }
    
    .fla_lock-body {
      fill: #C4875B;
      stroke: #C4875B;
      stroke-width: 1.5px;
      stroke-linejoin: round;
    }
    
    .fla_lock-keyhole {
      stroke: #FFFFFF;
      stroke-width: 1.5px;
      stroke-linecap: round;
    }

    @keyframes pulse {
      0% {
        transform: scale(0.65);
        opacity: 0;
      }
      15% {
        opacity: 0.6;
      }
      100% {
        transform: scale(1.15);
        opacity: 0;
      }
    }

    @keyframes shackleMove {
      0%, 15%, 85%, 100% {
        transform: translateY(0);
      }
      35%, 65% {
        transform: translateY(-4px);
      }
    }
  `}} />

  <rect width="120" height="120" rx="16" className="fla_bg-surface" />

  <g>
    <circle cx="60" cy="60" r="45" className="fla_ripple fla_r1" />
    <circle cx="60" cy="60" r="45" className="fla_ripple fla_r2" />
    <circle cx="60" cy="60" r="45" className="fla_ripple fla_r3" />
  </g>

  <path d="M 60 25 L 35 25 C 35 60, 45 80, 60 95 C 75 80, 85 60, 85 25 Z" className="fla_shield" />

  <g>
    <path d="M 55 60 V 49 A 5 5 0 0 1 65 49 V 60" className="fla_lock-shackle" />
    <rect x="52" y="55" width="16" height="13" rx="2" className="fla_lock-body" />
    <line x1="60" y1="59" x2="60" y2="63" className="fla_lock-keyhole" />
  </g>
</svg>
  );
}
