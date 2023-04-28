/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModalModifyComponent } from './modal-modify.component';

describe('ModalModifyComponent', () => {
  let component: ModalModifyComponent;
  let fixture: ComponentFixture<ModalModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
