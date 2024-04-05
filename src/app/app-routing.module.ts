import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ActiveusersComponent } from './@practice/activeusers/activeusers.component';
import { RoutingmodelComponent } from './@practice/routingmodel/routingmodel.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StartpageComponent } from './recipes/startpage/startpage.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { AuthComponent } from './auth/auth.component';
const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: StartpageComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipesDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  { path: 'auth', component: AuthComponent },
  { path: 'shoppingList', component: ShoppingListComponent },
  { path: 'activeusers/:id/:name', component: ActiveusersComponent },
  { path: 'routing/:id/:name', component: RoutingmodelComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
