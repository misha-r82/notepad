import { Component, OnInit } from '@angular/core';
import {CategoryModel} from '../models/category.model';
import {ActivatedRoute} from "@angular/router";
import {NotesService} from "../notes.service";
import {TopicModel} from "../models/topic.model";

@Component({
  selector: 'app-category',
  templateUrl: './categoryes.component.html',
  styleUrls: ['./categoryes.component.css']
})
export class CategoryesComponent implements OnInit{
public category : CategoryModel;
private newTopic: TopicModel;
public constructor(
    private acrivatedRoute : ActivatedRoute,
    notes:NotesService
)
{
  this.acrivatedRoute.params.subscribe(
      params=>{
        this.category = notes.notepad
          .find(c=>c.category === params["categoryName"])
      }
  );
}
ngOnInit(): void {
    this.newTopic = new TopicModel("","",this.category);
    this.newTopic.IsActive = true;
}

}
