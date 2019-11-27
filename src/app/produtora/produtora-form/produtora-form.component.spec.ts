import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoraFormComponent } from './produtora-form.component';

describe('ProdutoraFormComponent', () => {
  let component: ProdutoraFormComponent;
  let fixture: ComponentFixture<ProdutoraFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoraFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
