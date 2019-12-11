import { Injectable } from '@angular/core';
import {CategoryModel} from './models/category.model';
import {TopicModel} from './models/topic.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
public notepad: CategoryModel[];
  constructor() {
    this.notepad = [];
    let topics = [new TopicModel("токарный станок", "40000p для выполнения токарных работ"),
      new TopicModel("фрезерный станок", "50000р для выполения фрезерных работ"),
    new TopicModel("Курс Angular", "12000р бесполезная вещь, взможно для чего-то сгодится")];
    let category = new CategoryModel("покупки", topics);
    this.notepad.push(category);
    topics = [new TopicModel("токарный станок", "посмотреть на токарный станок"),
      new TopicModel("фрезерный станок", "пощупать фрезерный станок"),
      new TopicModel("Курс Angular", "выполнить домашнее задание")];
    category = new CategoryModel("планы на выхоные", topics);
    this.notepad.push(category);
  }
}
