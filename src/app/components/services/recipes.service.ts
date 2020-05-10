import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Recipe } from '../models/recipe';
import { Observable } from 'rxjs';

const htmlOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipeUrl: string = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert";

  recipeLimit = '?_limit=3';

  constructor(private http:HttpClient) { }

  // Get Recipes
  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.recipeUrl}${this.recipeLimit}`);
  }


}
