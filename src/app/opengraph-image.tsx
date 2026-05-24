import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Borja Galván Nutrición";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(1100px 600px at 20% 0%, #15524a 0%, #0a2f2a 55%, #06231f 100%)",
          color: "#f3f7f5",
          fontFamily: "system-ui",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#06231f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(94,211,179,.4)",
            }}
          >
            <span
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#5ed3b3",
              }}
            >
              bg
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 22, fontWeight: 600 }}>Borja Galván</span>
            <span
              style={{
                fontSize: 13,
                letterSpacing: 6,
                color: "#7be0c5",
                textTransform: "uppercase",
              }}
            >
              Nutrición
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span
            style={{
              fontSize: 18,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#7be0c5",
            }}
          >
            Nutrición online · Gran Canaria
          </span>
          <h1
            style={{
              fontSize: 76,
              fontWeight: 600,
              lineHeight: 1.05,
              margin: 0,
              maxWidth: 980,
            }}
          >
            Come mejor, rinde más y mantén el cambio.
          </h1>
          <p
            style={{
              fontSize: 28,
              color: "rgba(243,247,245,.75)",
              maxWidth: 900,
              margin: 0,
            }}
          >
            Planes de nutrición online y deportiva con comida real, criterio y
            adherencia.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 20, color: "rgba(243,247,245,.7)" }}>
            borjagalvannutricion.com
          </span>
          <span
            style={{
              fontSize: 16,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#7be0c5",
            }}
          >
            Lo importante es el después del después
          </span>
        </div>
      </div>
    ),
    size,
  );
}
