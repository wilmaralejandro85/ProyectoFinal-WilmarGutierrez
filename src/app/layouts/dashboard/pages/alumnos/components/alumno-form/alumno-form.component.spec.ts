import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoFormComponent } from './alumno-form.component';

describe('AlumnoFormComponent', () => {
  let component: AlumnoFormComponent;
  let fixture: ComponentFixture<AlumnoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumnoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
