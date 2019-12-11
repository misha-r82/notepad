import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotepadComponent } from './notepad/notepad.component';
import {AppRoutingModule} from './app-routing.module';
import { TopicComponent } from './topic/topic.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    NotepadComponent,
    TopicComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
