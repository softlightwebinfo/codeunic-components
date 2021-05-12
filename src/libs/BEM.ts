import { IObjectMix } from "../interfaces/TObject";

export enum ITBem {
    DEFAULT = '-',
    MODIFIER = '--',
    BLOCK = "",
    CHILD = "_"
}

export class BEM {
    private _parent: string;
    private _classNames: IObjectMix;
    private _listClassNames: string[] = [];
    private style: object;

    constructor(parent: string, classNames: IObjectMix, style = null) {
        this._parent = parent;
        this._classNames = classNames;
        this.style = style;
        this._listClassNames.push(this.getParentStyle())
    }

    public GetParent(): string {
        return this._parent;
    }

    public getParentStyle() {
        return this.style ? this.style[this._parent] : this._parent;
    }

    toString(): string {
        return Object.entries(this._classNames).reduce((previousValue, currentValue) => {
            if (currentValue[1]) {
                if (typeof currentValue[1] == "string") {
                    const parent = this._parent + ITBem.MODIFIER + currentValue[0] + ITBem.DEFAULT + currentValue[1];
                    previousValue.push(this.style ? this.style[parent] : parent);
                } else if (typeof currentValue[1] == "boolean") {
                    const parent = this._parent + ITBem.MODIFIER + currentValue[0];
                    previousValue.push(this.style ? this.style[parent] : parent);
                }
            }
            return previousValue;
        }, [...this._listClassNames]).join(" ");
    }

    Append(className: string) {
        if (!className) return this;
        this._listClassNames.push(className);
        return this;
    }

    Children(name: string, extra: string = ""): string {
        const parent = `${this._parent}__${name}${extra ? ` ${extra}` : ''}`;
        return this.style ? this.style[parent] : parent;
    }

    Modifier(children: string, modifier: string, active: boolean, extra: string = "") {
        let data = [`${this._parent}__${children}`];

        if (active) {
            data.push(`${this._parent}__${children}--${modifier}`);
        }
        if (extra) {
            data.push(extra);
        }
        return data.join(" ");
    }
}