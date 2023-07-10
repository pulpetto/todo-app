import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
    @Input() tasks: { id: number; note: string }[] = [];

    editTask(task: string) {
        console.log('edit time');
        // Implement the logic to handle editing the task
        // For example, open a dialog or toggle an edit mode
    }
}
