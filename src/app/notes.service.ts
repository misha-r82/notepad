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
    let category = new CategoryModel("покупки");
    category.topics = [new TopicModel("токарный станок", "40000p для выполнения токарных работ", category),
      new TopicModel("фрезерный станок", "50000р для выполения фрезерных работ", category),
    new TopicModel("Курс Angular", "12000р бесполезная вещь, взможно для чего-то сгодится", category)];

    this.notepad.push(category);
    category = new CategoryModel("планы на выхоные");
    category.topics = [new TopicModel("токарный станок", "посмотреть на токарный станок", category),
      new TopicModel("фрезерный станок", "пощупать фрезерный станок", category),
      new TopicModel("Курс Angular", "выполнить домашнее задание", category)];
    this.notepad.push(category);
  }
}
