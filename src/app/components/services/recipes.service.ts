import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Recipe } from '../models/recipe';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RecipesService {



  // recipeUrl: string = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert";

  // recipeLimit = '?_limit=3';

  constructor(private http:HttpClient) { }

  // // Get Recipes
  // getRecipes(): Observable<Recipe[]> {
  //   return this.http.get<Recipe[]>(`${this.recipeUrl}${this.recipeLimit}`);
  // }

  // // Delete Recipes
  // deleteRecipe(recipe: Recipe): Observable<Recipe>{
  //   const url = `${this.recipeUrl}/${recipe.idMeal}`;
  //   return this.http.delete<Recipe>(url, httpOptions);
  // }

  // // Add Recipes
  // addRecipe(recipe: Recipe): Observable<Recipe> {
  //   return this.http.post<Recipe>(this.recipeUrl, recipe, httpOptions);
  // }
}
