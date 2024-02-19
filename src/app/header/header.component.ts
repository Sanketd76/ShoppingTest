import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  collapsed = true;

  @Output() featureSelected = new EventEmitter<string>();

  constructor(private router: Router){}

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  onLoadServe(){
    this.router.navigate(['/shoppingList'])

  }
}
