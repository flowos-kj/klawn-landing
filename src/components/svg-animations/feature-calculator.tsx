export function FeatureCalculator(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <style dangerouslySetInnerHTML={{__html: `
    @keyframes cursor-blink {
      0%, 45% { opacity: 1; }
      50%, 95% { opacity: 0; }
      100% { opacity: 1; }
    }
    
    @keyframes button-press {
      0%, 85%, 100% { transform: scale(1); }
      90%, 95% { transform: scale(0.85); }
    }

    .fc_cursor {
      animation: cursor-blink 2s infinite step-end;
    }

    .fc_btn-animated {
      transform-origin: 81px 96px;
      animation: button-press 3s infinite ease-in-out;
    }

    .fc_stroke-main {
      stroke: #1E2249;
      stroke-width: 1.5;
      stroke-linejoin: round;
    }
  `}} />

  {/* Background Base / Shadow */}
  <rect x="25" y="17" width="70" height="92" rx="8" fill="#1E2249" />

  {/* Calculator Body */}
  <rect x="25" y="13" width="70" height="92" rx="8" fill="#2D3561" className="fc_stroke-main" />
  
  {/* Top Highlight */}
  <path d="M 33 15 L 87 15" stroke="#3D4578" strokeWidth="1.5" strokeLinecap="round" />

  {/* Display Area */}
  <rect x="33" y="23" width="54" height="22" rx="4" fill="#D49B72" className="fc_stroke-main" />

  {/* Display Text (Fake numbers) */}
  <rect x="58" y="32" width="4" height="4" rx="1" fill="#FFFFFF" />
  <rect x="64" y="32" width="6" height="4" rx="1" fill="#FFFFFF" />
  <rect x="72" y="32" width="4" height="4" rx="1" fill="#FFFFFF" />

  {/* Blinking Cursor */}
  <rect x="80" y="28" width="2" height="12" rx="1" fill="#FFFFFF" className="fc_cursor" />

  {/* Button Grid 3x3 */}
  {/* Row 1 */}
  <rect x="33" y="54" width="12" height="12" rx="3" fill="#FFFFFF" className="fc_stroke-main" />
  <rect x="54" y="54" width="12" height="12" rx="3" fill="#FFFFFF" className="fc_stroke-main" />
  <rect x="75" y="54" width="12" height="12" rx="3" fill="#FFFFFF" className="fc_stroke-main" />

  {/* Row 2 */}
  <rect x="33" y="72" width="12" height="12" rx="3" fill="#FFFFFF" className="fc_stroke-main" />
  <rect x="54" y="72" width="12" height="12" rx="3" fill="#FFFFFF" className="fc_stroke-main" />
  <rect x="75" y="72" width="12" height="12" rx="3" fill="#FFFFFF" className="fc_stroke-main" />

  {/* Row 3 */}
  <rect x="33" y="90" width="12" height="12" rx="3" fill="#FFFFFF" className="fc_stroke-main" />
  <rect x="54" y="90" width="12" height="12" rx="3" fill="#FFFFFF" className="fc_stroke-main" />
  
  {/* Animated Button (Bottom Right) */}
  <g className="fc_btn-animated">
    <rect x="75" y="90" width="12" height="12" rx="3" fill="#FFFFFF" className="fc_stroke-main" />
    <path d="M 78 96 L 84 96 M 81 93 L 81 99" stroke="#C4875B" strokeWidth="1.5" strokeLinecap="round" />
  </g>

  {/* Subtle button details (minus/equals symbols on static buttons) */}
  <path d="M 36 60 L 42 60" stroke="#F0F1F5" strokeWidth="1.5" strokeLinecap="round" />
  <path d="M 57 78 L 63 78" stroke="#F0F1F5" strokeWidth="1.5" strokeLinecap="round" />
  <path d="M 36 95 L 42 95 M 36 97 L 42 97" stroke="#F0F1F5" strokeWidth="1.5" strokeLinecap="round" />

</svg>
  );
}
