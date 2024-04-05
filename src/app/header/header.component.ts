import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  collapsed = true;

  isAuthenticated = false;
  private userSub!: Subscription;

  @Output() featureSelected = new EventEmitter<string>();

  constructor(
    private router: Router,
    private dataSoreService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  onLoadServe() {
    this.router.navigate(['/shoppingList']);
  }

  onSaveData() {
    this.dataSoreService.storeRecipes();
  }
  onFetchData() {
    this.dataSoreService.fetchRecipes();
  }
}
