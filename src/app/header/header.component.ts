import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  collapsed = true;

  @Output() featureSelected = new EventEmitter<string>();

  constructor(
    private router: Router,
    private dataSoreService: DataStorageService
  ) {}

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  onLoadServe() {
    this.router.navigate(['/shoppingList']);
  }

  onSaveData() {
    this.dataSoreService.storeRecipes();
  }
  onFetchData(){
    this.dataSoreService.fetchRecipes();
  }
}
