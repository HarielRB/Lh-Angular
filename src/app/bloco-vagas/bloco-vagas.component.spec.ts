import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocoVagasComponent } from './bloco-vagas.component';

describe('BlocoVagasComponent', () => {
  let component: BlocoVagasComponent;
  let fixture: ComponentFixture<BlocoVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocoVagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocoVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
