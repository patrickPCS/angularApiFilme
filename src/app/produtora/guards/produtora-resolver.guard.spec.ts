import { TestBed, async, inject } from '@angular/core/testing';

import { ProdutoraResolverGuard } from './produtora-resolver.guard';

describe('ProdutoraResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdutoraResolverGuard]
    });
  });

  it('should ...', inject([ProdutoraResolverGuard], (guard: ProdutoraResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
