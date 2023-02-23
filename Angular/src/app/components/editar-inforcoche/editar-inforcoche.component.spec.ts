import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInforcocheComponent } from './editar-inforcoche.component';

describe('EditarInforcocheComponent', () => {
  let component: EditarInforcocheComponent;
  let fixture: ComponentFixture<EditarInforcocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarInforcocheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarInforcocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
