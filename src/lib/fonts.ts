import { Noto_Sans_KR } from "next/font/google";
import { GeistMono } from "geist/font/mono";

export const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-kr",
  display: "swap",
  preload: false,
});

export const geistMono = GeistMono;
