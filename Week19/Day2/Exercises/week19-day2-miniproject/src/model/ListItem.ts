import { v4 as uuidv4 } from 'uuid';

interface IListItem {
    id: string;
    item: string;
    checked: boolean;
}

export class ListItem implements IListItem {
    private _id: string;
    private _item: string;
    private _checked: boolean;

    constructor(item: string) {
        this._id = uuidv4();
        this._item = item;
        this._checked = false;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get item(): string {
        return this._item;
    }

    set item(value: string) {
        this._item = value;
    }

    get checked(): boolean {
        return this._checked;
    }

    set checked(value: boolean) {
        this._checked = value;
    }
}