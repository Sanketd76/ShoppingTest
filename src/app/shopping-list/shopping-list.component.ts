import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { AccountService } from '../a-services/accounts.service';
import { ShoppingListService } from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [AccountService],
})
export class ShoppingListComponent implements OnInit {
  ingredients!: Ingredient[];

  constructor(
    private accountList: AccountService,
    private slService: ShoppingListService
  ) {}

  accounts: { name: string; status: string }[] = [];
  onlineStatus: string[] = [];

  ngOnInit() {
    this.accounts = this.accountList.accounts;
    this.onlineStatus = this.accountList.onlineInfo;

    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }
}
