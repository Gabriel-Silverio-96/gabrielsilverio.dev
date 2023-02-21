import { KeyboardEventHandler } from "react";

export interface IPrompt {
    onKeyDown: KeyboardEventHandler<HTMLInputElement>;
}