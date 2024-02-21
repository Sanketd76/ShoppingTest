import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss'],
})
export class RecipesDetailComponent implements OnInit {
  recipeDetails!: Recipe;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }
  id!: number;
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipeDetails = this.recipeService.getRecipe(this.id);
      console.log(this.id)
    })
  }

  sendToSL() {
    this.recipeService.addIngToShopList(this.recipeDetails.ingredients);
  }
}
