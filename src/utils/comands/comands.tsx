import Contacts from "@/components/Contact";
import Help from "@/components/Help";
import NotRecognizedCommand from "@/components/NotRecognizedCommand";
import Project from "@/components/Project";
import Prompt from "@/components/Prompt";
import { Command, ICommandsOptions } from "./types/Command";

const commands = (command: Command) => {
	const commandsOptions: ICommandsOptions = {
		gs_help: [Help, Prompt],
		gs_contact: [Contacts, Prompt],
		gs_project: [Project, Prompt],
	};

	const notRecognizedCommand = [NotRecognizedCommand, Prompt];
	const render = commandsOptions[command] || notRecognizedCommand;
    
	return render;
};

export default commands;