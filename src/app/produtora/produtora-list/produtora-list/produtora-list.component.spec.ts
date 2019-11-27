import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoraListComponent } from './produtora-list.component';

describe('ProdutoraListComponent', () => {
  let component: ProdutoraListComponent;
  let fixture: ComponentFixture<ProdutoraListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoraListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
