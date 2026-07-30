import type { Neighborhood } from "./types";

interface Props {
  neighborhood: Neighborhood;
  active: boolean;
  onClick: () => void;
}

export default function MapPin({
  neighborhood,
  active,
  onClick,
}: Props) {
  return (
    <button
      className={`map-pin ${active ? "active" : ""}`}
      style={{
        left: `${neighborhood.x}%`,
        top: `${neighborhood.y}%`,
      }}
      onClick={onClick}
    >
      <div className="pin-circle" />
    </button>
  );
}