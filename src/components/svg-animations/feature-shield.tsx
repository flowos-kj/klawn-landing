export function FeatureShield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <style dangerouslySetInnerHTML={{__html: `
    .fs_ring {
      fill: none;
      stroke: #D49B72;
      stroke-width: 1.5px;
      transform-origin: 60px 60px;
      animation: pulse 4s cubic-bezier(0.16, 1, 0.3, 1) infinite;
    }
    .fs_ring-1 { animation-delay: 0s; }
    .fs_ring-2 { animation-delay: 1.333s; }
    .fs_ring-3 { animation-delay: 2.666s; }

    @keyframes pulse {
      0% {
        transform: scale(0.95);
        opacity: 0;
      }
      15% {
        opacity: 0.8;
      }
      100% {
        transform: scale(2.2);
        opacity: 0;
      }
    }
  `}} />

  {/* Pulse Rings */}
  <path className="fs_ring fs_ring-1" d="M60 35 L80 40 L80 65 C80 78, 60 85, 60 85 C60 85, 40 78, 40 65 L40 40 Z" strokeLinejoin="round" strokeLinecap="round"/>
  <path className="fs_ring fs_ring-2" d="M60 35 L80 40 L80 65 C80 78, 60 85, 60 85 C60 85, 40 78, 40 65 L40 40 Z" strokeLinejoin="round" strokeLinecap="round"/>
  <path className="fs_ring fs_ring-3" d="M60 35 L80 40 L80 65 C80 78, 60 85, 60 85 C60 85, 40 78, 40 65 L40 40 Z" strokeLinejoin="round" strokeLinecap="round"/>

  {/* Main Shield Background */}
  <path d="M60 35 L80 40 L80 65 C80 78, 60 85, 60 85 C60 85, 40 78, 40 65 L40 40 Z" fill="#FFFFFF" stroke="none"/>

  {/* Main Shield Outline */}
  <path d="M60 35 L80 40 L80 65 C80 78, 60 85, 60 85 C60 85, 40 78, 40 65 L40 40 Z" fill="none" stroke="#2D3561" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>

  {/* Checkmark */}
  <path d="M53 60 L58 65 L68 53" fill="none" stroke="#C4875B" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
</svg>
  );
}
