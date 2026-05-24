import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#06231f",
          borderRadius: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#5ed3b3",
          fontSize: 92,
          fontWeight: 700,
          fontFamily: "system-ui",
          letterSpacing: -3,
        }}
      >
        bg
      </div>
    ),
    size,
  );
}
