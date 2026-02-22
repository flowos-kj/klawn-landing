export function DeployBuilding(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <defs>
    <style dangerouslySetInnerHTML={{__html: `
      .db_window {
        fill: #FFFFFF;
        stroke: #1E2249;
        stroke-width: 1.5;
        stroke-linejoin: round;
      }
      .db_w1 { animation: p1 2.5s infinite; }
      .db_w2 { animation: p2 2.5s infinite; }
      .db_w3 { animation: p3 2.5s infinite; }
      
      @keyframes p1 {
        0%, 40%, 100% { opacity: 0.15; }
        15% { opacity: 1; }
      }
      @keyframes p2 {
        0%, 15%, 55%, 100% { opacity: 0.15; }
        30% { opacity: 1; }
      }
      @keyframes p3 {
        0%, 30%, 70%, 100% { opacity: 0.15; }
        45% { opacity: 1; }
      }
    `}} />
  </defs>

  {/* Ground Shadow */}
  <path d="M 60,104 L 90,86 L 105,95 L 75,113 Z" fill="#F0F1F5" />

  {/* Main Building Group */}
  <g stroke="#1E2249" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
    
    {/* Top Face (Main Roof) */}
    <path d="M 60,24 L 90,42 L 60,60 L 30,42 Z" fill="#D49B72" />
    
    {/* Left Face */}
    <path d="M 30,42 L 60,60 L 60,104 L 30,86 Z" fill="#2D3561" />
    
    {/* Right Face */}
    <path d="M 60,60 L 90,42 L 90,86 L 60,104 Z" fill="#3D4578" />

    {/* Right Face Details (Server Rack Slots) */}
    <line x1="66" y1="65" x2="84" y2="54.2" stroke="#1E2249" strokeWidth="1.5" />
    <line x1="66" y1="71" x2="84" y2="60.2" stroke="#1E2249" strokeWidth="1.5" />
    <line x1="66" y1="77" x2="84" y2="66.2" stroke="#1E2249" strokeWidth="1.5" />
    <line x1="66" y1="83" x2="84" y2="72.2" stroke="#1E2249" strokeWidth="1.5" />
    <line x1="66" y1="89" x2="84" y2="78.2" stroke="#1E2249" strokeWidth="1.5" />
    <line x1="66" y1="95" x2="84" y2="84.2" stroke="#1E2249" strokeWidth="1.5" />

    {/* Roof Server / AC Unit */}
    {/* Top Face */}
    <path d="M 60,14 L 72,21.2 L 60,28.4 L 48,21.2 Z" fill="#C4875B" />
    {/* Left Face */}
    <path d="M 48,21.2 L 60,28.4 L 60,34 L 48,26.8 Z" fill="#A87049" />
    {/* Right Face */}
    <path d="M 60,28.4 L 72,21.2 L 72,26.8 L 60,34 Z" fill="#C4875B" />

    {/* Windows (Left Face) */}
    <path className="db_window db_w1" d="M 40,54 L 50,60 L 50,68 L 40,62 Z" />
    <path className="db_window db_w2" d="M 40,68 L 50,74 L 50,82 L 40,76 Z" />
    <path className="db_window db_w3" d="M 40,82 L 50,88 L 50,96 L 40,90 Z" />

  </g>
</svg>
  );
}
