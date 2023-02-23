import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarInforcocheComponent } from './insertar-inforcoche.component';

describe('InsertarInfococheComponent', () => {
  let component: InsertarInforcocheComponent;
  let fixture: ComponentFixture<InsertarInforcocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarInforcocheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarInforcocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
