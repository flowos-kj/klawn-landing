export function FeatureMegaphone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <style dangerouslySetInnerHTML={{__html: `
    .fm_wave {
      transform-origin: 66px 60px;
      opacity: 0;
      fill: none;
      stroke: #D49B72;
      stroke-width: 2;
      stroke-linecap: round;
    }
    .fm_wave1 { animation: broadcast 3s infinite 0s; }
    .fm_wave2 { animation: broadcast 3s infinite 0.4s; }
    .fm_wave3 { animation: broadcast 3s infinite 0.8s; }
    
    @keyframes broadcast {
      0% { 
        opacity: 0; 
        transform: scale(0.85) translateX(-2px); 
      }
      15% { 
        opacity: 1; 
        transform: scale(1) translateX(0px); 
      }
      45% { 
        opacity: 0; 
        transform: scale(1.15) translateX(4px); 
      }
      100% { 
        opacity: 0; 
        transform: scale(1.15) translateX(4px); 
      }
    }
  `}} />

  {/* Background */}
  <rect width="120" height="120" rx="24" fill="#F0F1F5" />

  {/* Megaphone Handle (Copper) */}
  <path d="M43 65 L37.5 83.5 C37 85 39 86.5 40 85 L47 66 Z" fill="#C4875B" stroke="#A87049" strokeWidth="1.5" strokeLinejoin="round" />
  
  {/* Handle Trigger Button */}
  <path d="M40 65 L43 62" stroke="#A87049" strokeWidth="2" strokeLinecap="round" />

  {/* Megaphone Mouthpiece (Navy Light) */}
  <rect x="18" y="56" width="10" height="8" rx="2" fill="#3D4578" stroke="#1E2249" strokeWidth="1.5" />

  {/* Megaphone Cone Body (Navy) */}
  <path d="M28 56 L64 42 C65 41.6 66 42.3 66 43.4 L66 76.6 C66 77.7 65 78.4 64 78 L28 64 C26.8 63.5 26.8 56.5 28 56 Z" fill="#2D3561" stroke="#1E2249" strokeWidth="1.5" strokeLinejoin="round" />

  {/* Cone Highlight */}
  <path d="M30 58 L62 45.5" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" opacity="0.15" />

  {/* Cone End Cap Detail */}
  <line x1="62" y1="44.5" x2="62" y2="75.5" stroke="#1E2249" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />

  {/* Sound Waves (Copper Light) */}
  <g>
    {/* Wave 1 */}
    <path className="fm_wave fm_wave1" d="M 73.07 52.93 A 10 10 0 0 1 73.07 67.07" />
    
    {/* Wave 2 */}
    <path className="fm_wave fm_wave2" d="M 80.14 45.86 A 20 20 0 0 1 80.14 74.14" />
    
    {/* Wave 3 */}
    <path className="fm_wave fm_wave3" d="M 87.21 38.79 A 30 30 0 0 1 87.21 81.21" />
  </g>
</svg>
  );
}
