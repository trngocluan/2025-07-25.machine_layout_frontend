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
