import { ListItem } from '../model/ListItem';

export class ListTemplate {
    constructor(private container: HTMLUListElement) {}

    render(items: ListItem[]) {
        // Clear the container before rendering new items
        this.container.innerHTML = '';

        items.forEach(({ id, item, checked }) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox" id="${id}" ${checked ? 'checked' : ''}>
                <label for="${id}">${item}</label>
            `;
            this.container.appendChild(li);
        });
    }

    bindAdd(handler: (item: string) => void) {
        const form = document.getElementById('itemEntryForm') as HTMLFormElement;
        const input = document.getElementById('newItem') as HTMLInputElement;
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            if (input.value) {
                handler(input.value);
                input.value = '';
            }
        });
    }

    bindDelete(handler: (item: string) => void) {
        this.container.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            if (target.tagName === 'LABEL') {
                handler(target.textContent!);
            }
        });
    }

    bindToggle(handler: (id: string, checked: boolean) => void) {
        this.container.addEventListener('change', (event) => {
            const target = event.target as HTMLInputElement;
            if (target.type === 'checkbox') {
                handler(target.id, target.checked);
            }
        });
    }
}