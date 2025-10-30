// src/components/Dashboard.jsx
import React, { useEffect, useState } from "react";

export default function Dashboard(){
  const [clients, setClients] = useState([]);

  useEffect(()=>{
    const raw = localStorage.getItem('cs_clients');
    if(raw) setClients(JSON.parse(raw));
    else {
      const seed = [
        {id:'c1', name:'Acme', desc:'Automates marketing', profit:1200},
        {id:'c2', name:'BetaCo', desc:'Streamlines sales', profit:850}
      ];
      localStorage.setItem('cs_clients', JSON.stringify(seed));
      setClients(seed);
    }
  },[]);

  return (
    <div className="card">
      <h3>Clients</h3>
      <div>
        {clients.map(c=>(
          <div key={c.id} className="client-card">
            <div style={{width:48,height:48,borderRadius:8,background:'#111',display:'flex',alignItems:'center',justifyContent:'center'}}>{c.name[0]}</div>
            <div style={{marginLeft:10}}>
              <strong>{c.name}</strong>
              <div>{c.desc}</div>
            </div>
            <div style={{marginLeft:'auto',textAlign:'right'}}>${c.profit}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
