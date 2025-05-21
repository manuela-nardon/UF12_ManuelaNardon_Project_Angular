import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatPostsComponent } from './cat-posts.component';

describe('CatPostsComponent', () => {
  let component: CatPostsComponent;
  let fixture: ComponentFixture<CatPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatPostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
