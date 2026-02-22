export function DeployNetworkK8s(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes travel {
            0%, 5% { transform: translateX(0); opacity: 0; }
            10% { transform: translateX(0); opacity: 1; }
            40% { transform: translateX(40px); opacity: 1; }
            45%, 55% { transform: translateX(40px); opacity: 0; }
            60% { transform: translateX(40px); opacity: 1; }
            90% { transform: translateX(0); opacity: 1; }
            95%, 100% { transform: translateX(0); opacity: 0; }
        }
        .dnk_spin-group {
            animation: spin 20s linear infinite;
        }
        .dnk_packet {
            animation: travel 5s ease-in-out infinite;
        }
        .dnk_d1 { animation-delay: 0s; }
        .dnk_d2 { animation-delay: 1s; }
        .dnk_d3 { animation-delay: 2s; }
        .dnk_d4 { animation-delay: 3s; }
        .dnk_d5 { animation-delay: 4s; }
    `}} />

    <rect width="120" height="120" fill="#F0F1F5" rx="16" />

    <g transform="translate(60, 60)">
        <g transform="rotate(-90)">
            <line x1="0" y1="0" x2="40" y2="0" stroke="#3D4578" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="40" cy="0" r="5" fill="#2D3561" />
            <circle cx="40" cy="0" r="2" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="2" fill="#D49B72" className="dnk_packet dnk_d1" />
        </g>

        <g transform="rotate(-18)">
            <line x1="0" y1="0" x2="40" y2="0" stroke="#3D4578" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="40" cy="0" r="5" fill="#2D3561" />
            <circle cx="40" cy="0" r="2" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="2" fill="#D49B72" className="dnk_packet dnk_d2" />
        </g>

        <g transform="rotate(54)">
            <line x1="0" y1="0" x2="40" y2="0" stroke="#3D4578" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="40" cy="0" r="5" fill="#2D3561" />
            <circle cx="40" cy="0" r="2" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="2" fill="#D49B72" className="dnk_packet dnk_d3" />
        </g>

        <g transform="rotate(126)">
            <line x1="0" y1="0" x2="40" y2="0" stroke="#3D4578" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="40" cy="0" r="5" fill="#2D3561" />
            <circle cx="40" cy="0" r="2" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="2" fill="#D49B72" className="dnk_packet dnk_d4" />
        </g>

        <g transform="rotate(198)">
            <line x1="0" y1="0" x2="40" y2="0" stroke="#3D4578" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="40" cy="0" r="5" fill="#2D3561" />
            <circle cx="40" cy="0" r="2" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="2" fill="#D49B72" className="dnk_packet dnk_d5" />
        </g>

        <g className="dnk_spin-group">
            <g stroke="#C4875B" strokeWidth="1.5" strokeLinecap="round">
                <line x1="0" y1="0" x2="0" y2="-16" />
                <line x1="0" y1="0" x2="0" y2="-16" transform="rotate(51.428)" />
                <line x1="0" y1="0" x2="0" y2="-16" transform="rotate(102.857)" />
                <line x1="0" y1="0" x2="0" y2="-16" transform="rotate(154.286)" />
                <line x1="0" y1="0" x2="0" y2="-16" transform="rotate(205.714)" />
                <line x1="0" y1="0" x2="0" y2="-16" transform="rotate(257.143)" />
                <line x1="0" y1="0" x2="0" y2="-16" transform="rotate(308.571)" />
            </g>
            <polygon points="0,-12 9.38,-7.53 11.69,2.66 5.2,10.81 -5.2,10.81 -11.69,2.66 -9.38,-7.53" stroke="#C4875B" strokeWidth="1.5" fill="#1E2249" strokeLinejoin="round" />
            <circle cx="0" cy="0" r="4.5" fill="#C4875B" />
            <circle cx="0" cy="0" r="1.5" fill="#1E2249" />
        </g>
    </g>
</svg>
  );
}
