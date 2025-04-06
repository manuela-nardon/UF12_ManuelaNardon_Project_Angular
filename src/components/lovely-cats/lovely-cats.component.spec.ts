import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LovelyCatsComponent } from './lovely-cats.component';

describe('LovelyCatsComponent', () => {
  let component: LovelyCatsComponent;
  let fixture: ComponentFixture<LovelyCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LovelyCatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LovelyCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
