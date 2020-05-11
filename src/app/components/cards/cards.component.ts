import { Component, OnInit} from '@angular/core';
import { Recipe } from '../models/recipe';
import { RECIPES } from '../models/mock-recipes';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  recipes = RECIPES;

  selectedRecipe: Recipe

  constructor() { }

  ngOnInit(): void {
  }



}
