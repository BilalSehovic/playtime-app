import {Component} from '@angular/core';
import { dbSeeder } from './db-seeder';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'ArchitectUI - Angular 7 Bootstrap 5 & Material Design Admin Dashboard Template';

  constructor(private localStorageService: LocalStorageService) {
    dbSeeder(localStorageService);
  }
}
