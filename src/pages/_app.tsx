import "@/styles/globals.css";

import type { AppProps } from "next/app";

import { Bree_Serif } from "next/font/google";

const breeSerif = Bree_Serif({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`flex flex-col max-w-[900px] p-4 m-auto gap-2 ${breeSerif.className}`}
    >
      <Component {...pageProps} />
    </div>
  );
}
