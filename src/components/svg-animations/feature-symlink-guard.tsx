export function FeatureSymlinkGuard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <style dangerouslySetInnerHTML={{__html: `
    .fslg_bg { fill: #F0F1F5; }
    .fslg_inner-border { fill: none; stroke: #FFFFFF; stroke-width: 2; }
    .fslg_file {
      fill: #FFFFFF;
      stroke: #2D3561;
      stroke-width: 1.5;
      stroke-linejoin: round;
    }
    .fslg_file-fold {
      fill: #E8E9EF;
      stroke: #2D3561;
      stroke-width: 1;
    }
    .fslg_link-line {
      fill: none;
      stroke: #2D3561;
      stroke-width: 1.5;
      stroke-dasharray: 4 3;
      stroke-linecap: round;
    }
    .fslg_arrow {
      fill: #2D3561;
    }
    .fslg_scan-beam {
      fill: none;
      stroke: #C4875B;
      stroke-width: 2;
      stroke-linecap: round;
      animation: fslg_scanMove 3s ease-in-out infinite;
    }
    @keyframes fslg_scanMove {
      0%, 100% { transform: translateY(-8px); opacity: 0.3; }
      50% { transform: translateY(8px); opacity: 1; }
    }
    .fslg_check-ring {
      fill: none;
      stroke: #C4875B;
      stroke-width: 1.5;
      transform-origin: 78px 42px;
      animation: fslg_ringPulse 2.5s ease-out infinite;
    }
    .fslg_cr1 { animation-delay: 0s; }
    .fslg_cr2 { animation-delay: -1.25s; }
    @keyframes fslg_ringPulse {
      0% { transform: scale(0.8); opacity: 0.8; }
      100% { transform: scale(2); opacity: 0; }
    }
    .fslg_lock-body {
      fill: #C4875B;
    }
    .fslg_lock-shackle {
      fill: none;
      stroke: #C4875B;
      stroke-width: 2;
      stroke-linecap: round;
    }
    .fslg_path-dot {
      fill: #C4875B;
      animation: fslg_dotTravel 2s linear infinite;
    }
    .fslg_pd1 { animation-delay: 0s; }
    .fslg_pd2 { animation-delay: -0.7s; }
    .fslg_pd3 { animation-delay: -1.4s; }
    @keyframes fslg_dotTravel {
      0% { opacity: 1; }
      100% { opacity: 0.2; }
    }
    .fslg_x {
      stroke: #C4875B;
      stroke-width: 2;
      stroke-linecap: round;
      animation: fslg_xPulse 2s ease-in-out infinite;
    }
    @keyframes fslg_xPulse {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }
  `}} />

  {/* Background */}
  <rect x="6" y="6" width="108" height="108" rx="28" className="fslg_bg" />
  <rect x="6" y="6" width="108" height="108" rx="28" className="fslg_inner-border" />

  {/* Source file (left) */}
  <path d="M24 40 L24 75 L48 75 L48 46 L42 40 Z" className="fslg_file" />
  <path d="M42 40 L42 46 L48 46" className="fslg_file-fold" />

  {/* Target file (right) */}
  <path d="M72 40 L72 75 L96 75 L96 46 L90 40 Z" className="fslg_file" />
  <path d="M90 40 L90 46 L96 46" className="fslg_file-fold" />

  {/* Symlink arrow (dashed line) */}
  <path d="M48 58 C55 58, 58 50, 65 50 L70 50" className="fslg_link-line" />
  <polygon points="70,47 76,50 70,53" className="fslg_arrow" />

  {/* Path verification dots along the link */}
  <circle cx="50" cy="57" r="1.5" className="fslg_path-dot fslg_pd1" />
  <circle cx="57" cy="53" r="1.5" className="fslg_path-dot fslg_pd2" />
  <circle cx="64" cy="50" r="1.5" className="fslg_path-dot fslg_pd3" />

  {/* Scan beam across files */}
  <line x1="22" y1="58" x2="50" y2="58" className="fslg_scan-beam" />

  {/* Verification ring at target */}
  <circle cx="78" cy="42" r="6" className="fslg_check-ring fslg_cr1" />
  <circle cx="78" cy="42" r="6" className="fslg_check-ring fslg_cr2" />

  {/* Lock icon at center bottom */}
  <path d="M56 82 C56 79, 56 77, 60 77 C64 77, 64 79, 64 82" className="fslg_lock-shackle" />
  <rect x="54" y="82" width="12" height="9" rx="2" className="fslg_lock-body" />

  {/* TOCTOU block X on malicious redirect */}
  <line x1="82" y1="64" x2="90" y2="72" className="fslg_x" />
  <line x1="90" y1="64" x2="82" y2="72" className="fslg_x" />
</svg>
  );
}
