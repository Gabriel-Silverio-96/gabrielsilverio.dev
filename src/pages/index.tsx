import Prompt from "@/components/Prompt";
import styles from "@/styles/Home.module.css";
import commands from "@/utils/comands/comands";
import Head from "next/head";
import { Fragment, KeyboardEvent, useState } from "react";

export default function Home() {
	const [render, setRender] = useState([Prompt]);
	const [command, setCommand] = useState("");

	const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		const value: any = event.currentTarget.value.replace(" ", "_");
		setCommand(value);

		const commandRender = commands(value);
		if (value === "gs_clear") {
			const PromptRender = () => <Prompt onKeyDown={onKeyDown} />;
			return setRender([PromptRender]);
		}

		setRender(prevState => [...prevState, ...commandRender]);
	};

	return (
		<>
			<Head>
				<title>Gabriel Silvério | Frontend developer portfolio in terminal format</title>
				<meta name="description" content="I'm Gabriel and this is my frontend developer portfolio in terminal format" />

				<meta property="og:title" content="I'm Gabriel and this is my frontend developer portfolio in terminal format" />
				<meta property="og:type" content="website" />
				<meta property="og:description" content="See more about me and my projects. Visit my portfolio in terminal format" />
				<meta property="og:image" content="https://gabrielsilverio-dev.vercel.app/portfolio-in-terminal-format-gabrielsilverio.png"/>
				<meta property="og:url" content="https://gabrielsilverio-dev.vercel.app" />

				<meta name="twitter:card" content="summary" />
				<meta name="twitter:url" content="https://gabrielsilverio-dev.vercel.app" />
				<meta property="twitter:description" content="See more about me and my projects. Visit my portfolio in terminal format" />
				<meta property="twitter:image" content="https://gabrielsilverio-dev.vercel.app/portfolio-in-terminal-format-gabrielsilverio.png"/>

				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				{render.map((Component, index) => (
					<Fragment key={index}>
						<Component onKeyDown={onKeyDown} />
					</Fragment>
				))}
			</main>
		</>
	);
}
