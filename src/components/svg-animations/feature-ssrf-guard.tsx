export function FeatureSsrfGuard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <style dangerouslySetInnerHTML={{__html: `
    .fsg_bg { fill: #F0F1F5; }
    .fsg_inner-border { fill: none; stroke: #FFFFFF; stroke-width: 2; }
    .fsg_globe { fill: none; stroke: #2D3561; stroke-width: 1.2; opacity: 0.5; }
    .fsg_block-ring {
      fill: none;
      stroke: #C4875B;
      stroke-width: 1.5;
      transform-origin: 60px 60px;
      animation: fsg_pulse 3s ease-out infinite;
    }
    .fsg_br1 { animation-delay: 0s; }
    .fsg_br2 { animation-delay: -1s; }
    .fsg_br3 { animation-delay: -2s; }
    @keyframes fsg_pulse {
      0% { transform: scale(0.6); opacity: 0.8; }
      100% { transform: scale(1.6); opacity: 0; }
    }
    .fsg_packet {
      fill: #C4875B;
      animation: fsg_travel 2.5s ease-in infinite;
    }
    .fsg_pk1 { animation-delay: 0s; }
    .fsg_pk2 { animation-delay: -0.8s; }
    .fsg_pk3 { animation-delay: -1.6s; }
    @keyframes fsg_travel {
      0% { opacity: 1; transform: translate(0, 0); }
      60% { opacity: 1; }
      80% { opacity: 0; transform: translate(0, 0) scale(0.3); }
      100% { opacity: 0; }
    }
    .fsg_slash {
      stroke: #C4875B;
      stroke-width: 3;
      stroke-linecap: round;
      animation: fsg_slashPulse 2s ease-in-out infinite;
    }
    @keyframes fsg_slashPulse {
      0%, 100% { opacity: 0.7; }
      50% { opacity: 1; }
    }
    .fsg_ip {
      font-family: 'Geist Mono', monospace;
      font-size: 6px;
      fill: #5A5E7A;
      animation: fsg_ipFade 3s ease-in-out infinite;
    }
    .fsg_ip1 { animation-delay: 0s; }
    .fsg_ip2 { animation-delay: -1s; }
    .fsg_ip3 { animation-delay: -2s; }
    @keyframes fsg_ipFade {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.8; }
    }
  `}} />

  {/* Background */}
  <rect x="6" y="6" width="108" height="108" rx="28" className="fsg_bg" />
  <rect x="6" y="6" width="108" height="108" rx="28" className="fsg_inner-border" />

  {/* Globe lines */}
  <circle cx="60" cy="60" r="28" className="fsg_globe" />
  <ellipse cx="60" cy="60" rx="14" ry="28" className="fsg_globe" />
  <ellipse cx="60" cy="60" rx="28" ry="14" className="fsg_globe" />
  <line x1="32" y1="60" x2="88" y2="60" className="fsg_globe" />
  <line x1="60" y1="32" x2="60" y2="88" className="fsg_globe" />

  {/* Blocked IP labels */}
  <text x="18" y="38" className="fsg_ip fsg_ip1">192.168.*</text>
  <text x="78" y="42" className="fsg_ip fsg_ip2">10.0.0.*</text>
  <text x="20" y="90" className="fsg_ip fsg_ip3">127.0.0.1</text>

  {/* Pulse rings around globe center */}
  <circle cx="60" cy="60" r="20" className="fsg_block-ring fsg_br1" />
  <circle cx="60" cy="60" r="20" className="fsg_block-ring fsg_br2" />
  <circle cx="60" cy="60" r="20" className="fsg_block-ring fsg_br3" />

  {/* Incoming packets (dots converging on center) */}
  <circle cx="30" cy="45" r="2.5" className="fsg_packet fsg_pk1" />
  <circle cx="90" cy="50" r="2.5" className="fsg_packet fsg_pk2" />
  <circle cx="55" cy="90" r="2.5" className="fsg_packet fsg_pk3" />

  {/* Shield overlay */}
  <path d="M60 42 L74 47 L74 62 C74 72, 60 78, 60 78 C60 78, 46 72, 46 62 L46 47 Z" fill="#FFFFFF" fillOpacity="0.9" stroke="#2D3561" strokeWidth="1.5" strokeLinejoin="round"/>

  {/* Block slash through shield */}
  <line x1="52" y1="68" x2="68" y2="50" className="fsg_slash" />
</svg>
  );
}
