import { TestBed, async, inject } from '@angular/core/testing';

import { FilmeResolverGuard } from './filme-resolver.guard';

describe('FilmeResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmeResolverGuard]
    });
  });

  it('should ...', inject([FilmeResolverGuard], (guard: FilmeResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
