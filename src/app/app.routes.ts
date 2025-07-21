import { Routes } from '@angular/router';
import { MercuryComponent } from './mercury/mercury.component';
import { TierraComponent } from './tierra/tierra.component';
import { JupiterComponent } from './jupiter/jupiter.component';
import { SaturnComponent } from './saturn/saturn.component';

// 🇻🇳 Định nghĩa các tuyến đường (route) cho ứng dụng Angular.
// 🇯🇵 Angularアプリのルーティング（ページ遷移）を定義します。
export const routes: Routes = [
  { path: '', redirectTo: 'mercury', pathMatch: 'full' },
  // 🇻🇳 Khi truy cập đường dẫn gốc (""), tự động chuyển hướng sang trang "mercury".
  // 🇯🇵 空のパス（""）にアクセスすると、自動的に "mercury" ページへリダイレクトします。

  { path: 'mercury', component: MercuryComponent },
  { path: 'tierra', component: TierraComponent },
  { path: 'jupiter', component: JupiterComponent },
  { path: 'saturn', component: SaturnComponent },
  // 🇻🇳 Các route tương ứng với từng nhà máy (component).
  // 🇯🇵 それぞれの工場ページに対応するルート定義です。
];
