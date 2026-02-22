export function DeployServerOnprem(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg {...props} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
			<style
				dangerouslySetInnerHTML={{
					__html: `
    .dso_bg { fill: #F0F1F5; }
    .dso_border { fill: none; stroke: #FFFFFF; stroke-width: 2; }

    .dso_rack { fill: #2D3561; stroke: #1E2249; stroke-width: 1.5; stroke-linejoin: round; }
    .dso_rack-front { fill: #3D4578; stroke: #1E2249; stroke-width: 1.5; stroke-linejoin: round; }
    .dso_rack-top { fill: #D49B72; stroke: #1E2249; stroke-width: 1.5; stroke-linejoin: round; }
    .dso_slot { fill: none; stroke: #1E2249; stroke-width: 0.8; opacity: 0.5; }

    .dso_led { fill: #C4875B; animation: dso_blink 1.5s ease-in-out infinite; }
    .dso_l1 { animation-delay: 0s; }
    .dso_l2 { animation-delay: -0.3s; }
    .dso_l3 { animation-delay: -0.6s; }
    .dso_l4 { animation-delay: -0.9s; }
    .dso_l5 { animation-delay: -1.2s; }
    .dso_l6 { animation-delay: -0.15s; }

    @keyframes dso_blink {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 1; }
    }

    .dso_shield { fill: none; stroke: #C4875B; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
    .dso_shield-fill { fill: #C4875B; opacity: 0.15; }
    .dso_lock { fill: none; stroke: #C4875B; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }

    .dso_shield-group { animation: dso_shieldPulse 3s ease-in-out infinite; transform-origin: 85px 35px; }
    @keyframes dso_shieldPulse {
      0%, 100% { transform: scale(1); opacity: 0.8; }
      50% { transform: scale(1.08); opacity: 1; }
    }

    .dso_data { fill: none; stroke: #D49B72; stroke-width: 1.5; stroke-linecap: round; stroke-dasharray: 4 6; animation: dso_flow 2s linear infinite; }
    @keyframes dso_flow {
      0% { stroke-dashoffset: 0; }
      100% { stroke-dashoffset: -20; }
    }

    .dso_label { fill: #5A5E7A; font-family: 'Noto Sans KR', system-ui, sans-serif; font-weight: 600; font-size: 7px; text-anchor: middle; }
  `,
				}}
			/>

			{/* Background */}
			<rect x="6" y="6" width="108" height="108" rx="28" className="dso_bg" />
			<rect
				x="6"
				y="6"
				width="108"
				height="108"
				rx="28"
				className="dso_border"
			/>

			{/* Server rack - back */}
			<rect x="25" y="30" width="50" height="65" rx="3" className="dso_rack" />
			{/* Server rack - front panel */}
			<rect
				x="28"
				y="33"
				width="44"
				height="59"
				rx="2"
				className="dso_rack-front"
			/>
			{/* Server rack - top */}
			<rect
				x="25"
				y="27"
				width="50"
				height="6"
				rx="2"
				className="dso_rack-top"
			/>

			{/* Server slots */}
			<line x1="31" y1="44" x2="69" y2="44" className="dso_slot" />
			<line x1="31" y1="55" x2="69" y2="55" className="dso_slot" />
			<line x1="31" y1="66" x2="69" y2="66" className="dso_slot" />
			<line x1="31" y1="77" x2="69" y2="77" className="dso_slot" />

			{/* LED indicators - left column */}
			<circle cx="34" cy="39" r="1.5" className="dso_led dso_l1" />
			<circle cx="34" cy="50" r="1.5" className="dso_led dso_l2" />
			<circle cx="34" cy="61" r="1.5" className="dso_led dso_l3" />
			<circle cx="34" cy="72" r="1.5" className="dso_led dso_l4" />
			<circle cx="34" cy="83" r="1.5" className="dso_led dso_l5" />

			{/* LED indicators - right column */}
			<circle cx="39" cy="39" r="1.5" className="dso_led dso_l6" />
			<circle cx="39" cy="50" r="1.5" className="dso_led dso_l4" />
			<circle cx="39" cy="61" r="1.5" className="dso_led dso_l1" />
			<circle cx="39" cy="72" r="1.5" className="dso_led dso_l5" />
			<circle cx="39" cy="83" r="1.5" className="dso_led dso_l2" />

			{/* Drive bays */}
			<rect
				x="52"
				y="36"
				width="14"
				height="6"
				rx="1"
				fill="none"
				stroke="#1E2249"
				strokeWidth="0.8"
				opacity="0.4"
			/>
			<rect
				x="52"
				y="47"
				width="14"
				height="6"
				rx="1"
				fill="none"
				stroke="#1E2249"
				strokeWidth="0.8"
				opacity="0.4"
			/>
			<rect
				x="52"
				y="58"
				width="14"
				height="6"
				rx="1"
				fill="none"
				stroke="#1E2249"
				strokeWidth="0.8"
				opacity="0.4"
			/>
			<rect
				x="52"
				y="69"
				width="14"
				height="6"
				rx="1"
				fill="none"
				stroke="#1E2249"
				strokeWidth="0.8"
				opacity="0.4"
			/>
			<rect
				x="52"
				y="80"
				width="14"
				height="6"
				rx="1"
				fill="none"
				stroke="#1E2249"
				strokeWidth="0.8"
				opacity="0.4"
			/>

			{/* Shield + lock icon (top right) */}
			<g className="dso_shield-group">
				<path
					d="M85,25 L85,40 C85,47 80,50 85,50 C90,50 85,47 85,40 L85,25"
					className="dso_shield-fill"
				/>
				<path d="M85,25 C79,27 77,28 77,34 C77,42 81,48 85,50 C89,48 93,42 93,34 C93,28 91,27 85,25 Z" className="dso_shield" />
				{/* Lock body */}
				<rect
					x="82"
					y="36"
					width="6"
					height="5"
					rx="1"
					className="dso_lock"
				/>
				{/* Lock shackle */}
				<path d="M83.5,36 L83.5,34 C83.5,32.5 86.5,32.5 86.5,34 L86.5,36" className="dso_lock" />
			</g>

			{/* Data flow lines (server to shield) */}
			<path d="M70,38 C76,36 78,33 82,30" className="dso_data" />

			{/* On-premise label */}
			<text x="50" y="106" className="dso_label">
				ON-PREMISE
			</text>
		</svg>
	);
}
