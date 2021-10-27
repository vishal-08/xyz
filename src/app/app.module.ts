import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { EditComponent } from './home/edit/edit.component';
import { ToastrModule } from 'ngx-toastr';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CompletedService } from './list/completed.service';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CompletedListComponent } from './completed-list/completed-list.component';
import { ManageTodoService } from './manage-todo.service';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { SortableModule } from 'ngx-bootstrap/sortable';
import {DragDropModule} from '@angular/cdk/drag-drop'
import { ManageTaskService } from './manage-task.service';


import { FilterPipe } from './list/filter.pipe';
import { DoneFilterPipe } from './completed-list/donefilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddNotesComponent,
    ListComponent,
    EditComponent,
    CompletedListComponent,
    FilterPipe,
    DoneFilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    SortableModule.forRoot(),
    DragDropModule
  ],
  providers: [DatePipe, TodoService, CompletedService, ManageTodoService, ManageTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
