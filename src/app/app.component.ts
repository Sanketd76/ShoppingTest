import { Component, Input } from '@angular/core';
import { Recipe } from './recipes/recipes.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loadLink = 'recipe';

  onNavigate(event: string) {
    this.loadLink = event;
  }
}
