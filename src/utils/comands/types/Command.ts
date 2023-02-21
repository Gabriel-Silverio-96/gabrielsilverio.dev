import { IPrompt } from "@/components/Prompt/types/Prompt.component";

export type Command = "gs_help" | "gs_contact" | "gs_project" | "gs_about";

export interface ICommandsOptions {
    gs_help: React.FC<IPrompt>[];
    gs_contact: React.FC<IPrompt>[];
    gs_project: React.FC<IPrompt>[];
    gs_about: React.FC<IPrompt>[];
}