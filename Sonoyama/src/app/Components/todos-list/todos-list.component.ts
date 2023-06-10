import { Component, ElementRef, HostListener, Input, ɵresetCompiledComponents } from '@angular/core';
import { KanbanApiClientService } from 'src/app/Services/kanban-api-client.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {
  @Input() data!: any[]
  @Input() selectionId!: number
  showCard = false;
  name = '';
  description = '';
  private containerRef!: ElementRef<HTMLElement>;;

  constructor(private readonly kanbanService: KanbanApiClientService) {

  }

  showForm() {
    this.showCard = true;
  }

  @HostListener('document:keydown.escape')
  closeCard() {
    this.showCard = false;
  }

  onSubmit() {
    if (this.name || this.description) {
      // Handle form submission logic here
      console.log('Submitted:', this.name, this.description);
      this.kanbanService.createTodo(this.selectionId, { name: this.name, description: this.description }).subscribe(todo => {
        this.data.push(todo)
        this.name = "";
        this.description = "";
      })
      this.closeCard();
    }
  }
}
