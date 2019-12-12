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
  @Input() isNewElement: boolean = false;
  myForm: FormGroup;
  constructor(){
    this.myForm = new FormGroup({
      "header": new FormControl("" , Validators.required),
      "text": new FormControl(""),
    });
  }

  submit(){
    this.topic.category.topics.push(new TopicModel(this.topic.header, this.topic.text, this.topic.category));
  }


  ngOnInit() {
  }

  frmClick() {
    this.topic.IsActive = true;
  }
}
