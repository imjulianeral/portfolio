// @cf-wasm/* resolve to a Node build under `vite dev` and to a workerd build
// (with precompiled .wasm modules) in the Cloudflare Worker bundle.
import { satori } from "@cf-wasm/satori";
import { Resvg } from "@cf-wasm/resvg";
// Workers have no filesystem, so fonts are inlined into the server bundle at
// build time instead of being read from `public/`.
import cabinetGroteskDataUrl from "../../public/fonts/CabinetGrotesk-Medium.ttf?inline";
import clashDisplayDataUrl from "../../public/fonts/ClashDisplay-Semibold.ttf?inline";

export const OG_SIZE = {
  width: 1200,
  height: 630,
};

function dataUrlToBytes(dataUrl: string) {
  const binary = atob(dataUrl.slice(dataUrl.indexOf(",") + 1));
  return Uint8Array.from(binary, (char) => char.charCodeAt(0)).buffer;
}

let fontData: { cabinetGrotesk: ArrayBuffer; clashDisplay: ArrayBuffer };

function getOgFontData() {
  fontData ??= {
    cabinetGrotesk: dataUrlToBytes(cabinetGroteskDataUrl),
    clashDisplay: dataUrlToBytes(clashDisplayDataUrl),
  };
  return fontData;
}

const styles = {
  outerWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    position: "relative",
  },
  middleWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    position: "relative",
    padding: "40px",
  },
  wrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fafafa",
    position: "relative",
    padding: "40px",
    border: "1px solid #e5e5e5",
    borderRadius: "12px",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    height: "100%",
    width: "100%",
    position: "relative",
    zIndex: 1,
  },
  title: {
    fontFamily: "Clash Display",
    fontSize: "48px",
    fontWeight: 600,
    lineHeight: 1.1,
    textAlign: "left",
    color: "#000000",
    marginBottom: "16px",
    letterSpacing: "-0.02em",
    maxWidth: "900px",
  },
  description: {
    fontFamily: "Cabinet Grotesk",
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: 1.5,
    textAlign: "left",
    maxWidth: "800px",
    color: "#404040",
    marginBottom: "16px",
  },
  date: {
    fontFamily: "Cabinet Grotesk",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: 1.5,
    textAlign: "left",
    color: "#666666",
    marginBottom: "32px",
  },
} as const;

export async function renderOgImage({
  title,
  description,
  date,
}: {
  title: string;
  description?: string;
  date?: string;
}) {
  try {
    const fontData = getOgFontData();

    const svg = await satori(
      <div style={styles.outerWrapper}>
        <div style={styles.middleWrapper}>
          <div style={styles.wrapper}>
            <div style={styles.mainContainer}>
              <div style={styles.title}>{title}</div>
              {description ? (
                <div style={styles.description}>{description}</div>
              ) : null}
              {date ? <div style={styles.date}>{date}</div> : null}
            </div>
          </div>
        </div>
      </div>,
      {
        ...OG_SIZE,
        fonts: [
          {
            name: "Cabinet Grotesk",
            data: fontData.cabinetGrotesk,
            weight: 400,
            style: "normal",
          },
          {
            name: "Cabinet Grotesk",
            data: fontData.cabinetGrotesk,
            weight: 700,
            style: "normal",
          },
          {
            name: "Clash Display",
            data: fontData.clashDisplay,
            weight: 600,
            style: "normal",
          },
        ],
      },
    );

    const png = new Resvg(svg, {
      fitTo: { mode: "width", value: OG_SIZE.width },
    })
      .render()
      .asPng();

    return new Response(new Uint8Array(png), {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("Error generating OpenGraph image:", error);
    return new Response(
      `Failed to generate image: ${error instanceof Error ? error.message : "Unknown error"}`,
      { status: 500 },
    );
  }
}
