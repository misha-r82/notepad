import { Component, OnInit } from '@angular/core';
import {CategoryModel} from '../models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
public category : CategoryModel;


}
