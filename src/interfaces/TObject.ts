export type IObject = { [p: string]: any; }
export type IObjectString = { [p: string]: string; }
export type IObjectBool = { [p: string]: boolean; }
export type IObjectMix = IObjectBool | IObjectString | IObject;
export type IObjectCustom<T> = { [p: string]: T }