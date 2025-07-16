// src/app/services/machine.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Machine } from '../models/machine.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MachineService {
  // Gốc API (không bao gồm query factory)
  private baseUrl = 'http://192.168.10.8:3000/machine';

  constructor(private http: HttpClient) {}

  // ✅ Hàm truyền factory ID động
  getMachines(factory: number = 0): Observable<Machine[]> {
  const url = `${this.baseUrl}?factory=${factory}`;
  return this.http.get<any>(url).pipe(
    map((res) => res as Machine[])
  );
}
}
