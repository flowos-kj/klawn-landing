export function SkillsNetwork(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg {...props} viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
			<style
				dangerouslySetInnerHTML={{
					__html: `
    .sn_bg { fill: #F0F1F5; }
    .sn_ring { fill: none; stroke: #2D3561; stroke-width: 1; opacity: 0.15; }
    .sn_ring-pulse { fill: none; stroke: #C4875B; stroke-width: 1.5; opacity: 0; animation: sn_ringExpand 4s ease-out infinite; }
    .sn_rp2 { animation-delay: -1.3s; }
    .sn_rp3 { animation-delay: -2.6s; }

    @keyframes sn_ringExpand {
      0% { transform: scale(0.3); opacity: 0.6; }
      100% { transform: scale(1); opacity: 0; }
    }

    .sn_core { fill: #2D3561; }
    .sn_core-glow { fill: #C4875B; animation: sn_coreGlow 2s ease-in-out infinite; }
    @keyframes sn_coreGlow {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.8; }
    }

    .sn_skill-node { fill: #C4875B; transform-box: fill-box; transform-origin: center; }
    .sn_skill-active { animation: sn_nodeActivate 3s ease-in-out infinite; }
    .sn_sa1 { animation-delay: 0s; }
    .sn_sa2 { animation-delay: -0.4s; }
    .sn_sa3 { animation-delay: -0.8s; }
    .sn_sa4 { animation-delay: -1.2s; }
    .sn_sa5 { animation-delay: -1.6s; }
    .sn_sa6 { animation-delay: -2.0s; }
    .sn_sa7 { animation-delay: -2.4s; }
    .sn_sa8 { animation-delay: -2.8s; }

    @keyframes sn_nodeActivate {
      0%, 100% { transform: scale(1); opacity: 0.6; }
      50% { transform: scale(1.4); opacity: 1; }
    }

    .sn_link { fill: none; stroke: #D49B72; stroke-width: 1; opacity: 0.3; }
    .sn_data-pulse { fill: none; stroke: #C4875B; stroke-width: 2; stroke-linecap: round; stroke-dasharray: 8 60; animation: sn_dataFlow 2.5s linear infinite; }
    .sn_dp1 { animation-delay: 0s; }
    .sn_dp2 { animation-delay: -0.5s; }
    .sn_dp3 { animation-delay: -1.0s; }
    .sn_dp4 { animation-delay: -1.5s; }
    .sn_dp5 { animation-delay: -2.0s; }
    .sn_dp6 { animation-delay: -0.3s; }

    @keyframes sn_dataFlow {
      0% { stroke-dashoffset: 8; }
      100% { stroke-dashoffset: -60; }
    }

    .sn_new-skill { fill: none; stroke: #C4875B; stroke-width: 1.5; stroke-dasharray: 3 3; animation: sn_generate 2s ease-in-out infinite; }
    @keyframes sn_generate {
      0%, 100% { opacity: 0.2; stroke-dashoffset: 0; }
      50% { opacity: 0.9; stroke-dashoffset: -6; }
    }

    .sn_spark { fill: #D49B72; animation: sn_sparkle 1.5s ease-in-out infinite; }
    .sn_sp1 { animation-delay: 0s; }
    .sn_sp2 { animation-delay: -0.3s; }
    .sn_sp3 { animation-delay: -0.6s; }
    .sn_sp4 { animation-delay: -0.9s; }
    @keyframes sn_sparkle {
      0%, 100% { opacity: 0; transform: scale(0); }
      50% { opacity: 1; transform: scale(1); }
    }

    .sn_counter { fill: #2D3561; font-family: 'Noto Sans KR', system-ui, sans-serif; font-weight: 700; font-size: 28px; text-anchor: middle; }
    .sn_label { fill: #5A5E7A; font-family: 'Noto Sans KR', system-ui, sans-serif; font-weight: 500; font-size: 11px; text-anchor: middle; }
    .sn_plus { fill: #C4875B; font-family: 'Noto Sans KR', system-ui, sans-serif; font-weight: 700; font-size: 16px; }
  `,
				}}
			/>

			{/* Background */}
			<rect width="400" height="300" rx="24" className="sn_bg" />

			{/* Expanding rings from center */}
			<g style={{ transformOrigin: "200px 140px" }}>
				<circle
					cx="200"
					cy="140"
					r="100"
					className="sn_ring-pulse sn_rp1"
				/>
				<circle
					cx="200"
					cy="140"
					r="100"
					className="sn_ring-pulse sn_rp2"
				/>
				<circle
					cx="200"
					cy="140"
					r="100"
					className="sn_ring-pulse sn_rp3"
				/>
			</g>

			{/* Static orbit rings */}
			<circle cx="200" cy="140" r="45" className="sn_ring" />
			<circle cx="200" cy="140" r="80" className="sn_ring" />
			<circle cx="200" cy="140" r="115" className="sn_ring" />

			{/* Connection lines from core to skill nodes */}
			<line x1="200" y1="140" x2="200" y2="60" className="sn_link" />
			<line x1="200" y1="140" x2="270" y2="80" className="sn_link" />
			<line x1="200" y1="140" x2="300" y2="140" className="sn_link" />
			<line x1="200" y1="140" x2="270" y2="200" className="sn_link" />
			<line x1="200" y1="140" x2="200" y2="220" className="sn_link" />
			<line x1="200" y1="140" x2="130" y2="200" className="sn_link" />
			<line x1="200" y1="140" x2="100" y2="140" className="sn_link" />
			<line x1="200" y1="140" x2="130" y2="80" className="sn_link" />

			{/* Data flow pulses */}
			<line
				x1="200"
				y1="140"
				x2="200"
				y2="60"
				pathLength={100}
				className="sn_data-pulse sn_dp1"
			/>
			<line
				x1="200"
				y1="140"
				x2="300"
				y2="140"
				pathLength={100}
				className="sn_data-pulse sn_dp2"
			/>
			<line
				x1="200"
				y1="140"
				x2="270"
				y2="200"
				pathLength={100}
				className="sn_data-pulse sn_dp3"
			/>
			<line
				x1="200"
				y1="140"
				x2="130"
				y2="200"
				pathLength={100}
				className="sn_data-pulse sn_dp4"
			/>
			<line
				x1="200"
				y1="140"
				x2="130"
				y2="80"
				pathLength={100}
				className="sn_data-pulse sn_dp5"
			/>
			<line
				x1="200"
				y1="140"
				x2="270"
				y2="80"
				pathLength={100}
				className="sn_data-pulse sn_dp6"
			/>

			{/* Core node */}
			<circle cx="200" cy="140" r="18" className="sn_core" />
			<circle cx="200" cy="140" r="24" className="sn_core-glow" />
			<text x="200" y="145" className="sn_label" style={{ fill: "#fff" }}>
				AI
			</text>

			{/* Skill nodes - inner ring (45px) */}
			<circle
				cx="200"
				cy="95"
				r="5"
				className="sn_skill-node sn_skill-active sn_sa1"
			/>
			<circle
				cx="232"
				cy="108"
				r="5"
				className="sn_skill-node sn_skill-active sn_sa2"
			/>
			<circle
				cx="232"
				cy="172"
				r="5"
				className="sn_skill-node sn_skill-active sn_sa3"
			/>
			<circle
				cx="200"
				cy="185"
				r="5"
				className="sn_skill-node sn_skill-active sn_sa4"
			/>
			<circle
				cx="168"
				cy="172"
				r="5"
				className="sn_skill-node sn_skill-active sn_sa5"
			/>
			<circle
				cx="168"
				cy="108"
				r="5"
				className="sn_skill-node sn_skill-active sn_sa6"
			/>

			{/* Skill nodes - outer ring (80px) */}
			<circle
				cx="200"
				cy="60"
				r="7"
				className="sn_skill-node sn_skill-active sn_sa7"
			/>
			<circle
				cx="270"
				cy="80"
				r="6"
				className="sn_skill-node sn_skill-active sn_sa1"
			/>
			<circle
				cx="300"
				cy="140"
				r="7"
				className="sn_skill-node sn_skill-active sn_sa3"
			/>
			<circle
				cx="270"
				cy="200"
				r="6"
				className="sn_skill-node sn_skill-active sn_sa5"
			/>
			<circle
				cx="200"
				cy="220"
				r="7"
				className="sn_skill-node sn_skill-active sn_sa7"
			/>
			<circle
				cx="130"
				cy="200"
				r="6"
				className="sn_skill-node sn_skill-active sn_sa2"
			/>
			<circle
				cx="100"
				cy="140"
				r="7"
				className="sn_skill-node sn_skill-active sn_sa4"
			/>
			<circle
				cx="130"
				cy="80"
				r="6"
				className="sn_skill-node sn_skill-active sn_sa6"
			/>

			{/* New skill being generated (dashed, pulsing) */}
			<circle cx="330" cy="90" r="8" className="sn_new-skill" />
			<circle cx="70" cy="190" r="8" className="sn_new-skill" />

			{/* Sparks around new skill generation */}
			<g style={{ transformOrigin: "330px 90px" }}>
				<circle cx="340" cy="82" r="1.5" className="sn_spark sn_sp1" />
				<circle cx="322" cy="82" r="1.5" className="sn_spark sn_sp2" />
				<circle cx="338" cy="98" r="1.5" className="sn_spark sn_sp3" />
				<circle cx="322" cy="98" r="1.5" className="sn_spark sn_sp4" />
			</g>
			<g style={{ transformOrigin: "70px 190px" }}>
				<circle cx="62" cy="182" r="1.5" className="sn_spark sn_sp3" />
				<circle cx="78" cy="182" r="1.5" className="sn_spark sn_sp4" />
				<circle cx="62" cy="198" r="1.5" className="sn_spark sn_sp1" />
				<circle cx="78" cy="198" r="1.5" className="sn_spark sn_sp2" />
			</g>

			{/* Counter section */}
			<text x="200" y="270" className="sn_counter">
				2,243
			</text>
			<text x="200" y="290" className="sn_label">
				자동 활용 스킬
			</text>
		</svg>
	);
}
