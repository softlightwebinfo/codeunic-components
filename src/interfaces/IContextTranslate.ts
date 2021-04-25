import { IObjectCustom } from "./TObject";

export interface IContextTranslate {
    defaultLang?: string;
    language?: string[];
    translates?: IObjectCustom<any>;
}