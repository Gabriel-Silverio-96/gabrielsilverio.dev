import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Source_Code_Pro } from "@next/font/google";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "300",  variable: "--source-font" });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={sourceCodePro.className}>
			<Component {...pageProps} />
		</div>
	);
}
