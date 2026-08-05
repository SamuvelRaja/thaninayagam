/*
  Tamil craft ornaments for the archive, drawn as static inline SVG.

  - Thoranam: the mango-leaf and marigold festoon hung over doorways at
    auspicious gatherings — here it crowns the archive's entrance.
  - Kolam: pulli-kolam (dot-grid) geometry, the threshold art of Tamil
    homes, reused as print dividers, seals, corner loops, and a faint
    watermark.

  Everything is decorative: aria-hidden, focusable=false, no animation.
*/

const LEAF_GREENS = ["#3d6b3a", "#2e5330"];
const MARIGOLD = "#c9791f";
const MARIGOLD_DEEP = "#8a4d10";
const KUMKUM = "#9d3526";
const STRING = "#8a6d2f";

const THORANAM_WIDTH = 1440;
const THORANAM_HEIGHT = 76;
const STRING_TOP = 10;
const STRING_SAG = 7;

function stringY(x) {
  const t = (x - THORANAM_WIDTH / 2) / (THORANAM_WIDTH / 2);
  return STRING_TOP + STRING_SAG * (1 - t * t);
}

function MangoLeaf({ x, length, rotate, fill }) {
  const y = stringY(x);
  const half = length / 2;
  const d = `M0 0 C 15 ${half * 0.3}, 17 ${half * 1.1}, 0 ${length} C -17 ${half * 1.1}, -15 ${half * 0.3}, 0 0 Z`;
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <path d={d} fill={fill} />
      <path
        d={`M0 3 L0 ${length - 4}`}
        stroke="#6d8f5a"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </g>
  );
}

function Marigold({ x, large = false }) {
  const y = stringY(x) + 2;
  const radius = large ? 7.2 : 5.4;
  return (
    <g transform={`translate(${x} ${y})`}>
      {[0, 60, 120].map((angle) => (
        <ellipse
          key={angle}
          cx="0"
          cy="0"
          rx={radius}
          ry={radius * 0.58}
          fill={MARIGOLD}
          transform={`rotate(${angle})`}
        />
      ))}
      <circle cx="0" cy="0" r={radius * 0.36} fill={MARIGOLD_DEEP} />
      <circle cx="0" cy="0" r={radius * 0.15} fill={KUMKUM} />
    </g>
  );
}

export function Thoranam({ className = "" }) {
  const leafCount = 31;
  const firstX = 28;
  const step = (THORANAM_WIDTH - 2 * firstX) / (leafCount - 1);
  const leaves = Array.from({ length: leafCount }, (_, i) => {
    const x = firstX + i * step;
    return {
      x,
      length: 42 + (i % 3) * 4 + (i === 15 ? 6 : 0),
      rotate: i % 2 === 0 ? -4 : 4,
      fill: LEAF_GREENS[i % 2],
    };
  });
  const flowers = [120, 360, 600, 720, 840, 1080, 1320];

  return (
    <svg
      className={`thoranam ${className}`.trim()}
      viewBox={`0 0 ${THORANAM_WIDTH} ${THORANAM_HEIGHT}`}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={`M0 ${STRING_TOP} Q ${THORANAM_WIDTH / 2} ${STRING_TOP + STRING_SAG * 2} ${THORANAM_WIDTH} ${STRING_TOP}`}
        fill="none"
        stroke={STRING}
        strokeWidth="3"
      />
      <path
        d={`M0 ${STRING_TOP + 4} Q ${THORANAM_WIDTH / 2} ${STRING_TOP + STRING_SAG * 2 + 4} ${THORANAM_WIDTH} ${STRING_TOP + 4}`}
        fill="none"
        stroke={KUMKUM}
        strokeWidth="1"
        opacity="0.75"
      />
      {leaves.map((leaf) => (
        <MangoLeaf key={leaf.x} {...leaf} />
      ))}
      {flowers.map((x) => (
        <Marigold key={x} x={x} large={x === 720} />
      ))}
    </svg>
  );
}

export function KolamMedallion({ className = "" }) {
  const petal =
    "M24 24 C 30.5 17.5, 30.5 10.5, 24 10.5 C 17.5 10.5, 17.5 17.5, 24 24 Z";
  const dots = [
    [24, 24],
    [24, 10.5],
    [37.5, 24],
    [24, 37.5],
    [10.5, 24],
    [12.7, 12.7],
    [35.3, 12.7],
    [35.3, 35.3],
    [12.7, 35.3],
  ];

  return (
    <svg
      className={`kolam-medallion ${className}`.trim()}
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M24 2.5 L45.5 24 L24 45.5 L2.5 24 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      {[0, 90, 180, 270].map((angle) => (
        <path
          key={angle}
          d={petal}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          transform={`rotate(${angle} 24 24)`}
        />
      ))}
      {dots.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.9" fill="currentColor" />
      ))}
    </svg>
  );
}

/*
  Exact corner extraction from the user-supplied kolam.svg. The original
  top-left segment occupies x=45..120 and y=75..150; translating it to an
  80-unit square preserves its cubic curves and the intentional crossing where
  the horizontal rule meets the returning vertical stroke. The same source
  corner is rotated for the other three sides—no invented dots or flourishes.
*/
function KolamCornerGlyph({ angle = 0 }) {
  return (
    <svg
      className={`kolam-corner kolam-corner-${angle}`}
      viewBox="0 0 80 80"
      focusable="false"
      aria-hidden="true"
    >
      <path
        className="kolam-source-loop"
        d="M80 75 H40 C17 75 0 60 0 37 C0 15 17 0 40 0 C60 0 75 15 75 35 V80"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function KolamCorners({ className = "" }) {
  return (
    <span
      className={`kolam-corners ${className}`.trim()}
      aria-hidden="true"
    >
      {[0, 90, 180, 270].map((angle) => (
        <KolamCornerGlyph key={angle} angle={angle} />
      ))}
    </span>
  );
}

export function KolamDivider({ className = "" }) {
  return (
    <div className={`kolam-divider ${className}`.trim()} aria-hidden="true">
      <span className="kolam-divider-rule" />
      <KolamMedallion />
      <span className="kolam-divider-rule" />
    </div>
  );
}

export function KolamField({ className = "" }) {
  return (
    <svg
      className={`kolam-field ${className}`.trim()}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern
          id="kolam-lattice"
          width="64"
          height="96"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M-16 24 C-8 8 8 8 16 24 C24 40 40 40 48 24 C56 8 72 8 80 24 M-16 24 C-8 40 8 40 16 24 C24 8 40 8 48 24 C56 40 72 40 80 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <path
            d="M-48 72 C-40 56 -24 56 -16 72 C-8 88 8 88 16 72 C24 56 40 56 48 72 C56 88 72 88 80 72 M-48 72 C-40 88 -24 88 -16 72 C-8 56 8 56 16 72 C24 88 40 88 48 72 C56 56 72 56 80 72"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          {[
            [16, 24],
            [48, 24],
            [16, 72],
            [48, 72],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.35" fill="currentColor" />
          ))}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#kolam-lattice)" />
    </svg>
  );
}
