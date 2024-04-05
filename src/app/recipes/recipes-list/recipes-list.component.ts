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
  recipes:Recipe[]=[];
  testvalue:String="";

  constructor(
    private recipeData: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    this.recipeData.testObs.subscribe(res => {
      console.log(res);
      this.testvalue=res;
    });
    this.recipeData.recipeval.subscribe(res=>{
      console.log(res);
      this.recipes = res
    })
  
  }


  CreateNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
