// src/app/services/machine.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Machine } from '../models/machine.model';
import { Observable, map } from 'rxjs';

// 🇻🇳 Đánh dấu service này có thể được inject toàn cục trong toàn ứng dụng.
// 🇯🇵 このサービスはアプリ全体で依存性注入（DI）可能であることを示します。
@Injectable({
  providedIn: 'root',
})
export class MachineService {
  // 🇻🇳 Gốc API (không bao gồm query factory)
  // 🇯🇵 APIのベースURL（factoryのクエリパラメータは除外）
  private baseUrl = 'http://192.168.10.8:3000/machine';

  constructor(private http: HttpClient) {}

  // ✅ 🇻🇳 Hàm lấy danh sách máy, truyền vào mã nhà máy (factory ID) động
  //    🇯🇵 工場ID（factory）を引数にして機械一覧を取得する関数です。
  getMachines(factory: number = 0): Observable<Machine[]> {
    const url = `${this.baseUrl}?factory=${factory}`;
    return this.http.get<any>(url).pipe(
      map((res) => res as Machine[])
      // 🇻🇳 Chuyển dữ liệu JSON nhận được thành danh sách kiểu Machine
      // 🇯🇵 JSONレスポンスをMachine型の配列に変換します
    );
  }
}
