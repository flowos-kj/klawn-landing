export function FeatureClockAudit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <style dangerouslySetInnerHTML={{__html: `
        .fca_minute-hand {
            transform-origin: 45px 45px;
            animation: spin 8s linear infinite;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .fca_shimmer {
            animation: sweep 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes sweep {
            0% { transform: translate(30px, 40px) rotate(45deg); opacity: 0; }
            15% { opacity: 0.9; }
            50% { transform: translate(110px, 120px) rotate(45deg); opacity: 0.9; }
            65% { opacity: 0; }
            100% { transform: translate(110px, 120px) rotate(45deg); opacity: 0; }
        }
    `}} />
    <defs>
        <rect id="fca-link-shape" x="-12" y="-6" width="24" height="12" rx="6" />
        <clipPath id="fca-right-half">
            <rect x="0" y="-10" width="20" height="20" />
        </clipPath>
        <mask id="fca-chain-mask">
            <use href="#fca-link-shape" transform="translate(68, 72) rotate(45)" fill="none" stroke="#FFFFFF" strokeWidth="2" />
            <use href="#fca-link-shape" transform="translate(82, 86) rotate(135)" fill="none" stroke="#FFFFFF" strokeWidth="2" />
            <use href="#fca-link-shape" transform="translate(96, 100) rotate(45)" fill="none" stroke="#FFFFFF" strokeWidth="2" />
        </mask>
    </defs>

    <g strokeLinecap="round" strokeLinejoin="round">
        <circle cx="45" cy="45" r="32" fill="#FFFFFF" stroke="#2D3561" strokeWidth="2"/>
        <circle cx="45" cy="45" r="28" fill="#F0F1F5" stroke="none"/>
        
        <line x1="45" y1="21" x2="45" y2="24" stroke="#3D4578" strokeWidth="2"/>
        <line x1="69" y1="45" x2="66" y2="45" stroke="#3D4578" strokeWidth="2"/>
        <line x1="45" y1="69" x2="45" y2="66" stroke="#3D4578" strokeWidth="2"/>
        <line x1="21" y1="45" x2="24" y2="45" stroke="#3D4578" strokeWidth="2"/>
        
        <line x1="45" y1="45" x2="55" y2="45" stroke="#1E2249" strokeWidth="2"/>
        <line className="fca_minute-hand" x1="45" y1="45" x2="45" y2="25" stroke="#2D3561" strokeWidth="2"/>
        <circle cx="45" cy="45" r="3" fill="#1E2249"/>
    </g>

    <g stroke="#C4875B" strokeWidth="2" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round">
        <use href="#fca-link-shape" transform="translate(68, 72) rotate(45)" />
        <use href="#fca-link-shape" transform="translate(82, 86) rotate(135)" />
        <use href="#fca-link-shape" transform="translate(68, 72) rotate(45)" clipPath="url(#fca-right-half)" />
        <use href="#fca-link-shape" transform="translate(96, 100) rotate(45)" />
        <use href="#fca-link-shape" transform="translate(82, 86) rotate(135)" clipPath="url(#fca-right-half)" />
    </g>

    <rect className="fca_shimmer" x="-15" y="-30" width="18" height="60" fill="#D49B72" mask="url(#fca-chain-mask)" />
</svg>
  );
}
