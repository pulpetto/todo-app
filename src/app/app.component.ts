import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    tasks: string[] = [];

    addNoteToTasks(note: string) {
        this.tasks.push(note);
    }
}
