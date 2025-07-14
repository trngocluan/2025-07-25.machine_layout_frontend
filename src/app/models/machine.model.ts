// src/app/models/machine.model.ts
// Đây là interface định nghĩa cấu trúc dữ liệu máy
export interface Machine {
  //id: number;           // ID của máy
  //name: string;         // Tên máy
  //status: number;       // Trạng thái máy: 0 (stop), 1 (running), 2 (error)
  //highlight: boolean;   // Cờ đánh dấu nổi bật
  //x: number;            // Tọa độ X trên layout
  //y: number;            // Tọa độ Y trên layout
  machine_no: string;           // tên máy
  status: number;       // Trạng thái máy: 0 (stop), 1 (running), 2 (error)
  x: number;            // Tọa độ X trên layout
  y: number;            // Tọa độ Y trên layout
  machine_type: string;         // Loại máy (ví dụ: "Milling", "Lathe")
  ct: number;          // Thời gian chu kỳ (cycle time) của máy
}
