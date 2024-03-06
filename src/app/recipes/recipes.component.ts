import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipeService } from './recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostsService } from './post.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit, OnDestroy {
  selectedRecipe!: Recipe;

  loadedPost: Post[] = [];

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private postService: PostsService
  ) {}

  sendReq(postdata: Post) {
    this.postService.createPost(postdata);
  }

  onfetchPosts() {
    this.getPosts();
  }

  deleteData(id: any) {
    console.log(id);
    this.postService.deletePost(id).subscribe(() => {
      this.loadedPost = [];
    });
  }

  private getPosts() {
    this.postService.fetchPosts().subscribe(
      (posts) => {
        this.loadedPost = posts;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private onSubScribeBefore!: Subscription;

  ngOnDestroy(): void {
    // this.onSubScribeBefore.unsubscribe();
  }
  ngOnInit(): void {
    this.onfetchPosts();
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
