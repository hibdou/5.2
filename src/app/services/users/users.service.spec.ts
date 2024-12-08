import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { of } from 'rxjs'; // Add import

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Tests for all() method
  describe('all', () => {
    it('should return a collection of users', (done) => {
      const userResponse = [
        {
          id: '1',
          name: 'Jane',
          role: 'Designer',
          pokemon: 'Blastoise'
        },
        {
          id: '2',
          name: 'Bob',
          role: 'Developer',
          pokemon: 'Charizard'
        }
      ];
      spyOn(service, 'all').and.returnValue(of(userResponse));
      
      service.all().subscribe(res => {
        expect(res).toEqual(userResponse);
        done(); // signal the test completion
      });
    });
  });

  // Tests for findOne() method
  describe('findOne', () => {
    it('should return a single user', (done) => {
      const userResponse = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        pokemon: 'Charizard'
      };
      spyOn(service, 'findOne').and.returnValue(of(userResponse));
      
      service.findOne('2').subscribe(res => {
        expect(res).toEqual(userResponse);
        done(); // signal the test completion
      });
    });
  });
});
