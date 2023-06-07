import { Component, Input } from '@angular/core';
import { KanbanApiClientService } from 'src/app/Services/kanban-api-client.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {
  @Input() data!: any[]
  constructor(private readonly kanbanService: KanbanApiClientService) {

  }

  createTodo()  {
    this.kanbanService.createTodo().subscribe(todo => {
      this.data.unshift(todo)
    })
  }
}
