document.querySelectorAll('.ai-tool').forEach(t=>{
  t.addEventListener('dragstart', e => e.dataTransfer.setData('text/plain', t.id));
});
const brain = document.getElementById('ai-brain');
brain.addEventListener('dragover', e => e.preventDefault());
brain.addEventListener('drop', e=>{
  e.preventDefault();
  const id = e.dataTransfer.getData('text');
  const el = document.getElementById(id);
  const rect = brain.getBoundingClientRect();
  el.style.position = 'absolute';
  el.style.left = (rect.left + e.offsetX - 26) + 'px';
  el.style.top = (rect.top + e.offsetY - 26) + 'px';
  document.body.appendChild(el);
// === Visual Connection System ===
const brain = document.getElementById('ai-brain');

function drawLine(x1,y1,x2,y2,id){
  let svg = document.getElementById('links');
  let line = document.getElementById('line-'+id) || document.createElementNS('http://www.w3.org/2000/svg','line');
  line.setAttribute('id','line-'+id);
  line.setAttribute('x1',x1); line.setAttribute('y1',y1);
  line.setAttribute('x2',x2); line.setAttribute('y2',y2);
  line.setAttribute('stroke','#00d4ff'); line.setAttribute('stroke-width','2');
  svg.appendChild(line);
}

function updateConnections(){
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

setInterval(() => {
  try { updateConnections(); } catch(e){}
}, 200);
});

