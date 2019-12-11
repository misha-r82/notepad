import { Component, OnInit } from '@angular/core';
import {CategoryModel} from '../models/category.model';
import {ActivatedRoute} from "@angular/router";
import {NotesService} from "../notes.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
public category : CategoryModel;
public constructor(
    private acrivatedRoute : ActivatedRoute,
    notes:NotesService
)
{
  console.log("category constructor");
  this.acrivatedRoute.params.subscribe(
      params=>{
        console.log(params);
        this.category = notes.notepad
          .find(c=>c.category === params["categoryName"])
      }
  );
}

}
