import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// ✅ 🇻🇳 Dùng để gửi HTTP request từ frontend đến backend.
//    🇯🇵 フロントエンドからバックエンドへHTTPリクエストを送るために使用します。

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { FormsModule } from '@angular/forms';
// ✅ 🇻🇳 Cho phép sử dụng [(ngModel)] để binding dữ liệu giữa form và biến trong component.
//    🇯🇵 [(ngModel)] ディレクティブでフォームとコンポーネントの変数を双方向バインディングするために使用します。

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    // ✅ 🇻🇳 Đăng ký các module cần thiết cho ứng dụng hoạt động.
    //    🇯🇵 アプリを動作させるために必要なモジュールを登録します。
    importProvidersFrom(HttpClientModule, FormsModule), // ✅ Thêm FormsModule để sử dụng [(ngModel)]
  ],
});
