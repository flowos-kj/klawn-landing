export function SecurityEyeMasking(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <style dangerouslySetInnerHTML={{__html: `
    @keyframes maskWipe {
      0% { transform: translateX(-120px); }
      40% { transform: translateX(0px); }
      50% { transform: translateX(0px); }
      90% { transform: translateX(120px); }
      100% { transform: translateX(120px); }
    }
    
    @keyframes bandSweep {
      0% { transform: translateX(0px); opacity: 0; }
      2% { opacity: 1; }
      38% { opacity: 1; }
      40% { transform: translateX(120px); opacity: 0; }
      49.9% { transform: translateX(120px); opacity: 0; }
      50% { transform: translateX(0px); opacity: 0; }
      52% { opacity: 1; }
      88% { opacity: 1; }
      90% { transform: translateX(120px); opacity: 0; }
      100% { transform: translateX(120px); opacity: 0; }
    }

    .sem_mask-rect {
      animation: maskWipe 3s infinite cubic-bezier(0.4, 0.0, 0.2, 1);
    }

    .sem_scanner-band {
      animation: bandSweep 3s infinite cubic-bezier(0.4, 0.0, 0.2, 1);
    }
  `}} />

  <defs>
    <mask id="sem-redacted-mask">
      <rect x="0" y="0" width="120" height="120" fill="black" />
      <rect x="0" y="0" width="120" height="120" fill="white" className="sem_mask-rect" />
    </mask>
    <mask id="sem-normal-mask">
      <rect x="0" y="0" width="120" height="120" fill="white" />
      <rect x="0" y="0" width="120" height="120" fill="black" className="sem_mask-rect" />
    </mask>
  </defs>

  {/* Normal Eye */}
  <g mask="url(#sem-normal-mask)">
    <path d="M 16 60 Q 60 25 104 60 Q 60 95 16 60 Z" fill="none" stroke="#3D4578" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="60" cy="60" r="14" fill="none" stroke="#2D3561" strokeWidth="1.5" />
    <circle cx="60" cy="60" r="4" fill="#1E2249" />
  </g>

  {/* Redacted Eye */}
  <g mask="url(#sem-redacted-mask)">
    <path d="M 16 60 Q 60 25 104 60 Q 60 95 16 60 Z" fill="none" stroke="#3D4578" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <g stroke="#2D3561" strokeWidth="1.5" strokeLinecap="round">
      {/* Asterisk 1 */}
      <path d="M 38,54 L 38,66 M 32.8,57 L 43.2,63 M 32.8,63 L 43.2,57" />
      {/* Asterisk 2 */}
      <path d="M 60,54 L 60,66 M 54.8,57 L 65.2,63 M 54.8,63 L 65.2,57" />
      {/* Asterisk 3 */}
      <path d="M 82,54 L 82,66 M 76.8,57 L 87.2,63 M 76.8,63 L 87.2,57" />
    </g>
  </g>

  {/* Copper Scanning Band */}
  <g className="sem_scanner-band">
    {/* Playhead Top/Bottom Arrows */}
    <path d="M -3 21 L 3 21 L 0 25 Z" fill="#C4875B" stroke="#C4875B" strokeWidth="1" strokeLinejoin="round" />
    <path d="M -3 99 L 3 99 L 0 95 Z" fill="#C4875B" stroke="#C4875B" strokeWidth="1" strokeLinejoin="round" />
    {/* Main Line */}
    <rect x="-1" y="24" width="2" height="72" fill="#C4875B" />
    <rect x="0" y="24" width="1" height="72" fill="#D49B72" />
  </g>
</svg>
  );
}
