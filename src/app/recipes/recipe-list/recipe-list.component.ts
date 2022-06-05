import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'this is a test recipe',
      'https://img.delicious.com.au/ZCVFCYn_/del/2022/02/chicken-chickpea-curry-163942-1.jpg'
    ),
    new Recipe(
      'Test Recipe',
      'this is a test recipe',
      'https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
