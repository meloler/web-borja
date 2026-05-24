import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#06231f",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#5ed3b3",
          fontSize: 20,
          fontWeight: 700,
          fontFamily: "system-ui",
          letterSpacing: -1,
        }}
      >
        bg
      </div>
    ),
    size,
  );
}
