// src/app/services/machine.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Machine } from '../models/machine.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MachineService {
  // ✅ Địa chỉ API để gọi lấy danh sách máy
  private apiUrl = 'http://localhost:3000/machine-mysql';

  constructor(private http: HttpClient) {}

  // ✅ Hàm gọi API và trả về mảng Machine
  getMachines(): Observable<Machine[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((res) => res.data as Machine[])
    );
  }
}
