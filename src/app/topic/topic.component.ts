import {Component, Input, OnInit} from '@angular/core';
import {TopicModel} from '../models/topic.model';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
@Input() public topic: TopicModel;
  myForm: FormGroup;
  constructor(){
    this.myForm = new FormGroup({
      "header": new FormControl("header", Validators.required),
      "text": new FormControl(""),
    });
  }

  submit(){
    console.log(this.myForm);
  }


  ngOnInit() {
  }

}
