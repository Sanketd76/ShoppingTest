import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { BasicHightlightDirective } from './custom-directives/basic.highlight.directive';
import { BetterHighlightDirective } from './custom-directives/better-highlight.directive';
import { UnlessDirective } from './custom-directives/unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { ActiveusersComponent } from './@practice/activeusers/activeusers.component';
import { InactiveusersComponent } from './@practice/inactiveusers/inactiveusers.component';
import { ShoppingListService } from './shopping-list/shoppinglist.service';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'shoppingList', component: ShoppingListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BasicHightlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    ActiveusersComponent,
    InactiveusersComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
