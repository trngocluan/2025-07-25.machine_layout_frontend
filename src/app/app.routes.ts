import { Routes } from '@angular/router';
import { MercuryComponent } from './mercury/mercury.component';
import { TierraComponent } from './tierra/tierra.component';
import { JupiterComponent } from './jupiter/jupiter.component';
import { SaturnComponent } from './saturn/saturn.component';

export const routes: Routes = [
  { path: '', redirectTo: 'mercury', pathMatch: 'full' },
  { path: 'mercury', component: MercuryComponent },
  { path: 'tierra', component: TierraComponent },
  { path: 'jupiter', component: JupiterComponent },
  { path: 'saturn', component: SaturnComponent },
];
