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
