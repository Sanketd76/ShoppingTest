import { Component, Input } from '@angular/core';
import { Recipe } from './recipes/recipes.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loadLink = 'recipe';
  even: any;

  onNavigate(event: string) {
    this.loadLink = event;
  }

  oddNumber: number[] = [1, 3, 5];
  evenNumber: number[] = [2, 4];
  showOnlyOdd: boolean = false;
  toggleDisplay() {
    this.showOnlyOdd = !this.showOnlyOdd;
  }

  value = 5;
}
