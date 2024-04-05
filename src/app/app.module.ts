import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { HomeComponent } from './home/home.component';
import { RoutingmodelComponent } from './@practice/routingmodel/routingmodel.component';

import { NotfoundComponent } from './notfound/notfound.component';

import { AppRoutingModule } from './app-routing.module';
import { StartpageComponent } from './recipes/startpage/startpage.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DataStorageService } from './shared/data-storage.service';
import { RecipeService } from './recipes/recipe.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';

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
    RoutingmodelComponent,
    NotfoundComponent,
    StartpageComponent,
    RecipeEditComponent,
    AuthComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ShoppingListService, DataStorageService, RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
