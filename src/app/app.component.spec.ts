// ==============================================================================
// src/app/app.component.spec.ts
// 📄 app.component.spec.ts - 🇻🇳 File kiểm thử tự động (unit test) cho AppComponent
//                           🇯🇵 AppComponent のユニットテストファイル
//
// ✅ 🇻🇳 File này dùng để kiểm tra:
//       1. Component có khởi tạo đúng không
//       2. Biến `title` có đúng giá trị không
//       3. HTML có hiển thị đúng nội dung mong đợi không
//
// ✅ 🇯🇵 このファイルでは以下の点をテストします：
//       1. コンポーネントの生成が正しく行われるか
//       2. `title` 変数の値が期待通りか
//       3. HTMLの表示内容が正しいか
//
// 💡 🇻🇳 Nếu không cần viết unit test, có thể xóa file này để giảm dung lượng dự án.
//    🇯🇵 ユニットテストが不要な場合、このファイルは削除しても構いません。
// ==============================================================================

import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// 🇻🇳 Mô tả nhóm các bài kiểm thử cho AppComponent.
// 🇯🇵 AppComponent に対するユニットテストのグループを定義します。
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents(); // 🇻🇳 Biên dịch component để sẵn sàng cho test
                            // 🇯🇵 テストの準備としてコンポーネントをコンパイルします
  });

  it('should create the app', () => {
    // 🇻🇳 Kiểm tra ứng dụng có được khởi tạo thành công hay không.
    // 🇯🇵 アプリが正しく生成されるかどうかをテストします。
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'frontend' title`, () => {
    // 🇻🇳 Kiểm tra biến title có giá trị là 'frontend'
    // 🇯🇵 title変数が 'frontend' であることをテストします。
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('frontend');
  });

  it('should render title', () => {
    // 🇻🇳 Kiểm tra nội dung hiển thị chứa từ 'Hello, frontend'
    // 🇯🇵 表示内容に 'Hello, frontend' が含まれていることをテストします。
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, frontend');
  });
});
