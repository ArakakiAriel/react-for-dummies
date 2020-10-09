import '@testing-library/jest-dom'; 
import heroes from '../../data/heroes';
import {getHeroesByOwner, getHeroeById} from '../../base/08-imp-exp'
describe('08-imp-exp', () => {
    test('retorna array con heroes de dc', () => {
        const owner = 'DC'
        const dcHeroes = getHeroesByOwner(owner);

        dcHeroes.forEach(hero => {
            expect(hero.owner).toEqual('DC');
        });
    });

});