// src/app/mercury/mercury.component.ts
// 📄 Đây là component dùng để hiển thị layout nhà máy Mercury và vị trí các máy trên layout

import { Component, OnInit } from '@angular/core';
import { MachineService } from '../services/machine.service';     // 🔁 Import service để gọi API
import { Machine } from '../models/machine.model';                // 📦 Import kiểu dữ liệu máy
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mercury',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // ✅ thêm CommonModule
  templateUrl: './mercury.component.html',
  styleUrls: ['./mercury.component.scss']
})
export class MercuryComponent implements OnInit {
  // 🧠 Mảng lưu danh sách máy được lấy từ API
  machines: Machine[] = [];

  constructor(private machineService: MachineService) {}

  ngOnInit(): void {
    // 📥 Gọi API khi component khởi tạo
    this.machineService.getMachines().subscribe({
      next: data => {
        // ✅ Khi gọi API thành công, lưu dữ liệu vào biến machines
        this.machines = data;
      },
      error: err => {
        // ❌ Nếu có lỗi khi gọi API, hiển thị trong console
        console.error('Lỗi khi lấy dữ liệu máy:', err);
      }
    });
  }

  // 🎨 Hàm trả về màu tương ứng với trạng thái máy (status)
  getStatusColor(status: number): string {
    switch (status) {
      case 0: return '#ccc';       // STOP: xám
      case 1: return '#00c853';    // RUNNING: xanh lá
      case 2: return '#d50000';    // ERROR: đỏ
      default: return '#9e9e9e';   // Trạng thái không xác định: xám nhạt
    }
  }
}
