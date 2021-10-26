import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIGPageComponent } from './uig-page.component';

describe('UIGPageComponent', () => {
  let component: UIGPageComponent;
  let fixture: ComponentFixture<UIGPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UIGPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UIGPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
