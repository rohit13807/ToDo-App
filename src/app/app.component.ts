import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoService } from './todo.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, MatButtonModule, MatInputModule, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-app-signal';
  newTodo = '';
  todoForm: FormGroup = new FormGroup({
    name: new FormControl('')
  })
  constructor(private todoService: TodoService) { }

  get todos() {
    return this.todoService.todos;
  }
  addTodo() {
    if (this.todoForm.valid && this.todoForm.value.name.trim() !== '') {
      this.todoService.addTodo(this.todoForm.value.name.trim());
      this.todoForm.value.name = '';
    }
  }

  removeTodo(index: number) {
    this.todoService.removeTodo(index);
  }
}
