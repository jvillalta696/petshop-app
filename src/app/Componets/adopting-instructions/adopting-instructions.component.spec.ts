import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptingInstructionsComponent } from './adopting-instructions.component';

describe('AdoptingInstructionsComponent', () => {
  let component: AdoptingInstructionsComponent;
  let fixture: ComponentFixture<AdoptingInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptingInstructionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptingInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
