import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputBarComponent } from './input-bar/input-bar.component';
import { TasksComponent } from './tasks/tasks.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent, InputBarComponent, TasksComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
