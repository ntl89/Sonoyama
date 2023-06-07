import { TestBed } from '@angular/core/testing';

import { KanbanApiClientService } from './kanban-api-client.service';

describe('KanbanApiClientService', () => {
  let service: KanbanApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanbanApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
