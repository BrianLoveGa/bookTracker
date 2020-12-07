import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book/add-book.component';
import { AddReaderComponent } from './add-reader/add-reader/add-reader.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { EditBookComponent } from './edit-book/edit-book/edit-book.component';
import { EditReaderComponent } from './edit-reader/edit-reader/edit-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    AddReaderComponent,
    DashboardComponent,
    EditBookComponent,
    EditReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
