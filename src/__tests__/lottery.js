import {count_matches, get_prize, _pulled_number_of_week, match_at_week} from '../lottery'
import axios from 'axios';
jest.mock('axios');

describe('Lottery Matching Tests', ()=>{
   it('compares two disjoint lottery tickets', ()=>{
       const ticket_0 = [ 1, 2, 3, 4, 5];
       const ticket_1 = [ 6,7,8,9,10];
       const expected = 0;
       const actual = count_matches(ticket_0,ticket_1);
       expect(actual).toBe(expected);
   });

   it('compares the same lottery tickets', ()=>{
       const ticket = [ 1, 2, 3, 4, 5];
       const expected = 5;
       const actual = count_matches(ticket,ticket);
       expect(actual).toBe(expected);
   });

});
describe('Prize Calculation Tests', ()=>{

   it('calculates prize for no match ticket with default prizes', ()=>{
       const ticket_0 = [ 1, 2, 3, 4, 5];
       const ticket_1 = [ 6,7,8,9,10];
       const expected = 0;
       const actual = get_prize(ticket_0,ticket_1);
       expect(actual).toBe(expected);
   });
});

describe('Test mocked AXIOS', ()=>{

    beforeEach(()=>{
        jest.clearAllMocks();
    })

    it('tests for week 42', async ()=>{
        axios.get.mockImplementationOnce(async ()=> { return Promise.resolve([1,2,3,4,5])});
        const pulled_numbers = await _pulled_number_of_week(42)
    });

    it('counts matches for fixed week', async ()=>{
        axios.get.mockImplementationOnce(async ()=> { return Promise.resolve([1,2,3,4,5])});
        const lottery_ticket = [6,7,8,9,10];
        const expected = 0;
        const actual = await match_at_week(lottery_ticket,42);
        expect(actual).toBe(expected);
    });

});
