// src/app/models/machine.model.ts
// Đây là interface định nghĩa cấu trúc dữ liệu máy
export interface Machine {
  machine_no: number;       // tên máy
  x: number;                  // Tọa độ X trên layout
  y: number;                  // Tọa độ Y trên layout
  status: number;             // Trạng thái máy: 0 (stop), 1 (running), 2 (error)
  ct: number | null;          // Thời gian chu kỳ (cycle time) của máy
  machine_type: number;       // Loại máy (ví dụ: 10 - máy OP1, 40 - máy ở cuối line)
  hour: number | null;        // Giờ liền trước của máy, để truy vấn tổng sản lượng
  counter: number | null;     // Số lượng sản phẩm đã sản xuất
  performance: number | null; // Hiệu suất máy
}
