import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroListagemComponent } from './carro-listagem.component';

describe('CarroListagemComponent', () => {
  let component: CarroListagemComponent;
  let fixture: ComponentFixture<CarroListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarroListagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarroListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
