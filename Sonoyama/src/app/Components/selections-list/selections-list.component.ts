import { Component, HostListener } from '@angular/core';
import { KanbanApiClientService } from 'src/app/Services/kanban-api-client.service';

@Component({
    selector: 'app-selections-list',
    templateUrl: './selections-list.component.html',
    styleUrls: ['./selections-list.component.scss']
})
export class SelectionsListComponent {
    selections!: any[]
    indexOfSelesectedInputList: number = 0;
    isNewInputVisible = false;
    newSelectionName = '';

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

    createSelection(name: string) {
        this.kanbanService.createSelection({ name: name,  todoTask: []}).subscribe(selection => {
            this.selections.push(selection)
        })
    }

    clickOnNameOfSelection(selection: any) {
        selection.isvisibleinput = true;
        this.indexOfSelesectedInputList = this.selections.indexOf(selection)
    }

    @HostListener('document:keydown.escape')
    closeInputs() {
        this.isNewInputVisible = false;
        this.selections[this.indexOfSelesectedInputList].isvisibleinput = false;
    }

    onCreateButtonClick() {
        this.isNewInputVisible = true;
    }

    onEnter() {
        if (this.newSelectionName) {
            this.createSelection(this.newSelectionName);
            this.newSelectionName = '';
            this.isNewInputVisible = false;
        }
    }
    onEnterSelection(id: number,selection: any) {
        if (selection.name) {
            this.kanbanService.updateSelection(id, { name: selection.name}).subscribe(selection => {
                this.closeInputs();
            })
        }
    }
}

