export interface IContextForm {
    values?: Map<string, any>;

    setValue?(id: string, value: any): void;

    getValue?(id: string): any;
}