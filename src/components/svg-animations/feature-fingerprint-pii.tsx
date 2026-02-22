export function FeatureFingerprintPii(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style dangerouslySetInnerHTML={{__html: `
      .ffp_bg { fill: #F0F1F5; }
      .ffp_inner-bg { fill: #FFFFFF; }
      
      .ffp_arc {
        fill: none;
        stroke: #2D3561;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      
      .ffp_arc-5 { animation: h5 3s infinite; }
      .ffp_arc-4 { animation: h4 3s infinite; }
      .ffp_arc-3 { animation: h3 3s infinite; }
      .ffp_arc-2 { animation: h2 3s infinite; }
      .ffp_arc-1 { animation: h1 3s infinite; }
      
      .ffp_scan-line {
        stroke: #C4875B;
        stroke-width: 1.5;
        stroke-linecap: round;
        animation: scan 3s infinite cubic-bezier(0.4, 0, 0.6, 1);
      }
      
      .ffp_scan-glow {
        fill: url(#ffp-scanGlow);
        animation: scanGlow 3s infinite cubic-bezier(0.4, 0, 0.6, 1);
      }

      @keyframes h5 {
        0%, 5% { stroke: #2D3561; }
        15% { stroke: #D49B72; }
        35%, 100% { stroke: #2D3561; }
      }
      @keyframes h4 {
        0%, 15% { stroke: #2D3561; }
        25% { stroke: #D49B72; }
        45%, 100% { stroke: #2D3561; }
      }
      @keyframes h3 {
        0%, 25% { stroke: #2D3561; }
        35% { stroke: #D49B72; }
        55%, 100% { stroke: #2D3561; }
      }
      @keyframes h2 {
        0%, 35% { stroke: #2D3561; }
        45% { stroke: #D49B72; }
        65%, 100% { stroke: #2D3561; }
      }
      @keyframes h1 {
        0%, 45% { stroke: #2D3561; }
        55% { stroke: #D49B72; }
        75%, 100% { stroke: #2D3561; }
      }

      @keyframes scan {
        0% { transform: translateY(5px); opacity: 0; }
        10% { transform: translateY(15px); opacity: 1; }
        90% { transform: translateY(105px); opacity: 1; }
        100% { transform: translateY(115px); opacity: 0; }
      }
      
      @keyframes scanGlow {
        0% { transform: translateY(0px); opacity: 0; }
        10% { transform: translateY(10px); opacity: 0.5; }
        90% { transform: translateY(100px); opacity: 0.5; }
        100% { transform: translateY(110px); opacity: 0; }
      }
    `}} />
    
    <linearGradient id="ffp-scanGlow" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stopColor="#C4875B" stopOpacity="0" />
      <stop offset="100%" stopColor="#C4875B" stopOpacity="0.3" />
    </linearGradient>
  </defs>

  <rect width="120" height="120" rx="24" className="ffp_bg" />
  <rect x="10" y="10" width="100" height="100" rx="16" className="inner-ffp_bg" />

  <g transform="translate(0, 0)">
    <path className="ffp_arc ffp_arc-5" d="M 20,80 L 20,60 A 40,50 0 0,1 100,60 L 100,100" />
    <path className="ffp_arc ffp_arc-4" d="M 28,100 L 28,60 A 32,40 0 0,1 92,60 L 92,85" />
    <path className="ffp_arc ffp_arc-3" d="M 36,75 L 36,60 A 24,30 0 0,1 84,60 L 84,95" />
    <path className="ffp_arc ffp_arc-2" d="M 44,85 L 44,60 A 16,20 0 0,1 76,60 L 76,90" />
    <path className="ffp_arc ffp_arc-1" d="M 52,80 L 52,60 A 8,10 0 0,1 68,60 L 68,75" />
  </g>

  <rect x="16" y="0" width="88" height="12" className="ffp_scan-glow" />
  <line x1="16" y1="0" x2="104" y2="0" className="ffp_scan-line" />
</svg>
  );
}
