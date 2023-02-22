import Image from "next/image";
import { useEffect, useRef, useState, KeyboardEvent, KeyboardEventHandler } from "react";
import styles from "./styles/Prompt.module.css";
import { IPrompt } from "./types/Prompt.component";

const Prompt: React.FC<IPrompt> = (props) => {
	const { onKeyDown } = props;

	const [isDisabled, setIsDisabled] = useState(false);
	const inputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		inputRef?.current?.focus();
	}, []);

	const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		const isPressEnter = event.key === "Enter";
		const isFilled = event.currentTarget.value.length > 0;

		if(isPressEnter && isFilled) {
			setIsDisabled(true);	
			inputRef?.current?.blur();		

			onKeyDown(event);			
		}
	};

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
				placeholder="type: gs help and press enter"
				ref={inputRef}
				spellCheck={false}
				disabled={isDisabled}
				onKeyDown={handleOnKeyDown}
			/>
		</div>
	);
};

export default Prompt;
