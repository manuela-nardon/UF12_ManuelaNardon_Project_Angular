import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectKittyComponent } from './select-kitty.component';

describe('SelectKittyComponent', () => {
  let component: SelectKittyComponent;
  let fixture: ComponentFixture<SelectKittyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectKittyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectKittyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
