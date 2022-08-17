import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptingCardComponent } from './adopting-card.component';

describe('AdoptingCardComponent', () => {
  let component: AdoptingCardComponent;
  let fixture: ComponentFixture<AdoptingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptingCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
