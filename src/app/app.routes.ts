import { Routes } from '@angular/router';
import { MercuryComponent } from './mercury/mercury.component';

export const routes: Routes = [
  { path: '', redirectTo: 'mercury', pathMatch: 'full' },
  { path: 'mercury', component: MercuryComponent },
];
