import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ Bắt buộc để dùng [(ngModel)]

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  currentFactory: string = '';
  autoSwitchEnabled: boolean = false;
  private autoSwitchInterval: any;
  private factoryList: string[] = ['mercury', 'tierra', 'jupiter', 'saturn'];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Gán route hiện tại để highlight menu
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const segments = event.urlAfterRedirects.split('/');
        this.currentFactory = segments[1];
      }
    });

    // Đọc trạng thái công tắc từ localStorage
    const savedState = localStorage.getItem('autoSwitchEnabled');
    if (savedState === 'true') {
      this.autoSwitchEnabled = true;
      this.startAutoSwitch();
    }
  }

  // Chuyển trang khi click menu
  navigateTo(factory: string): void {
    this.router.navigate([`/${factory}`]);
  }

  // Bật/tắt công tắc tự động
  onToggleAutoSwitch(): void {
    localStorage.setItem('autoSwitchEnabled', String(this.autoSwitchEnabled));
    if (this.autoSwitchEnabled) {
      this.startAutoSwitch();
    } else {
      this.stopAutoSwitch();
    }
  }

  // Bắt đầu luân chuyển giữa các nhà máy
  startAutoSwitch(): void {
    let currentIndex = this.factoryList.indexOf(this.currentFactory);
    this.autoSwitchInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % this.factoryList.length;
      this.router.navigate([this.factoryList[currentIndex]]);
    }, 30000); // Mỗi 30 giây
  }

  // Dừng tự động luân chuyển
  stopAutoSwitch(): void {
    if (this.autoSwitchInterval) {
      clearInterval(this.autoSwitchInterval);
    }
  }
}
