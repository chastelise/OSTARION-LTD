import { useLayoutEffect, useRef, useState } from 'react';

const sameRow = (a, b) => Math.abs(a.cy - b.cy) < 24;

const edgeToEdge = (a, b) => {
  if (Math.abs(a.cy - b.cy) < Math.abs(a.cx - b.cx)) {
    const fromLeft = a.cx < b.cx;
    return {
      x1: fromLeft ? a.right : a.left,
      y1: a.cy,
      x2: fromLeft ? b.left : b.right,
      y2: b.cy,
    };
  }

  const fromTop = a.cy < b.cy;
  return {
    x1: (a.cx + b.cx) / 2,
    y1: fromTop ? a.bottom : a.top,
    x2: (a.cx + b.cx) / 2,
    y2: fromTop ? b.top : b.bottom,
  };
};

const allStacked = (boxes) =>
  boxes.length >= 2 && boxes.every((box, index) => index === 0 || !sameRow(box, boxes[index - 1]));

const connectionsFor = (boxes) => {
  if (boxes.length < 2) return [];

  if (allStacked(boxes)) {
    return boxes.slice(0, -1).map((_, index) => edgeToEdge(boxes[index], boxes[index + 1]));
  }

  if (
    boxes.length === 4 &&
    sameRow(boxes[0], boxes[1]) &&
    sameRow(boxes[2], boxes[3]) &&
    !sameRow(boxes[0], boxes[2])
  ) {
    return [
      edgeToEdge(boxes[0], boxes[1]),
      edgeToEdge(boxes[1], boxes[3]),
      edgeToEdge(boxes[3], boxes[2]),
      edgeToEdge(boxes[2], boxes[0]),
    ];
  }

  if (
    boxes.length === 3 &&
    sameRow(boxes[0], boxes[1]) &&
    !sameRow(boxes[0], boxes[2])
  ) {
    return [
      edgeToEdge(boxes[0], boxes[1]),
      edgeToEdge(boxes[0], boxes[2]),
      edgeToEdge(boxes[1], boxes[2]),
    ];
  }

  if (boxes.length === 3 && sameRow(boxes[0], boxes[1]) && sameRow(boxes[1], boxes[2])) {
    return [edgeToEdge(boxes[0], boxes[1]), edgeToEdge(boxes[1], boxes[2])];
  }

  return boxes.slice(0, -1).map((_, index) => edgeToEdge(boxes[index], boxes[index + 1]));
};

export const useConnectingLines = () => {
  const wrapRef = useRef(null);
  const cardRefs = useRef([]);
  const [lines, setLines] = useState([]);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const measure = () => {
      const wr = wrap.getBoundingClientRect();
      const boxes = cardRefs.current.filter(Boolean).map((el) => {
        const rect = el.getBoundingClientRect();
        return {
          right: rect.right - wr.left,
          bottom: rect.bottom - wr.top,
          left: rect.left - wr.left,
          cx: rect.left - wr.left + rect.width / 2,
          cy: rect.top - wr.top + rect.height / 2,
        };
      });

      setSize({ width: wr.width, height: wr.height });
      setLines(connectionsFor(boxes));
    };

    measure();
    const retries = [120, 400, 800, 1400].map((ms) => window.setTimeout(measure, ms));
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(wrap);
    cardRefs.current.forEach((card) => card && resizeObserver.observe(card));

    const io = new IntersectionObserver(measure, { threshold: [0, 0.2, 0.6, 1] });
    io.observe(wrap);
    window.addEventListener('resize', measure);
    window.addEventListener('scroll', measure, { passive: true });

    return () => {
      retries.forEach((id) => window.clearTimeout(id));
      resizeObserver.disconnect();
      io.disconnect();
      window.removeEventListener('resize', measure);
      window.removeEventListener('scroll', measure);
    };
  }, []);

  return { wrapRef, cardRefs, lines, size };
};

const ConnectingLines = ({ lines, size, theme = 'dark' }) => (
  <svg
    className={`absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20 connecting-lines connecting-lines-${theme}`}
    viewBox={size?.width && size?.height ? `0 0 ${size.width} ${size.height}` : undefined}
    preserveAspectRatio="none"
  >
    {lines.map((line, index) => (
      <g key={`${line.x1}-${line.y1}-${index}`}>
        <line className="vision-link" x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} />
        <line
          className="vision-link-glow"
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          style={{ animationDelay: `${index * 0.45}s` }}
        />
        <circle className="vision-link-node" cx={line.x1} cy={line.y1} r="3.5" />
        <circle className="vision-link-node" cx={line.x2} cy={line.y2} r="3.5" />
      </g>
    ))}
  </svg>
);

export default ConnectingLines;
