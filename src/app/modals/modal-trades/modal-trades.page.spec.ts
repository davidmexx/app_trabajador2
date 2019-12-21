import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTradesPage } from './modal-trades.page';

describe('ModalTradesPage', () => {
  let component: ModalTradesPage;
  let fixture: ComponentFixture<ModalTradesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTradesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTradesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
