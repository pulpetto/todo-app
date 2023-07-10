import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    tasks: { id: number; note: string }[] = [];

    addNoteToTasks(note: string) {
        const newTask = {
            id: Date.now(),
            note: note,
        };

        this.tasks.push(newTask);
    }
}
