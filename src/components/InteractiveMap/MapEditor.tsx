import { useState } from "react";
import mapa from "../../assets/maps/joao-pessoa.png";
import { neighborhoods as initial } from "./data";

export default function MapEditor() {
  const [items, setItems] = useState(initial);
  const [selectedId, setSelectedId] = useState(initial[0].id);

  const selected = items.find((i) => i.id === selectedId)!;

  function handleMapClick(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x =
      ((e.clientX - rect.left) / rect.width) * 100;

    const y =
      ((e.clientY - rect.top) / rect.height) * 100;

    setItems((prev) =>
      prev.map((bairro) =>
        bairro.id === selectedId
          ? {
              ...bairro,
              x,
              y,
            }
          : bairro
      )
    );
  }

  function copyData() {
    navigator.clipboard.writeText(
      JSON.stringify(items, null, 2)
    );

    alert("Coordenadas copiadas.");
  }

  return (
    <div
      style={{
        display: "flex",
        gap: 30,
        padding: 30,
      }}
    >
      <div
        style={{
          position: "relative",
          width: 900,
          cursor: "crosshair",
        }}
        onClick={handleMapClick}
      >
        <img
          src={mapa}
          style={{
            width: "100%",
            display: "block",
          }}
        />

        {items.map((bairro) => (
          <div
            key={bairro.id}
            style={{
              position: "absolute",
              left: `${bairro.x}%`,
              top: `${bairro.y}%`,
              transform: "translate(-50%,-50%)",
              width: 18,
              height: 18,
              borderRadius: "50%",
              background:
                bairro.id === selectedId
                  ? "#FFD700"
                  : "#ffffff",
              border: "2px solid #000",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedId(bairro.id);
            }}
          />
        ))}
      </div>

      <div
        style={{
          width: 280,
        }}
      >
        <h2>Editor</h2>

        <p>
          Bairro:
          <strong> {selected.name}</strong>
        </p>

        <p>
          x: {selected.x.toFixed(2)}
        </p>

        <p>
          y: {selected.y.toFixed(2)}
        </p>

        <hr />

        {items.map((bairro) => (
          <button
            key={bairro.id}
            style={{
              width: "100%",
              marginBottom: 8,
              padding: 10,
              cursor: "pointer",
              background:
                bairro.id === selectedId
                  ? "#FFD700"
                  : "#eee",
            }}
            onClick={() => setSelectedId(bairro.id)}
          >
            {bairro.name}
          </button>
        ))}

        <button
          style={{
            width: "100%",
            marginTop: 20,
            padding: 14,
          }}
          onClick={copyData}
        >
          Copiar JSON
        </button>
      </div>
    </div>
  );
}