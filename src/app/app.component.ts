import { Component, inject } from '@angular/core';
import { Constants } from './config/constants';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiHttpService } from './core/services/api-http.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = Constants.TitleOfSite;
  constructor() {
    const api = inject(ApiHttpService);
    console.log(Constants.API_ENDPOINT);
    api.get('https://poetrydb.org/random/1/title').subscribe((resp) => {
      console.log(resp);
    });

    console.log(this.title);
  }

  ngOnInit() {
    console.log(this.title);
  }
}
