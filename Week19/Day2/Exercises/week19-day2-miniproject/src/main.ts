import { FullList } from './model/FullList';
import { ListTemplate } from './templates/ListTemplate';

const list = new FullList();
const template = new ListTemplate(document.getElementById('listItems') as HTMLUListElement);

document.addEventListener('DOMContentLoaded', () => {
    list.load();
    template.render(list.items);

    template.bindAdd((item: string) => {
        list.addItem(item);
        template.render(list.items);
    });

    template.bindDelete((item: string) => {
        list.removeItem(item);
        template.render(list.items);
    });

    template.bindToggle((id: string, checked: boolean) => {
        list.toggleItem(id, checked);
        template.render(list.items);
    });

    const clearButton = document.getElementById('clearItemsButton') as HTMLButtonElement;
    clearButton.addEventListener('click', () => {
        list.clear();
        template.render(list.items);
    });
});
