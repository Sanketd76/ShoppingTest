import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { AccountService } from '../a-services/accounts.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [AccountService],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('apples', 5),
  ];

  onIngradientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  accounts: { name: string; status: string }[] = [];
  onlineStatus: string[] = [];

  constructor(private accountList: AccountService) {}

  ngOnInit() {
    this.accounts = this.accountList.accounts;
    this.onlineStatus = this.accountList.onlineInfo;
  }
}
