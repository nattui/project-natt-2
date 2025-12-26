import { Inter as fontSans } from "next/font/google"
import localFont from "next/font/local"

// Martina Plantijn 300
const display = localFont({
  src: [{ path: "./font-display-300.woff2", weight: "500" }],
  variable: "--font-display",
})

const mono = localFont({
  src: [{ path: "./font-mono-400.ttf", weight: "400" }],
  variable: "--font-mono",
})

const sans = fontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500"],
})

export const fontCssVariables = [display.variable, mono.variable, sans.variable].join(" ")
