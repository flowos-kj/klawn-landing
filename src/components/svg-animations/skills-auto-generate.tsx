export function SkillsAutoGenerate(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg {...props} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
			<style
				dangerouslySetInnerHTML={{
					__html: `
    .sag_bg { fill: #F0F1F5; }
    .sag_border { fill: none; stroke: #FFFFFF; stroke-width: 2; }

    .sag_gear { fill: none; stroke: #2D3561; stroke-width: 2; stroke-linejoin: round; transform-origin: 45px 55px; animation: sag_spin 8s linear infinite; }
    .sag_gear-sm { fill: none; stroke: #C4875B; stroke-width: 1.5; stroke-linejoin: round; transform-origin: 75px 45px; animation: sag_spin 6s linear infinite reverse; }

    @keyframes sag_spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .sag_bolt { fill: #C4875B; animation: sag_flash 2s ease-in-out infinite; }
    @keyframes sag_flash {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.15); }
    }

    .sag_plus { fill: none; stroke: #D49B72; stroke-width: 2.5; stroke-linecap: round; animation: sag_appear 2.5s ease-in-out infinite; }
    @keyframes sag_appear {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 1; }
    }

    .sag_dot { fill: #C4875B; animation: sag_dotPulse 1.5s ease-in-out infinite; }
    .sag_d1 { animation-delay: 0s; }
    .sag_d2 { animation-delay: -0.3s; }
    .sag_d3 { animation-delay: -0.6s; }
    @keyframes sag_dotPulse {
      0%, 100% { opacity: 0.2; }
      50% { opacity: 1; }
    }

    .sag_arc { fill: none; stroke: #D49B72; stroke-width: 1.5; stroke-linecap: round; stroke-dasharray: 4 8; animation: sag_arcSpin 3s linear infinite; }
    @keyframes sag_arcSpin {
      0% { stroke-dashoffset: 0; }
      100% { stroke-dashoffset: -24; }
    }
  `,
				}}
			/>

			{/* Background */}
			<rect x="6" y="6" width="108" height="108" rx="28" className="sag_bg" />
			<rect
				x="6"
				y="6"
				width="108"
				height="108"
				rx="28"
				className="sag_border"
			/>

			{/* Main gear */}
			<path
				className="sag_gear"
				d="M45,40 l3,-2 l0,-4 l4,0 l0,4 l3,2 l2,-3 l3,2 l-2,3 l2,3 l4,0 l0,4 l-4,0 l-2,3 l2,3 l-3,2 l-2,-3 l-3,2 l0,4 l-4,0 l0,-4 l-3,-2 l-2,3 l-3,-2 l2,-3 l-2,-3 l-4,0 l0,-4 l4,0 l2,-3 l-2,-3 l3,-2 z"
			/>
			<circle
				cx="45"
				cy="55"
				r="5"
				fill="none"
				stroke="#2D3561"
				strokeWidth="1.5"
			/>

			{/* Small gear */}
			<path
				className="sag_gear-sm"
				d="M75,33 l2,-1.5 l0,-3 l3,0 l0,3 l2,1.5 l1.5,-2 l2,1.5 l-1.5,2 l1.5,2 l3,0 l0,3 l-3,0 l-1.5,2 l1.5,2 l-2,1.5 l-1.5,-2 l-2,1.5 l0,3 l-3,0 l0,-3 l-2,-1.5 l-1.5,2 l-2,-1.5 l1.5,-2 l-1.5,-2 l-3,0 l0,-3 l3,0 l1.5,-2 l-1.5,-2 l2,-1.5 z"
			/>
			<circle
				cx="75"
				cy="45"
				r="3.5"
				fill="none"
				stroke="#C4875B"
				strokeWidth="1"
			/>

			{/* Lightning bolt - new skill creation */}
			<g
				className="sag_bolt"
				style={{ transformOrigin: "82px 72px" }}
			>
				<polygon points="80,64 86,70 82,70 84,80 78,74 82,74" />
			</g>

			{/* Plus sign - generation indicator */}
			<g className="sag_plus">
				<line x1="90" y1="85" x2="90" y2="95" />
				<line x1="85" y1="90" x2="95" y2="90" />
			</g>

			{/* Processing dots */}
			<circle cx="30" cy="85" r="2" className="sag_dot sag_d1" />
			<circle cx="37" cy="85" r="2" className="sag_dot sag_d2" />
			<circle cx="44" cy="85" r="2" className="sag_dot sag_d3" />

			{/* Orbiting arc around main gear */}
			<circle cx="45" cy="55" r="18" className="sag_arc" />
		</svg>
	);
}
