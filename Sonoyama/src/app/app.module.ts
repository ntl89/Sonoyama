import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './Components/board/board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectionsListComponent } from './Components/selections-list/selections-list.component';
import { TodosListComponent } from './Components/todos-list/todos-list.component';
import { TodoItemComponent } from './Components/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SelectionsListComponent,
    TodosListComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
