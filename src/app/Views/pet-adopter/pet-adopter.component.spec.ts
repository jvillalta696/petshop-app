import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAdopterComponent } from './pet-adopter.component';

describe('PetAdopterComponent', () => {
  let component: PetAdopterComponent;
  let fixture: ComponentFixture<PetAdopterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetAdopterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetAdopterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
