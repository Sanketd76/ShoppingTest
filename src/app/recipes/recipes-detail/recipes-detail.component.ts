import { Component, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss'],
})
export class RecipesDetailComponent {
  @Input() recipeDetails!: Recipe;
  constructor(private recipeService: RecipeService) {}
  sendToSL() {
    this.recipeService.addIngToShopList(this.recipeDetails.ingredients);
  }
}
