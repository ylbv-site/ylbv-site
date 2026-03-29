import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, DM_Serif_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${dmSerif.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
