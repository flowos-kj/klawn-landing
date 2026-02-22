export function FeatureLayoutDashboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <defs>
    <style dangerouslySetInnerHTML={{__html: `
      .fld_bar {
        transform-box: fill-box;
        transform-origin: bottom;
        animation: grow 2s infinite ease-in-out;
      }
      .fld_b1 { animation-delay: 0s; }
      .fld_b2 { animation-delay: 0.2s; }
      .fld_b3 { animation-delay: 0.4s; }
      
      @keyframes grow {
        0%, 100% { transform: scaleY(0.3); }
        50% { transform: scaleY(1); }
      }

      .fld_cursor {
        animation: blink 1s infinite step-end;
      }
      
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
    `}} />
  </defs>

  {/* App Window Backgrounds */}
  <rect x="10" y="15" width="100" height="90" rx="6" fill="#F0F1F5"/>
  <path d="M 10 21 A 6 6 0 0 1 16 15 L 32 15 L 32 105 L 16 105 A 6 6 0 0 1 10 99 Z" fill="#FFFFFF"/>
  <path d="M 32 15 L 104 15 A 6 6 0 0 1 110 21 L 110 35 L 32 35 Z" fill="#FFFFFF"/>

  {/* App Window Structural Borders */}
  <rect x="10" y="15" width="100" height="90" rx="6" fill="none" stroke="#2D3561" strokeWidth="1.5"/>
  <line x1="32" y1="15" x2="32" y2="105" stroke="#2D3561" strokeWidth="1.5"/>
  <line x1="32" y1="35" x2="110" y2="35" stroke="#2D3561" strokeWidth="1.5"/>

  {/* Sidebar Elements */}
  {/* Active Item */}
  <rect x="16" y="22" width="10" height="4" rx="2" fill="#C4875B"/>
  {/* Inactive Items */}
  <rect x="16" y="30" width="10" height="4" rx="2" fill="#3D4578"/>
  <rect x="16" y="38" width="10" height="4" rx="2" fill="#3D4578"/>
  <rect x="16" y="46" width="10" height="4" rx="2" fill="#3D4578"/>
  <rect x="16" y="54" width="10" height="4" rx="2" fill="#3D4578"/>

  {/* Top Header Elements */}
  {/* Logo/Search Placeholder */}
  <rect x="38" y="23" width="20" height="4" rx="2" fill="#3D4578"/>
  {/* Profile Icon */}
  <circle cx="100" cy="25" r="4" fill="#C4875B"/>

  {/* Main Area Cards */}
  {/* Card 1 (Bar Chart) */}
  <rect x="38" y="42" width="31" height="26" rx="3" fill="#FFFFFF" stroke="#2D3561" strokeWidth="1.5"/>
  <line x1="42" y1="62" x2="65" y2="62" stroke="#2D3561" strokeWidth="1.5" strokeLinecap="round"/>
  <rect className="fld_bar fld_b1" x="44" y="53" width="4" height="8" rx="1" fill="#C4875B"/>
  <rect className="fld_bar fld_b2" x="51" y="49" width="4" height="12" rx="1" fill="#C4875B"/>
  <rect className="fld_bar fld_b3" x="58" y="55" width="4" height="6" rx="1" fill="#C4875B"/>

  {/* Card 2 (Counter with Blinking Cursor) */}
  <rect x="73" y="42" width="31" height="26" rx="3" fill="#FFFFFF" stroke="#2D3561" strokeWidth="1.5"/>
  <rect x="78" y="48" width="12" height="3" rx="1.5" fill="#3D4578"/>
  <rect x="78" y="56" width="16" height="6" rx="2" fill="#D49B72"/>
  <line className="fld_cursor" x1="97" y1="55" x2="97" y2="63" stroke="#A87049" strokeWidth="1.5" strokeLinecap="round"/>

  {/* Card 3 (Bottom Metrics) */}
  <rect x="38" y="73" width="66" height="26" rx="3" fill="#FFFFFF" stroke="#2D3561" strokeWidth="1.5"/>
  <circle cx="48" cy="86" r="6" fill="#F0F1F5" stroke="#2D3561" strokeWidth="1.5"/>
  <circle cx="48" cy="86" r="2" fill="#3D4578"/>
  <rect x="60" y="82" width="35" height="3" rx="1.5" fill="#3D4578"/>
  <rect x="60" y="88" width="20" height="3" rx="1.5" fill="#C4875B"/>
</svg>
  );
}
