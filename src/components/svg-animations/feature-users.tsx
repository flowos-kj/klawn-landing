export function FeatureUsers(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <style dangerouslySetInnerHTML={{__html: `
    .fu_bob-1 { animation: wave 3s ease-in-out infinite; }
    .fu_bob-2 { animation: wave 3s ease-in-out 0.15s infinite; }
    .fu_bob-3 { animation: wave 3s ease-in-out 0.3s infinite; }
    @keyframes wave {
      0%, 40%, 100% { transform: translateY(0); }
      20% { transform: translateY(-7px); }
    }
  `}} />
  
  <rect width="120" height="120" rx="28" fill="#F0F1F5" />
  
  <line x1="18" y1="85.75" x2="102" y2="85.75" stroke="#1E2249" strokeWidth="1.5" strokeLinecap="round" />
  
  <g className="fu_bob-1">
    <circle cx="34" cy="56" r="8" fill="#2D3561" stroke="#1E2249" strokeWidth="1.5" />
    <path d="M22,85 v-8 a12,12 0 0,1 24,0 v8 Z" fill="#2D3561" stroke="#1E2249" strokeWidth="1.5" strokeLinejoin="round" />
  </g>

  <g className="fu_bob-3">
    <circle cx="86" cy="56" r="8" fill="#2D3561" stroke="#1E2249" strokeWidth="1.5" />
    <path d="M74,85 v-8 a12,12 0 0,1 24,0 v8 Z" fill="#2D3561" stroke="#1E2249" strokeWidth="1.5" strokeLinejoin="round" />
  </g>

  <g className="fu_bob-2">
    <circle cx="60" cy="44" r="10.5" fill="#C4875B" stroke="#1E2249" strokeWidth="1.5" />
    <path d="M45,85 v-12 a15,15 0 0,1 30,0 v12 Z" fill="#C4875B" stroke="#1E2249" strokeWidth="1.5" strokeLinejoin="round" />
  </g>
</svg>
  );
}
