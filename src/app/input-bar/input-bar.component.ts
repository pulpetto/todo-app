import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-input-bar',
    templateUrl: './input-bar.component.html',
    styleUrls: ['./input-bar.component.css'],
})
export class InputBarComponent {
    note: string = '';
    @Output() onTaskAddedEmmit: EventEmitter<string> =
        new EventEmitter<string>();

    onTaskAdded() {
        if (this.note === '') {
            return;
        } else {
            this.onTaskAddedEmmit.emit(this.note);
            this.note = '';
        }
    }
}
