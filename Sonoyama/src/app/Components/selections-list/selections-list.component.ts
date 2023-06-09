import { Component } from '@angular/core';
import { KanbanApiClientService } from 'src/app/Services/kanban-api-client.service';

@Component({
  selector: 'app-selections-list',
  templateUrl: './selections-list.component.html',
  styleUrls: ['./selections-list.component.scss']
})
export class SelectionsListComponent {
  selections!: any[]

  constructor(private readonly kanbanService: KanbanApiClientService) {
    this.kanbanService.getSelections().subscribe(selections => {
      this.selections = selections.map(selection => {
        return {
          ...selection,
          isvisibleinput: false
        }
        })
      })
    }
  
  createSelection() {
    // this.kanbanService.createSelection().subscribe(selection => {
    //   this.selections.unshift(selection)
    // })
  }
}

