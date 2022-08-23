import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShopComponent } from './table-shop.component';

describe('TableShopComponent', () => {
  let component: TableShopComponent;
  let fixture: ComponentFixture<TableShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
