import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdoptarComponent } from './modal-adoptar.component';

describe('ModalAdoptarComponent', () => {
  let component: ModalAdoptarComponent;
  let fixture: ComponentFixture<ModalAdoptarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAdoptarComponent]
    });
    fixture = TestBed.createComponent(ModalAdoptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
