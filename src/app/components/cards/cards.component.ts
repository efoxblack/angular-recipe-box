import { Component, OnInit, Input } from '@angular/core';
import { RecipesService } from '../services/recipes.service';

import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }



}
