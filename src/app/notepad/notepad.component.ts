import { Component, OnInit } from '@angular/core';
import {NotesService} from '../notes.service';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {TopicModel} from "../models/topic.model";
import {CategoryModel} from "../models/category.model";




@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {
public header: string;
categoryForm: FormGroup;
  constructor(private notepad:NotesService, private fb:FormBuilder) {
    this.categoryForm = fb.group(
        {
          header:['', [Validators.required, this.categoryValidator]]
        }
    )
  }
  submit(){
    this.notepad.notepad.push(new CategoryModel(this.header));
  }
  categoryValidator(control: FormControl): ValidationErrors | null {
    debugger
    if (!this) return null;
    console.log(control.value);
    if (this.notepad.notepad.findIndex((c)=>c.category === control.value) > -1) {
      return {categoryValidator: 'Такая категория уже существует!'}
    }
    return null;
  }


  ngOnInit() {
  }

}
