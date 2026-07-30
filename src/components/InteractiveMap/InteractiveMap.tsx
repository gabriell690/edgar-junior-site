import { useMemo, useState } from "react";

import mapa from "../../assets/maps/joao-pessoa.png";
import "./InteractiveMap.css";

import { neighborhoods as initial } from "./data";
import MapPin from "./MapPin";

interface Props {
  selectedNeighborhood: string;
  onNeighborhoodSelect: (bairro: string) => void;
}

export default function InteractiveMap({
  selectedNeighborhood,
  onNeighborhoodSelect,
}: Props) {
  /**
   * Habilita o editor apenas em desenvolvimento.
   * Para editar, basta trocar para true.
   */
  const DEV_MODE = false;

  const [items, setItems] = useState(initial);

  const [selectedId, setSelectedId] = useState(initial[0]?.id ?? "");

  const selected = useMemo(
    () => items.find((b) => b.id === selectedId),
    [items, selectedId]
  );

  function handleMapClick(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    if (!DEV_MODE) return;

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
      className="interactive-map"
      style={{
        position: "relative",
      }}
    >
      <div
        className="map-wrapper"
        onClick={handleMapClick}
        style={{
          cursor: DEV_MODE ? "crosshair" : "default",
        }}
      >
        <img
          src={mapa}
          alt="Mapa João Pessoa"
          className="map-image"
        />

        {items.map((bairro) => (
          <MapPin
            key={bairro.id}
            neighborhood={bairro}
            active={
              DEV_MODE
                ? bairro.id === selectedId
                : selectedNeighborhood === bairro.name
            }
            onClick={() => {
              if (DEV_MODE) {
                setSelectedId(bairro.id);
                return;
              }

              onNeighborhoodSelect(bairro.name);
            }}
          />
        ))}
      </div>

      {DEV_MODE && (
        <div
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            width: 300,
            padding: 20,
            borderRadius: 14,
            background: "#111827",
            color: "#fff",
            boxShadow: "0 15px 35px rgba(0,0,0,.35)",
            zIndex: 100,
          }}
        >
          <h3
            style={{
              marginTop: 0,
              color: "#FFD54F",
            }}
          >
            Editor de Coordenadas
          </h3>

          {selected && (
            <>
              <p>
                <strong>Bairro:</strong>{" "}
                {selected.name}
              </p>

              <p>
                x: {selected.x.toFixed(2)}
              </p>

              <p>
                y: {selected.y.toFixed(2)}
              </p>
            </>
          )}

          <hr />

          <div
            style={{
              maxHeight: 320,
              overflowY: "auto",
              marginBottom: 16,
            }}
          >
            {items.map((bairro) => (
              <button
                key={bairro.id}
                onClick={() =>
                  setSelectedId(bairro.id)
                }
                style={{
                  display: "block",
                  width: "100%",
                  marginBottom: 8,
                  padding: 10,
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                  background:
                    bairro.id === selectedId
                      ? "#FFD54F"
                      : "#374151",
                  color:
                    bairro.id === selectedId
                      ? "#000"
                      : "#FFF",
                  fontWeight: 600,
                }}
              >
                {bairro.name}
              </button>
            ))}
          </div>

          <button
            onClick={copyData}
            style={{
              width: "100%",
              padding: 14,
              border: "none",
              borderRadius: 8,
              background: "#FFD54F",
              color: "#000",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Copiar JSON
          </button>
        </div>
      )}
    </div>
  );
}