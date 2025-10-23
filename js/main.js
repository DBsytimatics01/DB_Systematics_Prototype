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
});
