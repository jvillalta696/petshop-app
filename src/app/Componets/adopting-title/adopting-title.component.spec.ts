import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptingTitleComponent } from './adopting-title.component';

describe('AdoptingTitleComponent', () => {
  let component: AdoptingTitleComponent;
  let fixture: ComponentFixture<AdoptingTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptingTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptingTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
