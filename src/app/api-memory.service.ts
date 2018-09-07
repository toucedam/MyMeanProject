import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      { id: 01, name: 'Bike' },
      { id: 02, name: 'Heater' },
      { id: 03, name: 'Bathroom fittings' },
      { id: 04, name: 'Something else' },
      { id: 05, name: 'Other thing' },     
      { id: 06, name: 'One another thing' }
    ];
    return {items};
  }
}

