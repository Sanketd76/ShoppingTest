import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  constructor(
    private recipeData: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeData.getRecipes();
  }

  recipes: Recipe[] = [];

  CreateNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
