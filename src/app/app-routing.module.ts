import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ActiveusersComponent } from './@practice/activeusers/activeusers.component';
import { RoutingmodelComponent } from './@practice/routingmodel/routingmodel.component';
import { NotfoundComponent } from './notfound/notfound.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', component: RecipesComponent },
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
