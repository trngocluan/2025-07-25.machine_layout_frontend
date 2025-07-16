import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierraComponent } from './tierra.component';

describe('TierraComponent', () => {
  let component: TierraComponent;
  let fixture: ComponentFixture<TierraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TierraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TierraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
