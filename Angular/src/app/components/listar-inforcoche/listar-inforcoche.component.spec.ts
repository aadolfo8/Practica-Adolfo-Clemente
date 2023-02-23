import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInforcocheComponent } from './listar-inforcoche.component';

describe('ListarInforcocheComponent', () => {
  let component: ListarInforcocheComponent;
  let fixture: ComponentFixture<ListarInforcocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarInforcocheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarInforcocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
