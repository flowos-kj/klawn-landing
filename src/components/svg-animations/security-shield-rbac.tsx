export function SecurityShieldRbac(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" style={{backgroundColor: "transparent"}}>
  <style dangerouslySetInnerHTML={{__html: `
    .ssr_t1 { fill: #1E2249; animation: flash1 4s infinite ease-in-out; }
    .ssr_t2 { fill: #2D3561; animation: flash2 4s infinite ease-in-out; }
    .ssr_t3 { fill: #3D4578; animation: flash3 4s infinite ease-in-out; }
    .ssr_t4 { fill: #A87049; animation: flash4 4s infinite ease-in-out; }
    .ssr_t5 { fill: #C4875B; animation: flash5 4s infinite ease-in-out; }
    .ssr_t6 { fill: #D49B72; animation: flash6 4s infinite ease-in-out; }
    .ssr_check { opacity: 0; transform-origin: 60px 14px; animation: checkPop 4s infinite ease-in-out; }

    @keyframes flash1 {
      0%, 15%, 100% { fill: #1E2249; }
      5%, 10% { fill: #FFFFFF; }
    }
    @keyframes flash2 {
      0%, 10%, 25%, 100% { fill: #2D3561; }
      15%, 20% { fill: #FFFFFF; }
    }
    @keyframes flash3 {
      0%, 20%, 35%, 100% { fill: #3D4578; }
      25%, 30% { fill: #FFFFFF; }
    }
    @keyframes flash4 {
      0%, 30%, 45%, 100% { fill: #A87049; }
      35%, 40% { fill: #FFFFFF; }
    }
    @keyframes flash5 {
      0%, 40%, 55%, 100% { fill: #C4875B; }
      45%, 50% { fill: #FFFFFF; }
    }
    @keyframes flash6 {
      0%, 50%, 65%, 100% { fill: #D49B72; }
      55%, 60% { fill: #FFFFFF; }
    }
    @keyframes checkPop {
      0%, 60%, 100% { opacity: 0; transform: scale(0.5) translateY(4px); }
      65%, 90% { opacity: 1; transform: scale(1) translateY(0); }
    }
  `}} />

  <rect width="120" height="120" fill="#F0F1F5" rx="20" />

  <g stroke="#FFFFFF" strokeWidth="1.5">
    <rect className="ssr_t1" x="28" y="85" width="64" height="10" rx="3" />
    <rect className="ssr_t2" x="30" y="73" width="60" height="10" rx="3" />
    <rect className="ssr_t3" x="33" y="61" width="54" height="10" rx="3" />
    <rect className="ssr_t4" x="38" y="49" width="44" height="10" rx="3" />
    <rect className="ssr_t5" x="44" y="37" width="32" height="10" rx="3" />
    <rect className="ssr_t6" x="50" y="25" width="20" height="10" rx="3" />
  </g>

  <path className="ssr_check" d="M 55 14 L 59 18 L 65 10" stroke="#1E2249" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
</svg>
  );
}
