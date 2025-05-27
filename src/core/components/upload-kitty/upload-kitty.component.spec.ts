import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadKittyComponent } from './upload-kitty.component';

describe('UploadKittyComponent', () => {
  let component: UploadKittyComponent;
  let fixture: ComponentFixture<UploadKittyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadKittyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadKittyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
