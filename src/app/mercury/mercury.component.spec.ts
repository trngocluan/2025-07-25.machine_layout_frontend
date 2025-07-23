// ==============================================================================
// src/app/mercury/mercury.component.spec.ts
// 📄 mercury.component.spec.ts - 🇻🇳 File kiểm thử đơn vị (unit test) cho MercuryComponent
//                               🇯🇵 MercuryComponent のユニットテストファイル
//
// ✅ 🇻🇳 File này kiểm tra việc component Mercury có được khởi tạo đúng hay không.
//         Có thể mở rộng để kiểm tra chức năng như fetch API, zoom, toggle, v.v.
//
// ✅ 🇯🇵 このファイルでは、Mercuryコンポーネントの生成が正常に行われるかを検証します。
//         今後、API取得・ズーム・編集モード切替などの機能テストも追加可能です。
//
// 💡 🇻🇳 Nếu không cần test, có thể xóa file này để giảm số lượng file trong dự án.
//    🇯🇵 テストが不要な場合、このファイルを削除しても構いません。
// ==============================================================================

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MercuryComponent } from './mercury.component';

// 🇻🇳 Mô tả nhóm kiểm thử cho MercuryComponent
// 🇯🇵 MercuryComponent に対するユニットテストのグループ
describe('MercuryComponent', () => {
  let component: MercuryComponent;
  let fixture: ComponentFixture<MercuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MercuryComponent] // 🇻🇳 Import component cần test
                                  // 🇯🇵 テスト対象のコンポーネントを読み込み
    }).compileComponents();       // 🇻🇳 Biên dịch template, CSS,...
                                  // 🇯🇵 テンプレートやスタイルのコンパイルを実行

    fixture = TestBed.createComponent(MercuryComponent); // 🇻🇳 Tạo bản sao component
                                                          // 🇯🇵 コンポーネントのインスタンスを生成
    component = fixture.componentInstance;
    fixture.detectChanges();      // 🇻🇳 Kích hoạt binding và lifecycle hook
                                 // 🇯🇵 バインディングとライフサイクル処理を実行
  });

  it('should create', () => {
    // 🇻🇳 Kiểm tra component khởi tạo thành công
    // 🇯🇵 コンポーネントが正しく生成されるかをテスト
    expect(component).toBeTruthy();
  });
});
