import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipes.model';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}
  dataUrl =
    'https://angularproject-c2558-default-rtdb.firebaseio.com/recipes.json';

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.dataUrl, recipes).subscribe((response) => {
      console.log(response);
    });
  }

  fetchRecipes() {
    this.http.get<Recipe[]>(this.dataUrl).subscribe((recipes) => {
      this.recipeService.setRecipes(recipes);
    });
  }
}
