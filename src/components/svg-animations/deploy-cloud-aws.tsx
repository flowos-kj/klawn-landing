export function DeployCloudAws(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    <defs>
        <linearGradient id="dca-cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="dca_gradStop1" />
            <stop offset="50%" className="dca_gradStop2" />
            <stop offset="100%" className="dca_gradStop1" />
        </linearGradient>
    </defs>
    <style dangerouslySetInnerHTML={{__html: `
        .dca_gradStop1 {
            stop-color: #2D3561;
            animation: shimmer1 3s infinite alternate ease-in-out;
        }
        .dca_gradStop2 {
            stop-color: #3D4578;
            animation: shimmer2 3s infinite alternate ease-in-out;
        }
        @keyframes shimmer1 {
            0% { stop-color: #2D3561; }
            100% { stop-color: #1E2249; }
        }
        @keyframes shimmer2 {
            0% { stop-color: #3D4578; }
            100% { stop-color: #2D3561; }
        }
        .dca_arrow-up {
            animation: floatUp 3s infinite ease-in-out;
            transform-origin: 60px 54px;
        }
        @keyframes floatUp {
            0% { transform: translateY(4px); opacity: 0; }
            20% { transform: translateY(0px); opacity: 1; }
            80% { transform: translateY(-16px); opacity: 1; }
            100% { transform: translateY(-20px); opacity: 0; }
        }
    `}} />

    <path d="M 35 80 a 12 12 0 0 1 -4 -21 a 18 18 0 0 1 26 -14 a 22 22 0 0 1 33 13 a 14 14 0 0 1 -2 22 Z" 
          fill="#F0F1F5" 
          stroke="url(#dca-cloudGrad)" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" />

    <rect x="48" y="70" width="24" height="5" rx="1.5" fill="#FFFFFF" stroke="#C4875B" strokeWidth="1.5" />
    <rect x="48" y="63" width="24" height="5" rx="1.5" fill="#FFFFFF" stroke="#C4875B" strokeWidth="1.5" />
    <rect x="48" y="56" width="24" height="5" rx="1.5" fill="#FFFFFF" stroke="#C4875B" strokeWidth="1.5" />

    <circle cx="51.5" cy="72.5" r="1" fill="#D49B72" />
    <circle cx="51.5" cy="65.5" r="1" fill="#D49B72" />
    <circle cx="51.5" cy="58.5" r="1" fill="#D49B72" />

    <line x1="56" y1="72.5" x2="68" y2="72.5" stroke="#A87049" strokeWidth="1" strokeLinecap="round" />
    <line x1="56" y1="65.5" x2="68" y2="65.5" stroke="#A87049" strokeWidth="1" strokeLinecap="round" />
    <line x1="56" y1="58.5" x2="68" y2="58.5" stroke="#A87049" strokeWidth="1" strokeLinecap="round" />

    <g className="dca_arrow-up">
        <path d="M 60 52 L 60 36 M 55 41 L 60 36 L 65 41" 
              stroke="#3D4578" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="none" />
    </g>
</svg>
  );
}
