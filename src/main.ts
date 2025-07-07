import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // ✅ Thêm dòng này

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { FormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    // ✅ Thêm dòng này để App dùng được HttpClient
    importProvidersFrom(HttpClientModule, FormsModule), // ✅ Thêm FormsModule để sử dụng [(ngModel)]
  ],
});
