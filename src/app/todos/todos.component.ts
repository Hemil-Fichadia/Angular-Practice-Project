import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/Todo.type';
import { catchError } from 'rxjs';

@Component({
    selector: 'app-todos',
    imports: [],
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
    todoService = inject(TodosService);
    todoItemsSignal = signal<Array<Todo>>([]);

    ngOnInit(): void {
        this.todoService.getTodosFromApi()
            .pipe(
                catchError((err) => {
                    console.log(err);
                    throw err;
                })
            ).subscribe((todos) => {
                this.todoItemsSignal.set(todos);
            })
    }
}
