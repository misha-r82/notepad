import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {NotepadComponent} from './notepad/notepad.component';
import {CategoryComponent} from "./category/category.component";

const routes: Route[] = [
    {path: 'notepad', component: NotepadComponent, children:[
        {path:'category/:categoryName', component: CategoryComponent}
      ]
},
  {path:'**', component:NotepadComponent}

    ];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }

