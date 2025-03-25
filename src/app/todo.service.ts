import { Injectable } from "@angular/core";
import { signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    //Signal to hold the list of todos
    todos = signal<string[]>([]);
    addTodo(todo: string) {
        this.todos.update(todos => [...todos, todo]);
    }
    removeTodo(index: number) {
        this.todos.update(todos => todos.filter((_, i) => i !== index));
    }
    // Add a method to clear all todos
}