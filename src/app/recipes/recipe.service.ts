import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppinglist.service';

import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  // private recipes: Recipe[] = [];

  private recipes: Recipe[] = [
    new Recipe(
      'A test sdsdsd',
      'this is test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Billy', 1)]
    ),
    new Recipe(
      'A test tutyuyu',
      'this is test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
      [new Ingredient('Runs', 1), new Ingredient('Buns', 1)]
    ),
    new Recipe(
      'A test cvv',
      'this is test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
      [new Ingredient('Max', 1), new Ingredient('Willy', 1)]
    ),
  ]

  recipesChanged = new Subject<Recipe[]>();

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes);
    // console.log(recipes)
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngToShopList(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
