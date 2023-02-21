import NotRecognizedCommand from "@/components/NotRecognizedCommand";
import Prompt from "@/components/Prompt";
import { Command, ICommandsOptions } from "./types/Command";

const commands = (command: Command) => {
	const commandsOptions: ICommandsOptions = {
		gs_help: [() => <h1 style={{color: "wheat"}}>Help</h1>, Prompt]
	};

	const notRecognizedCommand = [NotRecognizedCommand, Prompt];
	const render = commandsOptions[command] || notRecognizedCommand;
    
	return render;
};

export default commands;