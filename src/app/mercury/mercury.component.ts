// src/app/mercury/mercury.component.ts
// 📄 🇻🇳 Đây là component dùng để hiển thị layout nhà máy Mercury và vị trí các máy.
//    🇯🇵 このコンポーネントは、Mercury工場のレイアウトと機械の位置を表示します。

import { Component, OnInit, OnDestroy } from '@angular/core';     // ⚠️ Nhớ thêm OnDestroy
import { MachineService } from '../services/machine.service';     // 🔁 Import service để gọi API
import { Machine } from '../models/machine.model';                // 📦 Import kiểu dữ liệu máy
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mercury',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule], // ✅ 🇻🇳 Import các module cần thiết
                                                           //    🇯🇵 必要なモジュールを読み込み
  templateUrl: './mercury.component.html',
  styleUrls: ['./mercury.component.scss']
})
export class MercuryComponent implements OnInit, OnDestroy {
  // 🧠 🇻🇳 Mảng lưu danh sách máy được lấy từ API
  //    🇯🇵 APIから取得された機械のリスト
  machines: Machine[] = [];
  editMode: boolean = false; // ✅ 🇻🇳 Bật/tắt chế độ chỉnh sửa vị trí máy
                             //    🇯🇵 位置編集モードのオン/オフ
  constructor(private machineService: MachineService) {}

  ngOnInit(): void {

    // 📥 🇻🇳 Gọi API khi component khởi tạo
    //    🇯🇵 コンポーネント初期化時にAPIを呼び出す
    this.fetchMachines();

    // 🧱 🇻🇳 Tạo mảng tọa độ để hiển thị lưới layout (cách 100px)
    //    🇯🇵 レイアウトのグリッド座標（100px間隔）を生成
    this.gridX = Array.from({ length: this.svgWidth / 50 }, (_, i) => i * 100);
    this.gridY = Array.from({ length: this.svgHeight / 50 }, (_, i) => i * 100);

    // 🌀 🇻🇳 Gắn sự kiện cuộn chuột để zoom SVG
    //    🇯🇵 マウスホイールでSVGをズームするイベントを追加
    const svgContainer = document.getElementById('svg-container');
    if (svgContainer) {
      svgContainer.addEventListener('wheel', this.onWheel.bind(this));
    }

    // ✅ 🇻🇳 Tự động gọi lại API mỗi 5 giây để cập nhật trạng thái máy
    //    🇯🇵 機械の状態を定期的（5秒ごと）に更新
    this.refreshIntervalId = setInterval(() => {
      this.fetchMachines();
    }, 5000);
  }

  // 🎨 🇻🇳 Hàm trả về màu tương ứng với trạng thái máy
  //    🇯🇵 機械の状態に応じた色を返す関数
  getStatusColor(status: number): string {
    switch (status) {
      case 2:   return '#ccc';          // ❌ ERROR: xám - エラー
      case 1:   return '#84ff00ff';   // ✅ RUNNING: xanh lá - 稼働中
      case 0:   return '#ff0000ff';   // ⛔ STOP: đỏ - 停止
      case 3:   return '#ff9800';     // 🔧 MAINTENANCE: cam - メンテナンス
      case 4:   return '#2196f3';     // 💤 IDLE: xanh dương - 待機中
      case 5:   return '#9c27b0';     // ⚠️ WARNING: tím - 警告
      default:  return '#9e9e9e';    // ❓ Không xác định - 不明
    }
  }

  // ✅ 🇻🇳 Bật/tắt trạng thái chỉnh sửa
  //    🇯🇵 編集モードのON/OFF切り替え
  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  // 📐 Kích thước SVG layout tương ứng với file mercury-layout.svg
  svgWidth = 3840;
  svgHeight = 2400;

  // 🧱 Create array for Grid view
  gridX: number[] = [];
  gridY: number[] = [];

  // 🔍 Zoom config
  zoomEnabled = true; // ON-OFF zoom
  zoomLevel = 1;
  minZoom = 0.3;
  maxZoom = 3;
  zoomStep = 0.1;

  // 🌀 🇻🇳 Hàm xử lý sự kiện cuộn chuột để zoom
  //    🇯🇵 マウスホイールでズームイン/アウトする処理
  onWheel(event: WheelEvent) {
    event.preventDefault();
    const direction = event.deltaY < 0 ? 1 : -1;
    const newZoom = this.zoomLevel + direction * this.zoomStep;
    this.zoomLevel = Math.min(this.maxZoom, Math.max(this.minZoom, newZoom));
  }

  // 🧹 🇻🇳 Dọn dẹp khi component bị hủy (ngOnDestroy)
  //    🇯🇵 コンポーネントが破棄されるときに実行される処理
  ngOnDestroy(): void {
    if (this.refreshIntervalId) {
      clearInterval(this.refreshIntervalId);
    }
  }

  // 📥 🇻🇳 Hàm gọi API để lấy danh sách máy
  //    🇯🇵 機械のリストを取得するためのAPI呼び出し関数
  fetchMachines(): void {
    // truyền vào tham số factory = 2 cho api lấy dữ liệu nhà máy Mercury
    this.machineService.getMachines(2).subscribe({
      next: (data) => {
        this.machines = data;
      },
      error: (err) => {
        console.error('Lỗi khi gọi API:', err);
      },
    });
  }



  // ✅ Biến dùng cho việc cập nhật dữ liệu tự động
  private refreshIntervalId: any;

  // 🇻🇳 Phân loại máy dựa theo machine_type để xử lý riêng
  // 🇯🇵 機械タイプによって処理を分けるためのgetter
  get machinesTypeNot40() {
  return this.machines.filter(m => m.machine_type !== 40);
  }

  get machinesType40() {
    return this.machines.filter(m => m.machine_type === 40);
  }

  // 💡 🇻🇳 Trả về màu tương ứng với hiệu suất máy (performance)
  //    🇯🇵 機械のパフォーマンス値に応じた色を返す
  getPerformanceColor(performance: number | null): string {
    if (performance == null)  return '#ccc';          // ❓ no data
    if (performance >= 0.875) return '#2cd7f5ff';   // very high
    if (performance >= 0.8)   return '#59df5eff';   // high
    if (performance >= 0.6)   return '#ffeb3b';     // low
                              return '#f44336';     // very low
  }
}
