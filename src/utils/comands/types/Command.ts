import { IPrompt } from "@/components/Prompt/types/Prompt.component";

export type Command = "gs_help";

export interface ICommandsOptions {
    gs_help: React.FC<IPrompt>[];
}