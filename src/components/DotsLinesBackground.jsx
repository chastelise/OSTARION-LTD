const rings = [
  { r: 90, gap: 16, opacity: 0.22 },
  { r: 150, gap: 18, opacity: 0.18 },
  { r: 220, gap: 20, opacity: 0.14 },
  { r: 300, gap: 22, opacity: 0.11 },
  { r: 390, gap: 24, opacity: 0.08 },
  { r: 490, gap: 28, opacity: 0.06 },
];

const nodes = [
  [120, 90],
  [210, 60],
  [260, 150],
  [90, 180],
  [170, 230],
];

const links = [
  [0, 1],
  [1, 2],
  [0, 3],
  [3, 4],
  [2, 4],
  [0, 2],
];

const waveA = 'M-40 140 C 220 40, 480 240, 760 110 S 1100 20, 1240 90';
const waveB = 'M-40 200 C 240 100, 500 300, 780 170 S 1120 80, 1240 150';
const waveC = 'M-40 680 C 280 760, 560 560, 860 700 S 1120 780, 1240 640';

const DotsLinesBackground = ({ variant = 'dark' }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg
        className={`absolute inset-0 h-full w-full ${
          variant === 'light' ? 'text-primary-600 opacity-40 dark:text-white dark:opacity-25' : 'text-white'
        }`}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g className="dots-ring-spin">
          {rings.map((ring) => (
            <circle
              key={ring.r}
              cx="600"
              cy="360"
              r={ring.r}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray={`0 ${ring.gap}`}
              strokeLinecap="round"
              opacity={ring.opacity}
            />
          ))}
        </g>

        <path d={waveA} stroke="currentColor" strokeWidth="1" opacity="0.12" />
        <path d={waveB} stroke="currentColor" strokeWidth="1" opacity="0.08" />
        <path d={waveC} stroke="currentColor" strokeWidth="1" opacity="0.1" />

        <g opacity="0.2">
          {links.map(([a, b]) => (
            <line
              key={`${a}-${b}`}
              x1={nodes[a][0]}
              y1={nodes[a][1]}
              x2={nodes[b][0]}
              y2={nodes[b][1]}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
          {nodes.map(([x, y], i) => (
            <circle
              key={`${x}-${y}`}
              cx={x}
              cy={y}
              r={i === 0 || i === 2 ? 2.5 : 1.6}
              fill="currentColor"
              className={i === 0 || i === 2 ? 'dot-pulse' : undefined}
            />
          ))}
        </g>

        <circle r="2.5" fill="currentColor" opacity="0.45" className="traveling-dot">
          <animateMotion dur="22s" repeatCount="indefinite" path={waveA} />
        </circle>
        <circle r="2" fill="currentColor" opacity="0.35" className="traveling-dot">
          <animateMotion dur="28s" repeatCount="indefinite" path={waveC} />
        </circle>
      </svg>
    </div>
  );
};

export default DotsLinesBackground;
