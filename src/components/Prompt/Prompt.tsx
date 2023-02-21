import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./styles/Prompt.module.css";

const Prompt = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		inputRef?.current?.focus();
	}, []);

	return (
		<div className={styles.prompt}>
			<Image
				src="/logo-gabriel-silverio.png"
				alt="Logo Gabriel Silvério"
				width={30}
				height={30}
			/>
			<h4>gabrielsilverio.dev:~$</h4>
			<input
				type="text"
				autoFocus
				placeholder="type: gs help and press enter"
				ref={inputRef}
				spellCheck={false}
			/>
		</div>
	);
};

export default Prompt;
