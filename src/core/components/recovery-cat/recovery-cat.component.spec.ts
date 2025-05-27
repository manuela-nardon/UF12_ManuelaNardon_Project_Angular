import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryCatComponent } from './recovery-cat.component';

describe('RecoveryCatComponent', () => {
  let component: RecoveryCatComponent;
  let fixture: ComponentFixture<RecoveryCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoveryCatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoveryCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
