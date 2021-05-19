import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://c.pxhere.com/photos/da/85/Diet_Foods_Salad_Salads_Tomato_Tomatoes-1614557.jpg!d')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
