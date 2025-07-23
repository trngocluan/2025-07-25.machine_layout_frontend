// ==============================================================================
// src/app/layouts/dashboard/dashboard.component.spec.ts
// 📄 dashboard.component.spec.ts - 🇻🇳 File kiểm thử đơn vị (unit test) cho DashboardComponent
//                                 🇯🇵 DashboardComponent に対するユニットテストファイル
//
// ✅ 🇻🇳 File này giúp đảm bảo component Dashboard được khởi tạo và hoạt động đúng.
//         Có thể mở rộng để test tương tác như click, toggle, navigation...
//
// ✅ 🇯🇵 このファイルではDashboardコンポーネントが正しく生成されるかどうかを検証します。
//         クリックやナビゲーションのテストも追加可能です。
//
// 💡 🇻🇳 Nếu không dùng test, bạn có thể xóa file này để đơn giản hóa dự án.
//    🇯🇵 テストが不要な場合は、このファイルを削除しても構いません。
// ==============================================================================


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';

// 🇻🇳 Kiểm thử đơn vị cho DashboardComponent
// 🇯🇵 DashboardComponent に対するユニットテスト
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent] // 🇻🇳 Import component cần test
                                    // 🇯🇵 テスト対象のコンポーネントを読み込み
    }).compileComponents();         // 🇻🇳 Biên dịch để chuẩn bị test
                                    // 🇯🇵 テスト実行の準備としてコンパイルする

    fixture = TestBed.createComponent(DashboardComponent); // 🇻🇳 Tạo instance component
                                                           // 🇯🇵 コンポーネントのインスタンスを生成
    component = fixture.componentInstance;
    fixture.detectChanges();       // 🇻🇳 Kích hoạt Angular binding & lifecycle hook
                                  // 🇯🇵 Angularのバインディングとライフサイクルフックを適用
  });

  it('should create', () => {
    // 🇻🇳 Kiểm tra component được khởi tạo thành công
    // 🇯🇵 コンポーネントが正しく生成されることをテスト
    expect(component).toBeTruthy();
  });
});
