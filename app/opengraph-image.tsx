import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Grupo Ayco — Soluciones integrales de movilidad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0A",
          color: "#FFFFFF",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            width: 80,
            height: 4,
            backgroundColor: "#C9A227",
            marginBottom: 32,
          }}
        />
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Grupo Ayco
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#B5B5B5",
            letterSpacing: "0.05em",
          }}
        >
          Soluciones integrales de movilidad
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 20,
            color: "#C9A227",
            letterSpacing: "0.1em",
          }}
        >
          Cuatro empresas. Un solo grupo.
        </div>
      </div>
    ),
    { ...size }
  );
}
