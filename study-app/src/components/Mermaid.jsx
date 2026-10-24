import { useEffect, useId, useState } from 'react';

// Mermaid cannot render several diagrams at the same moment, so renders run one after another.
let queue = Promise.resolve();

const css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

function renderDiagram(id, chart) {
  const job = queue.then(async () => {
    const { default: mermaid } = await import('mermaid');
    // Themed with the app's own tokens: ink lines, paper fill. Pink is only for the highlighted node.
    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      themeVariables: {
        background: css('--bg'),
        primaryColor: css('--surface-1'),
        primaryBorderColor: css('--ink'),
        primaryTextColor: css('--ink'),
        lineColor: css('--ink'),
        secondaryColor: css('--accent-tint'),
        tertiaryColor: css('--surface-2'),
        fontFamily: css('--font-ui') || 'sans-serif',
        fontSize: '16px',
      },
      flowchart: { useMaxWidth: true },
    });
    return mermaid.render(id, chart);
  });
  queue = job.catch(() => {});
  return job;
}

// Phones read top to bottom, so every chart is drawn top-to-bottom.
const topDown = (chart) => chart.replace(/^(\s*(?:flowchart|graph))\s+(LR|RL)\b/, '$1 TD');

const useTheme = () => {
  const [theme, setTheme] = useState(document.documentElement.dataset.theme);
  useEffect(() => {
    const obs = new MutationObserver(() => setTheme(document.documentElement.dataset.theme));
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);
  return theme;
};

// Draws a flowchart from Mermaid text. Mermaid loads only when a diagram is shown, and
// the diagram is drawn again when the theme changes.
export default function Mermaid({ chart }) {
  const baseId = 'mmd' + useId().replace(/[^a-zA-Z0-9]/g, '');
  const theme = useTheme();
  const [svg, setSvg] = useState('');
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    renderDiagram(`${baseId}${theme}`, topDown(chart))
      .then((r) => {
        if (!cancelled) {
          setSvg(r.svg);
          setFailed(false);
        }
      })
      .catch(() => !cancelled && setFailed(true));
    return () => {
      cancelled = true;
    };
  }, [chart, baseId, theme]);

  if (failed) return <pre className="flow-fallback">{chart}</pre>;
  return <div className="flow" role="img" aria-label="Flowchart" dangerouslySetInnerHTML={{ __html: svg }} />;
}
