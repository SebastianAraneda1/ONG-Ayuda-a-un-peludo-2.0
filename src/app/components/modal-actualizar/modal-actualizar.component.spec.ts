import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalActualizarComponent } from './modal-actualizar.component';

describe('ModalActualizarComponent', () => {
  let component: ModalActualizarComponent;
  let fixture: ComponentFixture<ModalActualizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalActualizarComponent]
    });
    fixture = TestBed.createComponent(ModalActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
