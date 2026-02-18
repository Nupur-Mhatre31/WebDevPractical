import { useState } from "react";

function Item({ name }) {
  const [known, setKnown] = useState(false);

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      border: "1px solid #ccc",
      padding: "10px",
      margin: "8px 0",
      borderRadius: "6px"
    }}>
      <span>{name}</span>

      <button
        onClick={() => setKnown(!known)}
        style={{
          padding: "6px 12px",
          cursor: "pointer"
        }}
      >
        {known ? "I Know" : "I Don't Know"}
      </button>
    </div>
  );
}

export default Item;
