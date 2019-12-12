import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {NotepadComponent} from './notepad/notepad.component';
import {CategoryesComponent} from "./category/categoryes.component";

const routes: Route[] = [
    {path: 'notepad', component: NotepadComponent, children:[
        {path:'category/:categoryName', component: CategoryesComponent}
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

