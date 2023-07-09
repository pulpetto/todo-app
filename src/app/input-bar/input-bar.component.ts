import { Component } from '@angular/core';

@Component({
    selector: 'app-input-bar',
    templateUrl: './input-bar.component.html',
    styleUrls: ['./input-bar.component.css'],
})
export class InputBarComponent {
    note: string = '';

    onTaskAdded() {
        if (this.note === '') {
            return;
        } else {
            // emitter stuff
            this.note = '';
        }
    }
}
