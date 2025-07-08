// src/app/mercury/mercury.component.ts
// 📄 Đây là component dùng để hiển thị layout nhà máy Mercury và vị trí các máy trên layout

import { Component, OnInit } from '@angular/core';
import { MachineService } from '../services/machine.service';     // 🔁 Import service để gọi API
import { Machine } from '../models/machine.model';                // 📦 Import kiểu dữ liệu máy
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mercury',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule], // ✅ thêm CommonModule
  templateUrl: './mercury.component.html',
  styleUrls: ['./mercury.component.scss']
})
export class MercuryComponent implements OnInit {
  // 🧠 Mảng lưu danh sách máy được lấy từ API
  machines: Machine[] = [];
  editMode: boolean = false; // ✅ Biến bật/tắt chế độ chỉnh sửa
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
    // 🧱 Tạo mảng tọa độ để vẽ lưới (cách 50px/lưới)
    this.gridX = Array.from({ length: this.svgWidth / 50 }, (_, i) => i * 50);
    this.gridY = Array.from({ length: this.svgHeight / 50 }, (_, i) => i * 50);

    // 🌀 Thêm sự kiện cuộn chuột để zoom SVG
    const svgContainer = document.getElementById('svg-container');
    if (svgContainer) {
      svgContainer.addEventListener('wheel', this.onWheel.bind(this));
    }
  }

  // 🎨 Hàm trả về màu tương ứng với trạng thái máy (status)
  getStatusColor(status: number): string {
    switch (status) {
      case 2: return '#ccc';       // ERROR: xám
      case 1: return '#00c853';    // RUNNING: xanh lá
      case 0: return '#e57373';    // STOP: đỏ nhạt
      case 3: return '#ff9800';    // MAINTENANCE: cam
      case 4: return '#2196f3';    // IDLE: xanh dương
      case 5: return '#9c27b0';    // WARNING: tím
      default: return '#9e9e9e';   // Trạng thái không xác định: xám nhạt
    }
  }

  // ✅ Hàm đổi trạng thái chỉnh sửa
  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  // Kích thước SVG layout (phù hợp với viewBox của mercury-layout.svg)
  svgWidth = 1920;
  svgHeight = 1200;

  // 🧱 Tạo mảng tọa độ để vẽ lưới (cách 50px/lưới)
  gridX: number[] = [];
  gridY: number[] = [];

  // thêm các biến để quản lý zoom
  zoomEnabled = true; // Biến để bật/tắt tính năng zoom
  zoomLevel = 1;
  minZoom = 0.3;
  maxZoom = 3;
  zoomStep = 0.1;

  // 🌀 Hàm xử lý sự kiện cuộn chuột để zoom SVG
  onWheel(event: WheelEvent) {
    event.preventDefault();
    const direction = event.deltaY < 0 ? 1 : -1;
    const newZoom = this.zoomLevel + direction * this.zoomStep;
    this.zoomLevel = Math.min(this.maxZoom, Math.max(this.minZoom, newZoom));
  }
}
