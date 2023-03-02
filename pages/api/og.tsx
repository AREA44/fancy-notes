/* eslint-env node */
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default async function (req) {
  const { searchParams } = new URL(req.url);

  // ?title=<title>
  const hasTitle = searchParams.has("title");
  const title = hasTitle
    ? searchParams.get("title")?.slice(0, 100)
    : "Fancy Notes";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: "-.02em",
          fontWeight: 700,
          background: "white",
        }}
      >
        <div
          style={{
            left: 42,
            top: 42,
            position: "absolute",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              width: 24,
              height: 24,
              background: "black",
            }}
          />
          <span
            style={{
              marginLeft: 8,
              fontSize: 20,
            }}
          >
            Fancy Notes
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "20px 50px",
            margin: "0 42px",
            fontSize: 40,
            width: "auto",
            maxWidth: 550,
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            lineHeight: 1.4,
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
