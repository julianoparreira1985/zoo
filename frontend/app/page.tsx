"use client";

import { useEffect, useState } from "react";

export default function Home() {
  // Estados separados para cada informação da API
  const [dados, setDados] = useState<any>(null);
  const [hora, setHora] = useState<any>(null);

  useEffect(() => {
    const URL_BASE = "https://zoo-4.onrender.com";

    // 1. Busca a hora atual
    fetch(`${URL_BASE}/hora`)
      .then((res) => res.json())
      .then((data) => setHora(data))
      .catch((err) => console.error("Erro ao buscar hora:", err));

    // 2. Busca os dados (ajuste a rota '/dados' para o nome real da sua rota)
    fetch(`${URL_BASE}/dados`)
      .then((res) => res.json())
      .then((data) => setDados(data))
      .catch((err) => console.error("Erro ao buscar dados:", err));
      
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Frontend rodando 🚀</h1>
      
      <h3>Dados do Servidor:</h3>
      {dados ? (
        <pre>{JSON.stringify(dados, null, 2)}</pre>
      ) : (
        <p>Carregando dados...</p>
      )}

      <h3>Hora do Banco de dados:</h3>
      {hora ? (
        <pre>{JSON.stringify(hora, null, 2)}</pre>
      ) : (
        <p>Carregando hora...</p>
      )}
    </div>    
  );
}


/*"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [dados, setDados] = useState<any>(null);
  const [hora, setHora] = useState<any>(null);

  useEffect(() => {
    fetch("https://zoo-4.onrender.com/hora")
      .then(res => res.json())
      .then(data => setHora(data));
      
  }, []);

  return (
    <div>
      <h1>Frontend rodando 🚀</h1>
      <pre>{JSON.stringify(dados, null, 2)}</pre>
      <pre>{JSON.stringify(hora, null, 2)}</pre>
    </div>    
  );
}*/