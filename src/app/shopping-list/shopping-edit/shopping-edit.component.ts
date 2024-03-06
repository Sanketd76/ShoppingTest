import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountnputRef!: ElementRef;

  ingredients!: Ingredient[];

  constructor(private slService: ShoppingListService) {}

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountnputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);

    this.slService.addIngredient(newIngredient);
  }

  formOnsubmit(){
    
  }
}
