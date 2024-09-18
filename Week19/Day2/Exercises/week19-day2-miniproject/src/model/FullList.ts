import { ListItem } from './ListItem';

export class FullList {
    items: ListItem[] = [];

    load() {
        // Load items from storage or initialize with default items
        const storedItems = JSON.parse(localStorage.getItem('items') || '[]');
        this.items = storedItems.map((item: { _id: string, _item: string, _checked: boolean }) => {
            const listItem = new ListItem(item._item);
            listItem.id = item._id;
            listItem.checked = item._checked;
            return listItem;
        });
    }

    addItem(item: string) {
        const newItem = new ListItem(item);
        this.items.push(newItem);
        this.save();
    }

    removeItem(item: string) {
        this.items = this.items.filter(i => i.item !== item);
        this.save();
    }

    toggleItem(id: string, checked: boolean) {
        const item = this.items.find(i => i.id === id);
        if (item) {
            item.checked = checked;
            this.save();
        }
    }

    clear() {
        this.items = [];
        this.save();
    }

    save() {
        localStorage.setItem('items', JSON.stringify(this.items));
    }
}