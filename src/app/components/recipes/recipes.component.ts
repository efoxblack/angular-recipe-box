import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RECIPES } from '../models/mock-recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes = RECIPES;

  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
