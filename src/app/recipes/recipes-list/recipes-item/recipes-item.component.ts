import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss'],
})
export class RecipesItemComponent {
  @Input() recipe!: Recipe;

  @Output() recipeSelected = new EventEmitter<void>();

  onSendList() {
    this.recipeSelected.emit();
  }
}
