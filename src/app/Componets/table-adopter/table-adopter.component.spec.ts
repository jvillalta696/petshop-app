import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAdopterComponent } from './table-adopter.component';

describe('TableAdopterComponent', () => {
  let component: TableAdopterComponent;
  let fixture: ComponentFixture<TableAdopterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAdopterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAdopterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
