import { Component } from '@angular/core';

@Component({
    selector: 'app-input-bar',
    templateUrl: './input-bar.component.html',
    styleUrls: ['./input-bar.component.css'],
})
export class InputBarComponent {
    tasks: string[] = [];

    onInput(inputEl: HTMLInputElement) {
        this.tasks.push(inputEl.value);

        console.log(this.tasks);

        inputEl.value = '';
    }
}
