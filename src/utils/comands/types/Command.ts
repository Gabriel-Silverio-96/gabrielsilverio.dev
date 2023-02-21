import { IPrompt } from "@/components/Prompt/types/Prompt.component";

export type Command = "gs_help" | "gs_contact";

export interface ICommandsOptions {
    gs_help: React.FC<IPrompt>[];
    gs_contact: React.FC<IPrompt>[];
}