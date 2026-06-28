"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [dados, setDados] = useState<any>(null);

  useEffect(() => {
    fetch("https://zoo-4.onrender.com/dados")
      .then(res => res.json())
      .then(data => setDados(data));
  }, []);

  return (
    <div>
      <h1>Frontend rodando 🚀</h1>
      <pre>{JSON.stringify(dados, null, 2)}</pre>
    </div>
  );
}