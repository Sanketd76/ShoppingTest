import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppinglist.service';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

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
  ];

  constructor(private slService:ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngToShopList(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient);
  }
}
