import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateUniqueCodesComponent } from './generate-unique-codes.component';

describe('GenerateUniqueCodesComponent', () => {
  let component: GenerateUniqueCodesComponent;
  let fixture: ComponentFixture<GenerateUniqueCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateUniqueCodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateUniqueCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
