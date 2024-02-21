import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipeService } from './recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit, OnDestroy {
  selectedRecipe!: Recipe;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}
  private onSubScribeBefore!: Subscription;

  ngOnDestroy(): void {
    // this.onSubScribeBefore.unsubscribe();
  }
  ngOnInit(): void {
    // this.onSubScribeBefore = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    // console.log(this.route.snapshot.params['id'])

    // this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
    //   this.selectedRecipe = recipe;
    //   this.route.params.subscribe((params: Params) => {
    //     // console.log(params)
    //   });
    // });
  }
}
