import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstagiosListagemComponent } from './estagios-listagem.component';

describe('EstagiosListagemComponent', () => {
  let component: EstagiosListagemComponent;
  let fixture: ComponentFixture<EstagiosListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstagiosListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstagiosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
