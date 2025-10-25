// === CoreSynq: AI System Dashboard Script (Day 5–15 Polished) ===

// === Drag & Drop Logic ===
document.querySelectorAll('.ai-tool').forEach(t => {
  t.setAttribute('draggable', true);
  t.addEventListener('dragstart', e => e.dataTransfer.setData('text/plain', t.id));
});

const brain = document.getElementById('ai-brain');
if (brain) {
  brain.addEventListener('dragover', e => e.preventDefault());
  brain.addEventListener('drop', e => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text');
    const el = document.getElementById(id);
    const rect = brain.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    el.style.position = 'absolute';
    el.style.left = `${offsetX - el.offsetWidth / 2}px`;
    el.style.top = `${offsetY - el.offsetHeight / 2}px`;
    brain.appendChild(el);
    updateConnections();
  });
}

// === Visual Connection System ===
function drawLine(x1, y1, x2, y2, id) {
  let svg = document.getElementById('links');
  if (!svg) {
    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('id', 'links');
    svg.style.position = 'absolute';
    svg.style.top = 0;
    svg.style.left = 0;
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.pointerEvents = 'none';
    document.body.appendChild(svg);
  }
  let line = document.getElementById('line-' + id) || document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('id', 'line-' + id);
  line.setAttribute('x1', x1);
  line.setAttribute('y1', y1);
  line.setAttribute('x2', x2);
  line.setAttribute('y2', y2);
  line.setAttribute('stroke', '#00d4ff');
  line.setAttribute('stroke-width', '2');
  svg.appendChild(line);
}

function updateConnections() {
  const brainRect = brain.getBoundingClientRect();
  const bx = brainRect.left + brainRect.width / 2;
  const by = brainRect.top + brainRect.height / 2;
  document.querySelectorAll('.ai-tool').forEach(t => {
    const r = t.getBoundingClientRect();
    if (r.width === 0) return;
    const tx = r.left + r.width / 2;
    const ty = r.top + r.height / 2;
    drawLine(bx, by, tx, ty, t.id);
  });
}

// Keep lines updated smoothly
setInterval(() => {
  try { updateConnections(); } catch (e) {}
}, 250);

// === Simulation Tester ===
const testBtn = document.getElementById('test-btn');
if (testBtn) {
  testBtn.addEventListener('click', () => {
    const output = document.getElementById('output');
    output.innerHTML = '<b>Running simulation...</b>';
    setTimeout(() => {
      const result = {
        summary: "Processed 120 records, automated 3 tasks, saved ~14 hours/week.",
        timestamp: new Date().toLocaleString()
      };
      output.innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
    }, 1200);
  });
}

// === Finalization Button ===
const finalizeBtn = document.getElementById('finalize-btn');
if (finalizeBtn) {
  finalizeBtn.addEventListener('click', () => {
    const mode = confirm("Press OK for Demo mode, Cancel for Live finalize");
    if (mode) {
      window.open('demo.html', '_blank');
    } else {
      const layout = {
        tools: Array.from(document.querySelectorAll('.ai-tool')).map(t => ({
          id: t.id,
          left: t.style.left,
          top: t.style.top
        })),
        savedAt: new Date().toISOString()
      };
      localStorage.setItem('lastLayout', JSON.stringify(layout));
      alert('Layout saved successfully!');
    }
  });
}

// === Load Saved Layout on Page Load ===
window.addEventListener('load', () => {
  const saved = localStorage.getItem('lastLayout');
  if (!saved) return;
  try {
    const layout = JSON.parse(saved);
    layout.tools.forEach(pos => {
      const el = document.getElementById(pos.id);
      if (el) {
        el.style.position = 'absolute';
        el.style.left = pos.left;
        el.style.top = pos.top;
        brain.appendChild(el);
      }
    });
    updateConnections();
  } catch (err) {
    console.warn('Layout load error:', err);
  }
});
