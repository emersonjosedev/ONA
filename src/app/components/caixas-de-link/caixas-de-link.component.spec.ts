import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixasDeLinkComponent } from './caixas-de-link.component';

describe('CaixasDeLinkComponent', () => {
  let component: CaixasDeLinkComponent;
  let fixture: ComponentFixture<CaixasDeLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaixasDeLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaixasDeLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
