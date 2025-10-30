// src/components/BrainCanvas.jsx
import React, { useEffect, useRef, useState } from "react";

export default function BrainCanvas(){
  const brainRef = useRef(null);
  const svgRef = useRef(null);
  const [tools, setTools] = useState([
    {id:'t-mail',label:'Mail'},
    {id:'t-scrape',label:'Scrape'},
    {id:'t-crm',label:'CRM'},
    {id:'t-sms',label:'SMS'}
  ]);

  useEffect(()=> {
    const id = setInterval(updateConnections,200);
    return ()=> clearInterval(id);
  },[]);

  function onDragStart(e, id){
    e.dataTransfer.setData("text/plain", id);
  }

  function onDrop(e){
    e.preventDefault();
    const id = e.dataTransfer.getData('text');
    const brainRect = brainRef.current.getBoundingClientRect();
    const x = brainRect.left + e.nativeEvent.offsetX;
    const y = brainRect.top + e.nativeEvent.offsetY;
    const el = document.getElementById(id);
    el.style.position='absolute';
    el.style.left = `${x - el.offsetWidth/2}px`;
    el.style.top = `${y - el.offsetHeight/2}px`;
    document.body.appendChild(el);
    updateConnections();
  }

  function updateConnections(){
    const brainRect = brainRef.current.getBoundingClientRect();
    const bx = brainRect.left + brainRect.width/2;
    const by = brainRect.top + brainRect.height/2;
    const svg = svgRef.current;
    if(!svg) return;
    // clear lines
    while(svg.firstChild) svg.removeChild(svg.firstChild);
    document.querySelectorAll('.ai-tool').forEach(t=>{
      const r = t.getBoundingClientRect();
      const tx = r.left + r.width/2;
      const ty = r.top + r.height/2;
      const line = document.createElementNS('http://www.w3.org/2000/svg','line');
      line.setAttribute('x1',bx); line.setAttribute('y1',by);
      line.setAttribute('x2',tx); line.setAttribute('y2',ty);
      line.setAttribute('stroke','#00d4ff'); line.setAttribute('stroke-width','2');
      svg.appendChild(line);
    });
  }

  function runTest(){
    alert("Simulating AI test. Output will appear in demo flow.");
  }

  function saveLayout(){
    const state = Array.from(document.querySelectorAll('.ai-tool')).map(t=>({
      id:t.id, left:t.style.left, top:t.style.top
    }));
    localStorage.setItem('cs_layout', JSON.stringify(state));
    alert('Saved');
  }

  function loadLayout(){
    const raw = localStorage.getItem('cs_layout');
    if(!raw) return alert('No layout');
    const state = JSON.parse(raw);
    state.forEach(s=>{
      const el = document.getElementById(s.id);
      if(!el) return;
      el.style.position='absolute';
      el.style.left = s.left;
      el.style.top = s.top;
      document.body.appendChild(el);
    });
    updateConnections();
  }

  return (
    <div className="card">
      <h3>Blue Brain Builder</h3>
      <div ref={brainRef} id="ai-brain" onDragOver={e=>e.preventDefault()} onDrop={onDrop} style={{width:220,height:220,margin:'10px auto',borderRadius:110,background:'#00d4ff'}}/>
      <div id="tool-panel">
        {tools.map(t=>(
          <div key={t.id} id={t.id} className="ai-tool" draggable onDragStart={(e)=>onDragStart(e,t.id)} style={{margin:8}}>
            {t.label}
          </div>
        ))}
      </div>
      <div style={{textAlign:'center',marginTop:12}}>
        <button onClick={runTest}>Test</button>
        <button onClick={saveLayout}>Save</button>
        <button onClick={loadLayout}>Load</button>
      </div>
      <svg ref={svgRef} style={{position:'absolute',left:0,top:0,width:'100%',height:'100%',pointerEvents:'none'}} />
    </div>
  );
}
