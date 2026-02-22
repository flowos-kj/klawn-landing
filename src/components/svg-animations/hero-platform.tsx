export function HeroPlatform(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
    <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse {
            0%, 100% {
                transform: scale(1) translateY(0px);
            }
            50% {
                transform: scale(1.02) translateY(-4px);
            }
        }
        @keyframes glow {
            0%, 100% {
                filter: drop-shadow(0 0 4px #C4875B) drop-shadow(0 4px 6px rgba(30,34,73,0.3));
            }
            50% {
                filter: drop-shadow(0 0 12px #C4875B) drop-shadow(0 8px 12px rgba(30,34,73,0.2));
            }
        }
        @keyframes dash-flow {
            0% {
                stroke-dashoffset: 30;
            }
            100% {
                stroke-dashoffset: 0;
            }
        }
        @keyframes float-icon {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-3px); }
        }
        .hp_center-group {
            transform-origin: 200px 150px;
            animation: pulse 4s ease-in-out infinite, glow 4s ease-in-out infinite;
        }
        .hp_flow-line {
            stroke-dasharray: 4, 26;
            animation: dash-flow 1.5s linear infinite;
        }
        .hp_floating-icon {
            animation: float-icon 4s ease-in-out infinite;
        }
        .hp_delay-1 { animation-delay: 0.5s; }
        .hp_delay-2 { animation-delay: 1s; }
        .hp_delay-3 { animation-delay: 1.5s; }
        
        .hp_base-top { fill: #FFFFFF; stroke: #3D4578; stroke-width: 1; stroke-linejoin: round; }
        .hp_base-left { fill: #F0F1F5; stroke: #3D4578; stroke-width: 1; stroke-linejoin: round; }
        .hp_base-right { fill: #2D3561; stroke: #2D3561; stroke-width: 1; stroke-linejoin: round; }

        .hp_center-top { fill: #C4875B; stroke: #A87049; stroke-width: 1; stroke-linejoin: round; }
        .hp_center-left { fill: #D49B72; stroke: #A87049; stroke-width: 1; stroke-linejoin: round; }
        .hp_center-right { fill: #A87049; stroke: #A87049; stroke-width: 1; stroke-linejoin: round; }
    `}} />

    {/* Path Connections */}
    <g id="hp-connections">
        {/* Static thin dashed lines */}
        <path d="M200,150 L280,110 M200,150 L280,190 M200,150 L120,190 M200,150 L120,110" 
              stroke="#3D4578" strokeWidth="1.5" strokeDasharray="3,5" fill="none" opacity="0.3"/>
        
        {/* Animated dots */}
        <path className="hp_flow-line" d="M200,150 L280,110 M200,150 L280,190 M200,150 L120,190 M200,150 L120,110" 
              stroke="#C4875B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </g>

    {/* Outer Nodes */}
    <g id="hp-node-automation">
        {/* Base */}
        <path className="hp_base-left" d="M100,110 L120,120 L120,128 L100,118 Z" />
        <path className="hp_base-right" d="M120,120 L140,110 L140,118 L120,128 Z" />
        <path className="hp_base-top" d="M120,100 L140,110 L120,120 L100,110 Z" />
        {/* Icon: Gear */}
        <g className="hp_floating-icon" transform="translate(0, -6)">
            <circle cx="120" cy="95" r="8" fill="#F0F1F5" stroke="#2D3561" strokeWidth="1.5"/>
            <circle cx="120" cy="95" r="3" fill="none" stroke="#2D3561" strokeWidth="1.5"/>
            <path d="M120,85 v-2 M120,107 v-2 M110,95 h-2 M132,95 h-2 M113,88 l-1.5,-1.5 M128.5,103.5 l-1.5,-1.5 M127,88 l1.5,-1.5 M111.5,103.5 l1.5,-1.5" stroke="#2D3561" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
    </g>

    <g id="hp-node-messaging">
        {/* Base */}
        <path className="hp_base-left" d="M260,110 L280,120 L280,128 L260,118 Z" />
        <path className="hp_base-right" d="M280,120 L300,110 L300,118 L280,128 Z" />
        <path className="hp_base-top" d="M280,100 L300,110 L280,120 L260,110 Z" />
        {/* Icon: Chat */}
        <g className="hp_floating-icon hp_delay-1" transform="translate(0, -6)">
            <path d="M270,88 h20 v12 h-8 l-4,4 v-4 h-8 z" fill="#F0F1F5" stroke="#2D3561" strokeWidth="1.5" strokeLinejoin="round"/>
            <circle cx="276" cy="94" r="1" fill="#C4875B" stroke="none"/>
            <circle cx="280" cy="94" r="1" fill="#C4875B" stroke="none"/>
            <circle cx="284" cy="94" r="1" fill="#C4875B" stroke="none"/>
        </g>
    </g>

    <g id="hp-node-audit">
        {/* Base */}
        <path className="hp_base-left" d="M100,190 L120,200 L120,208 L100,198 Z" />
        <path className="hp_base-right" d="M120,200 L140,190 L140,198 L120,208 Z" />
        <path className="hp_base-top" d="M120,180 L140,190 L120,200 L100,190 Z" />
        {/* Icon: Document */}
        <g className="hp_floating-icon hp_delay-2" transform="translate(0, -6)">
            <path d="M112,166 h8 l6,6 v12 h-14 z" fill="#F0F1F5" stroke="#2D3561" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M120,166 v6 h6" fill="none" stroke="#2D3561" strokeWidth="1.5" strokeLinejoin="round"/>
            <line x1="116" y1="175" x2="124" y2="175" stroke="#3D4578" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="116" y1="179" x2="124" y2="179" stroke="#3D4578" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="116" y1="183" x2="121" y2="183" stroke="#3D4578" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
    </g>

    <g id="hp-node-security">
        {/* Base */}
        <path className="hp_base-left" d="M260,190 L280,200 L280,208 L260,198 Z" />
        <path className="hp_base-right" d="M280,200 L300,190 L300,198 L280,208 Z" />
        <path className="hp_base-top" d="M280,180 L300,190 L280,200 L260,190 Z" />
        {/* Icon: Shield */}
        <g className="hp_floating-icon hp_delay-3" transform="translate(0, -6)">
            <path d="M272,170 h16 v6 c0,7 -8,12 -8,12 c0,0 -8,-5 -8,-12 z" fill="#F0F1F5" stroke="#2D3561" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M276,176 l3,3 l5,-5" fill="none" stroke="#C4875B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
    </g>

    {/* Central AI Brain Node */}
    <g className="hp_center-group">
        {/* Hexagonal Isometric Base */}
        <path className="hp_center-left" d="M165,150 L200,168 L200,182 L165,164 Z" />
        <path className="hp_center-right" d="M200,168 L235,150 L235,164 L200,182 Z" />
        <path className="hp_center-top" d="M200,132 L235,150 L200,168 L165,150 Z" />
        
        {/* Glowing Plate/Circuit */}
        <g transform="translate(0, -5)">
            <path d="M200,126 L226,140 L200,154 L174,140 Z" fill="#1E2249" stroke="#F0F1F5" strokeWidth="1.5" strokeLinejoin="round"/>
            
            {/* Circuit Inner Elements */}
            <path d="M200,132 L216,140 L200,148 L184,140 Z" fill="none" stroke="#C4875B" strokeWidth="1" strokeLinejoin="round" />
            
            {/* Nodes */}
            <circle cx="200" cy="132" r="2" fill="#FFFFFF"/>
            <circle cx="216" cy="140" r="2" fill="#FFFFFF"/>
            <circle cx="200" cy="148" r="2" fill="#FFFFFF"/>
            <circle cx="184" cy="140" r="2" fill="#FFFFFF"/>
            <circle cx="200" cy="140" r="2.5" fill="#D49B72"/>
            
            {/* Inner Connections */}
            <line x1="200" y1="132" x2="200" y2="140" stroke="#F0F1F5" strokeWidth="1"/>
            <line x1="200" y1="148" x2="200" y2="140" stroke="#F0F1F5" strokeWidth="1"/>
            <line x1="216" y1="140" x2="200" y2="140" stroke="#F0F1F5" strokeWidth="1"/>
            <line x1="184" y1="140" x2="200" y2="140" stroke="#F0F1F5" strokeWidth="1"/>
            
            {/* Accent lines projecting out */}
            <line x1="174" y1="140" x2="180" y2="140" stroke="#D49B72" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="226" y1="140" x2="220" y2="140" stroke="#D49B72" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="200" y1="126" x2="200" y2="129" stroke="#D49B72" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="200" y1="154" x2="200" y2="151" stroke="#D49B72" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
    </g>
</svg>
  );
}
