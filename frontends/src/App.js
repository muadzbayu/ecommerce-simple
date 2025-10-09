import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then(res => res.json())
      .then(setProducts);
  }, [])

  const addProduct = async () => {
    await fetch("http://localhost:4000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    })
    setName("");
    const updated = await fetch("http://localhost:4000/products").then(res => res.json());
    setProducts(updated);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Prxys yai test</h1>
      <ul>
        {products.map((p, i) => <li key={i}>{p.name}</li>)}
      </ul>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="New Product"></input>
      <button onClick={addProduct}>Add</button>
    </div>
  )
}

export default App;