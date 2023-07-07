import { Component } from '@angular/core';

@Component({
    selector: 'app-input-bar',
    templateUrl: './input-bar.component.html',
    styleUrls: ['./input-bar.component.css'],
})
export class InputBarComponent {
    tasks: string[] = [];
    isEditing: boolean = false;

    onInput(inputEl: HTMLInputElement) {
        if (!inputEl.value) {
            return;
        } else {
            this.tasks.push(inputEl.value);
            console.log(this.tasks);
            inputEl.value = '';
        }
    }
}
